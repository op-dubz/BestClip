// Background service worker for BestClip
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'; 
import { getFirestore, collection, addDoc, query, orderBy, limit, Timestamp, serverTimestamp, onSnapshot, deleteDoc, doc, getDocs, writeBatch } from 'firebase/firestore';     

// Firebase configuration (you'll need to replace with your own)
const firebaseConfig = {
  // Replace with your actual Firebase config
  apiKey: "AIzaSyDemo-replace-with-your-actual-key",
  authDomain: "bestclip-demo.firebaseapp.com",
  projectId: "bestclip-demo",
  storageBucket: "bestclip-demo.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:demo123456789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

class BestClipManager {
  constructor() {
    this.clipboardHistory = [];
    this.currentUser = null;
    this.lastClipboardContent = '';
    this.unsubscribe = null;
    this.maxHistoryItems = 100;
    
    this.init();
  }

  async init() {
    // Load existing clipboard history from local storage
    await this.loadLocalHistory();

    // Listen for auth state changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
        this.startClipboardSync();
      } else {
        this.currentUser = null;
        this.stopClipboardSync();  
      }
      this.notifyPopup('authStateChanged', { user: user });
    });

    // Handle extension commands
    chrome.commands.onCommand.addListener((command) => {
      if (command === 'open-bestclip') {
        chrome.action.openPopup();
      }
    });

    // Handle installation
    chrome.runtime.onInstalled.addListener(() => {
      this.showWelcomeNotification();
    });
  }

  async loadLocalHistory() {
    try {
      const result = await chrome.storage.local.get(['clipboardHistory']);
      this.clipboardHistory = result.clipboardHistory || [];
      
      // Decrypt items if needed
      for (let i = 0; i < this.clipboardHistory.length; i++) {
        if (this.clipboardHistory[i].encrypted) {
          this.clipboardHistory[i] = await this.decryptClipboardItem(this.clipboardHistory[i]);
        }
      }
    } catch (error) {
      console.error('Error loading local history:', error);
      this.clipboardHistory = [];
    }
  }

  showWelcomeNotification() {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon48.png',
      title: 'BestClip Installed!',
      message: 'Press Ctrl+Shift+V (Cmd+Shift+V on Mac) to open your clipboard manager.'
    });
  }

  async addClipboardItem(item) {
    // Prevent duplicates
    const isDuplicate = this.clipboardHistory.some(existing => 
      existing.content === item.content && 
      existing.type === item.type &&
      Math.abs(existing.timestamp - item.timestamp) < 2000 // Within 2 seconds
    );

    if (isDuplicate) return;

    // Validate content
    if (!this.validateClipboardItem(item)) return;

    // Encrypt sensitive data
    const encryptedItem = await this.encryptClipboardItem(item);
    
    // Add to local history (at the beginning)
    this.clipboardHistory.unshift(encryptedItem);
    
    // Limit history to max items
    if (this.clipboardHistory.length > this.maxHistoryItems) {
      this.clipboardHistory = this.clipboardHistory.slice(0, this.maxHistoryItems);
    }
    
    // Sync to cloud if user is authenticated
    if (this.currentUser) {
      try {
        await addDoc(collection(db, `users/${this.currentUser.uid}/clipboard`), {
          ...encryptedItem,
          id: encryptedItem.timestamp.toString() // Use timestamp as ID for deduplication
        });
      } catch (error) {
        console.error('Sync error:', error);
      }
    }
    
    // Update local storage
    await this.saveLocalHistory();
    
    // Notify popup of update
    this.notifyPopup('clipboardUpdate', { history: this.clipboardHistory });
  }

  validateClipboardItem(item) {
    if (!item || !item.content || !item.type) return false;
    
    // Check content size limits
    if (item.type === 'text') {
      if (item.content.length > 10000) return false; // 10KB text limit
      if (item.content.trim().length === 0) return false; // No empty text
    } else if (item.type === 'image') {
      if (item.content.length > 5000000) return false; // 5MB image limit
      if (!item.content.startsWith('data:image/')) return false; // Must be valid data URL
    }
    
    return true;
  }

  async saveLocalHistory() {
    try {
      await chrome.storage.local.set({ clipboardHistory: this.clipboardHistory });
    } catch (error) {
      console.error('Error saving local history:', error);
    }
  }

  async encryptClipboardItem(item) {
    // Simple encryption for demo - in production, use proper encryption
    const encoder = new TextEncoder();
    const data = encoder.encode(JSON.stringify(item));
    const key = await crypto.subtle.generateKey(
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );
    
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      data
    );
    
    // Store key and IV with encrypted data (in production, manage keys properly)
    const exportedKey = await crypto.subtle.exportKey('raw', key);
    
    return {
      ...item,
      encrypted: true,
      data: Array.from(new Uint8Array(encrypted)),
      key: Array.from(new Uint8Array(exportedKey)),
      iv: Array.from(iv)
    };
  }

  async decryptClipboardItem(encryptedItem) {
    if (!encryptedItem.encrypted) return encryptedItem;
    
    try {
      const key = await crypto.subtle.importKey(
        'raw',
        new Uint8Array(encryptedItem.key),
        { name: 'AES-GCM' },
        false,
        ['decrypt']
      );
      
      const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: new Uint8Array(encryptedItem.iv) },
        key,
        new Uint8Array(encryptedItem.data)
      );
      
      const decoder = new TextDecoder();
      const decryptedItem = JSON.parse(decoder.decode(decrypted));
      
      return decryptedItem;
    } catch (error) {
      console.error('Decryption error:', error);
      return encryptedItem;
    }
  }

  startClipboardSync() {
    if (!this.currentUser || this.unsubscribe) return;
    
    const q = query(
      collection(db, `users/${this.currentUser.uid}/clipboard`),
      orderBy('timestamp', 'desc')
    );
    
    this.unsubscribe = onSnapshot(q, async (snapshot) => {
      const cloudItems = [];
      
      for (const docSnapshot of snapshot.docs) {
        const item = docSnapshot.data();
        item.firestoreId = docSnapshot.id;
        const decryptedItem = await this.decryptClipboardItem(item);
        cloudItems.push(decryptedItem);
      }
      
      // Merge with local items and remove duplicates
      await this.mergeClipboardHistory(cloudItems);
    });
  }

  stopClipboardSync() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }

  async mergeClipboardHistory(cloudItems) {
    // Create a map of existing items for faster lookup
    const localItemsMap = new Map();
    this.clipboardHistory.forEach(item => {
      const key = `${item.type}-${item.content}-${Math.floor(item.timestamp / 5000) * 5000}`;
      localItemsMap.set(key, item);
    });

    // Add cloud items that don't exist locally
    const newItems = [];
    cloudItems.forEach(cloudItem => {
      const key = `${cloudItem.type}-${cloudItem.content}-${Math.floor(cloudItem.timestamp / 5000) * 5000}`;
      if (!localItemsMap.has(key)) {
        newItems.push(cloudItem);
      }
    });

    if (newItems.length > 0) {
      // Merge and sort
      this.clipboardHistory = [...newItems, ...this.clipboardHistory]
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, this.maxHistoryItems);

      // Update local storage
      await this.saveLocalHistory();
      
      // Notify popup
      this.notifyPopup('clipboardUpdate', { history: this.clipboardHistory });
    }
  }

  notifyPopup(type, data = {}) {
    // Send message to popup if it's open
    chrome.runtime.sendMessage({
      type,
      ...data
    }).catch(() => {
      // Popup might not be open, ignore error
    });
  }

  async clearHistory() {
    this.clipboardHistory = [];
    await this.saveLocalHistory();
    
    // Clear from cloud
    if (this.currentUser) {
      try {
        const q = query(collection(db, `users/${this.currentUser.uid}/clipboard`));
        const snapshot = await getDocs(q);
        
        const batch = writeBatch(db);
        snapshot.docs.forEach((doc) => {
          batch.delete(doc.ref);
        });
        
        await batch.commit();
      } catch (error) {
        console.error('Error clearing cloud history:', error);
      }
    }
    
    this.notifyPopup('clipboardUpdate', { history: [] });
  }

  async removeItem(itemId) {
    // Remove from local history
    this.clipboardHistory = this.clipboardHistory.filter(item => 
      item.timestamp !== itemId
    );
    
    await this.saveLocalHistory();
    
    // Remove from cloud
    if (this.currentUser) {
      try {
        const q = query(collection(db, `users/${this.currentUser.uid}/clipboard`));
        const snapshot = await getDocs(q);
        
        for (const docSnapshot of snapshot.docs) {
          const item = docSnapshot.data();
          if (item.timestamp === itemId) {
            await deleteDoc(doc(db, `users/${this.currentUser.uid}/clipboard`, docSnapshot.id));
            break;
          }
        }
      } catch (error) {
        console.error('Error removing item from cloud:', error);
      }
    }
    
    this.notifyPopup('clipboardUpdate', { history: this.clipboardHistory });
  }
}

// Initialize clipboard manager
const clipboardManager = new BestClipManager();

// Handle messages from popup and content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.type) {
    case 'getHistory':
      sendResponse({ history: clipboardManager.clipboardHistory });
      break;
      
    case 'clearHistory':
      clipboardManager.clearHistory().then(() => {
        sendResponse({ success: true });
      }).catch((error) => {
        sendResponse({ success: false, error: error.message });
      });
      return true;
      
    case 'removeItem':
      clipboardManager.removeItem(message.itemId).then(() => {
        sendResponse({ success: true });
      }).catch((error) => {
        sendResponse({ success: false, error: error.message });
      });
      return true;
    
    case 'copyToClipboard':
      // Handle copying from BestClip to system clipboard
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, {
            type: 'setClipboardContent',
            content: message.content,
            contentType: message.contentType || 'text'
          }, (response) => {
            sendResponse(response || { success: false, error: 'No response from content script' });
          });
        } else {
          sendResponse({ success: false, error: 'No active tab' });
        }
      });
      return true;

    case 'clipboardChange':
      // Handle clipboard changes from content script
      if (message.source === 'content_script') {
        clipboardManager.addClipboardItem({
          type: message.contentType,
          content: message.content,
          timestamp: message.timestamp
        });
      }
      sendResponse({ success: true });
      break;

    case 'openBestClip':
      chrome.action.openPopup();
      sendResponse({ success: true });
      break;

    case 'getAuthState':
      sendResponse({ 
        user: clipboardManager.currentUser,
        isAuthenticated: !!clipboardManager.currentUser
      });
      break;
  }
  
  return false;
});
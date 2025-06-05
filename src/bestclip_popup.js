
import { initializeApp } from 'firebase/app'; 
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';

// firebase configuration 
const firebaseConfig = {     
apiKey: "AIzaSyBq1ElkFM04L9GccoGD-ek2rhXke0XaVpA",
authDomain: "bestclip-67c3e.firebaseapp.com",
projectId: "bestclip-67c3e",
storageBucket: "bestclip-67c3e.appspot.app",
//storageBucket: "bestclip-67c3e.firebasestorage.app", 
messagingSenderId: "948086267570",
appId: "1:948086267570:web:69e6d50c6873f7b7b373ab",
measurementId: "G-KFW7QLJ86Q"
};
//};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

class BestClipPopup {
    constructor() {
    this.clipboardHistory = [];
    this.filteredHistory = [];
    this.currentFilter = 'all'; 
    this.currentUser = null;
    
    this.init();
    }

    init() {
    this.setupEventListeners();
    this.setupAuth();
    this.loadClipboardHistory();
    }

    setupEventListeners() {
    // Search functionality
    document.getElementById('searchBar').addEventListener('input', (e) => {
        this.filterHistory(e.target.value);
    });

    // Tab switching
    document.getElementById('allTab').addEventListener('click', () => {
        this.setActiveTab('all');
    });
    
    document.getElementById('textTab').addEventListener('click', () => {
        this.setActiveTab('text');
    });
    
    document.getElementById('imageTab').addEventListener('click', () => {
        this.setActiveTab('image');
    });

    // Clear button
    document.getElementById('clearButton').addEventListener('click', () => {
        this.clearHistory();
    });

    // Auth button
    document.getElementById('signInButton').addEventListener('click', () => {
        this.signIn();
    });

    // Listen for clipboard updates from background
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === 'clipboardUpdate') {
        this.clipboardHistory = message.history || [];
        this.filterHistory();
        }
    });
    }

    setupAuth() {
    onAuthStateChanged(auth, (user) => {
        this.currentUser = user;
        this.updateAuthUI();
        this.updateSyncStatus();
    });
    }

    updateAuthUI() {
    const authContainer = document.getElementById('authContainer');
    
    if (this.currentUser) {
        authContainer.innerHTML = `
        <div class="user-info">
            <img src="${this.currentUser.photoURL}" alt="User" class="user-avatar">
            <span>${this.currentUser.displayName}</span>
            <button id="signOutButton" class="auth-button" style="background: #dc2626;">Sign Out</button>
        </div>
        `;
        
        document.getElementById('signOutButton').addEventListener('click', () => {
        this.signOut();
        });
    } else {
        authContainer.innerHTML = `
        <button id="signInButton" class="auth-button">Sign In with Google</button>
        `;
        
        document.getElementById('signInButton').addEventListener('click', () => {
        this.signIn();
        });
    }
    }

    updateSyncStatus() {
    const indicator = document.getElementById('syncIndicator');
    const status = document.getElementById('syncStatus');
    
    if (this.currentUser) {
        indicator.classList.remove('offline');
        status.textContent = 'Synced';
    } else {
        indicator.classList.add('offline');
        status.textContent = 'Offline';
    }
    }

    async signIn() {
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error('Sign in error:', error);
    }
    }

    async signOut() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Sign out error:', error);
    }
    }

    async loadClipboardHistory() {
    try {
        const response = await chrome.runtime.sendMessage({ type: 'getHistory' });
        this.clipboardHistory = response.history || [];
        this.filterHistory();
    } catch (error) {
        console.error('Error loading history:', error);
        this.showEmptyState();
    }
    }

    setActiveTab(tab) {
    // update the active tab button
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`${tab}Tab`).classList.add('active');
    
    this.currentFilter = tab;
    this.filterHistory();
    }

    filterHistory(searchTerm = '') {
    let filtered = [...this.clipboardHistory];

    // filter by the type
    if (this.currentFilter !== 'all') {
        filtered = filtered.filter(item => item.type === this.currentFilter);
    }

    // filter by the search term
    if (searchTerm.trim()) {
        const lower = searchTerm.toLowerCase();
        filtered = filtered.filter(item => {
        if (item.type === 'text') {
            return item.content.toLowerCase().includes(lower);
        }
        // You can expand image search by filename, tags, etc., if needed
        return false;
        });
    }

    this.filteredHistory = filtered;
    this.renderHistory();
    }

    renderHistory() {
    const container = document.getElementById('content');
    container.innerHTML = '';

    if (this.filteredHistory.length === 0) {
        container.innerHTML = `
        <div class="empty-state">
            <h3>No clipboard items found</h3>
            <p>Try copying something or adjusting your filters.</p>
        </div>
        `;
        return;
    }

    for (const item of this.filteredHistory) {
        const div = document.createElement('div');
        div.className = 'clipboard-item';
        div.addEventListener('click', () => this.copyToClipboard(item));

        let contentHTML = '';

        if (item.type === 'text') {
        contentHTML = `
            <div class="item-content item-text">${item.content}</div>
        `;
        } else if (item.type === 'image') {
        contentHTML = `
            <div class="item-content">
            <img class="item-image" src="${item.content}" alt="Clipboard image" />
            </div>
        `;
        }

        div.innerHTML = `
        <div class="item-header">
            <span class="item-type ${item.type}">${item.type}</span>
            <span class="item-time">${new Date(item.timestamp).toLocaleString()}</span>
        </div>
        ${contentHTML}
        `;

        container.appendChild(div);
    }
    }
    showEmptyState() {
    const container = document.getElementById('content');
    container.innerHTML = `
        <div class="empty-state">
        <h3>No clipboard items found</h3>
        <p>Try copying something or adjusting your filters.</p>
        </div>
    `;
    }
    async copyToClipboard(item) {
    try {
        if (item.type === 'text') {
        await navigator.clipboard.writeText(item.content);
        } else if (item.type === 'image') {
        const response = await fetch(item.content);
        const blob = await response.blob();
        const itemData = new ClipboardItem({ [blob.type]: blob });
        await navigator.clipboard.write([itemData]);
        }
    } catch (error) {
        console.error('Copy failed:', error);
    }
    }

    async clearHistory() {
    if (!confirm("Are you sure you want to clear your clipboard history?")) return;

    try {
        await chrome.runtime.sendMessage({ type: 'clearHistory' });
        this.clipboardHistory = [];
        this.filterHistory();
    } catch (error) {
        console.error('Clear failed:', error);
    }
    }


    formatTimeAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return `${Math.floor(diff / 86400000)}d ago`;
    }

    escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
    }
}

// Initialize popup
new BestClipPopup();  
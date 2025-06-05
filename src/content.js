// Content script for BestClip - helps with clipboard monitoring
class BestClipContent {
  constructor() {
    this.lastClipboardContent = '';
    this.isActive = true;
    this.init();
  }

  init() {
    // Listen for copy events
    document.addEventListener('copy', (e) => {
      this.handleCopyEvent(e);
    });

    // Listen for cut events  
    document.addEventListener('cut', (e) => {
      this.handleCopyEvent(e);
    });

    // Listen for paste events to detect external clipboard changes
    document.addEventListener('paste', (e) => {
      this.handlePasteEvent(e);
    });

    // Monitor for keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      this.handleKeyboardShortcuts(e);
    });

    // Listen for messages from background script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      this.handleMessage(message, sender, sendResponse);
    });

    // Inject clipboard monitoring helper
    this.injectClipboardHelper();
  }

  handleCopyEvent(e) {
    // Let the copy happen first, then check clipboard
    setTimeout(() => {
      this.checkClipboardContent();
    }, 100);
  }

  handlePasteEvent(e) {
    // Check if pasted content is different from what we expect
    setTimeout(() => {
      this.checkClipboardContent();
    }, 100);
  }

  handleKeyboardShortcuts(e) {
    // Handle Ctrl+Shift+V (Cmd+Shift+V on Mac) to open BestClip
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'V') {
      e.preventDefault();
      chrome.runtime.sendMessage({ type: 'openBestClip' });
    }

    // Handle standard copy/paste shortcuts
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'x')) {
      setTimeout(() => {
        this.checkClipboardContent();
      }, 100);
    }
  }

  async checkClipboardContent() {
    try {
      const clipboardItems = await navigator.clipboard.read();
      
      for (const clipboardItem of clipboardItems) {
        // Handle text content
        if (clipboardItem.types.includes('text/plain')) {
          const text = await (await clipboardItem.getType('text/plain')).text();
          if (text && text !== this.lastClipboardContent) {
            this.lastClipboardContent = text;
            this.notifyBackgroundScript('text', text);
          }
        }
        
        // Handle image content
        for (const type of clipboardItem.types) {
          if (type.startsWith('image/')) {
            const imageBlob = await clipboardItem.getType(type);
            const imageDataUrl = await this.blobToDataUrl(imageBlob);
            
            if (imageDataUrl !== this.lastClipboardContent) {
              this.lastClipboardContent = imageDataUrl;
              this.notifyBackgroundScript('image', imageDataUrl);
            }
            break;
          }
        }
      }
    } catch (error) {
      // Clipboard access might be restricted, ignore silently
      console.log('Clipboard access restricted:', error);
    }
  }

  async blobToDataUrl(blob) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  notifyBackgroundScript(type, content) {
    chrome.runtime.sendMessage({
      type: 'clipboardChange',
      contentType: type,
      content: content,
      timestamp: Date.now(),
      source: 'content_script'
    });
  }

  handleMessage(message, sender, sendResponse) {
    switch (message.type) {
      case 'getClipboardContent':
        this.getClipboardContent().then(sendResponse);
        return true;
        
      case 'setClipboardContent':
        this.setClipboardContent(message.content, message.contentType).then(sendResponse);
        return true;
        
      case 'checkActiveElement':
        sendResponse({
          isInputField: this.isInputField(document.activeElement),
          canAccessClipboard: true
        });
        break;
    }
  }

  async getClipboardContent() {
    try {
      const clipboardItems = await navigator.clipboard.read();
      const result = { text: '', images: [] };
      
      for (const clipboardItem of clipboardItems) {
        // Get text
        if (clipboardItem.types.includes('text/plain')) {
          result.text = await (await clipboardItem.getType('text/plain')).text();
        }
        
        // Get images
        for (const type of clipboardItem.types) {
          if (type.startsWith('image/')) {
            const imageBlob = await clipboardItem.getType(type);
            const imageDataUrl = await this.blobToDataUrl(imageBlob);
            result.images.push(imageDataUrl);
          }
        }
      }
      
      return { success: true, content: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async setClipboardContent(content, contentType) {
    try {
      if (contentType === 'text') {
        await navigator.clipboard.writeText(content);
      } else if (contentType === 'image') {
        // Convert data URL to blob
        const response = await fetch(content);
        const blob = await response.blob();
        await navigator.clipboard.write([
          new ClipboardItem({ [blob.type]: blob })
        ]);
      }
      
      this.lastClipboardContent = content;
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  isInputField(element) {
    if (!element) return false;
    
    const tagName = element.tagName.toLowerCase();
    const inputTypes = ['input', 'textarea'];
    const editableTypes = ['text', 'password', 'email', 'search', 'url', 'tel'];
    
    if (inputTypes.includes(tagName)) {
      if (tagName === 'input') {
        const type = element.type.toLowerCase();
        return editableTypes.includes(type);
      }
      return true;
    }
    
    return element.contentEditable === 'true';
  }

  injectClipboardHelper() {
    // Inject a small helper script to better monitor clipboard changes
    const script = document.createElement('script');
    script.textContent = `
      (function() {
        let lastClipboardContent = '';
        
        // Override native clipboard methods to detect changes
        const originalWrite = navigator.clipboard.write;
        const originalWriteText = navigator.clipboard.writeText;
        
        navigator.clipboard.write = function(...args) {
          const result = originalWrite.apply(this, args);
          window.postMessage({ type: 'clipboardWrite', source: 'bestclip-helper' }, '*');
          return result;
        };
        
        navigator.clipboard.writeText = function(text) {
          const result = originalWriteText.call(this, text);
          window.postMessage({ type: 'clipboardWriteText', text, source: 'bestclip-helper' }, '*');
          return result;
        };
        
        // Listen for clipboard events from other sources
        document.addEventListener('paste', (e) => {
          setTimeout(() => {
            window.postMessage({ type: 'clipboardPaste', source: 'bestclip-helper' }, '*');
          }, 50);
        });
      })();
    `;
    
    (document.head || document.documentElement).appendChild(script);
    script.remove();
    
    // Listen for messages from injected script
    window.addEventListener('message', (e) => {
      if (e.data.source === 'bestclip-helper') {
        switch (e.data.type) {
          case 'clipboardWrite':
          case 'clipboardWriteText':
          case 'clipboardPaste':
            setTimeout(() => this.checkClipboardContent(), 100);
            break;
        }
      }
    });
  }
}

// Initialize content script
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new BestClipContent();
  });
} else {
  new BestClipContent();
}
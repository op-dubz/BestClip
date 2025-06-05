class n{constructor(){this.lastClipboardContent="",this.isActive=!0,this.init()}init(){document.addEventListener("copy",t=>{this.handleCopyEvent(t)}),document.addEventListener("cut",t=>{this.handleCopyEvent(t)}),document.addEventListener("paste",t=>{this.handlePasteEvent(t)}),document.addEventListener("keydown",t=>{this.handleKeyboardShortcuts(t)}),chrome.runtime.onMessage.addListener((t,a,e)=>{this.handleMessage(t,a,e)}),this.injectClipboardHelper()}handleCopyEvent(t){setTimeout(()=>{this.checkClipboardContent()},100)}handlePasteEvent(t){setTimeout(()=>{this.checkClipboardContent()},100)}handleKeyboardShortcuts(t){(t.ctrlKey||t.metaKey)&&t.shiftKey&&t.key==="V"&&(t.preventDefault(),chrome.runtime.sendMessage({type:"openBestClip"})),(t.ctrlKey||t.metaKey)&&(t.key==="c"||t.key==="x")&&setTimeout(()=>{this.checkClipboardContent()},100)}async checkClipboardContent(){try{const t=await navigator.clipboard.read();for(const a of t){if(a.types.includes("text/plain")){const e=await(await a.getType("text/plain")).text();e&&e!==this.lastClipboardContent&&(this.lastClipboardContent=e,this.notifyBackgroundScript("text",e))}for(const e of a.types)if(e.startsWith("image/")){const i=await a.getType(e),r=await this.blobToDataUrl(i);r!==this.lastClipboardContent&&(this.lastClipboardContent=r,this.notifyBackgroundScript("image",r));break}}}catch(t){console.log("Clipboard access restricted:",t)}}async blobToDataUrl(t){return new Promise(a=>{const e=new FileReader;e.onload=()=>a(e.result),e.readAsDataURL(t)})}notifyBackgroundScript(t,a){chrome.runtime.sendMessage({type:"clipboardChange",contentType:t,content:a,timestamp:Date.now(),source:"content_script"})}handleMessage(t,a,e){switch(t.type){case"getClipboardContent":return this.getClipboardContent().then(e),!0;case"setClipboardContent":return this.setClipboardContent(t.content,t.contentType).then(e),!0;case"checkActiveElement":e({isInputField:this.isInputField(document.activeElement),canAccessClipboard:!0});break}}async getClipboardContent(){try{const t=await navigator.clipboard.read(),a={text:"",images:[]};for(const e of t){e.types.includes("text/plain")&&(a.text=await(await e.getType("text/plain")).text());for(const i of e.types)if(i.startsWith("image/")){const r=await e.getType(i),o=await this.blobToDataUrl(r);a.images.push(o)}}return{success:!0,content:a}}catch(t){return{success:!1,error:t.message}}}async setClipboardContent(t,a){try{if(a==="text")await navigator.clipboard.writeText(t);else if(a==="image"){const i=await(await fetch(t)).blob();await navigator.clipboard.write([new ClipboardItem({[i.type]:i})])}return this.lastClipboardContent=t,{success:!0}}catch(e){return{success:!1,error:e.message}}}isInputField(t){if(!t)return!1;const a=t.tagName.toLowerCase(),e=["input","textarea"],i=["text","password","email","search","url","tel"];if(e.includes(a)){if(a==="input"){const r=t.type.toLowerCase();return i.includes(r)}return!0}return t.contentEditable==="true"}injectClipboardHelper(){const t=document.createElement("script");t.textContent=`
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
    `,(document.head||document.documentElement).appendChild(t),t.remove(),window.addEventListener("message",a=>{if(a.data.source==="bestclip-helper")switch(a.data.type){case"clipboardWrite":case"clipboardWriteText":case"clipboardPaste":setTimeout(()=>this.checkClipboardContent(),100);break}})}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{new n}):new n;

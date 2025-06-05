import{i as r,g as o,G as a,o as c,s as l,a as d}from"./assets/index-8bd0c73f-CykSf9VJ.js";const u={apiKey:"AIzaSyBq1ElkFM04L9GccoGD-ek2rhXke0XaVpA",authDomain:"bestclip-67c3e.firebaseapp.com",projectId:"bestclip-67c3e",storageBucket:"bestclip-67c3e.appspot.app",messagingSenderId:"948086267570",appId:"1:948086267570:web:69e6d50c6873f7b7b373ab",measurementId:"G-KFW7QLJ86Q"},p=r(u),s=o(p),y=new a;class h{constructor(){this.clipboardHistory=[],this.filteredHistory=[],this.currentFilter="all",this.currentUser=null,this.init()}init(){this.setupEventListeners(),this.setupAuth(),this.loadClipboardHistory()}setupEventListeners(){document.getElementById("searchBar").addEventListener("input",t=>{this.filterHistory(t.target.value)}),document.getElementById("allTab").addEventListener("click",()=>{this.setActiveTab("all")}),document.getElementById("textTab").addEventListener("click",()=>{this.setActiveTab("text")}),document.getElementById("imageTab").addEventListener("click",()=>{this.setActiveTab("image")}),document.getElementById("clearButton").addEventListener("click",()=>{this.clearHistory()}),document.getElementById("signInButton").addEventListener("click",()=>{this.signIn()}),chrome.runtime.onMessage.addListener((t,e,i)=>{t.type==="clipboardUpdate"&&(this.clipboardHistory=t.history||[],this.filterHistory())})}setupAuth(){c(s,t=>{this.currentUser=t,this.updateAuthUI(),this.updateSyncStatus()})}updateAuthUI(){const t=document.getElementById("authContainer");this.currentUser?(t.innerHTML=`
        <div class="user-info">
            <img src="${this.currentUser.photoURL}" alt="User" class="user-avatar">
            <span>${this.currentUser.displayName}</span>
            <button id="signOutButton" class="auth-button" style="background: #dc2626;">Sign Out</button>
        </div>
        `,document.getElementById("signOutButton").addEventListener("click",()=>{this.signOut()})):(t.innerHTML=`
        <button id="signInButton" class="auth-button">Sign In with Google</button>
        `,document.getElementById("signInButton").addEventListener("click",()=>{this.signIn()}))}updateSyncStatus(){const t=document.getElementById("syncIndicator"),e=document.getElementById("syncStatus");this.currentUser?(t.classList.remove("offline"),e.textContent="Synced"):(t.classList.add("offline"),e.textContent="Offline")}async signIn(){try{await l(s,y)}catch(t){console.error("Sign in error:",t)}}async signOut(){try{await d(s)}catch(t){console.error("Sign out error:",t)}}async loadClipboardHistory(){try{const t=await chrome.runtime.sendMessage({type:"getHistory"});this.clipboardHistory=t.history||[],this.filterHistory()}catch(t){console.error("Error loading history:",t),this.showEmptyState()}}setActiveTab(t){document.querySelectorAll(".tab-button").forEach(e=>{e.classList.remove("active")}),document.getElementById(`${t}Tab`).classList.add("active"),this.currentFilter=t,this.filterHistory()}filterHistory(t=""){let e=[...this.clipboardHistory];if(this.currentFilter!=="all"&&(e=e.filter(i=>i.type===this.currentFilter)),t.trim()){const i=t.toLowerCase();e=e.filter(n=>n.type==="text"?n.content.toLowerCase().includes(i):!1)}this.filteredHistory=e,this.renderHistory()}renderHistory(){const t=document.getElementById("content");if(t.innerHTML="",this.filteredHistory.length===0){t.innerHTML=`
        <div class="empty-state">
            <h3>No clipboard items found</h3>
            <p>Try copying something or adjusting your filters.</p>
        </div>
        `;return}for(const e of this.filteredHistory){const i=document.createElement("div");i.className="clipboard-item",i.addEventListener("click",()=>this.copyToClipboard(e));let n="";e.type==="text"?n=`
            <div class="item-content item-text">${e.content}</div>
        `:e.type==="image"&&(n=`
            <div class="item-content">
            <img class="item-image" src="${e.content}" alt="Clipboard image" />
            </div>
        `),i.innerHTML=`
        <div class="item-header">
            <span class="item-type ${e.type}">${e.type}</span>
            <span class="item-time">${new Date(e.timestamp).toLocaleString()}</span>
        </div>
        ${n}
        `,t.appendChild(i)}}showEmptyState(){const t=document.getElementById("content");t.innerHTML=`
        <div class="empty-state">
        <h3>No clipboard items found</h3>
        <p>Try copying something or adjusting your filters.</p>
        </div>
    `}async copyToClipboard(t){try{if(t.type==="text")await navigator.clipboard.writeText(t.content);else if(t.type==="image"){const i=await(await fetch(t.content)).blob(),n=new ClipboardItem({[i.type]:i});await navigator.clipboard.write([n])}}catch(e){console.error("Copy failed:",e)}}async clearHistory(){if(confirm("Are you sure you want to clear your clipboard history?"))try{await chrome.runtime.sendMessage({type:"clearHistory"}),this.clipboardHistory=[],this.filterHistory()}catch(t){console.error("Clear failed:",t)}}formatTimeAgo(t){const i=Date.now()-t;return i<6e4?"Just now":i<36e5?`${Math.floor(i/6e4)}m ago`:i<864e5?`${Math.floor(i/36e5)}h ago`:`${Math.floor(i/864e5)}d ago`}escapeHtml(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}}new h;

import { defineConfig } from 'vite';
import { resolve } from "path"; 

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/bestclip_popup.html'), 
        popupJS: resolve(__dirname, 'src/bestclip_popup.js'), 
        background: resolve(__dirname, 'src/background.js'), 
        content: resolve(__dirname, 'src/content.js') 
      },
      output: {
        entryFileNames: chunk => {
          if (chunk.name === 'bestclip_popup') return 'bestclip_popup.js';
          if (chunk.name === 'background') return 'background.js';
          if (chunk.name === 'content') return 'content.js';
          return '[name].js';
        },  
        assetFileNames: "[name][extname]" 
      }
    }
  }
});


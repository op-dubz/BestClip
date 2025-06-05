# BestClip - Cross-Platform Clipboard Manager (WIP)

## Project Status: In Progress 

BestClip is a Google Chrome extension (planned to later support Electron, macOS, and Windows) designed to sync and manage clipboard history in real-time across multiple devices. The project is currently under active development and not yet complete.

## What BestClip Will Do (When Complete)

BestClip aims to sync text, images, and screenshots across devices using Google OAuth, store clipboard history securely in Firebase Firestore with timestamps and categories, and allow users to search, filter, and delete up to the last 100 entries with a clear and intuitive user interface. It will provide real-time clipboard monitoring through a Chrome Extension powered by manifest v3 and is planned to support cross-platform synchronization on macOS and Windows through future Electron builds.

## What's been done already 

The project has established a working development environment using Vite and includes initial source files for the popup UI, background service worker, and content script. The popup interface has some HTML and styling in place, and the Firebase SDK has been installed. The manifest.json includes permissions and OAuth configuration for Google identity integration, and the build system is set to output files to the dist directory for Chrome extension unpacking.

## It's still Incomplete 

Despite early progress, key parts of BestClip are not functional. Google OAuth is not fully integrated, even though the manifest contains scopes and a client ID, and authentication logic is incomplete. The Vite build process breaks several files: content.js is sometimes omitted from the dist folder, background.js gets replaced with mostly license comments, and bestclip_popup.js is renamed and stripped of critical code. HTML files link to hashed JS filenames, causing loading issues. Firebase modules such as auth and firestore are not loading correctly, likely due to improper imports. The manifest.json often references incorrect paths post-build, making the extension fail to load in Chrome. 

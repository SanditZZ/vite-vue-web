if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"about/about.html",revision:"e3fd7241a2d3dc218329c8c456a88396"},{url:"assets/_...all_-bcdb5cb9.js",revision:null},{url:"assets/_name_-d4b7cc8c.js",revision:null},{url:"assets/404-a564aaa7.js",revision:null},{url:"assets/about-aaca8931.js",revision:null},{url:"assets/app-d03b4111.js",revision:null},{url:"assets/ar-0eb78e82.js",revision:null},{url:"assets/de-1d048ed8.js",revision:null},{url:"assets/en-58641bd2.js",revision:null},{url:"assets/es-695014b3.js",revision:null},{url:"assets/fr-dac7f002.js",revision:null},{url:"assets/home-7d3b07ca.js",revision:null},{url:"assets/id-96d44a7c.js",revision:null},{url:"assets/index-dc411ff5.css",revision:null},{url:"assets/Info-2c489b48.js",revision:null},{url:"assets/it-722f4f77.js",revision:null},{url:"assets/ja-357ab22b.js",revision:null},{url:"assets/ka-cc514cb9.js",revision:null},{url:"assets/ko-31fd6682.js",revision:null},{url:"assets/pl-b4d08f74.js",revision:null},{url:"assets/po-011cebaf.js",revision:null},{url:"assets/pt-BR-e5840fd8.js",revision:null},{url:"assets/README-8c26a967.js",revision:null},{url:"assets/ru-1f9df64c.js",revision:null},{url:"assets/top-5ab3c419.js",revision:null},{url:"assets/tr-c2f43110.js",revision:null},{url:"assets/uk-9a65a31a.js",revision:null},{url:"assets/uz-629fed99.js",revision:null},{url:"assets/vi-6fb840cb.js",revision:null},{url:"assets/virtual_pwa-register-0e6174bd.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/zh-CN-78ecf232.js",revision:null},{url:"index.html",revision:"8d4d0b0287bb48cfd95b2e03201fbc23"},{url:"readme.html",revision:"3b1c6c1cef5ce1b385f7495911dcbfdc"},{url:"test/info.html",revision:"0aed7288de4d2446d05bcb577e16d010"},{url:"test/po.html",revision:"0e395bb2a16b3448ccbac4a1a698f84b"},{url:"favicon.svg",revision:"a795ab195c26601ea433babed25a7d0d"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
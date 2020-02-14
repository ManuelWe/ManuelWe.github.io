importScripts("/precache-manifest.2ada050ef0d9120532d69bdfecd11fe2.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

const cacheName = 'secondVersion';
const self = this;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

      ])),
  );
});

self.addEventListener('message', (event) => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});


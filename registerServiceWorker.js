importScripts("/precache-manifest.b5d39b6e7dbdb3c80c5f574f32735f3b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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


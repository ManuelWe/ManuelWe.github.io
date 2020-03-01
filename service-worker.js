importScripts("/precache-manifest.4499a97272833143d6b6af09bae15a6b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable */
/**
 * Welcome to your Workbox-powered service worker2!
 */

workbox.setConfig({ debug: true }); //TODO entfernen

workbox.core.setCacheNameDetails({ prefix: "kundeninformationssystem" });

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.precaching.precacheAndRoute([{url: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js', revision: 'null' }]);

workbox.routing.registerRoute(new RegExp('https:\/\/images.ctfassets.net\/kfibk3xh1vwb\/*'), new workbox.strategies.StaleWhileRevalidate({ "cacheName": "images", plugins: [] }), 'GET');
workbox.routing.registerRoute('https://cdn.contentful.com/spaces/kfibk3xh1vwb/entries?content_type=produkt', new workbox.strategies.CacheFirst({ "cacheName": "products", plugins: [] }), 'GET');
workbox.routing.registerRoute('https://cdn.contentful.com/spaces/kfibk3xh1vwb/assets', new workbox.strategies.CacheFirst({ "cacheName": "assets", plugins: [] }), 'GET');

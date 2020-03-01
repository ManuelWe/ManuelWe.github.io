importScripts("/precache-manifest.7cae64f15d3dbc3a52bebbb44783b4e5.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable */
/**
 * Welcome to your Workbox-powered service worker1!
 */

workbox.setConfig({ debug: true }); //TODO entfernen

workbox.core.setCacheNameDetails({ prefix: "kundeninformationssystem" });

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.precaching.precacheAndRoute([{url: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js', revision: 'null' }]);

workbox.routing.registerRoute(new RegExp('https:\/\/images.ctfassets.net\/kfibk3xh1vwb\/*'), new workbox.strategies.StaleWhileRevalidate({ "cacheName": "images", plugins: [] }), 'GET');
workbox.routing.registerRoute('https://cdn.contentful.com/spaces/kfibk3xh1vwb/entries?content_type=produkt', new workbox.strategies.StaleWhileRevalidate({ "cacheName": "products", plugins: [] }), 'GET');
workbox.routing.registerRoute('https://cdn.contentful.com/spaces/kfibk3xh1vwb/assets', new workbox.strategies.StaleWhileRevalidate({ "cacheName": "assets", plugins: [] }), 'GET');

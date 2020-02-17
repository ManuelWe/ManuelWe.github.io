importScripts("/precache-manifest.5829335ab37555b3ced5309fac036091.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable */
/**
 * Welcome to your Workbox-powered service worker1!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

workbox.setConfig({ debug: true });

workbox.core.setCacheNameDetails({ prefix: "kundeninformationssystem" });

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(new RegExp('https:\/\/images.ctfassets.net\/kfibk3xh1vwb\/B5SY5CYcZxbmlZWZ0XCcJ\/efed3c1a56081b66d4a9fcc469c8d5f2\/*'), new workbox.strategies.CacheFirst({ "cacheName": "images", plugins: [] }), 'GET');

const CACHE_NAME = 'tessy-cache-v2'; // Muda o número da versão aqui

const urlsToCache = [
  '/',
  '/index.html',
  '/admin.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  // Adiciona outros arquivos se tiver (CSS, JS, etc.)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting(); // Força o SW novo a

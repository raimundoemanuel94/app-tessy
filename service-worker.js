self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('tessy-cache').then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        './landing.html'
      ]);
    })
  );
  console.log('📦 Service Worker instalado e cache feito!');
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});

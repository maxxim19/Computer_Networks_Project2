const CACHE_NAME = 'dark-horse-project2-cache-v2';

const ASSETS = [
  './',
  './index.html',
  './networking_project2.html',
  './secret_project2.html',
  './project2_style.css',
  './project2_script.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cachedFile) {
      return cachedFile || fetch(event.request);
    })
  );
});

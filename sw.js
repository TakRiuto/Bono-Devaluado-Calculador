const CACHE_NAME = 'bono-fttx-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pasa las peticiones a la red (para mantener siempre la tasa BCV al día)
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});

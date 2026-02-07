const CACHE_NAME = 'directorio-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Instalar Service Worker y cachear activos estáticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

// Activar y limpiar caches antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Estrategia: Cache First con Fallback a Network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).then((response) => {
        // Cachear dinámicamente nuevas peticiones
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    }).catch(() => {
      // Offline fallback si falla red y no hay cache
      if (event.request.mode === 'navigate') {
        return caches.match('/offline.html');
      }
    })
  );
});

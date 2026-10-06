const CACHE = '2027eu-app-v31';
const VERSIONED_SHELL = [
  './index.html?v=20261007b',
  './trip-data.js?v=kosice-tabs-20261007b',
  './manifest.webmanifest',
  './icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(VERSIONED_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const isPage = request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html');
  if (isPage) {
    event.respondWith(
      fetch(request, { cache: 'no-store' })
        .then(response => {
          if (response.ok) caches.open(CACHE).then(cache => cache.put(request, response.clone())).catch(() => {});
          return response;
        })
      .catch(async () => await caches.match(new URL('./index.html?v=20261007b', self.registration.scope).href) || await caches.match(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(cached => cached || fetch(request)
        .then(response => {
          caches.open(CACHE).then(cache => cache.put(request, response.clone())).catch(() => {});
          return response;
        })
        .catch(() => cached))
  );
});


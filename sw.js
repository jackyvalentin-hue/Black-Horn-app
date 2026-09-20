const CACHE='black-horn-v21-20260920';
const ASSETS=[
  './',
  'index.html',
  'styles-v21.css',
  'app-v21.js',
  'manifest-v21.webmanifest',
  'black-horn-logo-v21.png',
  'icon-192-v21.png',
  'icon-512-v21.png',
  'photo-brochette-v21.jpg',
  'photo-steak-v21.jpg',
  'ribs-night-v21.jpg'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isHTML = event.request.mode === 'navigate' ||
                 event.request.headers.get('accept')?.includes('text/html');

  if (isHTML) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then(r => r || caches.match('index.html')))
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const network = fetch(event.request).then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
          return response;
        }).catch(() => cached);
        return cached || network;
      })
    );
  }
});

const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'index.html',
  'styles/style.css',
  'images/icons/v128.png',
  'images/icons/v144.png',
  'images/icons/v152.png',
  'images/icons/v192.png',
  'images/icons/v256.png',
  'images/icons/v512.png',
  'scripts/min/logo.min.js',
  'scripts/min/bg.min.js',
  'scripts/min/app.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.0/css/bulma.min.css',
  'https://use.fontawesome.com/releases/v5.0.7/js/all.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.debug.js'
];

const precacheResources2 = [
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources2);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
});

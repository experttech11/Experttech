const CACHE_NAME = 'expert-tech-v4.0';
const OFFLINE_URL = '/offline.html';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/favicon.svg',
  '/favicon-32.png',
  '/apple-touch-icon.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/maskable-192.png',
  '/icons/maskable-512.png'
];

// 1. Install Event - Pre-cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching offline shell and assets');
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[SW] Non-critical precache error ignored:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event - Strategy routing
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Strategy A: HTML / Navigation Requests -> Network First, fallback to Cache, fallback to offline.html
  if (request.mode === 'navigate' || (request.headers.get('accept') && request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          console.log('[SW] Fetch failed for HTML; serving cached copy or offline.html');
          const cachedResponse = await caches.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
          const offlineFallback = await caches.match(OFFLINE_URL);
          return offlineFallback || new Response('<html><body><h2>Offline</h2><p>Please check your internet connection.</p></body></html>', {
            status: 503,
            headers: { 'Content-Type': 'text/html' }
          });
        })
    );
    return;
  }

  // Strategy B: JS / CSS Bundles -> Network First, fallback to Cache
  const isScriptOrStyle =
    request.destination === 'script' ||
    request.destination === 'style' ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.includes('/assets/');

  if (isScriptOrStyle) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(request);
          if (cachedResponse) return cachedResponse;
          return new Response('/* Offline fallback for scripts */', {
            status: 200,
            headers: { 'Content-Type': 'application/javascript' }
          });
        })
    );
    return;
  }

  // Strategy C: Media & Font Static Assets (Images, Icons, Fonts) -> Cache First / Stale-While-Revalidate
  const isMediaAsset = 
    request.destination === 'image' ||
    request.destination === 'font' ||
    url.pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot|ico)$/i);

  if (isMediaAsset) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, networkResponse);
              });
            }
          }).catch(() => {/* ignore background update errors */});

          return cachedResponse;
        }

        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        }).catch((err) => {
          console.warn('[SW] Network fetch failed for asset:', request.url, err);
          return new Response('', { status: 404, statusText: 'Not Found' });
        });
      })
    );
  }
});

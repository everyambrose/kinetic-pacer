/* ============================================================
   Kinetic Pacer — Service Worker
   전략: Network First + Cache Fallback
   - GitHub push → 즉시 새 버전 감지
   - 오프라인 → 캐시에서 서빙
   ============================================================ */

const CACHE_VERSION = 'kp-v10.27';
const CACHE_NAME = `kinetic-pacer-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  '/kinetic-pacer/',
  '/kinetic-pacer/index.html',
  '/kinetic-pacer/manual.html',
  '/kinetic-pacer/manifest.json',
  '/kinetic-pacer/icons/icon-192.png',
  '/kinetic-pacer/icons/icon-512.png',
  /* 외부 CDN은 캐시에서 제외 (네트워크 우선) */
];

/* ── INSTALL: 핵심 파일 사전 캐시 ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_URLS).catch(err => {
        console.warn('[KP-SW] 일부 사전 캐시 실패 (무시 가능):', err);
      });
    }).then(() => self.skipWaiting())
  );
});

/* ── ACTIVATE: 이전 버전 캐시 정리 ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith('kinetic-pacer-') && key !== CACHE_NAME)
          .map(key => {
            console.log('[KP-SW] 구 버전 캐시 삭제:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: Network First → Cache Fallback ── */
self.addEventListener('fetch', event => {
  const req = event.request;

  /* POST·외부 도메인은 Service Worker 통과 */
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    fetch(req)
      .then(networkRes => {
        /* 네트워크 성공 → 캐시 갱신 */
        if (networkRes && networkRes.status === 200) {
          const clone = networkRes.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
        }
        return networkRes;
      })
      .catch(() => {
        /* 오프라인 → 캐시에서 서빙 */
        return caches.match(req).then(cached => {
          if (cached) return cached;
          /* 캐시에도 없으면 index.html 반환 (SPA fallback) */
          return caches.match('/kinetic-pacer/index.html');
        });
      })
  );
});

/* ── MESSAGE: 강제 업데이트 트리거 ── */
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

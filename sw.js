/* ECOFIN · service worker: abre o app mesmo sem internet */
const CACHE = "ecofin-v3";
const FILES = ["./", "index.html", "config.js", "ecofin.webmanifest", "ecofin-logo.png", "ecofin-icon-192.png", "ecofin-icon-512.png", "privacidade.html"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f => c.add(f).catch(() => null)))).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (/firestore|identitytoolkit|securetoken|googleapis\.com\/(?!.*gstatic)/.test(u.hostname + u.pathname) && !u.hostname.includes("gstatic")) return;
  const mesmo = u.origin === location.origin, cdn = u.hostname === "www.gstatic.com";
  if (!mesmo && !cdn) return;
  if (req.mode === "navigate" || u.pathname.endsWith("config.js")) {
    e.respondWith(fetch(req, { cache: "no-cache" }).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req.mode === "navigate" ? "index.html" : req, c)); return r; }).catch(() => caches.match(req.mode === "navigate" ? "index.html" : req).then(r => r || caches.match("index.html"))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r && r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); } return r; }).catch(() => hit)));
});

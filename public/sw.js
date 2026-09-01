self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // Pas de mode hors ligne.
  // Le service worker est uniquement utilisé pour permettre
  // le fonctionnement PWA.
});
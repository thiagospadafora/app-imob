self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalado');
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Ativado');
});
self.addEventListener('fetch', (event) => {});

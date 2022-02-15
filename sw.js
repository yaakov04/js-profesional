/*const VERSION = 'V1';
self.addEventListener('install', e => {
    e.waitUntil(precache());
})

self.addEventListener('fetch', e => {
    const request = e.request;
    //get
    if (request.method !== 'GET') {
        return;
    }

    //buscar en cache
    e.respondWith(cachedResponse(request));

    //actualizar cache
    e.waitUntil(updateCache(request));
})

async function precache(){
    const cache = await caches.open(VERSION);
    cache.addAll([
        
        '/',
        './index.html',
        './assets/MediaPlayer.js',
        './assets/index.js',
        './assets/index.css',
        './assets/BigBuckBunny.mp4',
        './assets/plugins/AutoPlay.js',
        './assets/plugins/AutoPause.js',
        
    ])
}

async function cachedResponse (request){
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);

    return response || fetch(request);
}

async function updateCache(request){
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}*/
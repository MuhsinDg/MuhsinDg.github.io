'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b4a3dadbff8208e188b157f24f8a2c52",
"assets/FontManifest.json": "b61bb2f9e283e9409490cd0d37aab91f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/assets/01,08,2022.jpeg": "efd64afe79bd865ed14f8d1ecf023b4a",
"assets/lib/assets/09,11,2022.jpeg": "1b804c9e3234d7571074297b4cb8ca76",
"assets/lib/assets/10,01,1453.jpeg": "9b269413908777a587bd953b6fd75016",
"assets/lib/assets/16,02,2022.jpeg": "f2959f42387e9bfb402bef046707211e",
"assets/lib/assets/17,12,2022.jpeg": "5ec891daf550360e1d61d48e19bc72f4",
"assets/lib/assets/19,04,2022.jpeg": "b0c053d619ca18b395b2b7d0c03d6291",
"assets/lib/assets/2,12,2021.jpeg": "7217e479c180122f3d7c48bbd862bb36",
"assets/lib/assets/20,04,2022.jpeg": "9188a8b8b2ba7756a52bee5c243daf60",
"assets/lib/assets/26,11,2022.jpeg": "362a04cbf94341fe515c07b79a6d8e6a",
"assets/lib/assets/26,11,20222.jpeg": "9fcad68450d8d6c8db0e18cf3b1e9f9f",
"assets/lib/assets/top-paralax-1.png": "eb9b1e85d6de3cc93a92cbf23e82f6a0",
"assets/lib/assets/top-paralax-10.png": "5d562fa51c41490026d37603001ef1de",
"assets/lib/assets/top-paralax-11.png": "d9998bbd48a786599a6c3d47b1793caf",
"assets/lib/assets/top-paralax-2.png": "6b22ac7215390273c17490c62746149f",
"assets/lib/assets/top-paralax-3.png": "63f4cb7a04048cab723df57158112f28",
"assets/lib/assets/top-paralax-4.png": "98d92ae162f3c5f6bf4e27d6eb18db74",
"assets/lib/assets/top-paralax-5.png": "680e5493cfe75471d984fc574ecd2dd5",
"assets/lib/assets/top-paralax-6.png": "125dfa7e89f6ff817c022d5dc303cdcc",
"assets/lib/assets/top-paralax-7.png": "26629bc1aef3c94d55d3cbb3ed8705a1",
"assets/lib/assets/top-paralax-8.png": "f93db1a665d0bbd484d8e59433bb2908",
"assets/lib/assets/top-paralax-9.png": "7e4a016f586b017dda41814a39b6216c",
"assets/lib/Satisfy-Regular.ttf": "78b50d8f2b76211b830a4e9411b86e24",
"assets/NOTICES": "292f0c6d24ea2f749fc077b3bee08240",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "900cdef2fdf2ec8144b8e15b858dafe6",
"/": "900cdef2fdf2ec8144b8e15b858dafe6",
"main.dart.js": "0e92a2146812bf62569ba40e960a28ee",
"manifest.json": "cd415ff5d050d9c17a5b7677498c22af",
"version.json": "2405a0954164fa7f4f00bf6efd2c04ef"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
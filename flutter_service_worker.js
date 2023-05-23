'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9b5ce68c8e979510489303b98217af3b",
"assets/FontManifest.json": "b61bb2f9e283e9409490cd0d37aab91f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/assets/01,03,2022.jpeg": "8fd78a0db5d82e9c9606562d7d5c6dd0",
"assets/lib/assets/01,08,2022.jpeg": "efd64afe79bd865ed14f8d1ecf023b4a",
"assets/lib/assets/01,09,2022.jpeg": "587b207e0682b127c649834a86b98f74",
"assets/lib/assets/02,04,2022,adamveome%25C5%259Fhurmorkoltuk.jpeg": "5b1411773f79da3d1d5492e7584e9af4",
"assets/lib/assets/03,09,2022,kilitlera%25C3%25A7%25C4%25B1ld%25C4%25B1ko%25C5%259Fko%25C5%259F.jpeg": "9b3a6ec6afcdbbd4bdf6bc40498566cc",
"assets/lib/assets/03,09,2022,uykucumuhsin.jpeg": "c6db8bfb1337c05c90f59bd6a6e9cc71",
"assets/lib/assets/08,12,2022.jpeg": "d5bdd12e6036f39d29897224589a2fb9",
"assets/lib/assets/09,11,2022.jpeg": "1b804c9e3234d7571074297b4cb8ca76",
"assets/lib/assets/10,01,1453.jpeg": "74ddd641ff43b0e07631bba71f5113cf",
"assets/lib/assets/11,03,2022,og%25C3%25BCnk%25C3%25BCadam%25C4%25B1benbileunutamam.jpeg": "c5722b34d9cd79c294e5f3630cdb79f1",
"assets/lib/assets/13,03,2022.jpg": "062539654bfdac49c186bae7369b4992",
"assets/lib/assets/15,07,2022,istanbulunefendileri.jpeg": "5ac235839ca5bcfa10147bde4e4b3229",
"assets/lib/assets/16,02,2022.jpeg": "f2959f42387e9bfb402bef046707211e",
"assets/lib/assets/17,12,2022.jpeg": "5ec891daf550360e1d61d48e19bc72f4",
"assets/lib/assets/17,12,20222.jpeg": "f2c0097c8b7c1d30f29c637bde23b96d",
"assets/lib/assets/19,03,2022,marmaraborsamilyarderlerderne%25C4%259Fikurucular%25C4%25B1.jpeg": "8f7908a895a872805daef2a6b9c370f6",
"assets/lib/assets/19,04,2022.jpeg": "b0c053d619ca18b395b2b7d0c03d6291",
"assets/lib/assets/2,12,2021.jpeg": "7217e479c180122f3d7c48bbd862bb36",
"assets/lib/assets/20,04,2022.jpeg": "9188a8b8b2ba7756a52bee5c243daf60",
"assets/lib/assets/25,10,2022.jpeg": "bc782e3c8598eedc69e669af2969501b",
"assets/lib/assets/26,10,2022.jpeg": "56763f9ad4965b6a5e3c42d3b0d6e77b",
"assets/lib/assets/26,11,2022.jpeg": "362a04cbf94341fe515c07b79a6d8e6a",
"assets/lib/assets/26,11,20222.jpeg": "9fcad68450d8d6c8db0e18cf3b1e9f9f",
"assets/lib/assets/29,03,2022.jpg": "ff3a53370befafa1646a8e66280fd825",
"assets/lib/assets/30,06,2022,b%25C4%25B1y%25C4%25B1kkarde%25C5%259Fli%25C4%259Fi.jpeg": "b8a090e25629ffbdc797b5775aacf7d3",
"assets/lib/assets/30,08,2022.jpeg": "aa65d21b8c5ba1714242958674d6916d",
"assets/lib/assets/31,03,2022.jpg": "af9309a640651ab95113f6260fac38da",
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
"index.html": "0cad4adf9558539969a1fb08baf35f09",
"/": "0cad4adf9558539969a1fb08baf35f09",
"main.dart.js": "50bb3555dcb7d202821a01f6c131b3a2",
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

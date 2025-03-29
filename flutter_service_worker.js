'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "7007909b5c5c6e58f39a2821fe07f060",
"assets/AssetManifest.bin": "650232dbdfa9a74273347c70cc0d9019",
"assets/AssetManifest.bin.json": "a1cce51848ddbfa135a83d4e094134df",
"assets/AssetManifest.json": "b03168b612d185d516533134dfab81e3",
"assets/assets/aerial-bg.jpg": "2d2af73a4d012dddde526bf437ea5dc5",
"assets/assets/aerial-bg2.jpg": "37dfe8d21d3f9812c0d11eaf3ab41ce7",
"assets/assets/aerial_bg_desktop.jpg": "27f80979694dd4d0c53fa8d38ea80e42",
"assets/assets/aerial_bg_mobile.jpg": "14304ab293029a97f1891da7f8c7a527",
"assets/assets/amenities/arch.jpg": "9bc8c0f2c2b906f5d3b119c4ce4380bb",
"assets/assets/amenities/bus.webp": "099438919df506d8f95162fcdfbe3a32",
"assets/assets/amenities/electricity.webp": "69159e2786ca7ce10ffe3b82e4a67bce",
"assets/assets/amenities/gated.webp": "4a47433cbe34dd6386528fd67172ed96",
"assets/assets/amenities/park.jpg": "1de6a60c54f17ddc602a3335da3cf31c",
"assets/assets/amenities/road.jpg": "a6f4867799c506e2420b5ab21b492f98",
"assets/assets/amenities/street-light.webp": "10cb94b7ccd1257b96c5d8149dc1ad08",
"assets/assets/amenities/temple.jpg": "5c879793de0b284c42fabfaa87296133",
"assets/assets/amenities/water.webp": "7ff40c41deb69eb4cffaa682d0eb08c0",
"assets/assets/anim_loader.json": "fb254e1837df8a626eb4b428f0333590",
"assets/assets/anim_location.json": "8b3e7de2632792287826148c03d79ebf",
"assets/assets/home_bg.jpg": "4bf78e752acc6206a9958b85abd7566b",
"assets/assets/ic_facebook.png": "ba803196d3b7644ffb2576efd1500b6b",
"assets/assets/ic_form.jpg": "6ffd10385faa8a4bbc28dd660b11d074",
"assets/assets/ic_instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/ic_next_city.png": "a9c1ffecc8ee5b345e3dd6489a91842a",
"assets/assets/ic_whatsapp.png": "774352deeaa60ebe04164a1e28489771",
"assets/assets/ic_youtube.png": "ca6d67e60f758d352745329b283e8f32",
"assets/assets/images/133.jpg": "3248fb7892f63c04ff8aa29111e0327c",
"assets/assets/images/134.jpeg": "078fa3bfe704401e92f5c02006718081",
"assets/assets/images/2071.jpg": "33b3114d42bf0718916ed6d2a966adb3",
"assets/assets/images/apple_bg.jpg": "7b24b908ec9911f87f4659b38059ac1c",
"assets/assets/images/apple_inner_bg.jpg": "46c94716166bc5df31d7303d79400d2f",
"assets/assets/images/apple_inner_bg_mobile.jpg": "13bd68529dcd4590f5fb05d06b0d0f59",
"assets/assets/images/city_bg.webp": "93fd55a76d767b9eedcb9300fba48126",
"assets/assets/images/coco_bg.jpeg": "d6b719916e9cda2484939766111d16a5",
"assets/assets/images/coco_thumb.jpeg": "ac9e10b8d48cb75e1fb3ffa0baddceda",
"assets/assets/images/erode.webp": "2a75db7c16f2bc492abbc0e37ff15e80",
"assets/assets/images/global_bg.webp": "21b0900510019e63b7e600d7cbcf2ac3",
"assets/assets/images/kovai.webp": "11479c0b4ec7bd0dc39afe24dd7b04f7",
"assets/assets/images/krishna_bg.jpeg": "10c81dca268bcaa73a16bd57578d61fe",
"assets/assets/images/krishna_inner_bg.jpeg": "1a1782be9f6ec49d9575f57e2b9cce44",
"assets/assets/images/krishna_inner_bg_mobile.jpeg": "f0ea63e3e7bb038f522064d5fdf56c11",
"assets/assets/images/kurinchi_bg.jpeg": "f8ee185660c64ddb0a3f321d6a6a3cbf",
"assets/assets/images/kurinji_inner_bg.webp": "4edddee75721af68c63095f5835ed33e",
"assets/assets/images/kurinji_inner_bg_mobile.webp": "b23e01b98b4f60832b5d6326ae80d4f1",
"assets/assets/images/logo.png": "9a04f1a99edf2b7fe3738c29c0a462a9",
"assets/assets/images/mira_bg.jpeg": "256191ca133181a719b58ea71b464633",
"assets/assets/images/mira_inner_bg.webp": "5e298f51e05d37f58a6f11869e83a083",
"assets/assets/images/mira_inner_bg_mobile.webp": "ff1bb29f4e778b148fc7975b415bfdc2",
"assets/assets/images/new_bg.webp": "4e2e135fc70c9cfe0847ef57b6433231",
"assets/assets/images/next_bg.jpeg": "4c10dee70715aa0d0fa465fa9897ec00",
"assets/assets/images/next_city_inner_bg.webp": "b3ceeb0ca7871a9b6dfaeff6872b5d54",
"assets/assets/images/next_city_inner_bg_mobile.webp": "921ea00c5309a437630edc93e64276f7",
"assets/assets/images/plots.jpg": "c4963b44bed6e04d1985105435cc6d82",
"assets/assets/images/pollachi.webp": "0098372f09c06d48baf924296fc29807",
"assets/assets/images/square_inner_bg.webp": "64dd611d4ac783fe94e2dc69958c217c",
"assets/assets/images/square_inner_bg_mobile.webp": "aaaace26a8d8f58b66f99d39d80734d6",
"assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"assets/assets/real_estate_01.png": "c26137ec28583dcd0b6619ded0962c72",
"assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f3d1a55402a83816887c1bdb919b8081",
"assets/NOTICES": "e408d488eba26f0feee3bbd83b082770",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d5f722f88744b888e1827d4f1cc8fa9f",
"htaccess": "6304db67bfe2e22baa50909f0b8ac904",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cf3cb03759863ce1a77f7c9987cd8990",
"/": "cf3cb03759863ce1a77f7c9987cd8990",
"index.zip": "eb34f30b9454e1c60d9ea482e2d2f436",
"logo.png": "9a04f1a99edf2b7fe3738c29c0a462a9",
"main.dart.js": "d346cb8bb53ffd209b90a5237a58c5c2",
"manifest.json": "6dcceb06abed02ff259573c01290616a",
"version.json": "2b04f4dd17f41ab45ea8ed44bfea692a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

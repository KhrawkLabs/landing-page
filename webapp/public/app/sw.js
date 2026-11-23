// Gerado por scripts/publicar-web.mjs. Não edite à mão.
const BASE = "/app/";
const CACHE = "sos-maringa-cb370dd5cb68";
const TILES = "sos-maringa-mapa";
const MAX_TILES = 400;
const PRECACHE = ["/app/","/app/assets/node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.b4eb097d35f44ed943676fd56f6bdc51.ttf","/app/assets/node_modules/@expo-google-fonts/inter/100Thin/Inter_100Thin.ddbb1cd55ad509e82377bd10beed6506.ttf","/app/assets/node_modules/@expo-google-fonts/inter/100Thin_Italic/Inter_100Thin_Italic.1b97f7df9b976cfe530c18c09598e6f6.ttf","/app/assets/node_modules/@expo-google-fonts/inter/200ExtraLight/Inter_200ExtraLight.e1f33daee21eb5998b13d3e05264d9a3.ttf","/app/assets/node_modules/@expo-google-fonts/inter/200ExtraLight_Italic/Inter_200ExtraLight_Italic.3d0662838915a7a16d01c262735d3d29.ttf","/app/assets/node_modules/@expo-google-fonts/inter/300Light/Inter_300Light.d2994e3dea3856e1834395ad6cce32af.ttf","/app/assets/node_modules/@expo-google-fonts/inter/300Light_Italic/Inter_300Light_Italic.17f8f23a2852bfa14ce5bf590c2a0e2c.ttf","/app/assets/node_modules/@expo-google-fonts/inter/400Regular/Inter_400Regular.51b6ad87261f18b6433ec52871ddfabc.ttf","/app/assets/node_modules/@expo-google-fonts/inter/400Regular_Italic/Inter_400Regular_Italic.36cad9f97595b7759264b945d64502b4.ttf","/app/assets/node_modules/@expo-google-fonts/inter/500Medium/Inter_500Medium.137ab18bace28dd0bd83eb3b8ed2bc54.ttf","/app/assets/node_modules/@expo-google-fonts/inter/500Medium_Italic/Inter_500Medium_Italic.155406bfbfb023eb104728edfe62c0e9.ttf","/app/assets/node_modules/@expo-google-fonts/inter/600SemiBold/Inter_600SemiBold.a5f35888d2da465de352e0dcfaf33324.ttf","/app/assets/node_modules/@expo-google-fonts/inter/600SemiBold_Italic/Inter_600SemiBold_Italic.a349d1ac188e1a67689432f44de99849.ttf","/app/assets/node_modules/@expo-google-fonts/inter/700Bold/Inter_700Bold.6e237de4f1f413afa2fcc45c77ac343a.ttf","/app/assets/node_modules/@expo-google-fonts/inter/700Bold_Italic/Inter_700Bold_Italic.3398006c80026f0508aaaf4808950d56.ttf","/app/assets/node_modules/@expo-google-fonts/inter/800ExtraBold/Inter_800ExtraBold.6016034293c084aa0c056e83938bf1cc.ttf","/app/assets/node_modules/@expo-google-fonts/inter/800ExtraBold_Italic/Inter_800ExtraBold_Italic.7ca909a56537d965feef41abe58b87e0.ttf","/app/assets/node_modules/@expo-google-fonts/inter/900Black/Inter_900Black.bcec6eda9700a81ba92c483a2f2c02c1.ttf","/app/assets/node_modules/@expo-google-fonts/inter/900Black_Italic/Inter_900Black_Italic.d5f78c24de59ce5e4bad405e10e71941.ttf","/app/favicon.ico","/app/icon-180.png","/app/icon-192.png","/app/icon-512.png","/app/index.html","/app/manifest.webmanifest","/app/_expo/static/css/leaflet-df687fead8c4838a4e6b8bcb2f176a0e.css","/app/_expo/static/js/web/AppEntry-fd5a359bba0cd961b8654f6dc33fc8d5.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("sos-maringa-") && k !== CACHE && k !== TILES).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function trimTiles() {
  const cache = await caches.open(TILES);
  const keys = await cache.keys();
  for (const key of keys.slice(0, Math.max(0, keys.length - MAX_TILES))) await cache.delete(key);
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);

  // Abrir o app: responde na hora com a versão guardada e busca a nova por trás.
  // Sem internet, abre a guardada. A versão nova vale na próxima vez que abrir.
  if (request.mode === "navigate" && url.origin === self.location.origin && url.pathname.startsWith(BASE)) {
    event.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const cached = await cache.match(BASE);
        const network = fetch(BASE, { cache: "no-store" })
          .then((response) => {
            if (response.ok) cache.put(BASE, response.clone());
            return response;
          })
          .catch(() => cached);
        if (cached) {
          event.waitUntil(network);
          return cached;
        }
        return network;
      })
    );
    return;
  }

  // Arquivos do app (nomes com hash): do cache, ou da rede e guarda.
  if (url.origin === self.location.origin && url.pathname.startsWith(BASE)) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response.ok) caches.open(CACHE).then((cache) => cache.put(request, response.clone()));
            return response;
          })
      )
    );
    return;
  }

  // Mapa (OpenStreetMap): guarda os pedaços já vistos para o mapa aparecer sem internet.
  if (url.hostname === "tile.openstreetmap.org") {
    event.respondWith(
      caches.open(TILES).then(async (cache) => {
        try {
          const response = await fetch(request);
          if (response.ok || response.type === "opaque") {
            await cache.put(request, response.clone());
            event.waitUntil(trimTiles());
          }
          return response;
        } catch {
          const cached = await cache.match(request);
          if (cached) return cached;
          throw new Error("sem internet");
        }
      })
    );
  }
  // O resto (INMET, Open-Meteo, radar) vai direto para a rede; o app guarda os últimos dados.
});

if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let a = {};
    const d = (e) => i(e, t),
      r = { module: { uri: t }, exports: a, require: d };
    s[t] = Promise.all(n.map((e) => r[e] || d(e))).then((e) => (c(...e), a));
  };
}
define(["./workbox-7c2a5a06"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "c14cba15a0ccff428c22bd57c0a9d724",
        },
        {
          url: "/_next/static/chunks/00cbbcb7-5171250e19d6881d.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/472-529a128021be24a2.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/4f53ad1b-0a083a8de98c5bbb.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/563-f6b010fe7b46bf66.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/610-41db52330d339cc7.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/737dfa3e-f0c568cd6a0e7a92.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/9081a741-f7ccea5857e3261e.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/93854f56-0a7d17324785233b.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/app/_not-found-d9fe871950c0a381.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/app/layout-96204f3e55d04ab4.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/app/page-26e2e1ad0d36f314.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/fd9d1056-a4512810ed1d48d1.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/framework-8883d1e9be70c3da.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/main-app-26fca0420bc17f59.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/main-e4e2221e00980433.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/pages/_app-1534f180665c857f.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-d35f03b7bc8df069.js",
          revision: "mxdexfuu8llRitbB5QNqd",
        },
        {
          url: "/_next/static/css/34c26eb5be187d8a.css",
          revision: "34c26eb5be187d8a",
        },
        {
          url: "/_next/static/css/4bfdbccd3b3b18c3.css",
          revision: "4bfdbccd3b3b18c3",
        },
        {
          url: "/_next/static/media/05a31a2ca4975f99-s.woff2",
          revision: "f1b44860c66554b91f3b1c81556f73ca",
        },
        {
          url: "/_next/static/media/513657b02c5c193f-s.woff2",
          revision: "c4eb7f37bc4206c901ab08601f21f0f2",
        },
        {
          url: "/_next/static/media/51ed15f9841b9f9d-s.woff2",
          revision: "bb9d99fb9bbc695be80777ca2c1c2bee",
        },
        {
          url: "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
          revision: "74c3556b9dad12fb76f84af53ba69410",
        },
        {
          url: "/_next/static/media/carhub.8b656710.png",
          revision: "75baabd035c5d9585b3a2f4d35988713",
        },
        {
          url: "/_next/static/media/d6b16ce4a6175f26-s.woff2",
          revision: "dd930bafc6297347be3213f22cc53d3e",
        },
        {
          url: "/_next/static/media/ec159349637c90ad-s.woff2",
          revision: "0e89df9522084290e01e4127495fae99",
        },
        {
          url: "/_next/static/media/ecommerce.9364fe3b.png",
          revision: "99d96af532cc93489f5e2dbc78f42f21",
        },
        {
          url: "/_next/static/media/fd4db3eb5472fc27-s.woff2",
          revision: "71f3fcaf22131c3368d9ec28ef839831",
        },
        {
          url: "/_next/static/media/realtor.adca1d0d.png",
          revision: "32ef35ded77b2e33c66b5b9cb0138dcb",
        },
        {
          url: "/_next/static/mxdexfuu8llRitbB5QNqd/_buildManifest.js",
          revision: "50654c4134ba6f71b423498e9447ee91",
        },
        {
          url: "/_next/static/mxdexfuu8llRitbB5QNqd/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        { url: "/carhub.png", revision: "75baabd035c5d9585b3a2f4d35988713" },
        { url: "/ecommerce.png", revision: "99d96af532cc93489f5e2dbc78f42f21" },
        {
          url: "/icons/icon-192x192.png",
          revision: "dfc1f7b90796cd2d6145cc2efaca407b",
        },
        {
          url: "/icons/icon-256x256.png",
          revision: "e542133b9481bb05820c2ff6e336e450",
        },
        {
          url: "/icons/icon-384x384.png",
          revision: "9b333ef9ad9798fcee189433218459fe",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "ce6dcd953eaa25280421eff704c5f427",
        },
        {
          url: "/icons/maskable.png",
          revision: "7f989b640cbef9d53381e761ee7ba4f1",
        },
        { url: "/manifest.json", revision: "f56f2977aacbdfd2fdf27c0885e7670b" },
        { url: "/profile.png", revision: "3b1a744f465ed00a2b7d7ac4a181619a" },
        { url: "/realtor.png", revision: "32ef35ded77b2e33c66b5b9cb0138dcb" },
        { url: "/resume.pdf", revision: "46ae43bcc67e0a8626ef745473be287c" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: i,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});

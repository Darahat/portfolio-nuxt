export default defineNuxtConfig({
  srcDir: ".",
  pages: true,
  ssr: true,
  components: ["~/components"],

  plugins: ["~/plugins/seo-schema.ts", "~/plugins/aos.client.ts"],

  css: [
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/fontawesome-all.min.css",
    "~/assets/css/flaticon.css",
    "~/assets/css/animate.css",
    "~/assets/css/jquery.fancybox.min.css",
    "~/assets/css/slick.css",
    "~/assets/css/leaflet.css",
    "~/assets/css/meanmenu.css",
    "~/assets/css/default.css",
    "~/assets/css/style.css",
    "~/assets/css/responsive.css",
    "~/assets/css/custom.css",
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#007bff" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "preload",
          as: "image",
          href: "/images/slider/slider-bg.webp",
          fetchpriority: "high",
        },
        {
          rel: "preconnect",
          href: "https://code.jquery.com",
          crossorigin: "anonymous",
        },
        {
          rel: "dns-prefetch",
          href: "https://code.jquery.com",
        },
        // Preload critical fonts
        {
          rel: "preload",
          as: "font",
          href: "/assets/fonts/fa-solid-900.woff2",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
      script: [
        // Load jQuery async - it's not needed for initial render
        {
          src: "https://code.jquery.com/jquery-3.6.0.min.js",
          tagPosition: "bodyClose",
          async: true,
        },
        { src: "/js/popper.min.js", tagPosition: "bodyClose", async: true },
        { src: "/js/bootstrap.min.js", tagPosition: "bodyClose", async: true },
        {
          src: "/js/jquery.fancybox.min.js",
          tagPosition: "bodyClose",
          async: true,
        },
        { src: "/js/slick.min.js", tagPosition: "bodyClose", async: true },
        {
          src: "/js/jquery.meanmenu.min.js",
          tagPosition: "bodyClose",
          async: true,
        },
        { src: "/js/jquery-knob.js", tagPosition: "bodyClose", async: true },
        { src: "/js/jquery-appear.js", tagPosition: "bodyClose", async: true },
        { src: "/js/parallax.js", tagPosition: "bodyClose", async: true },
        { src: "/js/typer.js", tagPosition: "bodyClose", async: true },
        {
          src: "/js/vanilla-tilt.min.js",
          tagPosition: "bodyClose",
          async: true,
        },
        // Main.js must load last but async
        { src: "/js/main.js", tagPosition: "bodyClose", async: true },
      ],
    },
  },

  vite: {
    build: {
      cssMinify: "lightningcss",
      minify: "terser",
      cssCodeSplit: true, // Split CSS per route for better caching
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: [
            "console.log",
            "console.info",
            "console.debug",
            "console.warn",
          ],
          passes: 2, // Multiple passes for better compression
        },
        mangle: {
          safari10: true,
        },
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["vue", "@vue/runtime-dom"],
            aos: ["aos"],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      assetsInlineLimit: 4096, // Inline small assets as base64
    },
    css: {
      devSourcemap: false,
    },
  },

  experimental: {
    payloadExtraction: false, // Don't extract payload - faster initial load
    renderJsonPayloads: true,
    viewTransition: false,
  },

  features: {
    inlineStyles: false, // Don't inline all styles
  },

  modules: ["@nuxt/image"],

  image: {
    // Optimize images automatically
    quality: 80,
    formats: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      "/**": {
        headers: {
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "SAMEORIGIN",
          "X-XSS-Protection": "1; mode=block",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
        },
      },
      "/images/**": {
        headers: { "Cache-Control": "public, max-age=31536000, immutable" },
      },
      "/js/**": {
        headers: { "Cache-Control": "public, max-age=31536000, immutable" },
      },
      "/css/**": {
        headers: { "Cache-Control": "public, max-age=31536000, immutable" },
      },
    },
  },

  compatibilityDate: "2025-01-10",
});

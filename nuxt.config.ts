export default defineNuxtConfig({
  srcDir: ".",
  pages: true,
  ssr: true,
  components: ["~/components"],

  plugins: ["~/plugins/seo-schema.ts", "~/plugins/aos.client.ts"],

  css: [
    "~/assets/css/bootstrap.min.css", // Bootstrap grid system (CSS-only, no JS)
    "~/assets/css/fontawesome-all.min.css", // Font Awesome icons
    "~/assets/css/flaticon.css", // Flaticon custom icons
    "~/assets/css/animate.css", // Animation utilities
    "~/assets/css/global.css", // Global styles (typography, variables, utilities, fonts, accessibility)
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

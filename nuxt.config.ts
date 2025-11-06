export default defineNuxtConfig({
  srcDir: ".",
  pages: true,
  components: ["~/components"],

  plugins: ["~/plugins/seo-schema.ts", "~/plugins/aos.client.ts"],

  css: [
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/fontawesome-all.min.css",
    "~/assets/css/flaticon.css",
    "~/assets/css/animate.css",
    "~/assets/css/aos.css",
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
      script: [
        {
          src: "https://code.jquery.com/jquery-3.6.0.min.js",
          tagPosition: "bodyClose",
          defer: true,
        },
        { src: "/js/popper.min.js", tagPosition: "bodyClose", defer: true },
        { src: "/js/bootstrap.min.js", tagPosition: "bodyClose", defer: true },
        {
          src: "/js/jquery.fancybox.min.js",
          tagPosition: "bodyClose",
          defer: true,
        },
        { src: "/js/slick.min.js", tagPosition: "bodyClose", defer: true },

        {
          src: "/js/jquery.meanmenu.min.js",
          tagPosition: "bodyClose",
          defer: true,
        },
        { src: "/js/jquery-knob.js", tagPosition: "bodyClose", defer: true },
        { src: "/js/jquery-appear.js", tagPosition: "bodyClose", defer: true },
        { src: "/js/parallax.js", tagPosition: "bodyClose", defer: true },
        { src: "/js/typer.js", tagPosition: "bodyClose", defer: true },
        {
          src: "/js/vanilla-tilt.min.js",
          tagPosition: "bodyClose",
          defer: true,
        },
        // AOS is now loaded via NPM package, not from public/js/aos.js
        // { src: "/js/aos.js", tagPosition: "bodyClose", defer: true },
        { src: "/js/main.js", tagPosition: "bodyClose", defer: true },
      ],
    },
  },

  modules: [],

  compatibilityDate: "2025-01-10",
});

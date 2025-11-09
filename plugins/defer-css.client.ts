// Defer non-critical CSS to improve LCP and FCP
export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    // This runs after page is interactive
    const deferCSS = () => {
      const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');

      styleSheets.forEach((link: any) => {
        const href = link.getAttribute("href");

        // Mark non-critical CSS (these can load after initial paint)
        const nonCriticalPatterns = [
          "fontawesome",
          "flaticon",
          "animate",
          "fancybox",
          "slick",
          "leaflet",
          "meanmenu",
        ];

        const isNonCritical = nonCriticalPatterns.some((pattern) =>
          href?.includes(pattern)
        );

        if (isNonCritical && link.media !== "print") {
          // Temporarily set to print to not block render
          link.media = "print";

          // Change back to 'all' after load
          link.onload = function () {
            this.media = "all";
          };

          // Fallback in case onload doesn't fire
          setTimeout(() => {
            if (link.media === "print") {
              link.media = "all";
            }
          }, 100);
        }
      });
    };

    // Run immediately - before other scripts
    deferCSS();
  }
});

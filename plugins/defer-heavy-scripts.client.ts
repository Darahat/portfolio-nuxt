export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    // Delay heavy scripts that cause forced reflows until after hydration
    nuxtApp.hook("app:mounted", () => {
      // Use requestIdleCallback to run heavy operations when browser is idle
      const scheduleInit = (callback: () => void, delay = 0) => {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(callback, { timeout: delay + 1000 });
        } else {
          setTimeout(callback, delay);
        }
      };

      // Initialize vanilla-tilt with delay (it causes 11ms reflow)
      scheduleInit(() => {
        if (
          (window as any).VanillaTilt &&
          document.querySelector("[data-tilt]")
        ) {
          try {
            const tiltElements = document.querySelectorAll("[data-tilt]");
            (window as any).VanillaTilt.init(tiltElements, {
              max: 15,
              speed: 400,
              glare: false, // Disable glare to reduce reflows
              "max-glare": 0.2,
            });
          } catch (e) {
            // Silently fail if vanilla-tilt not available
          }
        }
      }, 200);

      // Initialize parallax with delay
      scheduleInit(() => {
        const scene = document.getElementById("scene");
        if (scene && (window as any).Parallax) {
          try {
            // Check if device is capable and user hasn't requested reduced motion
            const prefersReduced =
              window.matchMedia &&
              window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const deviceMemoryOK =
              !("deviceMemory" in navigator) ||
              ((navigator as any).deviceMemory &&
                (navigator as any).deviceMemory >= 2);

            if (!prefersReduced && window.innerWidth > 991 && deviceMemoryOK) {
              new (window as any).Parallax(scene, {
                relativeInput: true,
                hoverOnly: true, // Only animate on hover to reduce reflows
              });
            }
          } catch (e) {
            // Silently fail
          }
        }
      }, 300);

      // Initialize typer with delay
      scheduleInit(() => {
        if ((window as any).typer) {
          try {
            const typerElement = document.querySelector(".typer");
            if (typerElement) {
              // Typer initialization
            }
          } catch (e) {
            // Silently fail
          }
        }
      }, 400);
    });
  }
});

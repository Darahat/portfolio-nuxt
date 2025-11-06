import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  // only run on client
  if (process.client) {
    const init = () => {
      try {
        AOS.init({
          duration: 1000,
          easing: "ease",
          once: true,
          offset: 120,
        });
      } catch (e) {
        // ignore if AOS not available
        // console.error('AOS init error', e)
      }
    };

    // Init as soon as DOM is ready
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      setTimeout(init, 50);
    } else {
      document.addEventListener("DOMContentLoaded", () => setTimeout(init, 50));
    }

    // Also init on full load (images etc.)
    window.addEventListener("load", () => setTimeout(init, 50));

    // Refresh AOS after each route change (useful for client-only elements)
    try {
      const router = useRouter();
      router.afterEach(() => {
        // slight delay to allow components to mount
        setTimeout(() => {
          try {
            AOS.refresh();
          } catch (e) {}
        }, 120);
      });
    } catch (e) {
      // ignore if router not available
    }

    // expose AOS to app if needed
    nuxtApp.provide("AOS", AOS);
  }
});

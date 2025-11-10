import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  // only run on client
  if (import.meta.client) {
    const init = () => {
      try {
        AOS.init({
          duration: 1000,
          easing: "ease",
          once: true,
          offset: 120,
          startEvent: "DOMContentLoaded",
          initClassName: "aos-init",
          animatedClassName: "aos-animate",
          useClassNames: false,
          disableMutationObserver: false,
        });
        // mark that the Nuxt plugin initialized AOS so other code can avoid re-initializing
        try {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          (window as any).__AOS_NUXT_INITIALIZED = true;
        } catch (e) {}
      } catch (e) {
        // ignore if AOS not available
        // console.error('AOS init error', e)
      }
    };

    // Wait for Vue hydration to complete before initializing AOS
    // This prevents hydration mismatch warnings
    nuxtApp.hook("app:mounted", () => {
      // Use requestIdleCallback to reduce forced reflows
      // AOS reads layout properties (offsetHeight, offsetTop) which can cause reflows
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => init(), { timeout: 1000 });
      } else {
        setTimeout(init, 150);
      }
    });

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
    // provide via Nuxt's injection system
    nuxtApp.provide("AOS", AOS);

    // also attach to global/window so legacy scripts (public/js/*.js)
    // that reference a global AOS keep working
    try {
      // Vue app global property for components: this.$AOS
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      nuxtApp.vueApp.config.globalProperties.$AOS = AOS;
    } catch (e) {}

    // attach to window for non-module scripts
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (window as any).AOS = AOS;
    } catch (e) {}
  }
});

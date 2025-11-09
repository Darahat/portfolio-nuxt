import { nextTick } from 'vue';

// Prefer using the global AOS instance (exposed by the plugin) when available
const getAOS = () => {
  try {
    if (typeof window !== 'undefined' && window.AOS) return window.AOS;
  } catch (e) {}
  return null;
};

export const useAOS = () => {
  const initAOS = () => {
    if (import.meta.client) {
      const AOS = getAOS();
      if (AOS) {
        try {
          // If the Nuxt plugin already initialized AOS, prefer refresh to avoid duplicate init
          // eslint-disable-next-line no-underscore-dangle
          if (typeof window !== 'undefined' && (window).__AOS_NUXT_INITIALIZED) {
            if (typeof AOS.refresh === 'function') AOS.refresh();
            return;
          }

          if (typeof AOS.init === 'function') {
            AOS.init({
              duration: 1000,
              easing: 'ease',
              once: true,
              offset: 120,
              delay: 0,
              anchorPlacement: 'top-bottom',
            });
            // mark initialized so subsequent calls don't re-init
            try {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              (window).__AOS_NUXT_INITIALIZED = true;
            } catch (e) {}
          }
        } catch (e) {}
      }
    }
  };

  const refreshAOS = () => {
    if (import.meta.client) {
      const AOS = getAOS();
      if (AOS && typeof AOS.refresh === 'function') {
        AOS.refresh();
      }
    }
  };

  const initializeAOS = async () => {
    if (import.meta.client) {
      await nextTick();
      
      // Small delay to ensure all client-only components are rendered
      setTimeout(() => {
        initAOS();
        
        // Refresh AOS to detect all elements after initialization
        setTimeout(() => {
          refreshAOS();
        }, 100);
      }, 100);
    }
  };

  return {
    initAOS,
    refreshAOS,
    initializeAOS,
  };
};

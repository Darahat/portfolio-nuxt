import AOS from 'aos';
import { nextTick } from 'vue';

export const useAOS = () => {
  const initAOS = () => {
    if (import.meta.client) {
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        offset: 120,
        delay: 0,
        anchorPlacement: 'top-bottom',
      });
    }
  };

  const refreshAOS = () => {
    if (import.meta.client && AOS) {
      AOS.refresh();
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

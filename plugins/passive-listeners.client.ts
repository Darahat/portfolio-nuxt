export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    // Add passive event listeners for better scroll performance
    const addPassiveEventListeners = () => {
      // Override addEventListener to use passive for touch and wheel events
      const supportsPassive = (() => {
        let supported = false;
        try {
          const opts = Object.defineProperty({}, "passive", {
            get() {
              supported = true;
              return true;
            },
          });
          window.addEventListener("test", null as any, opts);
          window.removeEventListener("test", null as any, opts);
        } catch (e) {
          supported = false;
        }
        return supported;
      })();

      if (supportsPassive) {
        const originalAddEventListener = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function (
          type: string,
          listener: any,
          options?: any
        ) {
          const passiveEvents = [
            "touchstart",
            "touchmove",
            "wheel",
            "mousewheel",
          ];
          if (passiveEvents.includes(type) && typeof options !== "object") {
            options = { passive: true, capture: false };
          } else if (
            passiveEvents.includes(type) &&
            typeof options === "object" &&
            options.passive === undefined
          ) {
            options.passive = true;
          }
          return originalAddEventListener.call(this, type, listener, options);
        };
      }
    };

    addPassiveEventListeners();
  }
});

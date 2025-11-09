import { onMounted } from 'vue';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function ensureJQueryLoaded() {
  if (!window.$) {
    await loadScript('/js/plugins.js');
  }
}
 
function initKnob() {
  if (window.$ && window.$.fn.knob) {
    $('.knob').knob({
      draw: function () {
        $(this.i).val(this.cv + '%');
      },
    });
  }
}

function initAppear() {
  if (window.$ && window.$.fn.appear) {
    $('.knob').appear(function () {
      const el = $(this);
      const dataRel = el.attr('data-rel');
      el.animate(
        { value: dataRel },
        {
          duration: 2000,
          step: function () {
            el.val(Math.ceil(this.value)).trigger('change');
          },
        }
      );
    });
  }
}

export function useSkills() {
  onMounted(async () => {
    if (!import.meta.client) return;

    try {
      await ensureJQueryLoaded();
      await Promise.all([
        loadScript('/js/jquery-knob.js'),
        loadScript('/js/jquery-appear.js'),
      ]);
      initKnob();
      initAppear();
    } catch (error) {
      // Silently handle script loading errors in production
      if (import.meta.dev) {
        console.error('Failed to load skill scripts:', error);
      }
    }
  });
}

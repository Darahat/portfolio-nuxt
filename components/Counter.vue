<template>
  <span ref="elementToObserve"></span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  target: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 1000, // Default duration from FunFact.vue
  },
  delay: {
    type: Number,
    default: 10, // Default delay from the original plugin
  },
});

const elementToObserve = ref(null);
const animatedValue = ref(0);

let observer = null;
let animationFrameId = null;

const animateValue = () => {
  const startTime = performance.now();

  const run = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime < props.duration) {
      const progress = elapsedTime / props.duration;
      animatedValue.value = Math.floor(props.target * progress);
      animationFrameId = requestAnimationFrame(run);
    } else {
      animatedValue.value = props.target;
      // Ensure the final value is displayed in the element
      if (elementToObserve.value) {
        elementToObserve.value.textContent = props.target;
      }
    }
  };

  animationFrameId = requestAnimationFrame(run);
};

// Watch the animatedValue and update the DOM directly for performance
// This avoids Vue's reactivity overhead for rapid updates.
onMounted(() => {
  const unwatch = watch(animatedValue, (newValue) => {
    if (elementToObserve.value) {
      elementToObserve.value.textContent = newValue;
    }
  });

  // Clean up watcher
  onUnmounted(unwatch);
});


onMounted(() => {
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    animatedValue.value = props.target;
    return;
  }

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateValue();
        // Stop observing once triggered, mimicking triggerOnce: true
        if (elementToObserve.value) {
          observer.unobserve(elementToObserve.value);
        }
      }
    });
  };

  observer = new IntersectionObserver(observerCallback, {
    root: null, // relative to the viewport
    threshold: 0.1, // start when 10% of the element is visible
  });

  if (elementToObserve.value) {
    observer.observe(elementToObserve.value);
  }
});

onUnmounted(() => {
  if (observer && elementToObserve.value) {
    observer.unobserve(elementToObserve.value);
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

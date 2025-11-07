<template>
  <div v-show="showButton" id="scroll" class="scrollTop text-right">
    <a
      href="#home"
      class="theme-bg white-text text-center d-inline-block mr-10 transition5"
      @click.prevent="scrollToTop"
    >
      <span><i class="fal fa-angle-double-up" /></span>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>

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
import { onMounted, onUnmounted, ref } from "vue";

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

<style scoped>
/* Back To Top Component Styles */
#scroll {
  position: fixed;
  right: 0;
  bottom: 30px;
  z-index: 999;
}

#scroll a {
  font-size: 20px;
  width: 45px;
  height: 45px;
  line-height: 45px;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.3s ease-out;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background: var(--main-color, #25262f);
  margin-right: 10px;
}

#scroll a:hover,
#scroll a:focus {
  color: #fff;
  opacity: 0.9;
  transform: scale(1.1);
}

.theme-bg {
  background: var(--main-color, #25262f);
}

.white-text {
  color: #ffffff;
}

/* Smooth fade-in/out */
#scroll {
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
}

@media screen and (max-width: 767px) {
  #scroll a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
  }
}
</style>

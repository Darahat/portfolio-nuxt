<template>
  <div class="brand-area brand-height over-hidden">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <client-only>
            <template #placeholder>
              <div class="swiper-placeholder">Loading Brands...</div>
            </template>
            <swiper
              :modules="[Autoplay]"
              :slides-per-view="6"
              :space-between="30"
              :loop="true"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :breakpoints="{
                '480': { slidesPerView: 2, spaceBetween: 20 },
                '768': { slidesPerView: 3, spaceBetween: 30 },
                '1024': { slidesPerView: 4, spaceBetween: 40 },
                '1200': { slidesPerView: 6, spaceBetween: 50 },
              }"
              class="brand-active mt-70 mb-90"
            >
              <swiper-slide
                v-for="(brand, index) in brands"
                :key="index"
                class="d-inline-block position-relative over-hidden"
              >
                <a
                  class="single-brand pt-20 d-block text-center transition3"
                  href="#"
                >
                  <img
                    class="img"
                    :src="brand.image"
                    :alt="brand.name"
                    loading="lazy"
                  />
                </a>
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
      </div>
      <div class="theme-border-bottom" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import "swiper/css";

const brands = ref([
  {
    name: "RUBI",
    url: "https://www.rubi.com/en",
    image: "/images/brand/rubi-responsive-frontend-design-darahat.webp",
  },
  {
    name: "Zyco",
    url: "https://zyco.co/",
    image:
      "/images/brand/zyco-backend-portal-development-using-laravel-darahat.webp",
  },
  {
    name: "BAU",
    url: "https://bau.edu.bd",
    image:
      "/images/brand/bangladesh-agricultural-university-erp-website-flutter-android-app-design-development-darahat.webp",
  },
  {
    name: "Funush",
    url: "https://www.funush.com/",
    image:
      "/images/brand/funush-careerki-full-stack-development-vuejs-node-darahat.webp",
  },
  {
    name: "Otcantipiojos",
    url: "https://otcantipiojos.es/",
    image:
      "/images/brand/otcantipiojos-animated-ads-design-using-html-css-darahat.webp",
  },
  {
    name: "Network Tap",
    url: "https://thenetworktap.com/",
    image:
      "/images/brand/thenetworktap-digital-card-user-profile-frondend-development-darahat.webp",
  },
  {
    name: "ELP",
    url: "#",
    image:
      "/images/brand/e-learning-platform-frontend-development-darahat.webp",
  },
]);
</script>

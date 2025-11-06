<template>
  <div class="testimonial-area position-relative over-hidden">
    <div class="container">
      <div class="testimonial-bg section-bg pt-170 pb-170 position-relative">
        <div class="row align-items-start justify-content-center">
          <div class="col-xl-7 col-lg-7 col-md-12">
            <div class="position-relative">
              <div class="title">
                <span class="meta-text-color text-uppercase d-block mb-6"
                  >Testimonials</span
                >
                <h2 class="mb-20">What People Say</h2>
              </div>
            </div>

            <div class="testimonial-wrapper position-relative mt-40 pb-50">
              <div class="quit d-inline-block position-absolute left-0">
                <img class="theme-color" :src="testimonialIcon" alt="Quote" />
              </div>

              <client-only>
                <template #placeholder>
                  <div class="swiper-placeholder">Loading testimonials...</div>
                </template>
                <swiper
                  :modules="[Autoplay, Pagination]"
                  :slides-per-view="1"
                  :space-between="0"
                  :loop="true"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                  :pagination="{ clickable: true }"
                  class="testimonial-active pl-80 pr-90"
                >
                  <swiper-slide
                    v-for="(testimonial, index) in testimonials"
                    :key="index"
                    class="testimonial-content"
                  >
                    <div class="testi-info d-flex align-items-center mt-40">
                      <div class="testi-avatar mr-25">
                        <img
                          :src="testimonial.image"
                          :alt="`Testimonial ${index + 1}`"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
              </client-only>
            </div>
          </div>

          <div class="col-xl-5 col-lg-5 col-md-12 col-sm-11">
            <div
              class="testimonial-img position-relative z-index1"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <img
                class="border-radius10"
                :src="testimonialsImg"
                alt="Testimonials"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import testimonialIcon from "/images/testimonial/testimonial-icon.webp";
import testimonialsImg from "/images/testimonial/testimonials-img.webp";

// Correctly reference images from the public directory
const testimonials = ref([
  { image: "/images/testimonial/fiverr1.webp" },
  { image: "/images/testimonial/fiverr2.webp" },
  { image: "/images/testimonial/fiverr3.webp" },
  { image: "/images/testimonial/fiverr4.webp" },
  { image: "/images/testimonial/fiverr5.webp" },
  { image: "/images/testimonial/fiverr6.webp" },
  { image: "/images/testimonial/fiverr7.webp" },
  { image: "/images/testimonial/fiverr8.webp" },
  { image: "/images/testimonial/fiverr9.webp" },
  { image: "/images/testimonial/fiverr10.webp" },
]);
</script>

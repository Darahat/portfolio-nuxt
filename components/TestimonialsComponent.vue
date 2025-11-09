<template>
  <div class="testimonial-area position-relative over-hidden">
    <div class="container">
      <div class="testimonial-bg section-bg pt-170 pb-170 position-relative">
        <div class="row align-items-start justify-content-center">
          <!-- LEFT SECTION -->
          <div class="col-xl-7 col-lg-7 col-md-12">
            <div class="position-relative">
              <div class="title">
                <span class="meta-text-color text-uppercase d-block mb-6">
                  Testimonials
                </span>
                <h2 class="mb-20">What People Say</h2>
              </div>
            </div>

            <div class="testimonial-wrapper position-relative mt-40 pb-50">
              <div class="quit d-inline-block position-absolute left-0">
                <img
                  class="theme-color"
                  :src="testimonialIcon"
                  alt="Quotation icon"
                  width="48"
                  height="48"
                  srcset="/images/testimonial/testimonial-icon.webp 48w"
                  sizes="48px"
                  loading="lazy"
                />
              </div>

              <ClientOnly>
                <template #placeholder>
                  <div class="swiper-placeholder">Loading testimonials...</div>
                </template>

                <Swiper
                  :modules="[Autoplay, Pagination]"
                  :slides-per-view="1"
                  :space-between="30"
                  :loop="true"
                  :autoplay="{ delay: 2500, disableOnInteraction: false }"
                  :pagination="{ clickable: true }"
                  class="testimonial-active swiper-container pl-80 pr-90"
                >
                  <SwiperSlide
                    v-for="(testimonial, index) in testimonials"
                    :key="index"
                    class="testimonial-slide swiper-slide"
                    itemscope
                    itemtype="https://schema.org/Review"
                  >
                    <meta
                      itemprop="itemReviewed"
                      content="Freelance Web Development Services"
                    />

                    <div class="testi-item text-center">
                      <div class="testi-avatar mb-4">
                        <img
                          :src="testimonial.image"
                          :alt="`${testimonial.clientName} - ${testimonial.workTitle}`"
                          width="80"
                          height="80"
                          srcset="/images/testimonial/testimonial-img.webp 80w"
                          sizes="80px"
                          loading="lazy"
                          itemprop="image"
                        />
                      </div>

                      <p class="testi-text" itemprop="reviewBody">
                        {{ testimonial.review }}
                      </p>

                      <div
                        class="testi-author mt-3"
                        itemprop="author"
                        itemscope
                        itemtype="https://schema.org/Person"
                      >
                        <span
                          class="d-block fw-semibold text-capitalize"
                          itemprop="name"
                        >
                          {{ testimonial.clientName }}
                        </span>
                        <small class="d-block text-muted" itemprop="jobTitle">
                          {{ testimonial.workTitle }}
                        </small>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </ClientOnly>
            </div>
          </div>

          <!-- RIGHT SECTION IMAGE -->
          <div class="col-xl-5 col-lg-5 col-md-12 col-sm-11">
            <div
              class="testimonial-img position-relative z-index1"
              data-aos="fade-left"
              data-aos-duration="750"
            >
              <img
                class="border-radius10"
                :src="testimonialsImg"
                alt="Happy clients sharing testimonials"
                width="320"
                height="320"
                srcset="/images/testimonial/testimonial-img.webp 320w"
                sizes="320px"
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
import { useHead } from "#imports";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "~/data/testimonials.js";
import testimonialIcon from "/images/testimonial/testimonial-icon.webp";
import testimonialsImg from "/images/testimonial/testimonial-img.webp";

/* ✅ Generate structured data dynamically */
const schema = JSON.stringify(
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: testimonials.map((t, index) => ({
      "@type": "Review",
      position: index + 1,
      author: { "@type": "Person", name: t.clientName },
      itemReviewed: {
        "@type": "Service",
        name: "Web Development & Design Services",
      },
      reviewBody: t.review,
      image: t.image,
    })),
  },
  null,
  2
);

/* ✅ Inject schema safely into <head> */
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: schema,
    },
  ],
  // prevent Nuxt sanitizing JSON-LD
  __dangerouslyDisableSanitizersByTagID: {
    "ld-testimonials": ["innerHTML"],
  },
});
</script>
<style scoped>
/* 🧩 Fix Swiper layout issues */
.swiper-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.testi-item {
  max-width: 500px;
  margin: 0 auto;
}
</style>

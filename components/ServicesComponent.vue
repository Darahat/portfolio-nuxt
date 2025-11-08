<template>
  <div id="service" class="service-area theme-bg over-hidden pt-160 pb-145">
    <div class="service-wrapper position-relative">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-xl-12">
            <div class="title text-center">
              <span class="text-white text-uppercase d-block mb-6"
                >Service</span
              >
              <h2 class="text-white">What I offer</h2>
            </div>
          </div>
        </div>

        <div class="row service-wrappers mt-80">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex">
            <div
              class="single-service shadow-hover transition3 white-bg border-radius10 pl-50 pr-50 pt-65 pb-55 mb-25 w-100 d-flex flex-column"
            >
              <div class="row flex-grow-1">
                <div
                  class="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-4 text-lg-center d-flex align-items-start"
                >
                  <div
                    class="service-ser-icon d-inline-block text-center position-relative mb-15 mx-auto"
                  >
                    <img
                      class="position-relative z-index1"
                      :src="serIcon1"
                      alt="Web Development"
                      loading="lazy"
                    />
                    <div
                      class="service-small-circle service-circle rounded-circle transition5 secondary-bg d-inline-block position-absolute"
                    />
                    <div
                      class="service-large-circle service-circle rounded-circle transition5 secondary-bg d-inline-block position-absolute"
                    />
                  </div>
                </div>
                <div
                  class="col-xl-9 col-lg-9 col-md-12 d-flex align-items-center"
                >
                  <div class="service-text d-inline-block ml-xl-2">
                    <h3 class="mb-15">Web Development</h3>
                    <p class="mb-0">
                      In web development, I offer tailored solutions utilizing
                      HTML, CSS, JavaScript, PHP and frameworks like Vue.js,
                      Laravel & CodeIgniter. From sleek websites to interactive
                      applications, I prioritize user experience and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex">
            <div
              class="single-service shadow-hover transition3 white-bg border-radius10 pl-50 pr-50 pt-65 pb-55 mb-25 w-100 d-flex flex-column"
            >
              <div class="row flex-grow-1">
                <div
                  class="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-4 text-lg-center d-flex align-items-start"
                >
                  <div
                    class="service-ser-icon d-inline-block text-center position-relative mb-15 mx-auto"
                  >
                    <img
                      class="position-relative z-index1"
                      :src="serIcon2"
                      alt="App Development"
                      loading="lazy"
                    />
                    <div
                      class="service-small-circle service-circle rounded-circle transition5 secondary-bg d-inline-block position-absolute"
                    />
                    <div
                      class="service-large-circle service-circle rounded-circle transition5 secondary-bg d-inline-block position-absolute"
                    />
                  </div>
                </div>
                <div
                  class="col-xl-9 col-lg-9 col-md-12 d-flex align-items-center"
                >
                  <div class="service-text d-inline-block ml-xl-2">
                    <h3 class="mb-15">App Development</h3>
                    <p class="mb-0">
                      In Flutter app development, I offer sleek and functional
                      cross-platform mobile solutions for both Android and iOS.
                      With a focus on performance and user experience, I ensure
                      your app stands out and succeeds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import serIcon2 from "/images/icon/flutter-app-development-android-and-ios-focus-on-performance-user-experience-icon-darahat.webp";
import serIcon1 from "/images/icon/web-development-with-html-css-javascript-php-laravel-vuejs-coelgniter-icon-darahat.webp";
</script>

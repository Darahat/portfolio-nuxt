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
                      alt="Web Development Icon"
                      width="64"
                      height="64"
                      srcset="
                        /images/icon/web-development-with-html-css-javascript-php-laravel-vuejs-coelgniter-icon-darahat.webp 64w
                      "
                      sizes="64px"
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
                      alt="Flutter App Development Icon"
                      width="64"
                      height="64"
                      srcset="
                        /images/icon/flutter-app-development-android-and-ios-focus-on-performance-user-experience-icon-darahat.webp 64w
                      "
                      sizes="64px"
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

<style scoped>
/* Services Component Styles */
.service-area {
  overflow: hidden;
  background: var(--main-color, #25262f);
}

.theme-bg {
  background: var(--main-color, #25262f);
}

.service-wrapper {
  position: relative;
}

.title {
  text-align: center;
  margin-bottom: 50px;
}

.title h2 {
  font-size: 48px;
  color: #ffffff;
}

.title span {
  color: #ffffff;
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  letter-spacing: 2px;
}

.single-service {
  box-shadow: 0px 5px 90px 0px rgba(2, 24, 93, 0.08);
  background: #ffffff;
  border-radius: 10px;
  padding: 65px 50px 55px 50px;
  margin-bottom: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.single-service:hover {
  box-shadow: 0px 5px 90px 0px rgba(2, 24, 93, 0.15);
}

.service-ser-icon {
  display: inline-block;
  text-align: center;
  position: relative;
  margin-bottom: 15px;
}

.service-ser-icon img {
  position: relative;
  z-index: 1;
  width: 64px;
  height: 64px;
}

.service-circle {
  border-radius: 50%;
  transition: all 0.5s ease;
  background: var(--secondary-color, #d9e1e2);
  display: inline-block;
  position: absolute;
}

.service-small-circle {
  width: 36px;
  height: 36px;
  top: -11px;
  left: -14px;
  background: #f1f2f6;
}

.service-large-circle {
  width: 58px;
  height: 58px;
  bottom: -12px;
  right: -12px;
  background: #f1f2f6;
}

.single-service:hover .service-small-circle {
  top: 35px;
  left: 48px;
}

.single-service:hover .service-large-circle {
  bottom: 30px;
  right: 32px;
}

.service-text h3 {
  font-size: 30px;
  margin-bottom: 15px;
}

.service-text p {
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.7;
}

/* Responsive */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .single-service {
    padding: 30px 20px 10px 20px;
  }
  .service-text h3 {
    font-size: 25px;
  }
}

@media screen and (max-width: 991px) {
  .single-service {
    padding: 40px 30px;
  }
  .title h2 {
    font-size: 36px;
  }
}

@media screen and (max-width: 767px) {
  .single-service {
    padding: 30px 20px;
  }
  .service-text h3 {
    font-size: 24px;
  }
}
</style>

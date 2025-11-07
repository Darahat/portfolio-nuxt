<template>
  <client-only>
    <div id="about" class="about-area over-hidden">
      <div
        class="about-content-wrapper about-margin mt-170 mb-110 position-relative"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-6 col-md-8 offset-md-0 col-sm-10 col-10">
              <div class="about-img-wrapper position-relative mb-90">
                <div
                  class="about-img position-relative z-index11"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="50"
                >
                  <div
                    class="about-img-over pl-50 transition5 d-inline-block position-relative"
                  >
                    <div
                      class="position-relative z-index11"
                      data-tilt
                      data-tilt-max="10"
                    >
                      <img
                        class="border-radius10 position-relative z-index11"
                        loading="lazy"
                        src="/images/about/about-img.webp"
                        alt="Didarul Alam Rahat"
                      />
                    </div>
                    <div
                      class="about-shape1 position-absolute"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    />
                    <div
                      class="about-shape2 position-absolute z-index11"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    />
                    <div
                      class="about-download-wrapper position-absolute z-index11"
                    >
                      <img
                        class="download-bg rotate-animation d-inline-block"
                        src="/images/about/download-bg.webp"
                        alt="Download CV"
                        loading="lazy"
                      />
                      <a
                        href="/Files/2yrs_rahat.pdf"
                        download
                        class="cv-download-link transition5"
                      >
                        <img
                          class="d-icon d-inline-block position-absolute"
                          src="/images/icon/download-icon.webp"
                          alt="Download"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="about-content position-relative mb-50">
                <div class="position-relative">
                  <div class="title">
                    <span
                      class="meta-text-color text-uppercase d-block mb-1 mt--5"
                      >About Me</span
                    >
                    <h2 class="mb-30">
                      Hi, I'm Rahat — Senior Full-Stack Developer specialized in
                      Flutter and Laravel.
                    </h2>
                  </div>
                </div>
                <p class="mb-25">
                  I'm <strong>Didarul Alam Rahat</strong>, a
                  <strong>Senior Software Engineer</strong> based in Mymensingh,
                  Bangladesh. With over 7 years of experience in
                  <strong>mobile and web application development</strong>, I
                  specialize in <strong>Flutter (Android & iOS)</strong> and
                  <strong>Laravel</strong> frameworks.
                </p>
                <p class="mb-25">
                  I'm passionate about
                  <strong
                    >clean code, project architecture, planning, and project
                    management</strong
                  >. I believe great software starts with a strong foundation —
                  combining technical precision with thoughtful design.
                </p>

                <div class="about-info-wrapper pt-25 pb-20 mt-25">
                  <div class="row">
                    <div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                      <ul class="about-info">
                        <li class="d-inline-block pr-30">
                          <p class="jostMedium-font-family mb-6">Name</p>
                          <p class="jostMedium-font-family mb-6">Age</p>
                          <p class="jostMedium-font-family mb-6">Occupation</p>
                        </li>
                        <li class="d-inline-block">
                          <p class="mb-6">Didarul Alam Rahat</p>
                          <p class="mb-6">31 Years</p>
                          <p class="mb-6">Senior Software Engineer</p>
                        </li>
                      </ul>
                    </div>
                    <div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                      <ul class="about-info">
                        <li class="d-inline-block pr-30">
                          <p class="jostMedium-font-family mb-6">Phone</p>
                          <p class="jostMedium-font-family mb-6">Email</p>
                          <p class="jostMedium-font-family mb-6">Nationality</p>
                        </li>
                        <li class="d-inline-block">
                          <p class="mb-6">
                            <a href="tel:+8801765849345">+8801765849345</a>
                          </p>
                          <p class="mb-6">
                            <a href="mailto:darahat42@gmail.com"
                              >darahat42@gmail.com</a
                            >
                          </p>
                          <p class="mb-6">Bangladeshi</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  class="about-footer-content d-sm-flex align-items-center mt-lg-2 mt-sm-4 mt-3"
                >
                  <a href="#contact" class="btn btn-primary"
                    >Hire Me for Your Next Project</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // if (import.meta.client && window.VanillaTilt) {
  //   const elements = document.querySelectorAll("[data-tilt]");
  //   VanillaTilt.init(elements, { max: 10, speed: 400 });
  // }
});
</script>

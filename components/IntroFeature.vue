<template>
  <div class="intro-feature-area over-hidden position-relative section-bg">
    <div class="container">
      <div
        class="row single-intro-feature-wrapper justify-content-center pt-170 pb-140"
      >
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-9 col-11">
          <div
            class="single-intro-feature-content white-bg border-radius10 transition5 mb-30"
            data-tilt
            data-tilt-max="10"
          >
            <div class="intro-ft-icon d-inline-block mb-30 transition5">
              <img
                src="/images/icon/dedicated-senior-full-stack-developer-icon-darahat.webp"
                alt="Dedication"
                loading="lazy"
              />
            </div>
            <div class="intro-feature-text">
              <h4 class="mb-22">Dedication</h4>
              <p>
                As a Senior Full-Stack Developer, I am deeply committed to
                writing clean, maintainable code and delivering scalable Flutter
                and Laravel applications that stand the test of time.
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-9 col-11">
          <div
            class="single-intro-feature-content white-bg border-radius10 transition5 mb-30 intro-feature-margin mt-60"
            data-tilt
            data-tilt-max="10"
          >
            <div class="intro-ft-icon d-inline-block mb-30 transition5">
              <img
                src="/images/icon/focused-software-architecture-planning-reusable-component-smart-work-darahat.webp"
                alt="Smart Work"
                loading="lazy"
              />
            </div>
            <div class="intro-feature-text">
              <h4 class="mb-22">Smart Work</h4>
              <p>
                I focus on architectural planning, reusable components, and
                automation — blending smart development practices with Flutter
                and Laravel to achieve maximum efficiency and code quality.
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-9 col-11">
          <div
            class="single-intro-feature-content white-bg border-radius10 transition5 mb-30"
            data-tilt
            data-tilt-max="10"
          >
            <div class="intro-ft-icon d-inline-block mb-30 transition5">
              <img
                src="/images/icon/lead-collaborate-cross-functional-team-managing-project-agile-dev-collaboration-darahat.webp"
                alt="Collaboration"
                loading="lazy"
              />
            </div>
            <div class="intro-feature-text">
              <h4 class="mb-22">Collaboration</h4>
              <p>
                I lead and collaborate effectively with cross-functional teams,
                managing project timelines, architecture discussions, and agile
                development processes to ensure successful delivery.
              </p>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-9 col-11">
          <div
            class="single-intro-feature-content white-bg border-radius10 transition5 mb-30 intro-feature-margin mt-60"
            data-tilt
            data-tilt-max="10"
          >
            <div class="intro-ft-icon d-inline-block mb-30 transition5">
              <img
                src="/images/icon/laravel-tailwindcss-vuejs-javascript-mysql-rest-api-flutter-aws-project-management-technology-darahat.webp"
                alt="Technology"
                loading="lazy"
              />
            </div>
            <div class="intro-feature-text">
              <h4 class="mb-22">Technology</h4>
              <p>
                I specialize in Flutter (Android & iOS), Laravel, Vue.js,
                Tailwind CSS, JavaScript, MySQL, and REST APIs — focusing on
                clean architecture, maintainable systems, and effective project
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  if (import.meta.client && window.VanillaTilt) {
    const elements = document.querySelectorAll("[data-tilt]");
    VanillaTilt.init(elements, { max: 10, speed: 400 });
  }
});
</script>

<template>
  <div class="intro-feature-area over-hidden position-relative section-bg">
    <div class="container">
      <div
        class="row single-intro-feature-wrapper justify-content-center pt-70 pb-40"
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
import VanillaTilt from "vanilla-tilt";
import { onMounted } from "vue";

onMounted(() => {
  if (import.meta.client) {
    const elements = document.querySelectorAll("[data-tilt]");
    VanillaTilt.init(elements, { max: 10, speed: 400 });
  }
});
</script>

<style scoped>
/* Intro Feature Component Styles */
.intro-feature-area {
  overflow: hidden;
  position: relative;
  background: var(--section-bg, #f3f6f8);
}

.section-bg {
  background: var(--section-bg, #f3f6f8);
}

.single-intro-feature-wrapper {
  padding-top: 170px;
  padding-bottom: 140px;
}

.single-intro-feature-content {
  background: #ffffff;
  border-radius: 10px;
  padding: 55px 48px 35px 48px;
  transition: all 0.5s ease;
  box-shadow: 0px 5px 60px 0px rgba(2, 24, 93, 0.08);
  margin-bottom: 30px;
}

.single-intro-feature-content:hover {
  box-shadow: 0px 5px 60px 0px rgba(2, 24, 93, 0.15);
}

.white-bg {
  background: #ffffff;
}

.border-radius10 {
  border-radius: 10px;
}

.intro-feature-margin {
  margin-top: 60px;
}

.intro-ft-icon {
  display: inline-block;
  margin-bottom: 30px;
  transition: all 0.5s ease;
}

.intro-ft-icon img {
  max-width: 64px;
  max-height: 64px;
}

.intro-feature-text h4 {
  font-size: 24px;
  margin-bottom: 22px;
}

.intro-feature-text p {
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.7;
}

/* Responsive */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .single-intro-feature-content {
    padding: 30px 20px 10px 20px;
  }
  .intro-ft-icon img {
    max-width: 40px;
    max-height: 40px;
  }
  .intro-ft-icon {
    margin-bottom: 22px;
  }
  .single-intro-feature-content h4 {
    margin-bottom: 15px;
  }
  .single-intro-feature-content p {
    font-size: 15px;
  }
}

@media screen and (max-width: 991px) {
  .single-intro-feature-wrapper {
    padding-top: 100px;
    padding-bottom: 80px;
  }
  .single-intro-feature-content {
    padding: 40px 30px;
  }
  .intro-feature-margin {
    margin-top: 0;
  }
}

@media screen and (max-width: 767px) {
  .single-intro-feature-wrapper {
    padding-top: 80px;
    padding-bottom: 60px;
  }
  .single-intro-feature-content {
    padding: 30px 20px;
  }
  .intro-feature-text h4 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .intro-ft-icon img {
    max-width: 48px;
    max-height: 48px;
  }
}

@media screen and (max-width: 575px) {
  .single-intro-feature-wrapper {
    padding-top: 60px;
    padding-bottom: 40px;
  }
  .intro-feature-text h4 {
    font-size: 18px;
  }
  .intro-feature-text p {
    font-size: 15px;
  }
}
</style>

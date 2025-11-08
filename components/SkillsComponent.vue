<template>
  <div
    id="skills"
    class="skill-area over-hidden position-relative pt-130 pb-110"
  >
    <div class="marquee-w mb-125">
      <div class="marquee">
        <span class="pl-4"
          >Laravel + Vue.js Web Developer from Bangladesh *</span
        >
        <span class="pl-4">Flutter App Developer from Bangladesh *</span>
      </div>
      <div class="marquee marquee2 pb-1">
        <span class="pl-4"
          >I'm Open for new projects * Let's Work Together *</span
        >
        <span class="pl-4"
          >I'm Open for new projects * Let's Work Together *</span
        >
      </div>
    </div>

    <div class="container">
      <div class="row align-items-start justify-content-center">
        <div class="col-xl-5 col-lg-5 col-md-12">
          <div class="position-relative">
            <div class="title mb-50">
              <span class="meta-text-color text-uppercase d-block mb-6"
                >My Skill</span
              >
              <h2 class="mb-25">Growing Over Times</h2>
              <p>
                My coding journey began at university, where I delved into Java
                and started building projects. Intrigued by web development, I
                took my first steps with HTML, CSS, JavaScript, and Bootstrap.
                In 2018, I embraced Vue.js, collaborating on several
                applications. Subsequently, I expanded my skills into PHP
                Laravel for backend development and Flutter for app development.
              </p>
            </div>
          </div>
        </div>

        <div
          class="col-xl-6 col-lg-7 offset-xl-1 col-md-12"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div class="row justify-content-center mt-10">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-9 mb-30">
              <div class="single-skill mb-15 text-center text-lg-left">
                <div class="progress-circular over-hidden">
                  <input
                    type="text"
                    class="knob"
                    value="0"
                    data-rel="80"
                    data-width="190"
                    data-height="190"
                    data-bgcolor="#f1f2f6"
                    data-fgcolor="#9b9db1"
                    data-thickness=".06"
                    readonly
                  />
                  <h4 class="mt-15 text-center">Front-End Development</h4>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-9 mb-30">
              <div class="single-skill text-center">
                <div class="progress-circular over-hidden">
                  <input
                    type="text"
                    class="knob"
                    value="0"
                    data-rel="95"
                    data-width="190"
                    data-height="190"
                    data-bgcolor="#f1f2f6"
                    data-fgcolor="#9b9db1"
                    data-thickness=".06"
                    readonly
                  />
                  <h4 class="mt-15 text-center">Back-End Development</h4>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-9 mb-30">
              <div class="single-skill text-center text-lg-right">
                <div class="progress-circular over-hidden">
                  <input
                    type="text"
                    class="knob"
                    value="0"
                    data-rel="90"
                    data-width="190"
                    data-height="190"
                    data-bgcolor="#f1f2f6"
                    data-fgcolor="#9b9db1"
                    data-thickness=".06"
                    readonly
                  />
                  <h4 class="mt-15 text-center">Database</h4>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-9 mb-30">
              <div class="single-skill mb-15 text-center text-lg-left">
                <div class="progress-circular over-hidden">
                  <input
                    type="text"
                    class="knob"
                    value="0"
                    data-rel="75"
                    data-width="190"
                    data-height="190"
                    data-bgcolor="#f1f2f6"
                    data-fgcolor="#9b9db1"
                    data-thickness=".06"
                    readonly
                  />
                  <h4 class="mt-15 text-center">DevOps</h4>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-9 mb-30">
              <div class="single-skill text-center">
                <div class="progress-circular over-hidden">
                  <input
                    type="text"
                    class="knob"
                    value="0"
                    data-rel="75"
                    data-width="190"
                    data-height="190"
                    data-bgcolor="#f1f2f6"
                    data-fgcolor="#9b9db1"
                    data-thickness=".06"
                    readonly
                  />
                  <h4 class="mt-15 text-center">Flutter App Development</h4>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-9 mb-30">
              <div class="single-skill text-center text-lg-right">
                <div class="progress-circular over-hidden">
                  <input
                    type="text"
                    class="knob"
                    value="0"
                    data-rel="70"
                    data-width="190"
                    data-height="190"
                    data-bgcolor="#f1f2f6"
                    data-fgcolor="#9b9db1"
                    data-thickness=".06"
                    readonly
                  />
                  <h4 class="mt-15 text-center">Project Management</h4>
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
import { useSkills } from "~/composables/useSkills";
useSkills();
</script>

<template>
  <div
    id="skills"
    class="skill-area over-hidden position-relative pt-130 pb-110"
  >
    <!-- Marquee Section -->
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
        <!-- Text Section -->
        <div class="col-xl-5 col-lg-5 col-md-12">
          <div class="title mb-50">
            <span class="meta-text-color text-uppercase d-block mb-6"
              >My Skill</span
            >
            <h2 class="mb-25">Growing Over Time</h2>
            <p>
              My coding journey began at university, where I delved into Java
              and started building projects. Intrigued by web development, I
              took my first steps with HTML, CSS, JavaScript, and Bootstrap. In
              2018, I embraced Vue.js, collaborating on several applications.
              Subsequently, I expanded my skills into PHP Laravel for backend
              development and Flutter for app development.
            </p>
          </div>
        </div>

        <!-- Circular Skills -->
        <div
          class="col-xl-6 col-lg-7 offset-xl-1 col-md-12 col-sm-12"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div class="row justify-content-center mt-10">
            <SkillCircle title="Front-End Development" :percentage="80" />
            <SkillCircle title="Back-End Development" :percentage="95" />
            <SkillCircle title="Database" :percentage="90" />
            <SkillCircle title="DevOps" :percentage="75" />
            <SkillCircle title="Flutter App Development" :percentage="75" />
            <SkillCircle title="Project Management" :percentage="70" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SkillCircle from "~/components/SkillCircle.vue";
</script>

<style scoped>
/* Marquee Styles */
.marquee-w {
  overflow: hidden;
  margin-bottom: 125px;
  position: relative;
}

.marquee {
  display: flex;
  white-space: nowrap;
  animation: marquee-left 20s linear infinite;
  margin: auto;
}

.marquee2 {
  display: flex;
  white-space: nowrap;
  animation: marquee-right 20s linear infinite;
}

.marquee span {
  font-size: 96px;
  font-weight: 600;
  color: #000000;
  padding-left: 16px;
  text-transform: uppercase;
  flex-shrink: 0;
}

.marquee2 span {
  -webkit-text-stroke: 0.1px #7c7b7b;

  -webkit-text-fill-color: transparent;
  -webkit-animation: marquee2 20s linear infinite;
  text-transform: uppercase;
}

/* Keyframes for moving left */
@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Keyframes for moving right */
@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Skill Area Styles */
.skill-area {
  overflow: hidden;
  position: relative;
}

.row.justify-content-center {
  flex-wrap: wrap;
}

/* Responsive Marquee */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .marquee span {
    font-size: 75px;
  }
}

@media screen and (max-width: 991px) {
  .marquee span {
    font-size: 60px;
  }
  .marquee-w {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 767px) {
  .marquee span {
    font-size: 40px;
  }
}

@media screen and (max-width: 575px) {
  .marquee span {
    font-size: 28px;
  }
}
</style>

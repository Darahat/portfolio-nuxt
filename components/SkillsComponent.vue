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
/* Your previous styles remain unchanged */
/* Ensure skill circles wrap and don't squeeze */
.skill-area {
  overflow: hidden;
  position: relative;
}
.row.justify-content-center {
  flex-wrap: wrap;
}
.marquee-w {
  overflow: hidden;
  margin-bottom: 125px;
}
.marquee {
  display: flex;
  animation: marquee 20s linear infinite;
  white-space: nowrap;
}
.marquee span {
  font-size: 90px;
  font-weight: 600;
  color: #f3f6f8;
  padding-left: 16px;
}
.marquee2 {
  animation-direction: reverse;
  padding-bottom: 4px;
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

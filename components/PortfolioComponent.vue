<template>
  <div id="work" class="portfolio-area over-hidden pb-165">
    <div class="marquee-w mb-125">
      <div class="marquee">
        <span class="pl-4">Full Stack Web Developer*</span>
        <span class="pl-4">Flutter App Developer</span>
      </div>
      <div class="marquee marquee2 pb-1">
        <span>I'm Open for new projects * Let's Work Together.</span>
        <span>I'm Open for new projects * Let's Work Together.</span>
      </div>
    </div>

    <div class="portfolio-wrapper position-relative mt--5">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="title text-center">
              <span class="meta-text-color text-uppercase d-block mb-6"
                >Portfolio</span
              >
              <h2>My Recent Works</h2>
            </div>
          </div>
        </div>

        <div class="row portfolio mt-80">
          <div v-for="(project, index) in projects" :key="index" class="col-12">
            <div
              class="row single-portfolio position-relative theme-border-top align-items-center"
              :class="project.class"
            >
              <div class="col-xl-2 col-lg-2 col-md-7">
                <div class="port-category">
                  <span class="meta-text-color text-uppercase">{{
                    project.category
                  }}</span>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-6 pl-lg-0">
                <h3>{{ project.title }}</h3>
              </div>
              <div
                class="col-xl-5 col-lg-5 col-md-6 d-flex justify-content-end align-items-center"
              >
                <img
                  class="port-img position-absolute left-0 ml-xl-3 transition5"
                  :src="project.image"
                  :alt="project.title"
                  loading="lazy"
                />
                <div
                  class="port-content text-center transition5 z-index11"
                  @click="openModal(project.modalId)"
                >
                  <span class="d-inline-block"><i class="far fa-plus" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PortfolioModals :active-modal="activeModal" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeModal = ref("");

const projects = [
  {
    category: "SensorLab",
    title: "Mobile Sensor Toolkit & Tools",
    image: "/images/portfolio/port-img6.webp",
    modalId: "sensorlab",
    class: "",
  },
  {
    category: "Flutter Mobile App",
    title: "Flutter Mobile App for Bangladesh Agricultural University(BAU)",
    image: "/images/portfolio/port-img4.webp",
    modalId: "bau",
    class: "theme-border-bottom",
  },
  {
    category: "Smart Contract",
    title: "Stake Hive DeFi DApp",
    image: "/images/portfolio/port-img5.webp",
    modalId: "stakehive",
    class: "",
  },
  {
    category: "Front End Development",
    title: "Front End Development for RUBI",
    image: "/images/portfolio/port-img1.webp",
    modalId: "rubi",
    class: "",
  },
  {
    category: "Front End Development",
    title: "Website Development for The Network Tap Company",
    image: "/images/portfolio/port-img2.webp",
    modalId: "networktap",
    class: "",
  },
];

const openModal = (modalId) => {
  activeModal.value = modalId;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  activeModal.value = "";
  document.body.style.overflow = "";
};
</script>

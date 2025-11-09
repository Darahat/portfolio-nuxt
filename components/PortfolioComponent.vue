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
                  width="400"
                  height="250"
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
    image:
      "/images/portfolio/sensorlab-flutter-android-app-development-darahat.webp",
    modalId: "sensorlab",
    class: "",
  },
  {
    category: "Flutter Mobile App",
    title: "Flutter Mobile App for Bangladesh Agricultural University(BAU)",
    image:
      "/images/portfolio/bau-e-diary-flutter-android-app-development-for-bangladesh-agricultural-university-darahat.webp",
    modalId: "bau",
    class: "theme-border-bottom",
  },
  {
    category: "Smart Contract",
    title: "Stake Hive DeFi DApp",
    image:
      "/images/portfolio/decentralized-stacking-platform-web3-app-stackhive-using-solidigy-darahat.webp",
    modalId: "stakehive",
    class: "",
  },
  {
    category: "Front End Development",
    title: "Front End Development for RUBI",
    image:
      "/images/portfolio/rubi-frontend-development-using-tailwindcss-vuejs-darahat.webp",
    modalId: "rubi",
    class: "",
  },
  {
    category: "Front End Development",
    title: "Website Development for The Network Tap Company",
    image:
      "/images/portfolio/the-network-tap-frontend-development-digital-card-and-user-profile-darahat.webp",
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

/* Portfolio Component Styles */
.portfolio-area {
  overflow: hidden;
}

.portfolio-wrapper {
  position: relative;
}

.title {
  text-align: center;
  margin-bottom: 50px;
}

.title h2 {
  font-size: 48px;
}

.title span {
  color: var(--meta-text-color, #000000);
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  letter-spacing: 2px;
}

.single-portfolio {
  padding-top: 48px;
  padding-bottom: 38px;
  position: relative;
  border-top: 1px solid var(--main-border, #bcc7d3);
  transition: all 0.3s ease;
}

.theme-border-bottom {
  border-bottom: 1px solid var(--main-border, #bcc7d3);
}

.port-category span {
  color: var(--meta-text-color, #000000);
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
}

.single-portfolio h3 {
  font-size: 48px;
  line-height: 1.2;
  margin: 0;
}

.port-img {
  opacity: 0;
  visibility: hidden;
  margin-top: -12px;
  z-index: 1;
  border-radius: 10px;
  transition: all 0.5s ease;
  width: 400px;
  height: 250px;
  object-fit: cover;
}

.single-portfolio:hover .port-img {
  opacity: 1;
  visibility: visible;
  transform: rotate(-12deg);
}

.port-content {
  font-size: 25px;
  cursor: pointer;
  color: var(--main-color, #25262f);
  border: 1px solid var(--secondary-color, #d9e1e2);
  width: 95px;
  height: 95px;
  line-height: 95px;
  border-radius: 50%;
  text-align: center;
  transition: all 0.3s ease;
  z-index: 11;
}

.port-content:hover {
  background: var(--main-color, #25262f);
  border: 1px solid var(--main-color, #25262f);
}

.port-content:hover span {
  color: var(--primary-color, #ffffff);
}

/* Responsive */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .single-portfolio h3 {
    font-size: 36px;
  }
  .port-content {
    font-size: 22px;
    width: 75px;
    height: 75px;
    line-height: 75px;
  }
  .marquee span {
    font-size: 75px;
  }
}

@media screen and (max-width: 991px) {
  .single-portfolio h3 {
    font-size: 28px;
  }
  .port-img {
    width: 300px;
    height: 200px;
  }
  .marquee span {
    font-size: 60px;
  }
  .marquee-w {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 767px) {
  .single-portfolio h3 {
    font-size: 24px;
  }
  .port-content {
    width: 70px;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
  }
  .port-img {
    width: 250px;
    height: 150px;
  }
  .marquee span {
    font-size: 40px;
  }
}

@media screen and (max-width: 575px) {
  .single-portfolio {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .single-portfolio h3 {
    font-size: 20px;
  }
  .title h2 {
    font-size: 32px;
  }
  .marquee span {
    font-size: 28px;
  }
}
</style>

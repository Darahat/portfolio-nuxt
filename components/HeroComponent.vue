<template>
  <div id="home" class="slider-area slider-bg-color over-hidden">
    <div
      class="single-slider slider-height over-hidden position-relative xxl-device-width bg-cover no-repeat"
      :style="{ backgroundImage: 'url(/images/slider/slider-bg.webp)' }"
    >
      <div id="scene" class="parallax position-absolute w-100 h-100 z-index1">
        <img
          data-depth="0.20"
          class="hero-shape hero-shape1 position-absolute d-none d-lg-inline-block"
          src="/images/shape/shape1.webp"
          alt="Shape 1"
        />
        <img
          data-depth="0.15"
          class="hero-shape hero-shape2 position-absolute d-none d-lg-inline-block"
          src="/images/shape/shape2.webp"
          alt="Shape 2"
        />
        <img
          data-depth="0.30"
          class="hero-shape hero-shape3 position-absolute d-none d-lg-inline-block"
          src="/images/shape/shape3.webp"
          alt="Shape 3"
        />
        <img
          data-depth="0.10"
          class="hero-shape hero-shape4 position-absolute d-none d-lg-inline-block"
          src="/images/shape/shape4.webp"
          alt="Shape 4"
        />
      </div>

      <div
        class="container slider-height d-flex align-items-center justify-content-center"
      >
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div
              class="slider-content text-center position-relative z-index11"
              data-aos="fade-right"
              data-aos-duration="1100"
              data-aos-delay="500"
            >
              <h1 class="mb-15 white-text mt-25">
                <span
                  class="sub-heading d-block text-uppercase primary-color mb-1"
                  >Hello, I'm</span
                >
                Didarul Alam <span class="hm2-m-hero-text-style">Rahat</span>
                <br />
                <span style="font-style: italic; color: #eee; font-size: 1rem">
                  I’m Rahat — a Full Stack Web, Flutter, and Web3 Developer with
                  experience in AWS and DevOps.
                </span>
              </h1>
              <h2 class="text-capitalize white-text mb-45">
                I build AI-powered Flutter and Web Apps — from Architecture to
                Deployment.<br />
                <span class="d-text d-block d-sm-inline-block">
                  <span
                    id="main"
                    class="typer primary-color d-inline-block pl-2"
                    data-words="Remote full stack developer, Hire Flutter app developer, Nuxt.js + Laravel full stack developer, Freelance AI integration developer"
                    data-delay="50"
                    data-colors="#25262f"
                  />
                  <span
                    class="cursor primary-color d-inline-block"
                    data-owner="main"
                  />
                </span>
              </h2>
              <a
                href="#contact"
                class="btn position-relative over-hidden theme-bg text-uppercase transition5 mr-3 mb-3"
              >
                Hire Me
              </a>
              <a
                href="#about"
                class="btn position-relative over-hidden bg-transparent main-border text-uppercase transition5 mb-3"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="slider-social-link position-absolute right-0 d-none d-md-block z-index11"
      >
        <ul class="social pr-60">
          <li class="mt-10 mb-10 rotate-hover">
            <a
              class="text-center d-inline-block rotate"
              href="https://github.com/Darahat"
              target="_blank"
            >
              <i class="fab fa-github" />
            </a>
          </li>
          <li class="mt-10 mb-10 rotate-hover">
            <a
              class="text-center d-inline-block rotate"
              href="https://twitter.com/darahat42"
              target="_blank"
            >
              <i class="fab fa-twitter" />
            </a>
          </li>
          <li class="mt-10 mb-10 rotate-hover">
            <a
              class="text-center d-inline-block rotate"
              href="https://www.linkedin.com/in/didarulalamrahat/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in" />
            </a>
          </li>
          <li class="mt-10 mb-10 rotate-hover">
            <a
              class="text-center d-inline-block rotate"
              href="https://stackoverflow.com/users/3424210/didarul-alam-rahat"
              target="_blank"
            >
              <i class="fab fa-stack-overflow" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "#imports";
import { onMounted } from "vue";

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Didarul Alam Rahat",
        url: "https://darahat.dev",
        jobTitle: "Full Stack Developer",
        sameAs: [
          "https://www.linkedin.com/in/darahat",
          "https://github.com/Darahat",
          "https://x.com/darahat42",
        ],
        knowsAbout: ["Flutter", "Laravel", "Nuxt.js", "AWS", "DevOps", "Web3"],
      }),
    },
  ],
});

onMounted(() => {
  if (import.meta.client) {
    // Initialize parallax
    initParallax();
    // Initialize typer
    initTyper();
  }
});

const initParallax = () => {
  // Parallax.js initialization
  const scene = document.getElementById("scene");
  if (scene && window.Parallax) {
    new window.Parallax(scene);
  }
};

const initTyper = () => {
  // Typer.js initialization
  const typer = document.querySelector(".typer");
  if (typer && window.typer) {
    // Initialize typer animation
  }
};
</script>

<template>
  <div id="home" class="slider-area slider-bg-color over-hidden">
    <div
      class="single-slider slider-height over-hidden position-relative xxl-device-width bg-cover no-repeat"
    >
      <!-- LCP image: use an <img> so we can set explicit width/height, eager loading and fetchpriority -->
      <!-- Assumption: image natural size approx 1920x800. If you have exact dimensions, replace them below. -->
      <picture>
        <source
          srcset="/images/slider/slider-bg.webp 1920w"
          type="image/webp"
        />
        <img
          class="hero-lcp-img position-absolute w-100 h-100"
          src="/images/slider/slider-bg.webp"
          srcset="/images/slider/slider-bg.webp 1920w"
          sizes="100vw"
          alt="Hero background"
          width="1920"
          height="800"
          loading="eager"
          fetchpriority="high"
          style="object-fit: cover; inset: 0; z-index: 0"
        />
      </picture>
      <div id="scene" class="parallax position-absolute w-100 h-100 z-index1">
        <img
          data-depth="0.20"
          class="hero-shape hero-shape1 position-absolute d-none d-lg-inline-block"
          src="/images/shape/shape1.webp"
          loading="lazy"
          alt="Shape 1"
        />
        <img
          data-depth="0.15"
          class="hero-shape hero-shape2 position-absolute d-none d-lg-inline-block"
          src="/images/shape/shape2.webp"
          loading="lazy"
          alt="Shape 2"
        />
        <img
          data-depth="0.30"
          class="hero-shape hero-shape3 position-absolute d-none d-lg-inline-block"
          src="/images/shape/shape3.webp"
          loading="lazy"
          alt="Shape 3"
        />
        <img
          data-depth="0.10"
          class="hero-shape hero-shape4 position-absolute d-none d-lg-inline-block"
          src="/images/shape/shape4.webp"
          loading="lazy"
          alt="Shape 4"
        />
      </div>

      <div
        class="container slider-height d-flex align-items-center justify-content-center"
        style="min-height: 520px"
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
                  Full Stack Web Developer (Laravel, Vue.js, Nuxt.js) & Mobile
                  App Developer (Flutter for Android/iOS)
                </span>
                <br />
                <span
                  style="
                    display: block;
                    margin-top: 8px;
                    color: #ffd700;
                    font-weight: 600;
                    font-size: 1.1rem;
                  "
                >
                  Best Full Stack Laravel Developer for Hire
                </span>
                <span
                  style="
                    display: block;
                    color: #00bfae;
                    font-weight: 600;
                    font-size: 1.1rem;
                  "
                >
                  Best Flutter Mobile App Developer for Hire
                </span>
              </h1>
              <h2 class="text-capitalize white-text mb-45">
                I build modern websites, web apps, and cross-platform mobile
                apps for remote clients and startups.<br />
                <span class="d-text d-block d-sm-inline-block">
                  <span
                    id="main"
                    class="typer primary-color d-inline-block pl-2"
                    data-words="Full stack web developer, Hire Laravel + Nuxt.js developer, Flutter mobile app developer, Remote freelance developer"
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
        style="width: 48px; min-height: 220px"
      >
        <ul class="social pr-60">
          <li class="mt-10 mb-10 rotate-hover">
            <a
              class="text-center d-inline-block rotate"
              href="https://github.com/Darahat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github" />
            </a>
          </li>
          <li class="mt-10 mb-10 rotate-hover">
            <a
              class="text-center d-inline-block rotate"
              href="https://twitter.com/darahat42"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter" />
            </a>
          </li>
          <li class="mt-10 mb-10 rotate-hover">
            <a
              class="text-center d-inline-block rotate"
              href="https://www.linkedin.com/in/didarulalamrahat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin-in" />
            </a>
          </li>
          <li class="mt-10 mb-10 rotate-hover">
            <a
              class="text-center d-inline-block rotate"
              href="https://stackoverflow.com/users/3424210/didarul-alam-rahat"
              target="_blank"
              rel="noopener noreferrer"
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

// Heavy script initialization (parallax, typer, vanilla-tilt) is now handled
// by the defer-heavy-scripts.client.ts plugin to reduce forced reflows
</script>

<style scoped>
/* Hero/Slider Component Styles */
.slider-area {
  position: relative;
  overflow: hidden;
}

.slider-bg-color {
  background: #25262f;
}

.slider-height {
  min-height: 1080px;
}

/* Hero spacing adjustments for transparent header */
.container.slider-height {
  padding-top: 0;
}

@media (min-width: 992px) {
  .container.slider-height {
    padding-top: 120px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .container.slider-height {
    padding-top: 80px;
  }

  /* Reposition slider social icons on medium screens */
  .slider-social-link {
    top: auto !important;
    bottom: 30px !important;
    right: 15px !important;
    transform: none !important;
  }

  .slider-social-link .social {
    padding-right: 20px !important;
  }
}

@media (max-width: 767px) {
  .container.slider-height {
    padding-top: 48px;
  }
}

.single-slider {
  position: relative;
  overflow: hidden;
}

.hero-lcp-img {
  object-fit: cover;
  inset: 0;
  z-index: 0;
}

/* Performance optimizations */
.parallax {
  pointer-events: none;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-origin: center center;
}

.parallax img,
.hero-shape {
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-origin: center center;
}

.single-slider .bg-cover {
  will-change: transform, opacity;
}

/* Reserve stable minimum height to prevent layout shift */
.single-slider {
  min-height: 420px;
}

@media (min-width: 768px) {
  .single-slider {
    min-height: 520px;
  }
}

@media (min-width: 1200px) {
  .single-slider {
    min-height: 640px;
  }
}

/* Stabilize slider social links */
.slider-social-link {
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 48px;
  pointer-events: auto;
}

/* Typing cursor stability */
.cursor {
  display: inline-block;
  min-width: 0.7ch;
  line-height: 1;
  vertical-align: middle;
  transition: none !important;
}

.hero-shape {
  max-width: 80px;
  max-height: 80px;
}

.hero-shape1 {
  top: 18%;
  right: 8%;
}

.hero-shape2 {
  bottom: 44%;
  right: 18%;
}

.hero-shape3 {
  bottom: 8%;
  left: 6%;
}

.hero-shape4 {
  top: 26%;
  left: 19%;
  max-width: 65px;
}

.slider-content {
  text-align: center;
  position: relative;
  z-index: 11;
}

.slider-content .sub-heading {
  font-size: 30px;
  line-height: 1.3;
  letter-spacing: 7px;
  font-weight: 400;
}

.slider-content h1,
.slider-content h1 span {
  font-size: 200px;
  line-height: 1.07;
}

.slider-content h2 {
  font-size: 30px;
  line-height: 2;
}

.slider-content h2 span {
  font-size: 48px;
  letter-spacing: 0px;
}

.hm2-m-hero-text-style {
  -webkit-text-stroke: 2px #fff;
  -webkit-text-fill-color: transparent;
}

span#main {
  color: var(--primary-color, #ffffff) !important;
}

.slider-content .btn {
  padding: 15px 35px;
  border-radius: 5px;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
}

.slider-content .theme-bg {
  background: var(--primary-color, #ffffff);
  color: var(--main-color, #25262f);
  border: 1px solid var(--primary-color, #ffffff);
}

.slider-content .bg-transparent {
  background: transparent;
  color: #ffffff;
}

.slider-content .main-border {
  border: 1px solid var(--main-border, #bcc7d3);
}

.slider-social-link {
  top: 50%;
  transform: translateY(-50%);
}

.slider-social-link .social {
  padding: 0;
  margin: 0;
  list-style: none;
}

.slider-social-link .social li {
  border: 1px solid rgba(204, 211, 217, 0.2);
  border-radius: 5px;
  margin: 2px 0;
}

.slider-social-link .social li a {
  font-size: 18px;
  width: 55px;
  height: 50px;
  line-height: 52px;
  color: var(--primary-color, #ffffff);
  display: block;
  text-decoration: none;
  transition: all 0.3s ease;
}

.slider-social-link .social li:hover {
  background: var(--primary-color, #ffffff);
  border: 1px solid var(--primary-color, #ffffff);
}

.slider-social-link .social li:hover a {
  color: var(--main-color, #25262f);
}

/* Responsive */
@media screen and (min-width: 1200px) and (max-width: 1600px) {
  .slider-content h1,
  .slider-content h1 span {
    font-size: 160px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1440px) {
  .slider-height {
    min-height: 100vh;
  }
  .slider-content h1,
  .slider-content h1 span {
    font-size: 140px;
  }
  .slider-content h2 span {
    font-size: 32px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .slider-height {
    min-height: 650px;
  }
  .slider-content h1,
  .slider-content h1 span {
    font-size: 125px;
  }
  .slider-content .sub-heading {
    font-size: 26px;
  }
  .slider-content h2 span {
    font-size: 32px;
  }
  .hero-shape {
    max-width: 40px;
    max-height: 40px;
  }
}

@media screen and (max-width: 991px) {
  .slider-height {
    min-height: 520px;
  }
  .slider-content h1,
  .slider-content h1 span {
    font-size: 80px;
  }
  .slider-content h2 {
    font-size: 24px;
  }
  .slider-content h2 span {
    font-size: 28px;
  }
}

/* Medium screens: 768px - 991px */
@media (min-width: 768px) and (max-width: 991px) {
  .slider-social-link {
    position: fixed; /* keep it floating */
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 48px;
    min-height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 11;
    background: none; /* remove background for medium screens */
    border-radius: 0;
    padding: 0;
  }

  .slider-social-link .social {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  .slider-social-link .social li {
    width: 48px;
    height: 48px;
    margin: 4px 0;
    border-radius: 8px;
    border: 1px solid rgba(204, 211, 217, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #222;
    overflow: hidden;
  }

  .slider-social-link .social li a {
    width: 100%;
    height: 100%;
    line-height: 48px;
    text-align: center;
    display: block;
    color: var(--primary-color, #ffffff);
  }

  /* Add bottom spacing to slider content so text won't overlap icons */
  .slider-content {
    margin-right: 70px; /* leave space for floating social icons */
  }
}

/* Fix: Ensure style block is properly closed */
</style>

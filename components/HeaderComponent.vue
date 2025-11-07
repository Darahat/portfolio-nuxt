<template>
  <header>
    <div id="header-sticky" class="transparent-header header-area">
      <div class="header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
              <div class="logo mt-50 mb-50 transition5">
                <NuxtLink class="header-logo" to="/">
                  <img
                    src="/images/logo/logo.webp"
                    alt="Didarul Alam Rahat Logo"
                  />
                </NuxtLink>
              </div>
            </div>
            <div
              class="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7 pl-0 d-flex justify-content-end align-items-center"
            >
              <div class="main-menu">
                <nav id="mobile-menu">
                  <ul class="d-block">
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Works</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                  </ul>
                </nav>
              </div>
              <div class="header-btn pl-45">
                <a
                  href="/Files/darahat.pdf"
                  download
                  class="white-text text-uppercase d-inline-block"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Initialize sticky header
  if (import.meta.client) {
    window.addEventListener("scroll", handleScroll);
  }
});

const handleScroll = () => {
  const header = document.getElementById("header-sticky");
  if (window.scrollY > 100) {
    header?.classList.add("sticky");
  } else {
    header?.classList.remove("sticky");
  }
};
</script>

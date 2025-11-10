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
                    src="/images/logo/darahat-full-stack-developer-logo.webp"
                    alt="Didarul Alam Rahat Logo"
                    width="20"
                    height="48"
                  />
                </NuxtLink>
              </div>
            </div>
            <div
              class="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7 pl-0 d-flex justify-content-end align-items-center"
            >
              <div class="main-menu">
                <nav
                  id="mobile-menu"
                  role="navigation"
                  aria-label="Main navigation"
                >
                  <ul class="d-block">
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Works</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blog">Blog</a></li>
                  </ul>
                </nav>
              </div>
              <div class="header-btn pl-45" style="min-width: 120px">
                <a
                  href="/Files/didarul-alam-rahat-remote-full-stack-developer-cv.pdf"
                  download
                  class="white-text text-uppercase d-inline-block"
                  style="font-size: 1rem; line-height: 1.2"
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
import { onBeforeUnmount, onMounted } from "vue";

let heroHeight = 0;

onMounted(() => {
  // Get hero area height (assume #hero exists)
  const hero = document.getElementById("hero");
  heroHeight = hero ? hero.offsetHeight : 400;
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const header = document.getElementById("header-sticky");
  if (!header) return;
  if (window.scrollY > 100) {
    header.classList.add("sticky");
    if (window.scrollY > heroHeight - 60) {
      header.classList.add("dark-bg");
    } else {
      header.classList.remove("dark-bg");
    }
  } else {
    header.classList.remove("sticky");
    header.classList.remove("dark-bg");
  }
};
</script>

<style scoped>
/* Header Component Styles */
.header-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}

.transparent-header {
  background: transparent;
}

.header {
  transition: 0.5s;
}

.logo {
  transition: all 0.5s ease-out;
}

.logo img,
.header-logo img {
  display: block;
  width: 60px;
  max-width: 100%;
  height: auto;
}

@media (max-width: 991px) {
  .logo img,
  .header-logo img {
    width: 40px;
  }
}

@media (max-width: 575px) {
  .logo img,
  .header-logo img {
    width: 110px;
  }
}

/* Extra small/tall screens: cap logo size and adjust button spacing */
@media (max-width: 425px) and (max-height: 900px) {
  .logo img,
  .header-logo img {
    width: 64px;
    max-width: 80vw;
    height: auto;
  }
  .header-btn {
    min-width: 100px !important;
    padding-left: 0 !important;
  }
  .header-btn a {
    font-size: 0.95rem !important;
    padding: 10px 18px 9px 18px !important;
    white-space: nowrap;
  }
  .logo {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }
  #header-sticky {
    padding-top: 0 !important;
  }
}

.main-menu ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.main-menu ul li {
  display: inline-block;
  margin-left: 36px;
  position: relative;
}

.main-menu ul li > a {
  color: #ffffff;
  font-size: 18px;
  display: inline-block;
  text-transform: capitalize;
  padding: 53px 0;
  position: relative;
  text-decoration: none;
}

.main-menu ul li:hover > a,
.main-menu ul li a.active {
  color: var(--primary-color, #ffffff);
}

.main-menu ul li > a::before {
  position: absolute;
  content: "";
  background: var(--primary-color, #ffffff);
  width: 0;
  height: 2px;
  bottom: 50px;
  transition: 0.5s;
}

.main-menu ul li > a:hover::before,
.main-menu ul li a.active::before {
  background: var(--primary-color, #ffffff);
  width: 100%;
  left: 0;
}

.header-btn a {
  padding: 12px 28px 11px 28px;
  border: 1px solid var(--primary-color, #ffffff);
  border-radius: 5px;
  font-size: 15px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.header-btn a:hover,
#header-sticky.sticky .header-btn a:hover,
#header-sticky.sticky.dark-bg .header-btn a:hover,
#header-sticky .header-btn a:hover {
  background: var(--primary-color, #ffffff) !important;
  color: #181a1b !important;
}

/* Sticky Header */
#header-sticky.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}

#header-sticky.sticky .header {
  background: transparent;
  box-shadow: 0 8px 4px -7px rgba(115, 115, 115, 0.1);
  transition: background 0.3s;
}

#header-sticky.sticky.dark-bg .header {
  background: #181a1b;
  box-shadow: 0 8px 4px -7px rgba(115, 115, 115, 0.1);
}

#header-sticky.sticky .logo {
  margin: 0;
}

#header-sticky.sticky .logo img {
  max-width: 72%;
}

#header-sticky.sticky .main-menu ul li > a {
  padding: 24px 0;
}

#header-sticky.sticky .main-menu ul li > a::before {
  bottom: 22px;
}

#header-sticky.sticky .header-btn a {
  padding: 8px 20px 7px 20px;
}

#header-sticky.sticky.dark-bg .main-menu ul li > a,
#header-sticky.sticky.dark-bg .header-btn a {
  color: #fff !important;
}

/* Responsive */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .main-menu ul li > a {
    font-size: 16px;
  }
}

@media screen and (max-width: 991px) {
  .main-menu {
    display: none;
  }
}
</style>

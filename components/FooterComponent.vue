<template>
  <footer>
    <div class="footer-area over-hidden pt-110 mb-60">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-8 col-sm-7">
              <div class="footer-widget footer-logo pb-40">
                <div class="foot-logo mb-30">
                  <img
                    :src="logoDark"
                    alt="Didarul Alam Rahat Logo"
                    loading="lazy"
                  />
                </div>
                <div class="copyright-text">
                  <p class="mb-0">
                    All rights reserved
                    <a
                      href="#contact"
                      class="c-theme theme-color f-600 transition5"
                      >darahat42</a
                    >
                    © 2024
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-xl-3 offset-xl-2 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block d-lg-none"
            >
              <div class="footer-widget pb-40">
                <h4 class="mb-28 mt-2">Follow Me</h4>
                <ul class="social social-bg text-center d-flex">
                  <li class="mr-2 rotate-hover">
                    <a
                      class="twitter-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="https://twitter.com/darahat42"
                      target="_blank"
                    >
                      <i class="fab fa-twitter" />Twitter
                    </a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="https://www.linkedin.com/in/didarulalamrahat"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin-in" />LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-12">
              <div class="footer-widget pb-40">
                <h4 class="mb-28 mt-2">Newsletter</h4>
                <div class="newsletter-form">
                  <form @submit.prevent="handleNewsletter">
                    <div class="subscribe-info position-relative">
                      <label for="email">Email Address</label>
                      <input
                        id="email"
                        v-model="email"
                        class="sub-name theme-border pl-25 pt-15 pb-15 pr-10 w-100 secondary-color2 border-radius5 bg-white"
                        type="email"
                        placeholder="Submit your email"
                        required
                      />
                      <span
                        class="d-block position-absolute theme-color cursor-pointer"
                      >
                        <i class="fal fa-envelope" />
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div
              class="col-xl-3 offset-xl-2 col-lg-3 col-md-4 col-sm-4 d-sm-none d-lg-block"
            >
              <div class="footer-widget pb-40">
                <h4 class="mb-28 mt-2">Follow Me</h4>
                <ul class="social social-bg text-center d-flex">
                  <li class="mr-2 rotate-hover">
                    <a
                      class="facebook-bg text-center pr-0 text-white d-block transition-3 rotate"
                      href="https://twitter.com/darahat42"
                      target="_blank"
                    >
                      <i class="fab fa-twitter" />Twitter
                    </a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="https://www.linkedin.com/in/didarulalamrahat/"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin-in" />LinkedIn
                    </a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="instagram-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="https://github.com/Darahat"
                      target="_blank"
                    >
                      <i class="fab fa-github" />Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import logoDark from "/images/logo/logo-dark.webp";

const email = ref("");

const handleNewsletter = () => {
  if (email.value) {
    console.log("Newsletter subscription:", email.value);
    // Add your newsletter logic here
    email.value = "";
  }
};
</script>

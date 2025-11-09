<template>
  <footer role="contentinfo">
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
                      rel="noopener noreferrer"
                    >
                      <i class="fab fa-twitter" />Twitter
                    </a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="https://www.linkedin.com/in/didarulalamrahat"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      rel="noopener noreferrer"
                      aria-label="Follow on Twitter"
                    >
                      <i class="fab fa-twitter" />Twitter
                    </a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="https://www.linkedin.com/in/didarulalamrahat/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow on LinkedIn"
                    >
                      <i class="fab fa-linkedin-in" />LinkedIn
                    </a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="instagram-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="https://github.com/Darahat"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow on GitHub"
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
import logoDark from "/images/logo/darahat-full-stack-developer-logo.webp";

const email = ref("");

const handleNewsletter = () => {
  if (email.value) {
    // Add your newsletter logic here
    email.value = "";
  }
};
</script>

<style scoped>
/* Footer Component Styles */
.footer-area {
  overflow: hidden;
}

.footer-widget {
  padding-bottom: 40px;
}

.foot-logo img {
  max-width: 120px;
  margin-bottom: 30px;
}

.copyright-text p {
  margin-bottom: 0;
  font-size: 15px;
}

.c-theme {
  color: var(--main-color, #25262f);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.5s ease;
}

.c-theme:hover {
  text-decoration: underline;
}

.footer-widget h4 {
  margin-bottom: 28px;
  margin-top: 2px;
  font-size: 24px;
}

.social {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.social li {
  margin-right: 8px;
}

.social.social-bg li a {
  font-size: 18px;
  width: 42px;
  height: 42px;
  line-height: 42px;
  border-radius: 50%;
  display: block;
  text-align: center;
  color: #ffffff;
  transition: all 0.3s ease;
}

.twitter-bg,
.facebook-bg {
  background: #1da1f2;
}

.linkedin-bg {
  background: #0077b5;
}

.instagram-bg {
  background: #333;
}

.rotate-hover:hover .rotate {
  transform: rotateY(360deg);
}

.rotate {
  transition: transform 0.6s ease;
}

.newsletter-form .subscribe-info {
  position: relative;
}

.newsletter-form label {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.subscribe-info input {
  padding-left: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 10px;
  width: 100%;
  border: 1px solid var(--main-border, #bcc7d3);
  border-radius: 5px;
  background: #ffffff;
  color: var(--secondary-color, #d9e1e2);
}

.subscribe-info span {
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--main-color, #25262f);
  cursor: pointer;
  font-size: 18px;
}

/* Responsive */
@media screen and (max-width: 767px) {
  .footer-widget {
    text-align: center;
    padding-bottom: 30px;
  }
  .social {
    justify-content: center;
  }
}
</style>

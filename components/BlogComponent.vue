<template>
  <div id="blog" class="blog-area over-hidden">
    <div class="marquee-w mb-45">
      <div class="marquee">
        <span class="pl-4"
          >Laravel + Vue.js Web Developer from Bangladesh *</span
        >
        <span class="pl-4">Flutter App Developer from Bangladesh *</span>
      </div>
    </div>

    <div class="blog-wrappers section-bg pt-160 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="title">
              <span class="meta-text-color text-uppercase d-block mb-6"
                >Get Updates</span
              >
              <h2>Recent Blog</h2>
            </div>
          </div>
        </div>

        <div class="row justify-content-center blog-wrapper mt-75">
          <div
            v-for="(post, index) in blogPosts"
            :key="index"
            class="col-xl-4 col-lg-4 col-md-4 col-sm-12"
          >
            <div class="single-blog mb-50 shadow-hover transition3">
              <div class="blog-img">
                <img
                  class="transition5"
                  :src="post.image"
                  :alt="post.title"
                  loading="lazy"
                  width="370"
                  height="250"
                />
              </div>
              <div class="single-blog-content bg-white pl-30 pt-25 pb-15 pr-30">
                <ul class="blog-meta">
                  <li class="mr-15 d-inline-block">
                    <span class="meta-text-color d-inline-block mr-1"
                      ><i class="fas fa-folder"
                    /></span>
                    <span
                      class="meta-text-color openS-font-family d-inline-block"
                      >{{ post.category }}</span
                    >
                  </li>
                  <li class="mr-15 d-inline-block">
                    <span class="meta-text-color d-inline-block mr-1"
                      ><i class="fas fa-user"
                    /></span>
                    <a
                      class="meta-text-color openS-font-family d-inline-block"
                      :href="post.authorLink"
                      >{{ post.author }}</a
                    >
                  </li>
                  <li class="d-inline-block">
                    <span class="meta-text-color d-inline-block mr-1"
                      ><i class="fas fa-thumbs-up"
                    /></span>
                    <span
                      class="meta-text-color openS-font-family d-inline-block"
                      >{{ post.likes }}</span
                    >
                  </li>
                </ul>
                <h3 class="mb-10 mt-1">
                  <a
                    class="primary-hover"
                    :href="post.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ post.title }}</a
                  >
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const blogPosts = ref([
  {
    image:
      "/images/blog/my-100-day-github-streak-how-i-reinvented-myself-for-remote-work-darahat.webp",
    category: "My Journey",
    author: "darahat42",
    authorLink: "https://medium.com/@darahat42",
    likes: "2",
    title: "My 100-Day GitHub Streak: How I Reinvented Myself for Remote Work",
    link: "https://medium.com/@darahat42/my-100-day-github-streak-how-i-reinvented-myself-for-remote-work-87aa6cd55c87",
  },
  {
    image: "/images/blog/stakehive-decentralized-staking-platform-darahat.webp",
    category: "Smart Contract",
    author: "darahat42",
    authorLink: "https://medium.com/@darahat42",
    likes: "16",
    title: "How I built a DeFi DApp with Nuxt.js and Solidity",
    link: "https://medium.com/@darahat42/how-i-built-a-defi-dapp-with-nuxtjs-and-solidity-121fc20eb14c",
  },
  {
    image:
      "/images/blog/build-single-page-crud-application-from-scratch-darahat.webp",
    category: "AI & Flutter",
    author: "darahat42",
    authorLink: "https://medium.com/@darahat42",
    likes: "10",
    title: "Optimizing Flutter apps for offline AI processing",
    link: "https://medium.com/@darahat42/optimizing-flutter-apps-for-offline-ai-processing-xyz",
  },
  {
    image:
      "/images/blog/build-single-page-crud-application-from-scratch-darahat.webp",
    category: "Web Development",
    author: "darahat42",
    authorLink: "https://medium.com/@darahat42",
    likes: "80",
    title: "Deploying Laravel + Nuxt full stack projects on AWS",
    link: "https://medium.com/@darahat42/deploying-laravel-nuxt-full-stack-projects-on-aws-abc",
  },
]);
</script>

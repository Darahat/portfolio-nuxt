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
                  <a class="primary-hover" :href="post.link" target="_blank">{{
                    post.title
                  }}</a>
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
    image: "/images/blog/blog-img3.webp",
    category: "My Journey",
    author: "darahat42",
    authorLink: "https://medium.com/@darahat42",
    likes: "2",
    title: "My 100-Day GitHub Streak: How I Reinvented Myself for Remote Work",
    link: "https://medium.com/@darahat42/my-100-day-github-streak-how-i-reinvented-myself-for-remote-work-87aa6cd55c87",
  },
  {
    image: "/images/blog/blog-img2.webp",
    category: "Smart Contract",
    author: "darahat42",
    authorLink: "https://medium.com/@darahat42",
    likes: "16",
    title:
      "From Curiosity to Code: My DeFi App Journey (and Lessons You Can Steal)",
    link: "https://medium.com/@darahat42/from-curiosity-to-code-my-defi-app-journey-and-lessons-you-can-steal-121fc20eb14c",
  },
  {
    image: "/images/blog/blog-img1.webp",
    category: "Web Design",
    author: "darahat42",
    authorLink: "https://medium.com/@darahat42",
    likes: "162",
    title:
      "Create a CRUD Application (A Blog Site) using Laravel 10 & Vue 3 from scratch. Part-1",
    link: "https://medium.com/@darahat42/create-a-crud-application-a-blog-site-using-laravel-8-vue-js-from-scratch-part-1-e9e20eb68a0c",
  },
  {
    image: "/images/blog/blog-img1.webp",
    category: "Web Development",
    author: "darahat42",
    authorLink: "https://medium.com/@darahat42",
    likes: "80",
    title:
      "Create a CRUD Application (A Blog Site) using Laravel & Vue JS from scratch. Part-2",
    link: "https://medium.com/@darahat42/create-a-crud-application-a-blog-site-using-laravel-vue-js-from-scratch-part-2-fdbc933d1fd",
  },
]);
</script>

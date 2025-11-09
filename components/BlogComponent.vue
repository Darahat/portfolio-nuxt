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

<style scoped>
/* Blog Component Styles */
.blog-area {
  overflow: hidden;
}

.marquee-w {
  overflow: hidden;
  margin-bottom: 45px;
}

.marquee {
  display: flex;
  animation: marquee 20s linear infinite;
  white-space: nowrap;
}

.marquee span {
  font-size: 90px;
  font-weight: 600;
  color: #f3f6f8;
  padding-left: 16px;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.blog-wrappers {
  background: var(--section-bg, #f3f6f8);
}

.section-bg {
  background: var(--section-bg, #f3f6f8);
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

.single-blog {
  margin-bottom: 50px;
  transition: all 0.5s ease;
  border-radius: 12px;
  overflow: hidden;
}

.shadow-hover:hover {
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
}

.blog-img {
  height: 220px;
  display: block;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.blog-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: all 0.5s ease;
}

.single-blog:hover img {
  transform: scale(1.1);
}

.single-blog-content {
  background: #ffffff;
  padding: 25px 30px 15px 30px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  box-shadow: 0px 5px 15px 0px rgba(7, 7, 7, 0.05);
}

.blog-meta {
  padding: 0;
  margin: 0;
  list-style: none;
}

.blog-meta li {
  margin-right: 15px;
  display: inline-block;
  font-size: 15px;
}

.blog-meta li:last-child {
  margin-right: 0;
}

.meta-text-color {
  color: var(--meta-text-color, #000000);
}

.single-blog-content h3 {
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 10px;
  margin-top: 4px;
}

.single-blog-content h3 a {
  color: var(--main-color, #25262f);
  text-decoration: none;
  transition: all 0.3s ease;
}

.single-blog-content h3 a:hover {
  color: var(--primary-color, #ffffff);
}

/* Responsive */
@media (min-width: 1200px) {
  .blog-img {
    height: 260px;
  }
}

@media (max-width: 991px) {
  .blog-img {
    height: 200px;
  }
  .marquee span {
    font-size: 60px;
  }
  .title h2 {
    font-size: 36px;
  }
}

@media (max-width: 767px) {
  .marquee span {
    font-size: 40px;
  }
}

@media (max-width: 575px) {
  .blog-img {
    height: 150px;
  }
  .single-blog-content {
    padding: 20px;
  }
  .single-blog-content h3 {
    font-size: 20px;
  }
  .marquee span {
    font-size: 28px;
  }
  .title h2 {
    font-size: 28px;
  }
}
</style>

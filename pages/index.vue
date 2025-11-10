<template>
  <div>
    <!-- Preloader -->
    <div v-show="loading" id="preloader" aria-label="Loading content">
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div id="object_one" class="object" />
            <div id="object_two" class="object" />
            <div id="object_three" class="object" />
          </div>
        </div>
      </div>
    </div>

    <HeaderComponent />

    <main id="main-content" role="main" class="over-hiddenn">
      <HeroComponent />
      <IntroFeature />
      <AboutComponent />
      <PortfolioComponent />
      <FunFact />
      <ExperienceComponent />
      <EducationComponent />
      <SkillsComponent />
      <ServicesComponent />
      <PricingComponent />
      <TestimonialsComponent />
      <BrandsComponent />
      <ContactComponent />
      <BlogComponent />
    </main>

    <FooterComponent />
    <BackToTop />
  </div>
</template>

<script setup>
import { useHead } from "#imports";
import { nextTick, onMounted, ref } from "vue";
import { useScripts } from "~/composables/useScripts";

const loading = ref(true);
const { initializePlugins } = useScripts();

// SEO Metadata and Structured Data
useHead({
  title:
    "Full Stack Web & Flutter Developer | Didarul Alam Rahat | Laravel, Nuxt.js & AWS Expert",
  htmlAttrs: { lang: "en" },
  meta: [
    {
      name: "description",
      content:
        "Hire Didarul Alam Rahat — a professional Full Stack Web & Flutter Developer specializing in Laravel, Nuxt.js, AWS, and scalable cloud architecture. Expert in modern web development, DevOps, and cross-platform mobile app design.",
    },
    {
      name: "keywords",
      content:
        "Full Stack Developer, Flutter Developer, Laravel Developer, Nuxt.js Developer, Vue.js, AWS, DevOps, Web Developer, Mobile App Developer, Freelance Developer, Remote Developer, Software Engineer, Web3 Developer",
    },
    { name: "author", content: "Didarul Alam Rahat" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "theme-color", content: "#0d1117" },

    // Open Graph
    {
      property: "og:title",
      content: "Full Stack Web & Flutter Developer | Didarul Alam Rahat",
    },
    {
      property: "og:description",
      content:
        "Full Stack Web Developer (Laravel, Vue.js, Nuxt.js) and Mobile App Developer (Flutter for Android/iOS), with experience in AWS, DevOps, and Web3. Expert in scalable full-stack solutions and cross-platform app development.",
    },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Darahat.dev" },
    { property: "og:url", content: "https://darahat.dev" },
    {
      property: "og:image",
      content:
        "https://darahat.dev/images/rahat-full-stack-laravel-web-developer-flutter-mobile-app-developer.webp",
    },
    { property: "og:locale", content: "en_US" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: "@darahat42" },
    {
      name: "twitter:title",
      content: "Full Stack Web & Flutter Developer | Didarul Alam Rahat",
    },
    {
      name: "twitter:description",
      content:
        "Full Stack Web Developer (Laravel, Vue.js, Nuxt.js) and Mobile App Developer (Flutter for Android/iOS), Skilled in AWS, and DevOps. Building modern, scalable digital products.",
    },
    {
      name: "twitter:image",
      content:
        "https://darahat.dev/images/rahat-full-stack-laravel-web-developer-flutter-mobile-app-developer.webp",
    },
  ],

  link: [
    { rel: "canonical", href: "https://darahat.dev" },
    {
      rel: "icon",
      href: "/images/logo/darahat-favicon-full-stack-web-developer.webp",
    },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    {
      rel: "preload",
      href: "/images/rahat-full-stack-laravel-web-developer-flutter-mobile-app-developer.webp",
      as: "image",
    },
  ],

  script: [
    // Person Schema (Enhanced)
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Didarul Alam Rahat",
        alternateName: "Rahat",
        url: "https://darahat.dev",
        image:
          "https://darahat.dev/images/rahat-full-stack-laravel-web-developer-flutter-mobile-app-developer.webp",
        jobTitle: "Full Stack Developer & Flutter Expert",
        worksFor: {
          "@type": "Organization",
          name: "Darahat.dev",
        },
        description:
          "Full Stack Web Developer (Laravel, Vue.js, Nuxt.js) and Mobile App Developer (Flutter for Android/iOS) specializing in DevOps, AWS, and scalable software engineering solutions.",
        sameAs: [
          "https://www.linkedin.com/in/darahat",
          "https://github.com/Darahat",
          "https://x.com/darahat42",
          "https://stackoverflow.com/users/3424210/didarul-alam-rahat",
          "https://www.fiverr.com/s/qDpL9r2",
          "https://www.upwork.com/freelancers/~014785a34291b62df4?mp_source=share",
        ],
        knowsAbout: [
          "Full Stack Development",
          "Flutter",
          "Laravel",
          "Nuxt.js",
          "AWS",
          "DevOps",
          "Web3",
          "UI/UX Design",
        ],
      }),
    },
    // Website Schema
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Darahat.dev",
        url: "https://darahat.dev",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://darahat.dev/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }),
    },
    // Breadcrumb Schema
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://darahat.dev",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: "https://darahat.dev/#portfolio",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Contact",
            item: "https://darahat.dev/#contact",
          },
        ],
      }),
    },
  ],
});

onMounted(async () => {
  // Hide preloader after short delay
  setTimeout(() => {
    loading.value = false;
  }, 500);

  await nextTick();

  // Initialize all scripts/plugins
  setTimeout(() => {
    initializePlugins();
  }, 600);
});
</script>

<style scoped>
/* Example SEO improvement: make sure visually hidden text is accessible */
#preloader {
  background-color: #0d1117;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.object {
  width: 20px;
  height: 20px;
  background-color: #00adb5;
  margin: 10px;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}
</style>

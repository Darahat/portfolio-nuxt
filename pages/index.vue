<template>
  <div>
    <!-- Preloader -->
    <div v-show="loading" id="preloader">
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
    <main class="over-hiddenn">
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

// SEO metadata and structured data
useHead({
  title: "Full Stack Web & Flutter Developer | Rahat",
  meta: [
    {
      name: "description",
      content:
        "Rahat — Full Stack Web & Flutter Developer skilled in Nuxt.js, Laravel, AWS, and DevOps. Available for remote projects and freelance work.",
    },
    {
      property: "og:title",
      content: "Full Stack Web & Flutter Developer | Rahat",
    },
    {
      property: "og:description",
      content:
        "Rahat — Full Stack Web & Flutter Developer skilled in Nuxt.js, Laravel, AWS, and DevOps.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://darahat.dev" },
    {
      property: "og:image",
      content: "https://darahat.dev/images/rahat-flutter-developer.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Full Stack Web & Flutter Developer | Rahat",
    },
    {
      name: "twitter:description",
      content:
        "Rahat — Full Stack Web & Flutter Developer skilled in Nuxt.js, Laravel, AWS, and DevOps.",
    },
    {
      name: "twitter:image",
      content: "https://darahat.dev/images/rahat-flutter-developer.jpg",
    },
  ],
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
          "https://www.linkedin.com/in/rahatdev",
          "https://github.com/rahatdev",
          "https://twitter.com/rahatdev",
        ],
        knowsAbout: ["Flutter", "Laravel", "Nuxt.js", "AWS", "DevOps", "Web3"],
      }),
    },
  ],
});

onMounted(async () => {
  // Hide preloader after mount
  setTimeout(() => {
    loading.value = false;
  }, 500);

  // Wait for DOM to be ready
  await nextTick();

  // Initialize plugins after a short delay
  setTimeout(() => {
    initializePlugins();
    // AOS is refreshed automatically by the client plugin on route changes.
  }, 600);
});
</script>

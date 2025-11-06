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
import { onMounted, ref } from "vue";
import { useScripts } from "~/composables/useScripts";

const loading = ref(true);
const { initializePlugins } = useScripts();

onMounted(() => {
  // Hide preloader after mount
  setTimeout(() => {
    loading.value = false;
  }, 1000);
  initializePlugins();
});
</script>

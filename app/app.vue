<template>
  <div>
    <!-- Skip to main content link for accessibility -->
    <a href="#main-content" class="skip-to-main">Skip to main content</a>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// AOS is initialized by the client plugin `~/plugins/aos.client.ts`.
</script>

<style>
/* Skip to main content link - hidden until focused */
.skip-to-main {
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 1em;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 0 0 4px 0;
  font-weight: bold;
}

.skip-to-main:focus {
  left: 0;
  top: 0;
}
</style>

<script setup>
import Navbar from "./components/Navbar.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <FooterSection />
  </div>
</template>

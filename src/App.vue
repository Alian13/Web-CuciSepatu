<template>
  <div
    :class="
      theme === 'dark' ? 'bg-gray-900 min-h-screen' : 'bg-white min-h-screen'
    "
  >
    <!-- HEADER -->
    <Header
      :theme="theme"
      :language="language"
      :translations="t"
      :current-page="$route.name"
    />

    <!-- CONTENT -->
    <main class="pt-0 pb-12">
      <router-view />
    </main>

    <!-- FOOTER -->
    <Footer :theme="theme" :language="language" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAppStore } from "./stores/useAppStore";

import Header from "./components/sections/Header.vue";
import Footer from "./components/sections/Footer.vue";

const store = useAppStore();

const theme = computed(() => store.theme);
const language = computed(() => store.language);
const t = computed(() => store.translations[language.value]);
</script>

<style>
body {
  margin: 0;
}
</style>

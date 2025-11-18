<template>
  <AboutSection :theme="theme" :language="language" />
</template>

<script setup>
import { computed } from "vue";
import { useAppStore } from "../stores/useAppStore";
import AboutSection from "../components/sections/AboutSection.vue";

const store = useAppStore();
const theme = computed(() => store.theme);
const language = computed(() => store.language);
</script>

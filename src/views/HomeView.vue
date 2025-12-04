<template>
  <div>
    <HeroSection
      :theme="theme"
      :language="language"
      :translations="translations"
      @order-now="openOrderModal"
    />

    <ImageGallery :theme="theme" :images="galleryImages" />

    <OrderModal
      :is-open="orderModalOpen"
      :service-name="null"
      :theme="theme"
      :translations="translations"
      @close="orderModalOpen = false"
    />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useAppStore } from "../stores/useAppStore";
import HeroSection from "../components/sections/HeroSection.vue";
import ImageGallery from "../components/sections/ImageGallery.vue";
import OrderModal from "../components/ui/OrderModal.vue";

const store = useAppStore();

const theme = computed(() => store.theme);
const language = computed(() => store.language);
const translations = computed(() => store.translations[language.value]);

const galleryImages = ["/img/clean1.jpg", "/img/clean2.jpg", "/img/clean3.jpg"];

const orderModalOpen = ref(false);
const openOrderModal = () => {
  orderModalOpen.value = true;
};
</script>

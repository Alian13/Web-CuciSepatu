<template>
  <div
    class="min-h-screen"
    :class="theme === 'dark' ? 'bg-gray-900' : 'bg-white'"
  >
    <!-- Service Cards -->
    <section class="py-16">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
          :theme="theme"
          :translations="translations"
          @click="goToDetail(service.id)"
        />
      </div>
    </section>

    <!-- Pickup Banner -->
    <section class="py-10">
      <div
        class="max-w-4xl mx-auto rounded-2xl py-8 px-6 text-center shadow-md"
        :class="
          theme === 'dark'
            ? 'bg-cyan-900/20 border border-cyan-800 text-cyan-300'
            : 'bg-blue-50 text-blue-900'
        "
      >
        <div class="flex flex-col items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 12h18M3 12l4-4m-4 4l4 4"
            />
          </svg>

          <p class="text-lg font-medium">
            Free pickup and delivery within 5 km from location
          </p>
        </div>
      </div>
    </section>

    <!-- Before & After Gallery -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          class="text-center text-lg font-semibold mb-8"
          :class="theme === 'dark' ? 'text-cyan-300' : 'text-blue-900'"
        >
          Before & After Gallery
        </h3>

        <ImageGallery :images="galleryImages" :theme="theme" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "../stores/useAppStore";

import ServiceCard from "../components/ui/ServiceCard.vue";
import ImageGallery from "../components/sections/ImageGallery.vue";

import { services } from "../data/services";

const router = useRouter();
const store = useAppStore();

const theme = computed(() => store.theme);
const translations = computed(() => store.currentTranslations);

function goToDetail(id) {
  router.push(`/services/${id}`);
}

const galleryImages = [
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  "https://images.unsplash.com/photo-1596889157465-9e8c3ffcd26f",
  "https://images.unsplash.com/photo-1662729753857-e6c80b7ab86f",
];
</script>

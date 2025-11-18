<template>
  <div
    :class="[
      'rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1',
      theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white',
    ]"
  >
    <!-- Image -->
    <div class="aspect-[4/3] overflow-hidden">
      <img
        :src="service.image"
        :alt="service.title"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3
        :class="['mb-2', theme === 'dark' ? 'text-cyan-400' : 'text-blue-900']"
      >
        {{ service.title }}
      </h3>

      <p
        :class="[
          'mb-4 text-sm line-clamp-2',
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
        ]"
      >
        {{ service.description }}
      </p>

      <!-- Price -->
      <div class="flex items-baseline gap-2 mb-4">
        <span
          :class="[
            'text-3xl',
            theme === 'dark' ? 'text-cyan-400' : 'text-blue-600',
          ]"
        >
          {{ service.price }}
        </span>
        <span class="text-sm text-gray-500"> per pair </span>
      </div>

      <!-- Button -->
      <button
        @click="emit('view-details', service.id)"
        :class="[
          'w-full rounded-lg flex items-center justify-center gap-2 py-3 transition-colors',
          theme === 'dark'
            ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
            : 'bg-blue-600 hover:bg-blue-700 text-white',
        ]"
      >
        {{ translations.viewDetails }}
        <ArrowRight class="ml-2 w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from "lucide-vue-next";

const props = defineProps({
  service: Object,
  theme: String,
  translations: Object,
});

const emit = defineEmits(["view-details"]);
</script>

<style scoped>
/* Tailwind handles all styling */
</style>

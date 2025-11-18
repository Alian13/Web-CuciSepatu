<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="(image, index) in images"
      :key="index"
      :class="[
        'aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105',
        theme === 'dark' ? 'ring-1 ring-gray-700' : '',
      ]"
    >
      <img
        :src="image"
        :alt="`Gallery image ${index + 1}`"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: Array,
  theme: String,
});
</script>

<style scoped>
/* all styling handled via Tailwind */
</style>

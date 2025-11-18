<template>
  <!-- Return nothing if modal is closed -->
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
  >
    <!-- Backdrop -->
    <div
      class="absolute inset-0 backdrop-blur-sm"
      :class="theme === 'dark' ? 'bg-black/70' : 'bg-black/50'"
      @click="emit('close')"
    />

    <!-- Modal Box -->
    <div
      :class="[
        'relative rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300',
        theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white',
      ]"
    >
      <!-- Close Button -->
      <button
        @click="emit('close')"
        :class="[
          'absolute top-4 right-4 p-2 rounded-full transition-colors',
          theme === 'dark'
            ? 'hover:bg-gray-700 text-gray-400'
            : 'hover:bg-gray-100 text-gray-500',
        ]"
        aria-label="Close modal"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- Success Icon -->
      <div class="flex justify-center mb-6">
        <div
          :class="[
            'w-16 h-16 rounded-full flex items-center justify-center',
            theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100',
          ]"
        >
          <CheckCircle
            :class="[
              'w-10 h-10',
              theme === 'dark' ? 'text-green-400' : 'text-green-600',
            ]"
          />
        </div>
      </div>

      <!-- Title -->
      <h2
        class="text-center mb-3"
        :class="theme === 'dark' ? 'text-cyan-400' : 'text-blue-900'"
      >
        {{ translations.orderConfirmed }}
      </h2>

      <!-- Description -->
      <p
        class="text-center mb-6"
        :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-600'"
      >
        {{ translations.thankYou }}

        <span v-if="serviceName" class="block mt-2">
          {{ translations.service }}:
          <span :class="theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'">
            {{ serviceName }}
          </span>
        </span>
      </p>

      <p
        class="text-center text-sm mb-8"
        :class="theme === 'dark' ? 'text-gray-500' : 'text-gray-500'"
      >
        {{ translations.contactShortly }}
      </p>

      <!-- Close Button -->
      <button
        @click="emit('close')"
        :class="[
          'w-full rounded-lg py-3 transition-colors',
          theme === 'dark'
            ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
            : 'bg-blue-600 hover:bg-blue-700 text-white',
        ]"
      >
        {{ translations.close }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { X, CheckCircle } from "lucide-vue-next";

const props = defineProps({
  isOpen: Boolean,
  serviceName: String,
  theme: String,
  translations: Object,
});

const emit = defineEmits(["close"]);
</script>

<style scoped>
/* Tailwind handles styling */
</style>

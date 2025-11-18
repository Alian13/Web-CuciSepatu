<template>
  <section
    :class="[
      'min-h-screen py-16 md:py-24',
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white',
    ]"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16"
    >
      <!-- LEFT: Contact Info -->
      <div>
        <h1 :class="theme === 'dark' ? 'text-cyan-400' : 'text-blue-900'">
          {{ t.contactUs }}
        </h1>

        <p
          class="mt-4 mb-8 text-lg"
          :class="theme === 'dark' ? 'text-gray-300' : 'text-gray-600'"
        >
          {{ t.contactSubtitle }}
        </p>

        <div
          class="p-6 rounded-2xl shadow-md"
          :class="
            theme === 'dark'
              ? 'bg-gray-800 border border-gray-700'
              : 'bg-blue-50 text-blue-900'
          "
        >
          <h3 class="font-semibold mb-4">{{ t.contactInfo }}</h3>

          <div class="space-y-4 text-sm">
            <div class="flex gap-3">
              <span>📞</span> <span>+62 812-3456-7890</span>
            </div>
            <div class="flex gap-3">
              <span>📧</span> <span>info@frisenencleaner.com</span>
            </div>
            <div class="flex gap-3">
              <span>📍</span> <span>Jl. Bersih No. 123, Jakarta 12345</span>
            </div>
            <div class="pt-2">
              <p class="font-semibold">{{ t.hours }}</p>
              <p>Mon–Fri: 9AM – 6PM</p>
              <p>Sat–Sun: 10AM – 4PM</p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Contact Form -->
      <div>
        <ContactForm
          :theme="theme"
          :language="language"
          :translations="t"
          @submit-success="openModal"
        />
      </div>
    </div>

    <!-- Success Modal -->
    <OrderModal
      :isOpen="isModalOpen"
      :onClose="closeModal"
      :theme="theme"
      :translations="t"
    />
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useAppStore } from "../stores/useAppStore";

// IMPORT FORM — perhatikan path ini
import ContactForm from "../components/sections/ContactForm.vue";

// IMPORT MODAL
import OrderModal from "../components/ui/OrderModal.vue";

const store = useAppStore();

const theme = computed(() => store.theme);
const language = computed(() => store.language);
const t = computed(() => store.translations[language.value]);

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

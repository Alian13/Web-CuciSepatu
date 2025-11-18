<template>
  <footer
    :class="[
      'mt-auto',
      theme === 'dark'
        ? 'bg-gray-800 text-white border-t border-gray-700'
        : 'bg-blue-900 text-white',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="mb-4">Frisenen Cleaners</h3>

          <p
            :class="[
              'text-sm',
              theme === 'dark' ? 'text-gray-400' : 'text-blue-200',
            ]"
          >
            {{ t.description }}
          </p>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="mb-4">{{ t.contact }}</h3>

          <div class="space-y-3 text-sm">
            <div class="flex items-center gap-3">
              <Phone :class="iconClass" class="w-4 h-4" />
              <span :class="textClass">+62 812-3456-7890</span>
            </div>

            <div class="flex items-center gap-3">
              <Mail :class="iconClass" class="w-4 h-4" />
              <span :class="textClass">info@frisenencleaner.com</span>
            </div>

            <div class="flex items-center gap-3">
              <MapPin :class="iconClass" class="w-4 h-4" />
              <span :class="textClass">
                Jl. Bersih No. 123, Jakarta 12345
              </span>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="mb-4">{{ t.follow }}</h3>

          <div class="flex gap-4">
            <button :class="socialBtn">
              <Facebook class="w-5 h-5" />
            </button>

            <button :class="socialBtn">
              <Twitter class="w-5 h-5" />
            </button>

            <button :class="socialBtn">
              <Instagram class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div
        :class="[
          'mt-8 pt-8 text-center text-sm border-t',
          theme === 'dark'
            ? 'border-gray-700 text-gray-400'
            : 'border-blue-800 text-blue-200',
        ]"
      >
        <p>&copy; 2025 Frisenen Cleaners. {{ t.rights }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-vue-next";

const props = defineProps({
  theme: String,
  language: String,
});

const translations = {
  en: {
    description:
      "Professional shoe cleaning service with free pickup & delivery within 5 km.",
    contact: "Contact Us",
    follow: "Follow Us",
    rights: "All rights reserved.",
  },
  id: {
    description:
      "Layanan cuci sepatu profesional dengan antar jemput gratis dalam radius 5 km.",
    contact: "Hubungi Kami",
    follow: "Ikuti Kami",
    rights: "Hak cipta dilindungi.",
  },
};

const t = computed(() => translations[props.language]);

const iconClass = computed(() =>
  props.theme === "dark" ? "text-cyan-400" : "text-blue-300"
);

const textClass = computed(() =>
  props.theme === "dark" ? "text-gray-400" : "text-blue-200"
);

const socialBtn = computed(() =>
  [
    "w-10 h-10 rounded-full transition-colors flex items-center justify-center",
    props.theme === "dark"
      ? "bg-gray-700 hover:bg-gray-600"
      : "bg-blue-800 hover:bg-blue-700",
  ].join(" ")
);
</script>

<style scoped></style>

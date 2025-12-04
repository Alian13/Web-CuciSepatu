<template>
  <section
    :class="[
      'relative pt-10 pb-18 overflow-hidden',
      theme === 'dark'
        ? 'bg-gradient-to-br from-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 to-white',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Text -->
        <div class="text-center md:text-left">
          <h1
            :class="[
              'mb-4',
              theme === 'dark' ? 'text-cyan-400' : 'text-blue-900',
            ]"
          >
            {{ c.title }}
          </h1>

          <p
            :class="[
              'text-xl md:text-2xl mb-6',
              theme === 'dark' ? 'text-cyan-300' : 'text-blue-600',
            ]"
          >
            {{ c.tagline }}
          </p>

          <p
            :class="[
              'mb-8 max-w-lg',
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
            ]"
          >
            {{ c.description }}
          </p>

          <!-- Order Button -->
          <button
            @click="router.push({ name: 'services' })"
            :class="[
              'px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2',
              theme === 'dark'
                ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white',
            ]"
          >
            {{ c.orderNow }}
            <ArrowRight class="ml-2 w-5 h-5" />
          </button>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1631111734808-41a0b76b070f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzJTIwY2xlYW58ZW58MXx8fHwxNzYwMjY1OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Clean white sneakers"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Floating Stats -->
          <div
            class="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl hidden md:block"
            :class="[
              theme === 'dark'
                ? 'bg-cyan-900 text-white border border-cyan-700'
                : 'bg-blue-600 text-white',
            ]"
          >
            <p class="text-3xl mb-1">500+</p>
            <p
              :class="[
                'text-sm',
                theme === 'dark' ? 'text-cyan-200' : 'text-blue-100',
              ]"
            >
              {{ c.customers }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { ArrowRight } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

/* Props */
const props = defineProps({
  theme: String,
  language: String,
  translations: Object,
});

/* Emits */
const emit = defineEmits(["order-now"]);

/* Content dictionary */
const content = {
  en: {
    title: "Professional Shoe Cleaning Service",
    tagline: "Restore Your Shoes to Perfection",
    description:
      "Experience professional shoe cleaning that brings new life to your favorite footwear. We use premium products and expert techniques with free pickup & delivery within 5 km.",
    customers: "Happy Customers",
    orderNow: "Order Now",
  },
  id: {
    title: "Layanan Cuci Sepatu Profesional",
    tagline: "Kembalikan Kesempurnaan Sepatu Anda",
    description:
      "Rasakan layanan cuci sepatu profesional yang menghidupkan kembali sepatu favorit Anda. Kami menggunakan produk premium dan teknik ahli dengan antar jemput gratis dalam radius 5 km.",
    customers: "Pelanggan Puas",
    orderNow: "Pesan Sekarang",
  },
};

/* Auto choose language */
const c = computed(() => content[props.language]);
</script>

<style scoped>
/* Semua style pakai Tailwind */
</style>

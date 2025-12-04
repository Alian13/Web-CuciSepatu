<template>
  <section
    :class="['py-7 md:py-15', theme === 'dark' ? 'bg-gray-900' : 'bg-white']"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1
          :class="[
            'mb-5 text-3xl md:text-4xl font-bold',
            theme === 'dark' ? 'text-cyan-400' : 'text-blue-900',
          ]"
        >
          {{ c.title }}
        </h1>
        <p
          :class="[
            'text-xl max-w-3xl mx-auto',
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
          ]"
        >
          {{ c.subtitle }}
        </p>
      </div>

      <!-- Values Grid -->
      <div class="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
        <div
          v-for="(value, index) in values"
          :key="index"
          :class="[
            'p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow',
            theme === 'dark'
              ? 'bg-gray-800 border border-gray-700'
              : 'bg-white',
          ]"
        >
          <div
            :class="[
              'w-12 h-12 rounded-full flex items-center justify-center mb-6',
              theme === 'dark' ? 'bg-cyan-900/30' : 'bg-blue-100',
            ]"
          >
            <component
              :is="value.icon"
              :class="[
                'w-6 h-6',
                theme === 'dark' ? 'text-cyan-400' : 'text-blue-600',
              ]"
            />
          </div>

          <h3
            :class="[
              'mb-3',
              theme === 'dark' ? 'text-cyan-400' : 'text-blue-900',
            ]"
          >
            {{ value.title }}
          </h3>

          <p :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-600'">
            {{ value.description }}
          </p>
        </div>
      </div>

      <!-- Image + Why Choose -->
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1662729753857-e6c80b7ab86f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwc2hvZSUyMGNsZWFuaW5nfGVufDF8fHx8MTc2MDI3MTYxOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional shoe cleaning"
            class="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2
            :class="[
              'mb-6',
              theme === 'dark' ? 'text-cyan-400' : 'text-blue-900',
            ]"
          >
            {{ c.whyChoose }}
          </h2>

          <div class="space-y-4">
            <div
              class="flex items-start gap-4"
              v-for="(reason, idx) in reasons"
              :key="idx"
            >
              <div
                :class="[
                  'w-2 h-2 rounded-full mt-2 flex-shrink-0',
                  theme === 'dark' ? 'bg-cyan-400' : 'bg-blue-600',
                ]"
              />
              <p :class="theme === 'dark' ? 'text-gray-400' : 'text-gray-600'">
                {{ reason }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { Award, Heart, Target, Droplet } from "lucide-vue-next";

// Props
const props = defineProps({
  theme: String,
  language: String,
});

// Content dictionary
const content = {
  en: {
    title: "About Frisenen Cleaners",
    subtitle:
      "Dedicated to restoring the pristine beauty of your favorite footwear with professional care and attention to detail.",
    vision: "Our Vision",
    visionDesc:
      "To become the most trusted shoe cleaning service in Indonesia, setting industry standards for quality and customer satisfaction with eco-friendly practices.",
    story: "Our Story",
    storyDesc:
      "Founded by shoe enthusiasts who understand the value of quality footwear, Frisenen Cleaners was born from a passion for preserving the beauty and longevity of shoes.",
    quality: "Quality Commitment",
    qualityDesc:
      "We use only premium, eco-friendly cleaning products and proven techniques to ensure your shoes receive the care they deserve.",
    whyChoose: "Why Choose Us?",
    reason1: "Expert technicians with years of experience in footwear care",
    reason2:
      "Premium, eco-friendly cleaning solutions safe for all shoe materials",
    reason3: "Convenient free pickup and delivery within 5 km radius",
    reason4: "100% satisfaction guarantee on all our services",
  },

  id: {
    title: "Tentang Frisenen Cleaners",
    subtitle:
      "Berdedikasi untuk mengembalikan keindahan sempurna sepatu favorit Anda dengan perawatan profesional dan perhatian terhadap detail.",
    vision: "Visi Kami",
    visionDesc:
      "Menjadi layanan cuci sepatu terpercaya di Indonesia, menetapkan standar industri untuk kualitas dan kepuasan pelanggan dengan praktik ramah lingkungan.",
    story: "Cerita Kami",
    storyDesc:
      "Didirikan oleh penggemar sepatu yang memahami nilai dari alas kaki berkualitas, Frisenen Cleaners lahir dari hasrat untuk menjaga keindahan dan umur panjang sepatu.",
    quality: "Komitmen Kualitas",
    qualityDesc:
      "Kami hanya menggunakan produk pembersih premium dan ramah lingkungan serta teknik yang terbukti untuk memastikan sepatu Anda mendapat perawatan terbaik.",
    whyChoose: "Mengapa Memilih Kami?",
    reason1:
      "Teknisi ahli dengan pengalaman bertahun-tahun dalam perawatan sepatu",
    reason2:
      "Solusi pembersih premium dan ramah lingkungan yang aman untuk semua bahan sepatu",
    reason3: "Layanan antar jemput gratis yang nyaman dalam radius 5 km",
    reason4: "100% garansi kepuasan untuk semua layanan kami",
  },
};

// Pilih bahasa
const c = computed(() => content[props.language]);

const values = computed(() => [
  {
    icon: Target,
    title: c.value.vision,
    description: c.value.visionDesc,
  },
  {
    icon: Heart,
    title: c.value.story,
    description: c.value.storyDesc,
  },
  {
    icon: Droplet,
    title: c.value.quality,
    description: c.value.qualityDesc,
  },
]);

// Reasons list
const reasons = computed(() => [
  c.value.reason1,
  c.value.reason2,
  c.value.reason3,
  c.value.reason4,
]);
</script>

<style scoped>
/* all styling via tailwind */
</style>

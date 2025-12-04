<template>
  <div
    class="min-h-screen"
    :class="theme === 'dark' ? 'bg-gray-900' : 'bg-white'"
  >
    <!-- Service Cards -->
    <section class="pt-16 pb-20">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
          :theme="theme"
          :translations="translations"
          :language="store.language"
          @click="goToDetail(service.id)"
        />
      </div>
    </section>

    <!-- Pickup Banner -->
    <section class="pt-4 pb-16 px-4 sm:px-6 lg:px-8">
      <div
        class="max-w-4xl mx-auto rounded-3xl py-10 px-8 text-center shadow-md transition-all hover:shadow-lg"
        :class="
          theme === 'dark'
            ? 'bg-cyan-900/30 border border-cyan-800 text-cyan-300'
            : 'bg-blue-100/40 text-blue-900'
        "
      >
        <div class="flex flex-col items-center gap-4">
          <!-- Better Icon -->
          <Truck
            class="w-10 h-10"
            :class="theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'"
          />

          <!-- Title -->
          <h3 class="text-xl font-semibold">
            {{
              store.language === "id"
                ? "Gratis Antar Jemput"
                : "Free Pickup & Delivery"
            }}
          </h3>

          <!-- Subtitle -->
          <p class="text-sm opacity-80">
            {{
              store.language === "id"
                ? "Layanan antar jemput dalam radius 5 km."
                : "Free pickup and delivery within 5 km."
            }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "../stores/useAppStore";

import ServiceCard from "../components/ui/ServiceCard.vue";
import { Truck } from "lucide-vue-next";

import { services } from "../data/services";

const router = useRouter();
const store = useAppStore();

const theme = computed(() => store.theme);
const translations = computed(() => store.currentTranslations);

function goToDetail(id) {
  router.push(`/services/${id}`);
}
</script>

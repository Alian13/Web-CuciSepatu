<template>
  <div :class="theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white'">
    <ServiceDetail
      :service="service"
      :theme="theme"
      :translations="translations"
      @back="goBack"
      @order="openOrderModal"
    />

    <OrderModal
      :isOpen="modalOpen"
      :serviceName="service?.title[store.language]"
      :theme="theme"
      :translations="translations"
      @close="modalOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { services } from "../data/services";

import ServiceDetail from "../components/sections/ServiceDetail.vue";
import OrderModal from "../components/ui/OrderModal.vue";

import { useAppStore } from "../stores/useAppStore";

const store = useAppStore();

const theme = computed(() => store.theme);
const translations = computed(() => store.currentTranslations);

const modalOpen = ref(false);

const route = useRoute();
const router = useRouter();

const serviceId = route.params.id;
const service = services.find((s) => s.id === serviceId);

function goBack() {
  router.push("/services");
}

function openOrderModal() {
  modalOpen.value = true;
}
</script>

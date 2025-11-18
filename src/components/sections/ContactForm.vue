<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Name -->
    <div>
      <label for="name" :class="theme === 'dark' ? 'text-gray-300' : ''">
        {{ translations.name }} *
      </label>

      <input
        id="name"
        name="name"
        type="text"
        v-model="formData.name"
        required
        :placeholder="p.name"
        :class="inputClasses"
      />
    </div>

    <!-- Email -->
    <div>
      <label for="email" :class="theme === 'dark' ? 'text-gray-300' : ''">
        {{ translations.email }} *
      </label>

      <input
        id="email"
        name="email"
        type="email"
        v-model="formData.email"
        required
        :placeholder="p.email"
        :class="inputClasses"
      />
    </div>

    <!-- Phone -->
    <div>
      <label for="phone" :class="theme === 'dark' ? 'text-gray-300' : ''">
        {{ translations.phone }} *
      </label>

      <input
        id="phone"
        name="phone"
        type="tel"
        v-model="formData.phone"
        required
        :placeholder="p.phone"
        :class="inputClasses"
      />
    </div>

    <!-- Shoe Type -->
    <div>
      <label for="shoeType" :class="theme === 'dark' ? 'text-gray-300' : ''">
        {{ translations.shoeType }} *
      </label>

      <input
        id="shoeType"
        name="shoeType"
        type="text"
        v-model="formData.shoeType"
        required
        :placeholder="p.shoeType"
        :class="inputClasses"
      />
    </div>

    <!-- Address -->
    <div>
      <label for="address" :class="theme === 'dark' ? 'text-gray-300' : ''">
        {{ translations.address }} *
      </label>

      <input
        id="address"
        name="address"
        type="text"
        v-model="formData.address"
        required
        :placeholder="p.address"
        :class="inputClasses"
      />
    </div>

    <!-- Notes -->
    <div>
      <label for="notes" :class="theme === 'dark' ? 'text-gray-300' : ''">
        {{ translations.message }}
      </label>

      <textarea
        id="notes"
        name="notes"
        rows="4"
        v-model="formData.notes"
        :placeholder="p.notes"
        :class="textareaClasses"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      :class="[
        'w-full py-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2',
        theme === 'dark'
          ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
          : 'bg-blue-600 hover:bg-blue-700 text-white',
      ]"
    >
      <Send class="w-5 h-5" />
      {{ translations.sendRequest }}
    </button>
  </form>
</template>

<script setup>
import { reactive, computed } from "vue";
import { Send } from "lucide-vue-next";

const props = defineProps({
  theme: String,
  language: String,
  translations: Object,
});

const emit = defineEmits(["submit-success"]);

// Local form state
const formData = reactive({
  name: "",
  email: "",
  phone: "",
  shoeType: "",
  address: "",
  notes: "",
});

// Placeholders dictionary
const placeholders = {
  en: {
    name: "Enter your full name",
    email: "your.email@example.com",
    phone: "+62 812-3456-7890",
    shoeType: "e.g., Sneakers, Boots, Leather shoes",
    address: "Your pickup address",
    notes: "Any special requests or concerns about your shoes...",
  },
  id: {
    name: "Masukkan nama lengkap Anda",
    email: "email.anda@example.com",
    phone: "+62 812-3456-7890",
    shoeType: "mis., Sneakers, Boots, Sepatu kulit",
    address: "Alamat penjemputan Anda",
    notes: "Permintaan khusus atau catatan tentang sepatu Anda...",
  },
};

// Auto-select placeholders based on language
const p = computed(() => placeholders[props.language]);

// Reusable classes
const inputClasses = computed(() =>
  [
    "mt-2 w-full px-4 py-3 rounded-lg border outline-none transition-all",
    props.theme === "dark"
      ? "bg-gray-700 border-gray-600 text-white focus:border-cyan-500 focus:ring-cyan-500"
      : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
  ].join(" ")
);

const textareaClasses = inputClasses;

// Submit handler
function handleSubmit() {
  console.log("Form submitted:", JSON.parse(JSON.stringify(formData)));

  emit("submit-success");

  // Reset form
  formData.name = "";
  formData.email = "";
  formData.phone = "";
  formData.shoeType = "";
  formData.address = "";
  formData.notes = "";
}
</script>

<style scoped>
/* all handled by tailwind */
</style>

<template>
  <header
    :class="[
      'shadow-sm sticky top-0 z-50',
      theme === 'dark' ? 'bg-gray-800 border-b border-gray-700' : 'bg-white',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4 md:py-6">
        <!-- Logo -->
        <button
          @click="goTo('home')"
          class="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Sparkles
            :class="[
              'w-6 h-6 md:w-8 md:h-8',
              theme === 'dark' ? 'text-cyan-400' : 'text-blue-600',
            ]"
          />
          <span :class="theme === 'dark' ? 'text-cyan-400' : 'text-blue-900'">
            Frisenen Cleaners
          </span>
        </button>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-6">
          <button
            v-for="item in navItems"
            :key="item.path"
            @click="goTo(item.path)"
            :class="[
              'transition-colors',
              currentPage === item.path
                ? theme === 'dark'
                  ? 'text-cyan-400'
                  : 'text-blue-600'
                : theme === 'dark'
                ? 'text-gray-300 hover:text-cyan-400'
                : 'text-gray-700 hover:text-blue-600',
            ]"
          >
            {{ item.name }}
          </button>

          <!-- Theme toggle -->
          <button
            @click="$emit('toggle-theme')"
            :class="[
              'p-2 rounded-lg transition-colors',
              theme === 'dark'
                ? 'bg-gray-700 hover:bg-gray-600 text-cyan-400'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700',
            ]"
          >
            <Sun v-if="theme === 'dark'" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <!-- Language Toggle -->
          <button
            @click="$emit('toggle-language')"
            :class="[
              'px-4 py-2 rounded-lg transition-colors flex items-center gap-2',
              theme === 'dark'
                ? 'bg-gray-700 hover:bg-gray-600 text-cyan-400'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700',
            ]"
          >
            <Globe class="w-4 h-4" />
            <span class="uppercase">{{ language }}</span>
          </button>
        </nav>

        <!-- Mobile menu button -->
        <button class="md:hidden p-2" @click="mobileMenuOpen = !mobileMenuOpen">
          <X
            v-if="mobileMenuOpen"
            :class="[
              'w-6 h-6',
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700',
            ]"
          />
          <Menu
            v-else
            :class="[
              'w-6 h-6',
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700',
            ]"
          />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav
        v-if="mobileMenuOpen"
        :class="[
          'md:hidden pb-4 border-t',
          theme === 'dark' ? 'border-gray-700' : 'border-gray-100',
        ]"
      >
        <div class="flex flex-col gap-2 pt-4">
          <button
            v-for="item in navItems"
            :key="item.path"
            @click="mobileNavigate(item.path)"
            :class="[
              'text-left py-2 px-4 rounded-lg transition-colors',
              currentPage === item.path
                ? theme === 'dark'
                  ? 'bg-cyan-900/30 text-cyan-400'
                  : 'bg-blue-50 text-blue-600'
                : theme === 'dark'
                ? 'text-gray-300 hover:bg-gray-700'
                : 'text-gray-700 hover:bg-gray-50',
            ]"
          >
            {{ item.name }}
          </button>

          <!-- Mobile theme + language -->
          <div class="flex gap-2 mt-2 px-4">
            <button
              @click="$emit('toggle-theme')"
              :class="[
                'flex-1 p-2 rounded-lg transition-colors flex items-center justify-center gap-2',
                theme === 'dark'
                  ? 'bg-gray-700 text-cyan-400'
                  : 'bg-gray-100 text-gray-700',
              ]"
            >
              <Sun v-if="theme === 'dark'" class="w-4 h-4" />
              <Moon v-else class="w-4 h-4" />
              <span class="text-sm">{{
                theme === "dark" ? "Light" : "Dark"
              }}</span>
            </button>

            <button
              @click="$emit('toggle-language')"
              :class="[
                'flex-1 p-2 rounded-lg transition-colors flex items-center justify-center gap-2',
                theme === 'dark'
                  ? 'bg-gray-700 text-cyan-400'
                  : 'bg-gray-100 text-gray-700',
              ]"
            >
              <Globe class="w-4 h-4" />
              <span class="text-sm uppercase">{{ language }}</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Menu, X, Sparkles, Moon, Sun, Globe } from "lucide-vue-next";

/* Props */
const props = defineProps({
  currentPage: String,
  theme: String,
  language: String,
  translations: Object,
});

/* Emits */
defineEmits(["toggle-theme", "toggle-language"]);

/* Router */
const router = useRouter();

function goTo(path) {
  router.push({ name: path });
}

/* Mobile menu */
const mobileMenuOpen = ref(false);

/* Nav Items (translated) */
const navItems = computed(() => [
  { name: props.translations.home, path: "home" },
  { name: props.translations.about, path: "about" },
  { name: props.translations.services, path: "services" },
  { name: props.translations.contact, path: "contact" },
]);

/* Mobile navigate */
function mobileNavigate(path) {
  router.push({ name: path });
  mobileMenuOpen.value = false;
}
</script>

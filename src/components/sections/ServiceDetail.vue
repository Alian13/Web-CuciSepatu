<template>
  <!-- If service not found -->
  <div
    v-if="!service"
    :class="[
      'min-h-screen flex items-center justify-center',
      theme === 'dark' ? 'bg-gray-900' : 'bg-white',
    ]"
  >
    <div class="text-center">
      <h2
        :class="[theme === 'dark' ? 'text-cyan-400' : 'text-blue-900', 'mb-4']"
      >
        {{ translations.serviceNotFound }}
      </h2>

      <button
        @click="emit('back')"
        :class="[
          'px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors',
          theme === 'dark'
            ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
            : 'bg-blue-600 hover:bg-blue-700 text-white',
        ]"
      >
        <ArrowLeft class="mr-2 w-4 h-4" />
        {{ translations.backToServices }}
      </button>
    </div>
  </div>

  <!-- If service exists -->
  <section
    v-else
    :class="['py-16 md:py-24', theme === 'dark' ? 'bg-gray-900' : 'bg-white']"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Back Button -->
      <button
        @click="emit('back')"
        :class="[
          'mb-8 px-5 py-3 rounded-lg flex items-center gap-2 transition-colors border',
          theme === 'dark'
            ? 'border-cyan-700 text-cyan-400 hover:bg-cyan-900/30'
            : 'border-blue-200 text-blue-600 hover:bg-blue-50',
        ]"
      >
        <ArrowLeft class="w-4 h-4" />
        {{ translations.backToServices }}
      </button>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Image -->
        <div
          :class="[
            'rounded-2xl overflow-hidden shadow-2xl',
            theme === 'dark' ? 'ring-1 ring-gray-700' : '',
          ]"
        >
          <img
            :src="service.image"
            :alt="service.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content -->
        <div>
          <h1
            :class="[
              theme === 'dark' ? 'text-cyan-400' : 'text-blue-900',
              'mb-4',
            ]"
          >
            {{ service.title }}
          </h1>

          <!-- Price -->
          <div class="flex items-baseline gap-3 mb-6">
            <span
              :class="[
                'text-4xl',
                theme === 'dark' ? 'text-cyan-400' : 'text-blue-600',
              ]"
            >
              {{ service.price }}
            </span>
            <span class="text-gray-500">per pair</span>
          </div>

          <p
            :class="[
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
              'mb-8 leading-relaxed',
            ]"
          >
            {{ service.description }}
          </p>

          <!-- Features -->
          <div
            :class="[
              'rounded-2xl p-6 mb-8',
              theme === 'dark'
                ? 'bg-cyan-900/20 border border-cyan-800'
                : 'bg-blue-50',
            ]"
          >
            <h3
              :class="[
                theme === 'dark' ? 'text-cyan-400' : 'text-blue-900',
                'mb-4',
              ]"
            >
              {{ translations.whatsIncluded }}
            </h3>

            <ul class="space-y-3">
              <li
                v-for="(feature, index) in service.features"
                :key="index"
                class="flex items-start gap-3"
              >
                <div
                  :class="[
                    'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-[3px]',
                    theme === 'dark' ? 'bg-cyan-600' : 'bg-blue-600',
                  ]"
                >
                  <Check class="w-3 h-3 text-white" />
                </div>

                <span
                  :class="[
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700',
                  ]"
                >
                  {{ feature }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Process -->
          <div class="mb-8">
            <h3
              :class="[
                theme === 'dark' ? 'text-cyan-400' : 'text-blue-900',
                'mb-4',
              ]"
            >
              {{ translations.ourProcess }}
            </h3>

            <div class="space-y-4">
              <!-- Step 1 -->
              <div class="flex gap-4">
                <div
                  :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white',
                    theme === 'dark' ? 'bg-cyan-600' : 'bg-blue-600',
                  ]"
                >
                  1
                </div>

                <div>
                  <h4
                    :class="[
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-900',
                      'mb-1',
                    ]"
                  >
                    {{ translations.inspection }}
                  </h4>
                  <p
                    :class="[
                      'text-sm',
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
                    ]"
                  >
                    {{ translations.inspectionDesc }}
                  </p>
                </div>
              </div>

              <!-- Step 2 -->
              <div class="flex gap-4">
                <div
                  :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white',
                    theme === 'dark' ? 'bg-cyan-600' : 'bg-blue-600',
                  ]"
                >
                  2
                </div>

                <div>
                  <h4
                    :class="[
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-900',
                      'mb-1',
                    ]"
                  >
                    {{ translations.deepCleaning }}
                  </h4>
                  <p
                    :class="[
                      'text-sm',
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
                    ]"
                  >
                    {{ translations.deepCleaningDesc }}
                  </p>
                </div>
              </div>

              <!-- Step 3 -->
              <div class="flex gap-4">
                <div
                  :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white',
                    theme === 'dark' ? 'bg-cyan-600' : 'bg-blue-600',
                  ]"
                >
                  3
                </div>

                <div>
                  <h4
                    :class="[
                      theme === 'dark' ? 'text-cyan-400' : 'text-blue-900',
                      'mb-1',
                    ]"
                  >
                    {{ translations.protectionFinish }}
                  </h4>
                  <p
                    :class="[
                      'text-sm',
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
                    ]"
                  >
                    {{ translations.protectionFinishDesc }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Order CTA -->
          <button
            @click="emit('order')"
            :class="[
              'w-full py-6 rounded-lg shadow-lg hover:shadow-xl transition-all',
              theme === 'dark'
                ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white',
            ]"
          >
            {{ translations.orderThisService }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowLeft, Check } from "lucide-vue-next";

const props = defineProps({
  service: Object,
  theme: String,
  translations: Object,
});

const emit = defineEmits(["back", "order"]);
</script>

<style scoped>
/* All styling handled by Tailwind */
</style>

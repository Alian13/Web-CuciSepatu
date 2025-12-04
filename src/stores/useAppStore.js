import { defineStore } from "pinia";
import translationsData from "../data/translations.js";

export const useAppStore = defineStore("app", {
  state: () => ({
    theme: "light",
    language: "id",
    translations: translationsData,
  }),

  getters: {
    currentTranslations: (state) => state.translations[state.language],
  },

  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", this.theme === "dark");
    },

    toggleLanguage() {
      this.language = this.language === "id" ? "en" : "id";
    },
  },
});

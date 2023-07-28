// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
    "@vee-validate/nuxt",
  ],
  css: ["~/assets/styles/global.scss"],
  imports: {
    dirs: ["./stores"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  i18n: {
    vueI18n: "./i18n/config.ts",
  },
  googleFonts: {
    families: {
      Sarabun: [400, 600, 700],
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css', '~/assets/css/components.css'], 
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      'postcss-nested': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})

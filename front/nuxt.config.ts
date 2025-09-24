// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity'
  ],
  css: ['~/assets/css/main.css', '~/assets/css/components.css'], 
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Rachel Yvernes', // default fallback title
      htmlAttrs: {
        lang: 'fr',
      },
    }
  },

  sanity: {
    projectId: 'wx61n1tpd96fpixftuq5wq6s',
    dataset: 'production'
  },

  pinia: {
    storesDirs: ['./app/stores/**'],
  },

  imports: {
    dirs: ['./app/stores/**']
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

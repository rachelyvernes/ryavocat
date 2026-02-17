import glsl from 'vite-plugin-glsl'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 1. DIS MOI À NITRO QUE TU ES SUR NETLIFY
  nitro: {
    preset: 'netlify', // Crucial pour que le build soit optimisé pour Netlify
    prerender: {
      autoSubfolderIndex: false
    }
  },

  // 2. LE CORRECTIF POUR LE LOADER INFINI
  experimental: {
    payloadExtraction: false // Évite les erreurs de chargement des fichiers JSON de données
  },

  devServer: {
    host: '0.0.0.0'
  },

  app: {
    head: {
      title: 'Rachel',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    },
  },

  modules: ['@nuxtjs/sanity', '@pinia/nuxt', '@nuxtjs/i18n', 'nuxt-simple-sitemap'],
  
  sanity: {
    projectId: '5u5dp5q6',
    dataset: 'production',
    useCdn: true,
    additionalClients: {
      preview: {
        useCdn: false,
        withCredentials: true
      },
    },
  },
  
  imports: {
    dirs: ['stores'],
  },

  css: ['~/assets/css/main.css', '~/assets/css/components.css'],

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      'postcss-nested': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    plugins: [glsl()],
    // 3. OPTIMISATION POUR LES LIBS LOURDES (GSAP/THREE)
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  }
})
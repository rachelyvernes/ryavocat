import { defineNuxtConfig } from 'nuxt/config'
import glsl from 'vite-plugin-glsl'

export default defineNuxtConfig({
  // Configuration Nitro pour Netlify
  nitro: {
    preset: 'netlify',
    prerender: {
      autoSubfolderIndex: false
    }
  },

  // Correctif pour le chargement des pages (Loader)
  experimental: {
    payloadExtraction: false
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
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    plugins: [glsl()],
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  }
})
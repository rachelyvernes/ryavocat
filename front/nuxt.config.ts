import glsl from 'vite-plugin-glsl'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0'
  },
  app: {
    head: {
      title: 'Rachel',
      link: []
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
	}
})

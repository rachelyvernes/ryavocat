import {  defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
  state: () => {
    return {
			siteOptions: {},
      previewIsActive: false,
      locale: 'fr',
			slugs: {},
    }
  },

  actions: {
    async fetchSiteContent(url) {
      if(url.includes('/en')) {
        this.locale = 'en'
      }
      const { data } = await useSanityQuery(groq`{
        "siteOptions": *[_type == "siteOptions" && language == "${this.locale}"] [0],
        "slugs": {
          "pages": {
            "fr": *[_type == "page" && language == "fr"].slug.current,
            "en": *[_type == "page" && language == "en"].slug.current
          }
        }
      }`)
      this.siteOptions = data.value.siteOptions
			this.slugs = data.value.slugs
    },
    refreshSiteContent() {
      const { data } = useSanity(groq`*[_type == "siteOptions" && language == "${this.locale}"][0]`)
      this.siteOptions = data.value
    },
  },
})
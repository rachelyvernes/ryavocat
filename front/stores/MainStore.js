import {  defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
  state: () => {
    return {
			siteOptions: {},
      previewIsActive: false,
			slugs: {},
    }
  },

  actions: {
    async fetchSiteContent(url) {
      if(url.includes('/en')) {
        this.locale = 'en'
      }
      const { data } = await useSanityQuery(groq`{
        "siteOptions": *[_type == "siteOptions"] [0]
      }`)
      this.siteOptions = data.value.siteOptions
			this.slugs = data.value.slugs
    },
    refreshSiteContent() {
      const { data } = useSanity(groq`*[_type == "siteOptions"][0]`)
      this.siteOptions = data.value
    },
  },
})
<template>
  <div class="pt-[84px] xl:pt-[114px]" :class="`page-${(route.name === 'publications-slug')?'publications':route.name}`">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup>
const route = useRoute()
const mainStore = useMainStore()

const { $urlFor } = useNuxtApp()
const ogImageUrl = mainStore.siteOptions?.ogImage_default
	? $urlFor(mainStore.siteOptions?.ogImage_default).width(1200).url()
	: ''

useHead({
  title: mainStore.siteOptions?.title_default,
  htmlAttrs: {
    lang: 'fr',
  },
  meta: [
    {
      property: 'og:locale',
      content: 'fr',
    },
    {
      property: 'og:title',
      content: mainStore.siteOptions?.title_default,
    },
    {
      property: 'og:site_name',
      content: mainStore.siteOptions?.title_default,
    },
    {
      name: 'description',
      content: mainStore.siteOptions?.description_default,
    },
    {
      property: 'og:description',
      content: mainStore.siteOptions?.description_default,
    },
    {
      property: 'og:image',
      content: ogImageUrl,
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:title',
      content: mainStore.siteOptions?.title_default,
    },
    {
      property: 'twitter:description',
      content: mainStore.siteOptions?.description_default,
    },
    {
      property: 'twitter:image',
      content: ogImageUrl,
    },
  ],
})



</script>
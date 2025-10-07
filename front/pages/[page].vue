<template>
  <div class="Publication page">
    <Head v-if="data">
      <Title v-if="data.title">{{ data.title }}</Title>
      <Meta v-if="data.title" name="og:title" :content="data.title"/>
      <Meta v-if="data.title" name="twitter:title" :content="data.title"/>
      <Meta v-if="data.description" name="description" :content="data.description"/>
      <Meta v-if="data.description_og" property="og:description" :content="data.description_og"/>
      <Meta v-else-if="data.description" property="og:description" :content="data.description"/>
      <Meta v-if="data.description_og" property="twitter:description" :content="data.description_og"/>
      <Meta v-else-if="data.description" property="twitter:description" :content="data.descriptiong"/>
      <Meta v-if="data.ogImage" property="og:image" :content="$urlFor(data.ogImage).width(1200).url()"/>
      <Meta v-if="data.ogImage" property="twitter:image" :content="$urlFor(data.ogImage).width(1200).url()"/>
    </Head>
    <div v-if="data" class="content -sm">
      <h1 class="text-[16px] uppercase">
        {{data.title}}
      </h1>
      <img class="w-full mt-8 object-cover object-center" :src="$urlFor(data.cover).width(1200).url()" :alt="data.title" loading="lazy">
      <div class="wysig mt-8">
        <SanityContent :blocks="data.content" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const query = groq`*[_type == "page" && slug.current == "${route.params.page}"] | order(_updatedAt desc)[0]`
const data = await useSanityData({
  query: query,
})
</script>

<style>

</style>
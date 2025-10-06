<template>
  <div class="Publication page">
    <div class="content -sm">
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
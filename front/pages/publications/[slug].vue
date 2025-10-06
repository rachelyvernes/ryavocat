<template>
  <div class="Publication page">
    <div class="content -sm">
      <h1 class="text-[16px] uppercase">
        {{data.title}}
      </h1>
      <img class="w-full mt-8 object-cover object-center" :src="$urlFor(data.cover).width(1200).url()" :alt="data.title" loading="lazy">
      <div class="wysig whitespace-pre-line mt-8">
        <SanityContent :blocks="data.contenu" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
console.log(route.params.slug)
const query = groq`*[_type == "publication" && slug.current == "${route.params.slug}"] | order(_updatedAt desc)[0]`
const data = await useSanityData({
  query: query,
})
</script>

<style>

</style>
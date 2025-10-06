<template>
  <div class="pt-[84px] xl:pt-[114px]" :class="`page-${(route.name === 'publications-slug')?'publications':route.name}`">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup>
const route = useRoute()
</script>
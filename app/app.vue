<template>
  <div class="pt-[114px]" :class="`page-${(route.name === 'publications-publication')?'publications':route.name}`">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
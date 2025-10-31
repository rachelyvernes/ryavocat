<template>
  <NuxtLink :to="link" class="btn -cta" :class="{'-light': light == 'true'}" :target="is_intern? '_self' : '_blank'">
    {{ text }}
  </NuxtLink>
</template>
<script setup>
const props = defineProps({
  link: {
    type: String,
  },
  text: {
    type: String,
  },
  is_intern: {
    type: Boolean,
  },
  light: {
    type: String,
  }
})
</script>
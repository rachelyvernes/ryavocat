<template>
  <NuxtLink
    v-if="is_intern"
    :to="link"
    class="btn -cta"
    :class="[{ '-light': light === 'true' }, $attrs.class]"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>

  <a
    v-else
    :href="link"
    class="btn -cta"
    :class="[{ '-light': light === 'true' }, $attrs.class]"
    target="_blank"
    rel="noopener"
  >
    <slot>{{ text }}</slot>
  </a>
</template>

<script setup>
defineProps({
  link: String,
  text: String,
  is_intern: Boolean,
  light: String
})
</script>

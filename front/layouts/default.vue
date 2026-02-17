<template>
  <div class="content">
    <Header @open-contact="openContact" />

    <slot />

    <Footer />

    <ContactModal ref="contactModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ContactModal from '~/components/ContactModal.vue'

const contactModal = ref(null)

const openContact = () => {
  console.log('✅ openContact() appelé')
  console.log('contactModal ref =', contactModal.value)
  contactModal.value?.open?.()
}
</script>

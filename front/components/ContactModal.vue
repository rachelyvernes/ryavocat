<template>
  <div class="content">
    <Header @open-contact="openContact" />
    <NuxtPage />
    <Footer />

    <!-- TEST: si ça n’apparaît pas dans le DOM, c’est que le composant n’est pas chargé -->
    <ContactModal ref="contactModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ContactModal from '~/components/ContactModal.vue'

const contactModal = ref(null)

const openContact = () => {
  console.log('open-contact reçu, ref:', contactModal.value)
  contactModal.value?.open?.()
}
</script>

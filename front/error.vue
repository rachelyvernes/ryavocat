<template>
  <div class="grid place-items-center h-screen bg-bleu color-blanc">
    <main>
      <h1 class="text-center font-source">
        404
      </h1>
      <p class=" text-center uppercase font-source">
        La page que vous cherchez <br> est introuvable.
      </p>
    </main>
    <FooterComponent />
  </div>
</template>
<script setup>
const { $initGradient, $gsap } = useNuxtApp()
const props = defineProps({
	error: {
		type: Object,
		default: () => {},
	},
})

let gradient
onMounted(() => {
  setTimeout(() => {
    const mainStore = useMainStore()
    if (mainStore.locale == 'en') {
      document.querySelector('.error-message').innerHTML = 'The page you are looking for <br> cannot be found.'
      $gsap.to('.error-message', {opacity: 1, duration: 0.6})
    }
  }, 100)
})
onBeforeUnmount(() => {
})

</script>

<style scoped>
</style>

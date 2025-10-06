<template>
  <div>
    <HeaderComponent />
    <main class="min-h-screen relative overflow-hidden">
      <h1 class="text-center">
        404
      </h1>
      <p class="error-message -h3 text-center uppercase opacity-0">
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
  gradient = $initGradient({ container: document.querySelector('main'), color1: '#FFFF7F', color2: '#97F1FD', zoom: 2, rotation: -Math.PI/7, width: 0.4})
})
onBeforeUnmount(() => {
  gradient.kill()
})

</script>

<style scoped>
</style>

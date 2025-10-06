<template>
  <div>
    <HeaderComponent />
    <main class="min-h-screen relative overflow-hidden">
      <canvas gradient fade class="absolute top-1/2 -z-10 -translate-y-1/2 inset-0 w-full h-[100vw] opacity-80"></canvas>
      <h1 class="text-center">
        404
      </h1>
      <p class="error-message -h3 text-center uppercase opacity-0">
        La page que vous cherchez <br> est introuvable.
      </p>
      <img class="absolute bottom-0 right-1/2 translate-x-1/2 w-[300px]" src="~assets/img/equipe.png" alt="">
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
h1{
  margin-bottom: 20px;
  padding-top: 16px;
  @media (max-width: 680px) {
    padding-top: 10vh;
  }
}
  canvas {
    height: 100vw;
  }
</style>

export default defineNuxtPlugin(async () => {
  const mainStore = useMainStore()
  const route = useRoute()

	// await mainStore.fetchSiteContent()

  // const preview = route.query.preview && route.query.preview === 'true'
  // if (preview) {
	// 	mainStore.previewIsActive = true
  // }
})

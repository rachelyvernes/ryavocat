// plugins/flowbite.client.ts
import { initFlowbite } from 'flowbite'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('page:finish', () => {
      initFlowbite()
    })
  }
})
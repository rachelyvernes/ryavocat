import imageUrlBuilder from '@sanity/image-url'
import { buildFileUrl, getIdFromString } from '@sanity/asset-utils'

export default defineNuxtPlugin(() => {
  const builder = imageUrlBuilder(useSanity().config)
  function urlFor(source) {
    return builder.image(source).auto('format')
  }
  function fileurlFor(source) {
    return buildFileUrl({assetId: getIdFromString(source.asset._ref), extension: 'mp3'}, useSanity().config)
  }
  return {
    provide: { urlFor, fileurlFor }
  }
})

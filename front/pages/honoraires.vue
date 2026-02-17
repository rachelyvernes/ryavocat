<template>
  <div ref="rootEl" class="Honoraires page bg-white">
    <Head v-if="data">
      <Title v-if="data.title">{{ data.title }}</Title>
      <Meta v-if="data.title" name="og:title" :content="data.title" />
      <Meta v-if="data.title" name="twitter:title" :content="data.title" />

      <Meta v-if="data.description" name="description" :content="data.description" />
      <Meta v-if="data.description_og" property="og:description" :content="data.description_og" />
      <Meta v-else-if="data.description" property="og:description" :content="data.description" />

      <Meta v-if="data.description_og" property="twitter:description" :content="data.description_og" />
      <Meta v-else-if="data.description" property="twitter:description" :content="data.description" />

      <Meta v-if="data.ogImage" property="og:image" :content="$urlFor(data.ogImage).width(1200).url()" />
      <Meta v-if="data.ogImage" property="twitter:image" :content="$urlFor(data.ogImage).width(1200).url()" />
    </Head>

    <!-- ✅ IMPORTANT : tout le contenu dépendant de data est protégé -->
    <template v-if="data">
      <div class="bg-white py-4 mt-0">
        <!-- Bloc 1 -->
        <div class="bg-white py-20 md:pt-22 md:pb-16 pt-16 pb-4">
          <div class="content py-16 px-6 xl:px-0">
            <div class="max-w-full mx-auto">
              <div class="text-black text-center">
                <h2 class="md:text-[34px] mb-4">Modalités de fixation des honoraires</h2>
                <div id="comp2" class="text-center block pb-6">
                  <SanityContent v-if="data.infoRichSecondary" :blocks="data.infoRichSecondary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bloc 2 -->
        <div class="bg-[#FEF8F5] py-20 md:pt-24 md:pb-24 pt-16 pb-16">
          <div class="content py-16 px-6 xl:px-0">
            <div class="max-w-full mx-auto">
              <div class="text-black text-center">
                <h2 class="md:text-[34px] mb-4">Postulation</h2>
                <div id="comp1" class="text-center block pb-6">
                  <SanityContent v-if="data.infoRich" :blocks="data.infoRich" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bloc 3 -->
        <div class="bg-white py-20 md:pt-36 md:pb-8 pt-16 pb-0">
          <div class="content py-16 px-6 xl:px-0">
            <div class="max-w-xl mx-auto">
              <div class="text-black text-center">
                <h2 class="md:text-[34px] mb-4">
                  {{ data.info }}
                </h2>
                <p class="mb-6 text-lg">
                  Le cabinet peut en revanche intervenir au titre <br />
                  de votre protection juridique.
                </p>

<span v-if="data.link" class="btnWrap mt-4 mb-8 md:mb-0 mx-6 xl:mx-0">
  <button
    type="button"
    class="text-base -btn btnLoop"
    @click="triggerContact"
  >
    <span class="btnLoopSizer">{{ data.link.title }}</span>

    <span class="btnLoopViewport" aria-hidden="true">
      <span class="btnLoopTrack">
        <span class="btnLoopItem">Demandez un devis</span>
        <span class="btnLoopItem">Demandez un devis</span>
      </span>
    </span>
  </button>
</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- petit fallback sinon écran vide -->
    <div v-else class="py-24"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// --- SANITY ---
const query = groq`*[_type == "honoraires"] | order(_updatedAt desc)[0]`
const data = await useSanityData({ query })

// ✅ La fonction "pont" pour ouvrir la modale du Header
const triggerContact = () => {
  if (process.client && window.openContact) {
    window.openContact()
  } else {
    // Petit délai de sécurité au cas où
    setTimeout(() => window.openContact?.(), 100)
  }
}

onMounted(() => {
  if (process.client) {
    // Ici tu peux remettre tes inits de reveal si tu en as sur cette page
  }
})
</script>
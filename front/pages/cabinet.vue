<template>
  <div class="cabinet">
    <Head v-if="data">
      <Title v-if="data.title">{{ data.title }}</Title>
      <Meta v-if="data.title" name="og:title" :content="data.title" />
      <Meta v-if="data.title" name="twitter:title" :content="data.title" />

      <Meta v-if="data.description" name="description" :content="data.description" />
      <Meta v-if="data.description_og" property="og:description" :content="data.description_og" />
      <Meta v-else-if="data.description" property="og:description" :content="data.description" />

      <Meta v-if="data.description_og" property="twitter:description" :content="data.description_og" />
      <Meta v-else-if="data.description" property="twitter:description" :content="data.description" />

      <Meta
        v-if="data.ogImage"
        property="og:image"
        :content="$urlFor(data.ogImage).width(1200).url()"
      />
      <Meta
        v-if="data.ogImage"
        property="twitter:image"
        :content="$urlFor(data.ogImage).width(1200).url()"
      />
    </Head>

    <!-- ✅ GARDE-FOU GLOBAL -->
    <template v-if="data">
      <div class="bg-[#FEF8F5] py-20 mt-0">
        <div class="content md:mt-24 pt-4 pb-4 pl-0 md:pr-28 text-black">
          <h1 class="pb-4 md:pb-1 text-[28px] md:text-[34px] text-[#1a1411] px-6 xl:px-4">
            {{ data.catchphrase }}
            <span class="text-[#efd3ba] pl-3">——</span>
          </h1>
          <p class="mb-12 text-lg px-6 xl:px-4">Un parcours au service du droit et du dialogue</p>
        </div>

        <div class="bg-white content grid grid-cols-1 md:grid-cols-[60%_40%] items-start py-16 px-6 xl:px-0 xl:mx-auto xl:mx-4">
          <div
            class="flex items-center pt-4 pb-4 md:pr-16 md:pl-16 text-black bg-white h-full w-full overflow-hidden"
          >
            <div class="contentcabinet pb-6 xl:px-0">
              <SanityContent :blocks="data.text" />

<span class="pt-4 btnWrap px-6 xl:px-0">
  <button 
    type="button" 
    class="-btn -md btnLoop" 
    style="font-size:16px!important"
    @click="triggerContact"
  >
    <span class="btnLoopSizer">Prendre rendez-vous</span>

    <span class="btnLoopViewport" aria-hidden="true">
      <span class="btnLoopTrack">
        <span class="btnLoopItem">Prendre rendez-vous</span>
        <span class="btnLoopItem">Prendre rendez-vous</span>
      </span>
    </span>
  </button>
</span>
            </div>
          </div>

          <div class="flex justify-center md:justify-start xl:px-0">
            <img class="max-w-full h-full" src="/img/1000053936-Picsart-AiImageEnhancer.jpg" alt="" />
          </div>
        </div>
      </div>

      <div class="bg-white py-20 pt-24 md:pt-24 md:pb-24">
        <div class="content">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 xl:px-4">
            <div class="max-w-lg lg:pr-12">
              <h2 class="md:text-[38px] text-black">
                Les missions du cabinet
                <span class="text-[#efd3ba] pl-3">——</span>
              </h2>

              <p class="pt-4 pb-12 text-black text-xl leading-relaxed">
                Le cabinet vous accompagne de la phase amiable à la défense contentieuse
              </p>
            </div>
            <div></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 xl:px-4">
            <div class="rounded-[40px] overflow-hidden shadow-[0_12px_40px_rgba(239,211,186,0.20)]">
              <div class="h-[220px] sm:h-[260px] bg-cover bg-center" style="background-image:url('/img/médiation1.webp')"></div>
              <div class="p-12">
                
                <p class="leading-relaxed text-base sm:text-base lg:text-lg text-black/80">
                  Formée à la médiation, j'interviens à double titre. <br/> <br/> D'une part, en tant qu'avocat en médiation, je vous assiste dans vos procédures de médiations conventionnelles ou judiciaires. <br/> <br/> D'autre part, en tant que médiateur, je mène des procédures de médiation dans le respect des principes d'indépendance, de neutralité et de confidentialité.
                </p>
              </div>
            </div>

            <div class="rounded-[40px] overflow-hidden bg-white shadow-[0_12px_40px_rgba(239,211,186,0.20)]">
              <div class="h-[220px] sm:h-[260px] bg-cover bg-center" style="background-image:url('/img/conseil1.webp')"></div>
              <div class="p-12">
                <p class="leading-relaxed text-base sm:text-base lg:text-lg text-black/80">
                  Disposant d'une solide expertise en Droit Public des Affaires, je vous accompagne à toutes les phases de votre projet : <br/> <br/> Définition des besoins, structuration juridique, rédaction des contrats, négociation, exécution et gestion des différends.
                </p>
              </div>
            </div>

            <div class="rounded-[40px] overflow-hidden bg-white shadow-[0_12px_40px_rgba(239,211,186,0.20)]">
              <div class="h-[220px] sm:h-[260px] bg-cover bg-center" style="background-image:url('/img/contentieux1.webp')"></div>
              <div class="p-12">
                <p class="leading-relaxed text-base sm:text-base lg:text-lg text-black/80">
                  Je vous représente devant les juridictions administratives et judiciaires. <br/> <br/> Le Cabinet travaille en réseau avec plusieurs confrères de barreaux extérieurs qui peuvent, lorsque le dossier le nécessite, assurer la postulation auprès des juridictions compétentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- état loading (optionnel) -->
    <template v-else>
      <div class="content py-20">Chargement…</div>
    </template>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// --- SANITY ---
const query = groq`*[_type == "cabinet"] | order(_updatedAt desc)[0]`
const data = await useSanityData({ query })

// ✅ La fonction "pont" pour ouvrir la modale du Header
const triggerContact = () => {
  if (process.client && window.openContact) {
    window.openContact()
  } else {
    // Petit fallback au cas où le header met du temps à charger
    setTimeout(() => window.openContact?.(), 100)
  }
}

// Optionnel : si tu as des animations "reveal" sur cette page aussi
onMounted(() => {
  if (process.client) {
    // Tu peux ajouter ici tes init de reveal ou de carrousels si besoin
  }
})
</script>
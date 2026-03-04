<template>
  <div style="background: #FEF8F5;" ref="rootEl" class="mt-0 pt-0">
    <Head v-if="data">
      <Title v-if="data.title">{{ data.title }}</Title>
      <Meta v-if="data.title" name="og:title" :content="data.title"/>
      <Meta v-if="data.title" name="twitter:title" :content="data.title"/>
      <Meta v-if="data.description" name="description" :content="data.description"/>
      <Meta v-if="data.description_og" property="og:description" :content="data.description_og"/>
      <Meta v-else-if="data.description" property="og:description" :content="data.description"/>
      <Meta v-if="data.description_og" property="twitter:description" :content="data.description_og"/>
      <Meta v-else-if="data.description" property="twitter:description" :content="data.description"/>
      <Meta v-if="data.ogImage" property="og:image" :content="$urlFor(data.ogImage).width(1200).url()"/>
      <Meta v-if="data.ogImage" property="twitter:image" :content="$urlFor(data.ogImage).width(1200).url()"/>
    </Head>
    <template v-if="data">
<div style="background: #FEF8F5;" class="decorationbg mx-auto ">
<div class="content">

  <!-- HERO -->
  <div class="mt-0 pt-12 pb-4 xl:pt-48 xl:pb-52 relative grid md:grid-cols-2 items-center py-[3vh] min-h-[calc(100dvh_-_84px)] md:min-h-[80vh] xl:min-h-[calc(100vh_-_114px)] overflow-x-hidden">

    <!-- Colonne image / gauche -->
    <div class="flex justify-center xl:justify-start xl:pl-4 lg-ps-0 px-6 md:pr-6 lg:pr-32 xl:pr-48">
     <!-- <img src="/img/1000053936-Picsart-AiImageEnhancer.jpg" alt="" width="1200" height="800" fetchpriority="high" loading="eager" decoding="async"/>-->
        <img height="800"
        class="max-w-full h-auto"
        :src="$urlFor(data.background).width(1200).url()"
        :alt="data.title"
        loading="lazy" fetchpriority="high">
    </div>

    <!-- Colonne texte / droite -->
    <div class="animate-slide-up z-10 text-center text-black md:text-left px-5 lg:pr-28 lg:pl-5 pt-16 pb-8 lg:pt-0 lg:pb-0">
    <h1 style="font-family:'Pt Serif'!important;" class="leading-[1.1] text-[40px] md:text-[48px] lg:text-[58px] mb-8 text-xl text-[#1a1411]">Cabinet d'Avocat en <br class="hidden md:block" /> Droit Public des affaires</h1>

      <p class="pb-10 lg:pb-6 text-xl"><strong>Rachel Yvernès</strong>, avocat et médiateur à Toulouse, vous accompagne de la genèse de vos projets à la résolution amiable ou contentieuse de vos différends.</p>


      <h2 v-if="data.catchphrase" class="mb-10 md:mb-[3vh] text-[20px] md:text-[20px] text-[#B8655E] leading-7">
        {{ data.catchphrase }}
      </h2>

<span
  v-if="data.link"
  class="btnWrap btnWrap--primary mt-4 mb-8 md:mb-0 mx-6 xl:mx-0"
>
  <button
    type="button"
    class="text-base -btn btnLoop"
    @click="triggerContact"
  >
    <span class="btnLoopSizer">{{ data.link.title }}</span>

    <span class="btnLoopViewport" aria-hidden="true">
      <span class="btnLoopTrack">
        <span class="btnLoopItem">{{ data.link.title }}</span>
        <span class="btnLoopItem">Prendre rendez-vous</span>
      </span>
    </span>
  </button>
</span>

    </div>

  </div>


</div>
</div>


  <!-- SECTION SUIVANTE -->

<div class="bg-white py-20 content w-50 shadow-[0_55px_110px_-25px_rgba(239,211,186,0.45)] w-full md:w-1/2  mt-0 md:mt-[-100px] lg:mt-[-100px] relative z-[9999] rounded-md">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 pb-16 lg:pt-10 lg:pb-10 px-5 lg:px-16">

    <div class="flex flex-col items-center gap-3 text-black">
      <div class="w-16 h-16 rounded-full border border-[#EFD3BA] flex items-center justify-center">
        <img alt="Médiation" decoding="async" fetchpriority="high" src="/img/meditationnoir3.svg" class="w-9 h-9">
      </div>
      <p>Médiation</p>
    </div>

    <div class="flex flex-col items-center gap-3 text-black">
      <div class="w-16 h-16 rounded-full border border-[#EFD3BA] flex items-center justify-center">
        <img alt="Conseil" decoding="async" fetchpriority="high" src="/img/stylo2black.svg" class="w-9 h-9">
      </div>
      <p>Conseil</p>
    </div>

    <div class="flex flex-col items-center gap-3 text-black">
      <div class="w-16 h-16 rounded-full border border-[#EFD3BA] flex items-center justify-center">
        <img alt="Contentieux" decoding="async" fetchpriority="high" src="/img/marteaunoir.svg" class="w-9 h-9">
      </div>
      <p>Contentieux</p>
    </div>

  </div>
</div>


<div class="bg-white py-20 mt-0 pt-24 md:pt-48 mt-0 md:mt-[-150px] lg:mt-[-100px]">
<div class="content">

      <h2 class="md:text-[38px] mb-16 text-black px-6 xl:px-4">
        À qui s’adresse mon <br/> accompagnement ? <span style="color:#efd3ba; padding-left:10px">——</span>
      </h2>

<div class="services-box flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8 px-6 xl:px-4">
  
  <div class="service w-full">
    <div class="flip-box w-full h-[300px] sm:h-[360px] md:h-[400px]">
      <div class="flip-box-inner">
        
        <div class="flip-box-front rounded-[40px]" style="background-image:url('/img/personnespubliques.webp')">
          <div class="flip-overlay"></div>
          <p class="text-xl sm:text-2xl px-4 text-center">
            Les personnes publiques
          </p>
        </div>

        <div class="rounded-[40px] flip-box-back shadow-[0_12px_40px_rgba(239,211,186,0.35),0_40px_120px_rgba(239,211,186,0.2)]">
          <p class="leading-relaxed lg:text-lg md:text-lg sm:text-base px-5">
            Etat - Collectivités territoriales - EPCI <br/>Etablissements publics nationaux et locaux  <br/>SEM, SPL  <br/> GIP, GIE - Chambres consulaires  <br/> Autres structures parapubliques
          </p>
        </div>

      </div>
    </div>
  </div>

  <div class="service w-full">
    <div class="flip-box w-full h-[300px] sm:h-[360px] md:h-[400px]">
      <div class="flip-box-inner">

        <div class="flip-box-front rounded-[40px]" style="background-image:url('/img/personnesprivees.webp')">
          <div class="flip-overlay"></div>
          <p class="text-xl sm:text-2xl px-4 text-center">
            Les personnes privées
          </p>
        </div>

        <div class="rounded-[40px] flip-box-back shadow-[0_12px_40px_rgba(239,211,186,0.35),0_40px_120px_rgba(239,211,186,0.2)]">
          <p class="leading-relaxed lg:text-lg md:text-lg sm:text-base px-5">
            Sociétés  <br/> Professionnels de la construction  <br/> Assureurs  <br/> Associations
          </p>
        </div>

      </div>
    </div>
  </div>

</div>


</div>
</div>

<div class="bg-[#FEF8F5] py-20 mt-6 mb-6">
  <div class="content max-w-3xl mx-auto py-16 px-6 xl:px-0">

    <!-- Bloc titre + bouton centré -->
    <div class="text-black text-center">

      <h2 class="md:text-[34px] mb-4">
        Les engagements du cabinet
      </h2>
      <p class="mb-6 text-xl">Je m'engage à offrir à chacun de mes clients une gestion sur-mesure <br/> des dossiers alliant performance et fiabilité</p>
    </div>

<div class="max-w-xl md:max-w-3xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10">

      <div class="flex flex-col items-center gap-3 text-black">
        <div class="w-16 h-16 rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.06)] bg-white flex items-center justify-center">
          <img src="/img/excellencebeige-01.svg" class="w-9 h-9" alt="">
        </div>
        <p>Expertise</p>
      </div>

      <div class="flex flex-col items-center gap-3 text-black">
        <div class="w-16 h-16 rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.06)] bg-white flex items-center justify-center">
          <img src="/img/dialoguebeige-01.svg" class="w-9 h-9" alt="">
        </div>
        <p>Proximité</p>
      </div>

      <div class="flex flex-col items-center gap-3 text-black">
        <div class="w-16 h-16 rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.06)] bg-white flex items-center justify-center">
          <img src="/img/planebeige-01.svg" class="w-9 h-9" alt="">
        </div>
        <p>Réactivité</p>
      </div>
</div>
    </div>

  </div>
</div>


<div id="carouselsection1" class="reveal bg-white py-20 mt-0 pt-24 md:pt-24 md:pb-24">
  <div class="content text-[#000]">
    <div class="grid grid-cols-12 gap-6 md:gap-12">
      <div class="col-span-12 md:col-span-5 pb-6 md:pb-12">
        <h2 class="md:text-[34px] whitespace-normal break-words max-w-full">
          Une compétence complète <br /> au service de vos projets <span style="color:#efd3ba; padding-left:10px">——</span>
        </h2>
      </div>
      <div class="col-span-12 md:col-span-7"></div>
    </div>

    <div id="desktop-carousel" class="xl:px-4 hidden md:block reveal relative w-full" data-carousel="static">
      <div class="relative w-full overflow-hidden rounded-base h-96 px-6 xl:px-0">
        <div class="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item="active">
          <div class="grid grid-cols-4 gap-6 h-full">
            <NuxtLink to="/competences?open=0" class="block h-full"><div class="relative w-full h-full overflow-hidden"><img src="/img/img1.webp" class="rounded-[40px] absolute inset-0 w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Commande publique</p></div></div></NuxtLink>
            <NuxtLink to="/competences?open=1" class="block h-full"><div class="relative w-full h-full overflow-hidden"><img src="/img/img2.webp" class="rounded-[40px] absolute inset-0 w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Construction publique</p></div></div></NuxtLink>
            <NuxtLink to="/competences?open=2" class="block h-full"><div class="relative w-full h-full overflow-hidden"><img src="/img/img3.webp" class="rounded-[40px] absolute inset-0 w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Domanialité publique</p></div></div></NuxtLink>
            <NuxtLink to="/competences?open=3" class="block h-full"><div class="relative w-full h-full overflow-hidden"><img src="/img/img4.webp" class="rounded-[40px] absolute inset-0 w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Droit administratif</p></div></div></NuxtLink>
          </div>
        </div>
        <div class="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item>
          <div class="grid grid-cols-4 gap-6 h-full">
            <NuxtLink to="/competences?open=4" class="block h-full"><div class="relative w-full h-full overflow-hidden"><img src="/img/bg3.webp" class="rounded-[40px] absolute inset-0 w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Collectivités territoriales</p></div></div></NuxtLink>
            <NuxtLink to="/competences?open=0" class="block h-full"><div class="relative w-full h-full overflow-hidden"><img src="/img/img1.webp" class="rounded-[40px] absolute inset-0 w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Commande publique</p></div></div></NuxtLink>
            <NuxtLink to="/competences?open=1" class="block h-full"><div class="relative w-full h-full overflow-hidden"><img src="/img/img2.webp" class="rounded-[40px] absolute inset-0 w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Construction publique</p></div></div></NuxtLink>
            <NuxtLink to="/competences?open=2" class="block h-full"><div class="relative w-full h-full overflow-hidden"><img src="/img/img4.webp" class="rounded-[40px] absolute inset-0 w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Droit administratif</p></div></div></NuxtLink>
          </div>
        </div>
      </div>
      <button type="button" class="absolute left-0 top-1/2 -translate-y-1/2 z-30 px-4 cursor-pointer" data-carousel-prev><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md"><svg class="w-5 h-5 text-[#1a1411]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg></span></button>
      <button type="button" class="absolute right-0 top-1/2 -translate-y-1/2 z-30 px-4 cursor-pointer" data-carousel-next><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md"><svg class="w-5 h-5 text-[#1a1411]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg></span></button>
    </div>

    <div id="mobile-carousel" class="md:hidden reveal relative w-full" data-carousel="static">
      <div class="relative w-full overflow-hidden rounded-base h-96 px-6">
        <div class="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item="active"><NuxtLink to="/competences?open=0" class="block h-full w-full relative"><img src="/img/img1.webp" class="rounded-[40px] w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Commande publique</p></div></NuxtLink></div>
        <div class="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item><NuxtLink to="/competences?open=1" class="block h-full w-full relative"><img src="/img/img2.webp" class="rounded-[40px] w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Construction publique</p></div></NuxtLink></div>
        <div class="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item><NuxtLink to="/competences?open=2" class="block h-full w-full relative"><img src="/img/img3.webp" class="rounded-[40px] w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Domanialité publique</p></div></NuxtLink></div>
        <div class="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item><NuxtLink to="/competences?open=3" class="block h-full w-full relative"><img src="/img/img4.webp" class="rounded-[40px] w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Droit administratif</p></div></NuxtLink></div>
        <div class="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item><NuxtLink to="/competences?open=4" class="block h-full w-full relative"><img src="/img/bg3.webp" class="rounded-[40px] w-full h-full object-cover" alt=""><div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-8"><p class="textcarousel text-white">Collectivités territoriales</p></div></NuxtLink></div>
      </div>
      <button type="button" class="absolute left-0 top-1/2 -translate-y-1/2 z-30 px-2" data-carousel-prev><span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md"><svg class="w-4 h-4 text-[#1a1411]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg></span></button>
      <button type="button" class="absolute right-0 top-1/2 -translate-y-1/2 z-30 px-2" data-carousel-next><span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md"><svg class="w-4 h-4 text-[#1a1411]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg></span></button>
    </div>

  </div>
</div>




<!-- 
<div class="bg-white py-20 mt-0">
  <div class="content grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-6 xl:px-0">
  <div class="pl-0 pr-28 text-black">
    <p class="mb-6 text-xl text-[#1a1411] px-6 xl:px-0">— A propos</p>
    <h2 class="md:text-[34px] px-6 xl:px-0">
      Le Cabinet vous accompagne sur un large spectre de missions
    </h2>
    <p class="mt-6 mb-4 text-xl px-6 xl:px-0">
      De la genèse et l’exécution de vos projets à la résolution amiable
      ou contentieuse de vos différends.
    </p>
<span class="btnWrap mt-4 mb-8 mx-6 xl:mx-0">
  <a href="#" class="text-base btn -cta -btn btnLoop">
    <span class="btnLoopSizer">En savoir plus</span>

    <span class="btnLoopViewport" aria-hidden="true">
      <span class="btnLoopTrack">
        <span class="btnLoopItem">En savoir plus</span>
        <span class="btnLoopItem">En savoir plus</span>
      </span>
    </span>
  </a>
</span>

  </div>

  <div class="flex justify-center md:justify-end px-6 xl:px-0">
    <img class="max-w-full h-auto" src="/img/bg7.webp" alt="">
  </div>
</div>
</div>
-->

<div class="bg-[#FEF8F5] py-20 md:pt-28 md:pb-36 pt-22 pb-12">
  <div class="content max-w-3xl mx-auto py-16 px-6 xl:px-0">

    <!-- Bloc titre + bouton centré -->
    <div class="text-black text-center">

      <h2 class="md:text-[34px] mb-4">
        Travaillons ensemble
      </h2>
      <p class="mb-6 text-xl">Découvrez comment nous pouvons optimiser vos projets <br/> et résoudre vos différends</p>

<span v-if="data.link" class="btnWrap mt-4 mb-8 md:mb-0 mx-6 xl:mx-0">
  <button
    type="button"
    class="text-base -btn btnLoop"
    @click="triggerContact"
  >
    <span class="btnLoopSizer">{{ data.link.title }}</span>

    <span class="btnLoopViewport" aria-hidden="true">
      <span class="btnLoopTrack">
        <span class="btnLoopItem">Prenez rendez-vous</span>
        <span class="btnLoopItem">Prenez rendez-vous</span>
      </span>
    </span>
  </button>
</span>

    </div>
  </div>
</div>

<div class="bg-white py-20 mt-0">
  <div class="content grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-6 xl:px-0">
  <div class="xl:px-4 pl-0 md:pr-28 text-black">
    <p class="mb-6 text-xl text-[#1a1411] px-6 xl:px-0">— Faites appel au cabinet</p>
    <h2 class="md:text-[34px] mb-8 px-6 xl:px-0">
      Le cabinet est situé à Toulouse <br/> mais intervient partout en France
    </h2>

<span class="btnWrap">
  <button
    type="button"
    class="-btn -md btn-mobile-white btnLoop"
    style="font-size:16px!important"
    @click="triggerContact"
  >
    <span class="btnLoopSizer">Me contacter</span>

    <span class="btnLoopViewport" aria-hidden="true">
      <span class="btnLoopTrack">
        <span class="btnLoopItem">Me contacter</span>
        <span class="btnLoopItem">Me contacter</span>
      </span>
    </span>
  </button>
</span>


  </div>

  <div class="flex justify-center md:justify-start px-0 md:px-6 xl:px-0">
    <img class="max-w-full md:w-50 max-h-[450px] h-full" src="/img/map4_1.svg" alt="">
  </div>
</div>
</div>





    </template>
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { initFlowbite, initCarousels } from 'flowbite'

// --- SANITY ---
const query = groq`*[_type == "home"] | order(_updatedAt desc)[0]`
const data = await useSanityData({ query })

const rootEl = ref(null)
let observer = null

// ✅ Nouvelle fonction pour appeler la modale du Header
const triggerContact = () => {
  if (process.client && window.openContact) {
    window.openContact()
  } else {
    // Si window.openContact n'est pas encore là, on réessaie après un mini délai
    setTimeout(() => window.openContact?.(), 100)
  }
}

onMounted(async () => {
  await nextTick()

  if (process.client) {
    initCarousels()
    if (!window.__FLOWBITE_INITED__) {
      initFlowbite()
      window.__FLOWBITE_INITED__ = true
    }
  }

  // ✅ Reveal
  const root = rootEl.value
  if (!root) return

  const elements = root.querySelectorAll('.reveal')
  observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          obs.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  elements.forEach(el => observer.observe(el))
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>
<template>
<header :aria-open="isMenuOpen ? 'true' : 'false'" :class="[ 'top-0 left-0 w-full fixed z-[99999]', isScrolled ? 'header-sticky is-stuck' : 'header-ghost', isMenuOpen ? 'is-menu-open' : '' ]" >
<nav class="content flex items-center justify-between gap-6 py-4">
   
<NuxtLink class="lg:hidden" to="/" >
      <img decoding="async" fetchpriority="high"
        :src="logoSrcMobile" 
        class="w-[200px]"
        alt="Logo"
      />
    </NuxtLink>
    
<ul class="">
  <!-- Logo desktop à partir de xl -->
  <li class="hidden xl:block">
    <NuxtLink to="/" class="no-underline">
      <img decoding="async" fetchpriority="high"
        :src="logoSrcDesktop"
        class="w-[160px]"
        alt="Logo"
      />
    </NuxtLink>
  </li>

  <!-- Logo mobile / tablette avant xl -->
<li class="hidden logotablette md:block xl:hidden">
  <NuxtLink to="/">
    <img
      :src="logoSrcMobile" 
      class="h-[32px]"
      alt="Logo mobile"
    />
  </NuxtLink>
</li>


  <li class="text-white lg:text-black flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
    <NuxtLink to="/cabinet" @click="closeMenu">Le cabinet</NuxtLink>
    <NuxtLink to="/competences" @click="closeMenu">Compétences</NuxtLink>
    <NuxtLink to="/honoraires" @click="closeMenu">Honoraires et devis</NuxtLink>
    <NuxtLink to="/publications" @click="closeMenu">Publications</NuxtLink>
  </li>

  <!-- Bouton contact (✅ dans un li) -->
<li>
  <span class="pt-4 md:pt-0 lg:pt-0 xl:pt-0 btnWrap btnWrap--outline">
   <a
  href="#"
  style="font-size:16px!important"
  class="-btn -md btn-mobile-white btnLoop"
  @click.prevent="openModal"
>
      <span class="btnLoopSizer">Me contacter</span>

      <span class="btnLoopViewport" aria-hidden="true">
        <span class="btnLoopTrack">
          <span class="btnLoopItem">Me contacter</span>
          <span class="btnLoopItem">Me contacter</span>
        </span>
      </span>
    </a>
  </span>

  
</li>

</ul>

      <button class="lg:hidden" @click="toggleMenu"><span></span><span></span></button>
    </nav>

<Teleport to="body">
  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-[999999] flex items-center justify-center"
    @keydown.esc="closeModal"
  >
    <!-- backdrop -->
    <div class="absolute inset-0 bg-black/40" @click="closeModal"></div>

    <!-- panel -->
    <div
      class="rounded bg-[#102c45] border-[#102c45] relative w-full max-w-5xl max-h-[90vh] overflow-auto p-4 md:p-6 bg-neutral-primary-soft border border-default rounded-base shadow-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Contact"
    >
      <div class="flex items-center justify-between pb-4">
        <h3 class="text-lg font-medium text-heading"></h3>

        <button
          type="button"
          class="text-white bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 inline-flex justify-center items-center"
          @click="closeModal"
          aria-label="Fermer"
        >
          ✕
        </button>
      </div>

      <div class="py-2 md:py-2">




<div class="py-2 md:py-2">
  <!-- GRILLE 2 COLONNES -->
  <div class="grid gap-16 md:grid-cols-2 ps-8 pe-8">
    
    <!-- COLONNE GAUCHE : FORM -->
    <div>
      <form class="sm:grid sm:grid-cols-2 gap-2.5" @submit.prevent="sendForm">
        <input class="sm:col-span-2 bg-transparent text-white placeholder-white/60 border border-white/30 rounded-none px-4 py-3 focus:outline-none focus:border-white focus:ring-0" type="text" v-model="form.nom" required placeholder="Nom et prénom *">
        <input class="sm:col-span-2 bg-transparent text-white placeholder-white/60 border border-white/30 rounded-none px-4 py-3 focus:outline-none focus:border-white focus:ring-0" type="text" v-model="form.entreprise" placeholder="Votre entreprise">
        <input class="bg-transparent text-white placeholder-white/60 border border-white/30 rounded-none px-4 py-3 focus:outline-none focus:border-white focus:ring-0" type="email" v-model="form.email" required placeholder="Email *">
        <input class="bg-transparent text-white placeholder-white/60 border border-white/30 rounded-none px-4 py-3 focus:outline-none focus:border-white focus:ring-0" type="text" v-model="form.telephone" placeholder="Téléphone">

        <select class="sm:col-span-2 bg-transparent border border-white/30 px-4 py-3 rounded-none appearance-none focus:outline-none',
    form.motif ? 'text-white' : 'text-[#dddddd]" v-model="form.motif">
          <option value="" disabled>Motif du contact</option>
          <option value="demande-devis">Demande de devis</option>
          <option value="partenariat">Partenariat</option>
          <option value="support-technique">Support technique</option>
          <option value="autre">Autre</option>
        </select>

        <textarea class="sm:col-span-2 bg-transparent text-white placeholder-white/60 border border-white/30 rounded-none px-4 py-3 focus:outline-none focus:border-white focus:ring-0" v-model="form.message" required placeholder="Votre message *"></textarea>

        <input type="text" v-model="form.website" class="hidden" tabindex="-1" autocomplete="off">

        <div class="sm:col-span-2 flex items-center gap-3">
          <span class="btnWrap mt-4 mb-2">
            <button type="submit" class="!bg-white !text-black btn -cta text-base -btn btnLoop" :disabled="isSending">
              <span class="btnLoopSizer">{{ isSending ? 'Envoi en cours…' : 'Envoyer le message' }}</span>
              <span class="btnLoopViewport" aria-hidden="true">
                <span class="btnLoopTrack">
                  <span class="btnLoopItem">{{ isSending ? 'Envoi en cours…' : 'Envoyer le message' }}</span>
                  <span class="btnLoopItem">{{ isSending ? 'Envoi en cours…' : 'Envoyer le message' }}</span>
                </span>
              </span>
            </button>
          </span>

          <span v-if="successMessage" class="text-green-600 text-sm">{{ successMessage }}</span>
          <span v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</span>
        </div>
      </form>
    </div>

    <!-- COLONNE DROITE : TES AUTRES CHOSES -->
<aside v-if="data" class="space-y-4">
  <p class="-h4 pb-4 text-white">
    {{ data.texte_rdv }}
  </p>

  <div
    v-for="(bloc, index) in data.blocs"
    :key="index"
    class="p-4 rounded-base border border-default text-center relative overflow-hidden"
    :class="index === 0
      ? 'bg-white text-black'
      : 'bg-transparent text-white'"
  >

    <a
      class="absolute inset-0 z-10"
      :href="bloc.lien"
      target="_blank"
      rel="noreferrer"
    ></a>

    <p class="font-medium mb-2 flex items-center justify-center gap-2">
      <img
        :src="index === 0
          ? '/img/location-dotblack.svg'
          : '/img/calendarwhite.svg'"
        alt=""
        class="w-6 h-6 shrink-0"
      >

      {{ bloc.title }}
    </p>

    <p class="text-sm">
      {{ bloc.tarif }}
    </p>

  </div>

  <p class="pt-4 text-base text-white">
    {{ data.texte_rdv_bis }}
  </p>
</aside>

  </div>
</div>






        <p class="leading-relaxed text-body">
       
        </p>
      </div>
    </div>
  </div>
</Teleport>

  </header>


</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const query = groq`*[_type == "contact"] | order(_updatedAt desc)[0]`

const data = await useSanityData({
  query: query,
})

// ✅ Nuxt : useRoute est auto-importé
const route = useRoute()

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const showStickyStyle = computed(() => isScrolled.value)

const darkLogoPages = ['/cabinet', '/competences', '/honoraires', '/publications', '/mentions-legales']

const hasDarkBaseLogo = computed(() =>
  darkLogoPages.some(path => route.path === path || route.path.startsWith(path + '/'))
)

// LOGIQUE DESKTOP : Change selon le scroll et la page
const logoSrcDesktop = computed(() => {
  if (showStickyStyle.value) return '/img/logory1.svg'
  return hasDarkBaseLogo.value ? '/img/logory1.svg' : '/img/logory1blanc.svg'
})

// LOGIQUE MOBILE : Sombre par défaut, mais BLANC si le menu burger est ouvert
const logoSrcMobile = computed(() => {
  if (isMenuOpen.value) return '/img/logory1blanc.svg' 
  return '/img/logory1.svg'
})

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }

const handleScroll = () => { isScrolled.value = window.scrollY > 10 }

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  // SOLUTION: On attache la fonction à l'objet window
  // pour qu'elle soit accessible depuis index.vue ou d'autres pages.
  if (process.client) {
    window.openContact = openModal
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// ✅ ferme le menu à chaque navigation
watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})

const isModalOpen = ref(false)

const lockScroll = (locked) => {
  document.documentElement.style.overflow = locked ? 'hidden' : ''
}

const openModal = () => {
  isModalOpen.value = true
  closeMenu()
  if (process.client) lockScroll(true)
}

const closeModal = () => {
  isModalOpen.value = false
  if (process.client) lockScroll(false)
}

onBeforeUnmount(() => {
  if (process.client) lockScroll(false)
})

// --------------------
// FORM
// --------------------
const form = ref({
  nom: '',
  entreprise: '',
  email: '',
  telephone: '',
  motif: '',
  message: '',
  website: ''
})

const isSending = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

async function sendForm() {
  successMessage.value = ''
  errorMessage.value = ''

  if (!form.value.nom || !form.value.email || !form.value.message) {
    errorMessage.value = 'Veuillez remplir tous les champs obligatoires.'
    return
  }

  if (form.value.website) return

  isSending.value = true

  try {
    const response = await fetch('https://www.kepler2000.fr/contact/contact.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(form.value).toString()
    })

    const text = await response.text()

    if (response.ok) {
      successMessage.value = '✅ Message envoyé avec succès !'
      Object.keys(form.value).forEach(k => (form.value[k] = ''))
      setTimeout(() => closeModal(), 800)
    } else {
      throw new Error(text)
    }
  } catch (err) {
    console.error(err)
    errorMessage.value = '❌ Une erreur est survenue, veuillez réessayer.'
  } finally {
    isSending.value = false
  }
}
</script>



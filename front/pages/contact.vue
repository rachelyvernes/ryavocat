<template>
  <div class="Contact page">
    <Head v-if="data">
      <Title v-if="data.title">{{ data.title }}</Title>
      <Meta v-if="data.title" name="og:title" :content="data.title"/>
      <Meta v-if="data.title" name="twitter:title" :content="data.title"/>
      <Meta v-if="data.description" name="description" :content="data.description"/>
      <Meta v-if="data.description_og" property="og:description" :content="data.description_og"/>
      <Meta v-else-if="data.description" property="og:description" :content="data.description"/>
      <Meta v-if="data.description_og" property="twitter:description" :content="data.description_og"/>
      <Meta v-else-if="data.description" property="twitter:description" :content="data.descriptiong"/>
      <Meta v-if="data.ogImage" property="og:image" :content="$urlFor(data.ogImage).width(1200).url()"/>
      <Meta v-if="data.ogImage" property="twitter:image" :content="$urlFor(data.ogImage).width(1200).url()"/>
    </Head>
    <div v-if="data" class="content">
      <div class="md:grid md:grid-cols-2 gap-10 xl:gap-[70px]">
        <div class="mb-10 md:mb-0">
          <p class="-h4 mb-8">
            {{data.texte_formulaire}}
          </p>
          <form class="sm:grid sm:grid-cols-2 gap-2.5" @submit.prevent="sendForm">
            <input class="sm:col-span-2" type="text" v-model="form.nom" placeholder="Nom et prénom *">
            <input class="sm:col-span-2" type="text" v-model="form.entreprise" placeholder="Votre entreprise">
            <input type="email" v-model="form.email" placeholder="Email *">
            <input type="text" v-model="form.telephone" placeholder="Téléphone">
            <select class="sm:col-span-2" v-model="form.motif">
              <option value="" disabled selected>Motif du contact</option>
              <option value="demande-devis">Demande de devis</option>
              <option value="partenariat">Partenariat</option>
              <option value="support-technique">Support technique</option>
              <option value="autre">Autre</option>
            </select>
            <textarea class="sm:col-span-2" v-model="form.message" placeholder="Votre message *"></textarea>

            <!-- Honeypot anti-spam -->
            <input type="text" v-model="form.website" style="display:none" tabindex="-1" autocomplete="off">

            <div class="sm:col-span-2 flex items-center gap-3">
              <button class="bg-blanc" type="submit" :disabled="isSending">
                {{ isSending ? 'Envoi en cours...' : 'Envoyer' }}
              </button>

              <span v-if="successMessage" class="text-green-600 text-sm">{{ successMessage }}</span>
              <span v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</span>
            </div>
          </form>

        </div>
        <div>
          <p class="-h4 mb-8">
            {{data.texte_rdv}} 
          </p>
          <div class="grid lg:grid-cols-2 gap-2.5"> 
            <div v-for="(bloc, index) in data.blocs" class="-btn -xl relative !text-[20px] text-center">
              <a class="absolute inset-0 z-10" :href="bloc.lien" target="_blank"></a>
              <p class="mb-2 ">
                {{bloc.title}}
              </p>
              <p class="font-normal">
                {{ bloc.tarif }}
              </p>
            </div>
          </div>
          <p class="mt-8">
            {{data.texte_rdv_bis}} 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "contact"] | order(_updatedAt desc)[0]`
const data = await useSanityData({
  query: query,
})
function toOptionValue(text) {
  return text
    .trim()                          // Supprime les espaces en début et fin
    .toLowerCase()                   // Passe tout en minuscule
    .normalize('NFD')                // Supprime les accents
    .replace(/[\u0300-\u036f]/g, '') // Enlève les diacritiques (é → e, à → a, etc.)
    .replace(/[^a-z0-9_-]/g, '-')    // Remplace tout caractère non autorisé par un tiret
    .replace(/-+/g, '-')             // Évite les doubles tirets
    .replace(/^-|-$/g, '');          // Enlève les tirets au début/fin
}
// async function sendForm() {
//   const response = await fetch('/.netlify/functions/send-email', { method: 'POST', body: JSON.stringify(formData) })
// }

const form = ref({
  nom: '',
  entreprise: '',
  email: '',
  telephone: '',
  motif: '',
  message: '',
  website: '' // honeypot anti-spam
})

const isSending = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

async function sendForm() {
  successMessage.value = ''
  errorMessage.value = ''

  // Vérification des champs obligatoires
  if (!form.value.nom || !form.value.email || !form.value.message) {
    errorMessage.value = 'Veuillez remplir tous les champs obligatoires.'
    return
  }

  // Protection anti-spam
  if (form.value.website) return // si le honeypot est rempli, on ne fait rien

  isSending.value = true

  try {
    const response = await fetch('http://dcuhnuh.cluster121.hosting.ovh.net/contact/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(form.value).toString()
    })

    const text = await response.text()

    if (response.ok) {
      successMessage.value = '✅ Message envoyé avec succès !'
      isSending.value = false
      // on vide les champs
      Object.keys(form.value).forEach(k => form.value[k] = '')
    } else {
      throw new Error(text)
    }
  } catch (err) {
    console.error(err)
    errorMessage.value = '❌ Une erreur est survenue, veuillez réessayer.'
    isSending.value = false
  }
}

</script>

<style>

</style>
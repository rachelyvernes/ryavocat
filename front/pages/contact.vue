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
      <div class="grid md:grid-cols-2 gap-10 xl:gap-[70px]">
        <div>
          <p class="-h4 mb-8">
            {{data.texte_formulaire}}
          </p>
          <form @submit.prevent="onSubmit" class="grid sm:grid-cols-2 gap-2.5">
            <template v-if="loading">Envoi…</template>
            <template v-else-if="success">Message envoyé ✅</template>
            <template v-else>
              <input class="sm:col-span-2" type="text" placeholder="Nom et prénom">
              <input class="sm:col-span-2" type="text" placeholder="Votre entreprise">
              <input type="text" placeholder="Email">
              <input type="text" placeholder="Téléphone">
              <select class="sm:col-span-2" name="motif">
                <option value="" selected disabled>Motif du contact</option>
                <option v-for="(motif, index) in data.motifs" :value="toOptionValue(motif)">{{motif}}</option>
              </select>
              <textarea class="sm:col-span-2" name="" id="" placeholder="Votre message"></textarea>
              <!-- 🐝 Champ honeypot invisible -->
              <input
                v-model="form.honey"
                type="text"
                name="website"
                autocomplete="off"
                tabindex="-1"
                style="position:absolute; left:-9999px; opacity:0;"
              >
              <div>
                <button class="bg-blanc" type="submit">
                  Envoyer
                </button>
              </div>
            </template>
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
  honey: '' // champ piège invisible 🐝
})


const loading = ref(false)
const success = ref(false)
const error = ref(null)

const formStartTime = ref(0)

onMounted(() => {
  // mémorise l'heure d'ouverture du formulaire
  formStartTime.value = Date.now()
})

const onSubmit = async () => {
  loading.value = true
  success.value = false
  error.value = null

  const elapsed = (Date.now() - formStartTime.value) / 1000

  // 🐝 Vérif front avant même l'appel serveur
  if (form.value.honey !== '' || elapsed < 2) {
    error.value = 'Suspicion de spam détectée.'
    loading.value = false
    return
  }

  try {
    const response = await $fetch('/.netlify/functions/send-email', {
      method: 'POST',
      body: form.value
    })

    if (response.success) {
      success.value = true
    } else {
      throw new Error(response.error || 'Erreur inconnue')
    }
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>

<style>

</style>
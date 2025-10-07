<template>
  <div ref="rootEl" class="Honoraires page">
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
      <div class="grid md:grid-cols-2 gap-10 lg:gap-[70px] mb-20">
        <div v-for="(bloc, index) in data.blocs" class="p-[30px] border-[2px] border-blanc rounded-[4px]">
          <h2 class="-h3 mb-5">
            {{ bloc.title }}
          </h2>
          <div class="wysig">
            <SanityContent :blocks="bloc.contenu" />
          </div>
        </div>
      </div>
      <div class="text-center pb-[60px]">
        <ButtonComponent class="-btn mb-10" v-if="data.link" :link="data.link.lien" :text="data.link.title" :is_intern="data.link.is_intern" />
        <p>
          {{data.info}}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// const { $initPage, $transitionOut, $transitionIn } = useNuxtApp()

const query = groq`*[_type == "honoraires"] | order(_updatedAt desc)[0]`
const data = await useSanityData({
  query: query,
})

// definePageMeta({
//   pageTransition: {
//     css: false,
//     mode: 'out-in',
//     onLeave: (el, done) => {
//       useNuxtApp().$transitionOut(done)
//     },
//     onAfterEnter: (el) => {
//       useNuxtApp().$transitionIn()
//     }
//   },
// })

// const rootEl = ref()
// useSafeOnMounted(rootEl, () => {
//   $initPage()
// })

// function useSafeOnMounted(element, listener, checkTimeLimit = 1000) {
//   if (process.client) {
//     const checkInterval = 100
//     let checksLeft = checkTimeLimit / checkInterval
//     const check = () => {
//       if (element.value?.isConnected) {
//         listener()
//       } else if (checksLeft > 0) {
//         setTimeout(check, checkInterval)
//         checksLeft--
//       }
//     }
//     onMounted(() => {
//       check()
//     })
//   }
// }
</script>

<style>

</style>
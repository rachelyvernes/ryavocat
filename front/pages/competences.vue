<template>
  <div class="Competences page">
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
      <ul>
        <li v-for="(competence, index) in data.competences" aria-open="false" class="group pb-4 xl:pb-6 mb-4 xl:mb-6 border-b-[2px] border-white/60">
          <h2 class="-h2 cursor-pointer select-none" @click="toggleList">
            {{competence.title}}
            <span></span>
          </h2>
          <div class="grid transition-grid-row duration-300 grid-rows-[1fr] group-aria-[open=false]:grid-rows-[0fr]">
            <div class="overflow-hidden">
              <ul class="grid gap-3 font-gothic pt-5 text-[16px] sm:text-[20px] lg:text-[26px] xl:text-[32px] text-justify">
                <li v-for="(detail, index) in competence.liste">
                  {{detail}}
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const query = groq`*[_type == "competences"] | order(_updatedAt desc)[0]`
const data = await useSanityData({
  query: query,
})
function toggleList(e) {
  const button = e.currentTarget
  button.parentElement.setAttribute('aria-open', button.parentElement.getAttribute('aria-open') === 'false')
}
</script>
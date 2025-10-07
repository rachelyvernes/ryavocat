<template>
  <div class="Publications page">
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
    <div v-if="data" class="content grid xl:grid-cols-[300px_1fr] gap-6">
      <div class="flex flex-wrap gap-1.5 content-start">
        <button aria-active="true" class="border border-bleu px-3 pt-1 pb-0.5 rounded-lg aria-[active=false]:opacity-60">
          Tout
        </button>
        <button aria-active="false" class="border border-bleu px-3 pt-1 pb-0.5 rounded-lg aria-[active=false]:opacity-60">
          Médiation
        </button>
        <button aria-active="false" class="border border-bleu px-3 pt-1 pb-0.5 rounded-lg aria-[active=false]:opacity-60">
          Contrats publics
        </button>
        <button aria-active="false" class="border border-bleu px-3 pt-1 pb-0.5 rounded-lg aria-[active=false]:opacity-60">
          Contrats publics
        </button>
      </div>
      <div class="grid md:grid-cols-2 gap-6 xl:gap-11">
        <div v-for="post in data" :key="post._id">
          <div class="group relative bg-bleu aspect-[1.5] overflow-hidden">
            <img v-if="post.cover" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:w-[100.5%] group-hover:h-[100.5%] w-[103%] h-[103%] object-cover object-center group-hover:opacity-90 duration-300 ease-pam" :src="$urlFor(post.cover).width(800).url()" :alt="post.title" loading="lazy">
            <NuxtLink class="absolute inset-0" :to="'/publications/'+post.slug.current" ></NuxtLink>
          </div>
          <div>
            <div class="mt-3 font-gothic text-[10px]">
              {{ formatDate(post.date) }}
            </div>
            <div class="font-gothic text-[10px] uppercase">
              Médiation
            </div>
            <h2 class="mt-2.5 text-[16px]">
              <NuxtLink to="/publications/publication" >
                {{ post.title }}
              </NuxtLink>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "publication"] | order(_updatedAt desc) `
const data = await useSanityData({
  query: query,
})
function formatDate(isoString) {
  const d = new Date(isoString);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
}
</script>

<style>

</style>
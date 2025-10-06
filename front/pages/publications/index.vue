<template>
  <div class="Publications page">
    <div class="content grid xl:grid-cols-[300px_1fr] gap-6">
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
          <div class="relative bg-bleu aspect-[1.5]">
            <img class="w-full object-cover object-center" :src="$urlFor(post.cover).width(800).url()" :alt="post.title" loading="lazy">
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
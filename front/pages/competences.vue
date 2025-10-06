<template>
  <div class="Competences page">
    <div class="content">
      <ul>
        <li v-for="(competence, index) in data.competences" aria-open="false" class="group pb-4 xl:pb-5 mb-4 xl:mb-5 border-b-[2px] border-white/60">
          <h2 class="-h2 cursor-pointer select-none" @click="toggleList">
            {{competence.title}}
            <span></span>
          </h2>
          <div class="grid transition-grid-row duration-300 grid-rows-[1fr] group-aria-[open=false]:grid-rows-[0fr]">
            <div class="overflow-hidden">
              <ul class="font-gothic pt-5 text-[16px] sm:text-[20px] lg:text-[26px] xl:text-[32px]">
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
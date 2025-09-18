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
        <div>
          <div class="relative bg-bleu aspect-[1.5]">
            <NuxtLink class="absolute inset-0" to="/publications/publication" ></NuxtLink>
          </div>
          <div>
            <div class="mt-3 font-gothic text-[10px]">
              25.08.2025
            </div>
            <div class="font-gothic text-[10px] uppercase">
              Médiation
            </div>
            <h2 class="mt-2.5 text-[16px]">
              <NuxtLink to="/publications/publication" >
                Covid-19, circonstance imprévue et modification du contrat
              </NuxtLink>
            </h2>
          </div>
        </div>
        <div>
          <div class="relative bg-bleu aspect-[1.5]">
            <NuxtLink class="absolute inset-0" to="/publications/publication" ></NuxtLink>
          </div>
          <div>
            <div class="mt-3 font-gothic text-[10px]">
              25.08.2025
            </div>
            <div class="font-gothic text-[10px] uppercase">
              Médiation
            </div>
            <h2 class="mt-2.5 text-[16px]">
              <NuxtLink to="/publications/publication" >
                Covid-19, circonstance imprévue et modification du contrat
              </NuxtLink>
            </h2>
          </div>
        </div>
        <div>
          <div class="relative bg-bleu aspect-[1.5]">
            <NuxtLink class="absolute inset-0" to="/publications/publication" ></NuxtLink>
          </div>
          <div>
            <div class="mt-3 font-gothic text-[10px]">
              25.08.2025
            </div>
            <div class="font-gothic text-[10px] uppercase">
              Médiation
            </div>
            <h2 class="mt-2.5 text-[16px]">
              <NuxtLink to="/publications/publication" >
                Covid-19, circonstance imprévue et modification du contrat
              </NuxtLink>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
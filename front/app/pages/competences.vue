<template>
  <div class="Competences page">
    <div class="content">
      <ul>
        <li aria-open="false" class="group pb-4 xl:pb-5 mb-4 xl:mb-5 border-b-[2px] border-white/60">
          <h2 class="-h2 cursor-pointer select-none" @click="toggleList">
            Droit des contrats publics et privés associés
            <span></span>
          </h2>
          <div class="grid transition-grid-row duration-300 grid-rows-[1fr] group-aria-[open=false]:grid-rows-[0fr]">
            <div class="overflow-hidden">
              <ul class="font-gothic pt-5 text-[16px] sm:text-[20px] lg:text-[26px] xl:text-[32px]">
                <li>
                  Marchés publics (passation et exécution)
                </li>
                <li>
                  Concessions (passation et exécution)
                </li>
                <li>
                  Sous-traitance (passation et exécution)
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li aria-open="false" class="group pb-4 xl:pb-5 mb-4 xl:mb-5 border-b-[2px] border-white/60">
          <h2 class="-h2 cursor-pointer select-none" @click="toggleList">
            Droit administratif général
            <span></span>
          </h2>
          <div class="grid transition-grid-row duration-300 grid-rows-[1fr] group-aria-[open=false]:grid-rows-[0fr]">
            <div class="overflow-hidden">
              <ul class="font-gothic pt-5 text-[16px] sm:text-[20px] lg:text-[26px] xl:text-[32px]">
                <li>
                  Marchés publics (passation et exécution)
                </li>
                <li>
                  Concessions (passation et exécution)
                </li>
                <li>
                  Sous-traitance (passation et exécution)
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li aria-open="false" class="group">
          <h2 class="-h2 cursor-pointer select-none" @click="toggleList">
            Droit des collectivités territoriales
            <span></span>
          </h2>
          <div class="grid transition-grid-row duration-300 grid-rows-[1fr] group-aria-[open=false]:grid-rows-[0fr]">
            <div class="overflow-hidden">
              <ul class="font-gothic pt-5  text-[16px] sm:text-[20px] lg:text-[26px] xl:text-[32px]">
                <li>
                  Marchés publics (passation et exécution)
                </li>
                <li>
                  Concessions (passation et exécution)
                </li>
                <li>
                  Sous-traitance (passation et exécution)
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
function toggleList(e) {
  const button = e.currentTarget
  button.parentElement.setAttribute('aria-open', button.parentElement.getAttribute('aria-open') === 'false')
}
</script>
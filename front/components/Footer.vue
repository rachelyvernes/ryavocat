<template>




<footer class="bg-[#102c45] px-6 xl:px-4">

    <div class="content w-full max-w-screen-xl p-4 lg:p-0 py-6 lg:py-8">
        <div class="md:flex md:justify-between md:gap-12">
          <div class="mb-6 md:mb-0 md:w-4/12 lg:w-3/12">
              <a href="#" class="flex items-center">
                  <img src="/img/logoryavocatv2blanc.svg" class="h-14 me-3" alt="Logo" />
              </a>

              <p class="text-base mt-11 mb-4 font-semibold">
<a :href="`tel:${(mainStore.siteOptions?.tel ?? '').replace(/\s+/g,'')}`">
  {{ mainStore.siteOptions?.tel }}
</a>
              </p>
              <p class="text-white text-base mt-2 mb-2">
                {{ mainStore.siteOptions?.adresse }}
              </p>
              <p class="text-white text-base mt-2 mb-2">
                {{ mainStore.siteOptions?.infos }}
              </p>
              <p class="text-white text-base mt-2 mb-2">
                <a :href="'mailto:' + mainStore.siteOptions?.mail">{{ mainStore.siteOptions?.mail }}</a>
              </p>

          </div>
          <div class="grid grid-cols-1 gap-y-8 gap-x-12 sm:grid-cols-3 sm:gap-y-6 sm:gap-x-16 pt-4 md:pt-0">
              <div>
                  <h2 class="mb-2 md:mb-6 text-sm font-semibold text-white text-heading uppercase">A propos</h2>
                  <ul class="text-body font-medium space-y-1 md:space-y-4">
                      <li class="md:mb-4 text-white text-base">
                      <NuxtLink to="/cabinet" >
                        Cabinet
                      </NuxtLink>
                      </li>
                      <li class="md:mb-4 text-white text-base">
                      <NuxtLink to="/competences" >
                        Compétences
                      </NuxtLink>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-2 md:mb-6 text-sm font-semibold text-white text-heading uppercase">En savoir plus</h2>
                  <ul class="text-body font-medium space-y-1 md:space-y-4">
                      <li class="md:mb-4 text-white text-base">
                      <NuxtLink to="/honoraires" >
                        Honoraires et devis
                      </NuxtLink>
                      </li>
                      <li class="md:mb-4 text-white text-base">
                      <NuxtLink to="/publications" >
                        Publications
                      </NuxtLink>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-2 md:mb-6 text-sm font-semibold text-heading text-white uppercase">Contact</h2>
                  <ul class="text-body font-medium space-y-1 md:space-y-4">
                   <li class="md:mb-4 text-white text-base">
  <a
    href="#"
    @click.prevent="triggerContact"
    class="cursor-pointer"
  >
    Me contacter
  </a>
</li>
                      <li class="md:mb-4 text-white text-base"><template v-if="mainStore.siteOptions">
                        <NuxtLink v-for="(link, index) in mainStore.siteOptions.liens_legaux" :to="link.lien" class=""  :target="link.is_intern? '_self' : '_blank'">{{link.title}}</NuxtLink>
                      </template></li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-default sm:mx-auto lg:my-8" />
      <div class="flex items-center justify-between">
          <span class="text-sm text-body text-white sm:text-center">© {{ currentYear }} <a href="#" class="hover:underline">Ryavocat</a>
          </span>
          <div class="flex md:mt-4 sm:justify-center sm:mt-0">
<a href="#" class="text-body hover:text-heading ms-5">
  <svg
    class="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="white"
  >
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341A53.79 53.79 0 1 1 107.6 53a53.8 53.8 0 0 1-53.76 53.9zM447.9 448h-92.6V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h89v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.8 111.3 142.3V448z"/>
  </svg>
  <span class="sr-only">LinkedIn</span>
</a>

          </div>
      </div>
    </div>
</footer>


</template>
<script setup>
const mainStore = useMainStore()
const currentYear = new Date().getFullYear()

const triggerContact = () => {
  if (process.client && window.openContact) {
    window.openContact()
  } else {
    setTimeout(() => window.openContact?.(), 100)
  }
}
</script>
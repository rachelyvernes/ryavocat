<template>
  <div class="Competences page bg-[#FEF8F5]" style="overflow-anchor:none;">
    <Head v-if="data">
      <Title v-if="data.title">{{ data.title }}</Title>
      <Meta v-if="data.title" name="og:title" :content="data.title" />
      <Meta v-if="data.title" name="twitter:title" :content="data.title" />

      <Meta v-if="data.description" name="description" :content="data.description" />
      <Meta v-if="data.description_og" property="og:description" :content="data.description_og" />
      <Meta v-else-if="data.description" property="og:description" :content="data.description" />

      <Meta v-if="data.description_og" property="twitter:description" :content="data.description_og" />
      <Meta v-else-if="data.description" property="twitter:description" :content="data.description" />

      <Meta v-if="data.ogImage" property="og:image" :content="$urlFor(data.ogImage).width(1200).url()" />
      <Meta v-if="data.ogImage" property="twitter:image" :content="$urlFor(data.ogImage).width(1200).url()" />
    </Head>

    <div class="py-4 mt-0">
      <template v-if="data">
        <div class="content grid grid-cols-1 gap-16 md:grid-cols-2 items-center py-16 px-6 xl:px-4">
          <ul class="pt-4 lg:px-4">
           <!-- <li
              v-for="(competence, index) in data.competences"
              :key="index"
              aria-open="false"
              class="group pb-4 xl:pb-6 mb-4 xl:mb-6 border-b border-gray-300"
            > -->
            <li
  v-for="(competence, index) in data.competences"
  :key="index"
  :id="`comp-${index}`"
  aria-open="false"
  class="group pb-4 xl:pb-6 mb-4 xl:mb-6 border-b border-gray-300"
>
              <!-- ✅ on passe l’event -->
              <h2
                class="text-black text-[34px] cursor-pointer select-none"
                @click="toggleList"
              >
                {{ competence.title }}
                <span></span>
              </h2>

              <div class="grid transition-grid-row duration-300 grid-rows-[1fr] group-aria-[open=false]:grid-rows-[0fr]">
                <div class="overflow-hidden">
                  <ul class="grid gap-5 pb-4 font-gothic pt-7 text-[16px] sm:text-[20px] lg:text-[20px] xl:text-[20px] text-start">
                    <li
                      v-for="(detail, i) in competence.liste"
                      :key="i"
                      class="list-item-icon text-[#363636]"
                    >
                      {{ detail }}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>

          <div class="img-decor flex justify-center md:justify-start px-6 xl:px-0">
            <img
              class="max-w-full h-full md:pl-16 relative z-10 lg:px-4"
              src="/img/img19.webp"
              alt=""
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "competences"] | order(_updatedAt desc)[0]`
const data = await useSanityData({ query })

const route = useRoute()

function getScroller() {
  // essaye de choper le vrai scroller (layout scrollable)
  return (
    document.querySelector('.page') ||
    document.querySelector('#__nuxt') ||
    document.scrollingElement ||
    document.documentElement
  )
}

function forceTopNow() {
  const scroller = getScroller()
  try {
    scroller?.scrollTo?.({ top: 0, left: 0, behavior: 'auto' })
  } catch {}
  window.scrollTo(0, 0)
}

function lockTopFor(ms = 700) {
  const start = performance.now()

  const onScroll = (e) => {
    // tant que lock actif, on remet top
    if (performance.now() - start < ms) {
      forceTopNow()
    } else {
      window.removeEventListener('scroll', onScroll, true)
    }
  }

  // capture = true pour passer avant d’autres listeners
  window.addEventListener('scroll', onScroll, true)

  // et on bourrine un peu au début (layout shift/fonts/images)
  forceTopNow()
  requestAnimationFrame(forceTopNow)
  setTimeout(forceTopNow, 50)
  setTimeout(forceTopNow, 150)
  setTimeout(forceTopNow, 300)
  setTimeout(() => {
    window.removeEventListener('scroll', onScroll, true)
  }, ms + 50)
}

function openFromQuery() {
  const raw = route.query.open
  if (raw === undefined || raw === null) return

  const idx = Number(raw)
  if (!Number.isFinite(idx)) return

  const el = document.getElementById(`comp-${idx}`)
  if (!el) return

  // ferme tout
  const root = el.closest('ul')
  root?.querySelectorAll('li[aria-open]').forEach(li => {
    li.setAttribute('aria-open', 'false')
  })

  // ouvre le bon
  el.setAttribute('aria-open', 'true')

  // ✅ arrive en haut quoi qu’il arrive
  lockTopFor(800)
}

onMounted(() => {
  // ✅ coupe la restauration automatique du scroll
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

  // au cas où tu arrives déjà “en bas”
  lockTopFor(800)
})

onBeforeUnmount(() => {
  // on remet propre (optionnel)
  if ('scrollRestoration' in history) history.scrollRestoration = 'auto'
})

watch(
  () => [route.query.open, data?.value?.competences?.length],
  async () => {
    await nextTick()
    openFromQuery()
  },
  { immediate: true }
)

function toggleList(e) {
  const clickedItem = e.currentTarget?.closest('li')
  if (!clickedItem) return

  const listRoot = clickedItem.closest('ul')
  if (!listRoot) return

  const clickedIsOpen = clickedItem.getAttribute('aria-open') === 'true'

  listRoot.querySelectorAll('li[aria-open]').forEach(li => {
    li.setAttribute('aria-open', 'false')
  })

  clickedItem.setAttribute('aria-open', clickedIsOpen ? 'false' : 'true')
}
</script>
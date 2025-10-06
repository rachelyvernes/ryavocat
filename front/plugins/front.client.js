import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import { SplitText } from 'gsap/SplitText'
import { Observer } from 'gsap/Observer'
import Lenis from '@studio-freight/lenis'

ScrollTrigger.config({ ignoreMobileResize: true })
gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText, Observer)

const easeOuttt = CustomEase.create('custom', 'M0,0 C0.186,0 0,1 1,1')
const pamEase = CustomEase.create('custom', 'M0,0 C0.162,0.082 -0.05,1 1,1')

// window.addEventListener('resize', ScrollTrigger.refresh)

let lenis = false, lenis2 = false
let idRAF, idRAF2

function initScroll() {
  window.scrollTo(0, 0)
  lenis = new Lenis()
  requestAnimationFrame(raf)
  lenis.start()
  lenis.scrollTo('top', {immediate: true})
}

function raf(time) {
  lenis.raf(time)
  idRAF = requestAnimationFrame(raf)
}
function getLenis() {
  return lenis
}

function initScrollInstance(content) {
  lenis2 = new Lenis({
    wrapper: content.parentElement,
    content: content
  })
  requestAnimationFrame(raf2)
  lenis2.start()
  lenis2.scrollTo(0, {immediate: true})
}
function destroyScrollInstance() {
  lenis2.destroy()
  cancelAnimationFrame(idRAF2)
  lenis2 = false
  idRAF2 = null
}

function raf2(time) {
  lenis2.raf(time)
  idRAF2 = requestAnimationFrame(raf2)
}

initScroll()


function stKill() {
  let allTriggers = ScrollTrigger.getAll()
  for (let i = 0; i < allTriggers.length; i++) {
    allTriggers[i].kill(true)
  }
}

function transitionOut (done) {
  console.log('out')
  done()
}
function transitionIn () {
  console.log('in')
}

function initPage() {
  document.querySelectorAll('.wttj a').forEach((item) => {
    item.setAttribute('target', '_blank')
    item.setAttribute('rel', 'noopener')
  })
  console.log('init')
}

function initTitles() {
  document.querySelectorAll('[appear-scroll]').forEach((item) => {
    const split1 = new SplitText(item, { type: 'words' })
    const split2 = new SplitText(item, { type: 'words' })
    const tlApparition = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'bottom bottom'
      }
    })
    tlApparition
      .set(item, {opacity: 1})
      .to(item.querySelectorAll('div div'), { translateY: '0%', duration: 1, stagger: 0.05, ease: pamEase, onComplete: () => {
      } })
  })
}
function initParallax() {
  if (window.innerWidth >= 1024) {
    document.querySelectorAll('[parallax-container]').forEach((item) => {
      const rect = item.getBoundingClientRect()
      let start = 'top bottom'
      let y = '-10%'
      if (rect.top === 0) {
        start = 'top top'
        y = 0
      }
      gsap.delayedCall(1, () => {
        gsap.to(item.querySelector('[parallax-image]'), {opacity: 1})
        gsap.fromTo(item.querySelector('[parallax-image]'),
        {
          y: y,
        },
        {
          y: '10%',
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: start,
            end: 'bottom top',
            scrub: true,
          }
        })
      })
    })
  }
}

export default defineNuxtPlugin(nuxtApp => {
  return {
      provide: {
        transitionOut,
        transitionIn,
        gsap,
        ScrollTrigger,
        SplitText,
        Observer,
        initScrollInstance,
        destroyScrollInstance,
        getLenis,
        stKill,
        pamEase,
        initPage,
      }
  }
})
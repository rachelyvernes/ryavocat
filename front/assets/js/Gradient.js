import * as THREE from 'three'
import VertexShader from '~/assets/js/shaders/vertex.glsl'
import FragmentShader from '~/assets/js/shaders/fragment.glsl'
import { gsap } from 'gsap'


export default class Gradient {
  constructor (opts = {}) {

    this.parameters = {
      backgroundDefault: '#ffffff',
      color1Default: '#FDABE8',
      color2Default: '#FDABA3',
      widthDefault: 0.3,
      heightDefault: 0.4,
      zoomDefault: 1,
      rotationDefault: 0,
    }
    this.container = opts.container || document.body
    this.background = new THREE.Color(opts.background || this.parameters.backgroundDefault)
    this.color1 = new THREE.Color(opts.color1 || this.parameters.color1Default)
    this.color2 = new THREE.Color(opts.color2 || this.parameters.color2Default)
    this.width = opts.width || this.parameters.widthDefault
    this.height = opts.height || this.parameters.heightDefault
    this.zoom = opts.zoom || this.parameters.zoomDefault
    this.rotation = opts.rotation || this.parameters.rotationDefault

    this.clock = new THREE.Clock()
    this.idRaf = null
    this.init()
  }

  init () {
    this.canvas = this.container.querySelector('canvas[gradient]')
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true
    })
    if(this.canvas.hasAttribute('fade')) {
      gsap.set(this.canvas, {opacity: 0})
    }
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    const geometry = new THREE.PlaneGeometry(1, 1, 32, 32)
    this.material = new THREE.ShaderMaterial({
      vertexShader: VertexShader,
      fragmentShader: FragmentShader,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uBackground: { value: new THREE.Vector3( this.background.r, this.background.g, this.background.b ) },
        uColor1: { value: new THREE.Vector3( this.color1.r, this.color1.g, this.color1.b ) },
        uColor2: { value: new THREE.Vector3( this.color2.r, this.color2.g, this.color2.b ) },
        uWidth: { value: this.width },
        uHeight: { value: this.height },
      },
      transparent: true
    }) 
    
    const mesh = new THREE.Mesh(geometry, this.material)
    this.scene.add(mesh)
    const sizes = {
      width: this.canvas.offsetWidth,
      height: this.canvas.offsetHeight
    }
    this.camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    this.camera.position.set(0, 0, 1 / this.zoom)
    this.camera.rotation.z = this.rotation

    this.scene.add(this.camera)

    this.render()
    if(this.canvas.hasAttribute('fade')) {
      gsap.to(this.canvas, {opacity: 0.8, delay: 1, duration: 2})
    }
  }

  kill() {
    cancelAnimationFrame(this.idRaf)
    this.renderer.dispose()
    this.renderer.forceContextLoss()
  }

  render () {
    const elapsedTime = this.clock.getElapsedTime()
    this.material.uniforms.uTime.value = elapsedTime
    this.renderer.render(this.scene, this.camera)
    this.idRaf = window.requestAnimationFrame(this.render.bind(this))
  }
}

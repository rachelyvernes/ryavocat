import * as THREE from 'three'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';
import { gsap } from 'gsap'
import { GUI } from 'dat.gui'


export default class Pyramid {
  constructor (opts = {}) {

    this.container = opts.container || document.body
    this.rotating = true
    this.currentRotation = null
    this.idRaf = null

    this.clock = new THREE.Clock()
    this.init()
    // this.onResize()
  }

  init () {
    this.canvas = this.container.querySelector('canvas[pyramid]')
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true
    })
    gsap.set(this.canvas, {opacity: 0})
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    const geometry = new THREE.PlaneGeometry(70, 70)
    const textureLoader = new THREE.TextureLoader();

    const bgTexture0 = textureLoader.load("/pyramid/gradient0.jpg");
    bgTexture0.colorSpace = THREE.SRGBColorSpace
    this.bgMaterial0 = new THREE.MeshBasicMaterial({ map: bgTexture0 });

    const bgTexture1 = textureLoader.load("/pyramid/gradient1.jpg");
    bgTexture1.colorSpace = THREE.SRGBColorSpace
    this.bgMaterial1 = new THREE.MeshBasicMaterial({ map: bgTexture1 });

    const bgTexture2 = textureLoader.load("/pyramid/gradient2.jpg");
    bgTexture2.colorSpace = THREE.SRGBColorSpace
    this.bgMaterial2 = new THREE.MeshBasicMaterial({ map: bgTexture2 });

    const bgTexture3 = textureLoader.load("/pyramid/gradient3.jpg");
    bgTexture3.colorSpace = THREE.SRGBColorSpace
    this.bgMaterial3 = new THREE.MeshBasicMaterial({ map: bgTexture3 });
    
    const sizes = {
      width: this.canvas.clientWidth,
      height: this.canvas.clientHeight
    }
    this.camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    this.camera.position.set(0, 1, 8)

    this.scene.add(this.camera)
    this.renderer.setSize(sizes.width, sizes.height );


    const hdrEquirect = new RGBELoader().load(
      "/pyramid/reflet.hdr",
      () => {
        hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
      }
    )

    this.backgroundGradient = new THREE.Mesh(geometry, this.bgMaterial0);
    this.backgroundGradient.position.set(0, 0, -27);
    if(window.innerWidth < 768) {
      this.backgroundGradient.position.set(0, 0, -50);
    }
    this.backgroundGradient.rotation.z = -0.3;
    this.scene.add(this.backgroundGradient);

    
    const options = {
      enableSwoopingCamera: false,
      enableRotation: false,
      color: 0xf4f4f4,
      specularColor: 0x000000,
      metalness: 0,
      roughness: 0,
      transmission: 1,
      ior: 2,
      reflectivity: 0,
      thickness: 2.5,
      envMapIntensity: 2,
      clearcoat: 0.02,
      clearcoatRoughness: 0.1,
      normalScale: 0.4,
      clearcoatNormalScale: 0.2,
      normalRepeat: 3,
      bloomThreshold: 0.85,
      bloomStrength: 0.35,
      bloomRadius: 0.33,
      opacity: 1,
    };

    const normalMapTexture = textureLoader.load("/pyramid/normal.jpg");
    normalMapTexture.wrapS = THREE.RepeatWrapping;
    normalMapTexture.wrapT = THREE.RepeatWrapping;
    normalMapTexture.repeat.set(options.normalRepeat, options.normalRepeat);

    const material = new THREE.MeshPhysicalMaterial ({
      color: options.color,
      specularColor: options.specularColor,
      metalness: options.metalness,
      roughness: options.roughness,
      transmission: options.transmission,
      ior: options.ior,
      reflectivity: options.reflectivity,
      thickness: options.thickness,
      envMap: hdrEquirect,
      envMapIntensity: options.envMapIntensity,
      toneMapped: false,
      clearcoat: options.clearcoat,
      clearcoatRoughness: options.clearcoatRoughness,
      normalScale: new THREE.Vector2(options.normalScale),
      normalMap: normalMapTexture,
      clearcoatNormalMap: normalMapTexture,
      side: THREE.DoubleSide,
      clearcoatNormalScale: new THREE.Vector2(options.clearcoatNormalScale),
      opacity: options.opacity
    })

    
    const spGeom = new THREE.SphereGeometry(3, 4, 2);
    const edges = new THREE.EdgesGeometry( spGeom ); 
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff  } ) ); 


    this.mesh = new THREE.Mesh(spGeom, material);

    this.groupMesh = new THREE.Group();
    this.groupMesh.add( line );
    this.groupMesh.add( this.mesh );
    this.groupMesh.position.set(0, 0, 0);
    // this.scene.add(this.groupMesh);

    let dirLight1 = new THREE.DirectionalLight(0xffffff, 1);
    dirLight1.position.set( 0, 0, 60 );    
    this.scene.add(dirLight1);
    let dirLight2 = new THREE.DirectionalLight(0xffffff, 1);
    dirLight2.position.set( 0, 60, 0 );    
    this.scene.add(dirLight2);

    // this.scene.add(ambientLight);


    // const gui = new GUI()
    // gui.add(this.mesh.position, 'y').min(- 3).max(3).step(0.01).name('elevation')
    // gui.add(material, 'opacity').min(0).max(1).step(0.01).name('opacity')
    // gui.add(material, 'metalness').min(0).max(1).step(0.01).name('metalness')
    // gui.add(material, 'roughness').min(0).max(1).step(0.01).name('roughness')
    // gui.add(material, 'transmission').min(0).max(1).step(0.01).name('transmission')
    // gui.add(material, 'ior').min(0).max(2).step(0.01).name('ior')
    // gui.add(material, 'reflectivity').min(0).max(1).step(0.01).name('reflectivity')
    // gui.add(material, 'thickness').min(0).max(3).step(0.01).name('thickness')
    // gui.add(material, 'clearcoat').min(0).max(1).step(0.01).name('clearcoat')
    // gui.add(material, 'clearcoatRoughness').min(0).max(1).step(0.01).name('clearcoatRoughness')
    // gui.add(material, 'envMapIntensity').min(0).max(2).step(0.01).name('envMapIntensity')
    // gui.addColor(options, 'color').onChange(() => {
    //   material.color.set(options.color)
    // })
    // gui.addColor(options, 'specularColor').onChange(() => {
    //   material.specularColor.set(options.specularColor)
    // })
    // gui.add(options, "normalScale", 0, 5, 0.01).onChange((val) => {
    //   material.normalScale.set(val, val);
    // });
    // gui.close()

    this.render()
    gsap.to(this.canvas, {opacity: 1, delay: 1, duration: 2})
  }

  goTo(face) {
    this.pauseRotation()
    if(this.currentRotation) {
      this.currentRotation.kill()
    }
    // face += 1
    const currentRotationY = this.groupMesh.rotation.y
    
    gsap.to(this.camera.position, { y: 0 })
    if (face < 4) {
      this.currentRotation = gsap.to(this.groupMesh.rotation, { x:  Math.PI / 4, y: this.getClosestAngleToFace(face, currentRotationY) })
    } else {
      face = face
      this.currentRotation = gsap.to(this.groupMesh.rotation, { x:  -Math.PI / 4, y: this.getClosestAngleToFace(face, currentRotationY) })
    }
  }
  
  getClosestAngleToFace(x, currentAngle) {
    const anglePerFace = Math.PI / 2 // L'angle entre chaque face est de 90 degrés (ou pi/2 radians)
    const targetAngle = (x | 4) * anglePerFace + Math.PI / 4 // L'angle de la face cible
    const numRotations = Math.floor(currentAngle / (Math.PI * 2))
    const currentAngleMod = currentAngle - numRotations * (Math.PI * 2)
    const closestAngle = (currentAngleMod - targetAngle < 0)? (numRotations - 1) * Math.PI * 2 + targetAngle : numRotations * Math.PI * 2 + targetAngle
    
    // const closestAngle = Math.PI / 2 * x + Math.PI / 4

    return closestAngle
  }

  pauseRotation() {
    this.rotating = false
  }
  resumeRotation() {
    this.rotating = true
    if(this.currentRotation) {
      this.currentRotation.kill()
      this.currentRotation = null
    }
    gsap.to(this.camera.position, { y: 1 })
    gsap.to(this.groupMesh.rotation, { x: 0 })
    gsap.to(this.groupMesh.position, { y: 0 })
    // gsap.to(this.mesh.rotation, { x: 0 })
    // gsap.to(this.mesh.position, { y: 0 })
  }

  changeGradient(index) {
    if (index===0) {
      this.backgroundGradient.material = this.bgMaterial2
    } else if(index===1) {
      this.backgroundGradient.material = this.bgMaterial1
    } else {
      this.backgroundGradient.material = this.bgMaterial3
    }
  }
  resumeGradient() {
    this.backgroundGradient.material = this.bgMaterial0
  }


  update(deltaTime) {
    if(this.rotating) {
      const ROTATE_TIME = 10
      const rotateY = (deltaTime / ROTATE_TIME) * Math.PI * 2
      this.groupMesh.rotation.y += rotateY
    }
  }

  kill() {
    cancelAnimationFrame(this.idRaf)
    this.renderer.dispose()
    this.renderer.forceContextLoss()
  }

  render () {
    this.update(0.01);
    const elapsedTime = this.clock.getElapsedTime()
    this.renderer.render(this.scene, this.camera)
    this.idRaf = window.requestAnimationFrame(this.render.bind(this))
  }
}



import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ExactWaveCanvasProps {
  id: string
  color?: string
  particleCount?: number
  cameraY?: number
  cameraZ?: number
  waveHeight?: number
  speed?: number
  rotationX?: number
  rotationZ?: number
  className?: string
}

export function ExactWaveCanvas({
  id,
  color = '#202124',
  particleCount = 10000,
  cameraY = 70,
  cameraZ = 180,
  waveHeight = 30,
  speed = 0.55,
  rotationX = -0.35,
  rotationZ = -0.08,
  className = '',
}: ExactWaveCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, 1, 1, 2000)
    camera.position.set(0, cameraY, cameraZ)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor(0, 0)
    renderer.domElement.style.pointerEvents = 'none'
    renderer.domElement.style.touchAction = 'none'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    mount.appendChild(renderer.domElement)

    // Geometry
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const scale = new Float32Array(particleCount)
    const spreadX = 1000
    const spreadZ = 1000

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * spreadX - spreadX / 2
      positions[i * 3 + 1] = 0
      positions[i * 3 + 2] = Math.random() * spreadZ - spreadZ / 2
      scale[i] = Math.random()
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('aScale', new THREE.BufferAttribute(scale, 1))

    const isDarkParticle = color === '#000000' || color === '#202124' || color.toLowerCase() === '#121317'

    // Material with Codarox wave shaders
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: isDarkParticle ? THREE.NormalBlending : THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
        uWaveHeight: { value: waveHeight },
        uSpeed: { value: speed },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uWaveHeight;
        uniform float uSpeed;

        attribute float aScale;
        varying float vAlpha;

        void main() {
          vec3 pos = position;
          float t = uTime * uSpeed;
          float wave1 = sin((pos.x * 0.016) + (t * 0.9)) * uWaveHeight;
          float wave2 = cos((pos.z * 0.014) + (t * 0.7)) * uWaveHeight;

          pos.y = wave1 + wave2;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = (3.2 + aScale * 2.8) * (280.0 / -mvPosition.z);
          vAlpha = 0.72 + aScale * 0.28;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying float vAlpha;

        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          float strength = 1.0 - smoothstep(0.22, 0.5, dist);
          strength = pow(strength, 1.35);
          gl_FragColor = vec4(uColor, strength * vAlpha);
        }
      `,
    })

    const points = new THREE.Points(geometry, material)
    points.rotation.x = rotationX
    points.rotation.z = rotationZ
    scene.add(points)

    const handleResize = () => {
      const width = mount.clientWidth
      const height = mount.clientHeight
      if (!width || !height) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
      renderer.setSize(width, height, false)
    }

    handleResize()
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(mount)

    let animationId: number
    const startTime = performance.now()
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      const elapsed = (performance.now() - startTime) * 0.001
      material.uniforms.uTime.value = elapsed
      points.rotation.z = rotationZ + Math.sin(elapsed * 0.15) * 0.04
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [color, particleCount, cameraY, cameraZ, waveHeight, speed, rotationX, rotationZ])

  return <div ref={mountRef} id={id} className={className} />
}

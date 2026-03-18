import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  baseX: number
  baseY: number
  hue: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0

    const setupSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setupSize()

    const particles: Particle[] = []
    const dotCount = 50
    let mouseX = 0
    let mouseY = 0

    for (let i = 0; i < dotCount; i += 1) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        hue: Math.random() * 60 + 200,
      })
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 200

        if (dist > 0 && dist < maxDist) {
          const force = (1 - dist / maxDist) * 2
          particle.vx -= (dx / dist) * force * 0.1
          particle.vy -= (dy / dist) * force * 0.1
        }

        particle.vx += (particle.baseX - particle.x) * 0.01
        particle.vy += (particle.baseY - particle.y) * 0.01
        particle.vx *= 0.95
        particle.vy *= 0.95

        particle.x += particle.vx
        particle.y += particle.vy

        const opacity = 0.15 + Math.max(0, 1 - dist / maxDist) * 0.4
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 60%, ${opacity})`
        ctx.fillRect(particle.x, particle.y, 3, 3)
      })

      animationId = window.requestAnimationFrame(animate)
    }

    const handleResize = () => {
      setupSize()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    animationId = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      window.cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 opacity-20" />
}


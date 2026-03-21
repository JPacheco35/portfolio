// Animated hexagonal grid background that lights up on mouse hover with blue glow effect

import { useEffect, useRef } from 'react'

interface HexCell {
  x: number
  y: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0
    let width = 0
    let height = 0
    let hexCells: HexCell[] = []
    
    // hexagon dimensions and spacing
    const hexSize = 72
    const hexHeight = Math.sqrt(3) * hexSize
    const columnStep = 1.5 * hexSize
    
    // radius for hover effects
    const innerGlowRadius = hexSize * 1.25
    const influenceRadius = hexSize * 3.9
    
    // blue color palette matching the design system (from Tailwind)
    const heroBlueLight = '219, 234, 254' // #dbeafe
    const heroBlueMid = '96, 165, 250' // #60a5fa
    const heroBlueSky = '56, 189, 248' // #38bdf8
    const heroBlueDeep = '37, 99, 235' // #2563eb
    
    // track mouse position for hover effects
    const mouse = { x: 0, y: 0, isInside: false }

    // helper function to draw hexagon path
    const drawHexPath = (x: number, y: number, scale = 1) => {
      const scaledSize = hexSize * scale
      const scaledHeight = Math.sqrt(3) * scaledSize

      ctx.beginPath()
      ctx.moveTo(x + scaledSize, y)
      ctx.lineTo(x + scaledSize / 2, y + scaledHeight / 2)
      ctx.lineTo(x - scaledSize / 2, y + scaledHeight / 2)
      ctx.lineTo(x - scaledSize, y)
      ctx.lineTo(x - scaledSize / 2, y - scaledHeight / 2)
      ctx.lineTo(x + scaledSize / 2, y - scaledHeight / 2)
      ctx.closePath()
    }

    // generate hexagon grid covering the screen
    const rebuildGrid = () => {
      const dpr = window.devicePixelRatio || 1
      width = window.innerWidth
      height = window.innerHeight

      // scale canvas for high DPI displays
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const columnCount = Math.ceil(width / columnStep) + 5

      // create grid of hexagons
      hexCells = []
      for (let col = -3; col < columnCount; col += 1) {
        const x = col * columnStep
        // offset every other column for proper hexagon packing
        const yOffset = col % 2 === 0 ? 0 : hexHeight / 2

        for (let y = -hexHeight * 2; y < height + hexHeight * 2; y += hexHeight) {
          hexCells.push({
            x,
            y: y + yOffset,
          })
        }
      }
    }

    // draw hexagon in its base/default state
    const drawBaseHexCell = (cell: HexCell) => {
      drawHexPath(cell.x, cell.y)
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
      ctx.fill()

      // outer stroke
      drawHexPath(cell.x, cell.y)
      ctx.strokeStyle = 'rgba(51, 65, 85, 0.34)'
      ctx.lineWidth = 1.05
      ctx.stroke()

      // inner stroke for definition
      drawHexPath(cell.x, cell.y, 0.985)
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.42)'
      ctx.lineWidth = 0.62
      ctx.stroke()
    }

    // draw hexagon with bright blue glow (hovered hex)
    const drawHoveredHexCell = (cell: HexCell, strength: number) => {
      // edge-only glow to match the desired hover style
      drawHexPath(cell.x, cell.y, 1.01)
      ctx.strokeStyle = `rgba(${heroBlueSky}, ${0.24 + 0.42 * strength})`
      ctx.lineWidth = 2.4 + 1.15 * strength
      ctx.shadowColor = `rgba(${heroBlueDeep}, 1)`
      ctx.shadowBlur = 12 + 16 * strength
      ctx.stroke()

      // inner bright stroke
      drawHexPath(cell.x, cell.y)
      ctx.strokeStyle = `rgba(${heroBlueLight}, ${0.34 + 0.42 * strength})`
      ctx.lineWidth = 1.3 + 0.85 * strength
      ctx.shadowColor = `rgba(${heroBlueMid}, 1)`
      ctx.shadowBlur = 7 + 10 * strength
      ctx.stroke()
      ctx.shadowBlur = 0
    }

    // draw hexagon with subtle glow (neighboring hex)
    const drawNeighborHexCell = (cell: HexCell, strength: number) => {
      drawHexPath(cell.x, cell.y)
      ctx.strokeStyle = `rgba(${heroBlueMid}, ${0.14 + 0.24 * strength})`
      ctx.lineWidth = 1 + 0.75 * strength
      ctx.shadowColor = `rgba(${heroBlueDeep}, 0.75)`
      ctx.shadowBlur = 4 + 7 * strength
      ctx.stroke()
      ctx.shadowBlur = 0
    }

    // main animation loop that renders and updates all hexagons
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // draw all base hexagons
      for (const cell of hexCells) {
        drawBaseHexCell(cell)
      }

      // if mouse is over canvas, highlight nearby hexagons based on distance
      if (mouse.isInside) {
        for (const cell of hexCells) {
          const distance = Math.hypot(mouse.x - cell.x, mouse.y - cell.y)
          if (distance > influenceRadius) {
            continue
          }

          // calculate how strong the effect should be based on distance
          const normalized = 1 - distance / influenceRadius
          const spreadStrength = normalized * normalized

          // draw neighbor hexagons with subtle glow
          if (spreadStrength > 0.015) {
            drawNeighborHexCell(cell, spreadStrength)
          }

          // draw the hovered hexagon (innermost) with bright glow
          if (distance <= innerGlowRadius) {
            const innerNormalized = 1 - distance / innerGlowRadius
            const coreStrength = innerNormalized * innerNormalized
            if (coreStrength > 0.01) {
              drawHoveredHexCell(cell, coreStrength)
            }
          }
        }
      }

      animationId = window.requestAnimationFrame(animate)
    }

    // update mouse position when moving over canvas
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
      mouse.isInside = true
    }

    // stop hover effects when mouse leaves
    const handleMouseLeave = () => {
      mouse.isInside = false
    }

    // rebuild grid when window resizes
    const handleResize = () => {
      rebuildGrid()
    }

    rebuildGrid()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    animationId = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
      window.cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-55" />
}




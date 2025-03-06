"use client"

import { useRef, useEffect } from "react"

interface Particle {
  x: number
  y: number
  size: number
  baseX: number
  baseY: number
  density: number
  color: string
  velocity: {
    x: number
    y: number
  }
}

interface ParticleTextProps {
  text?: string
  fontSize?: number
  fontFamily?: string
  textColor?: string
  particleSize?: number
  particleColor?: string
  interactive?: boolean
}

export default function ParticleText({
  text = "PHYSIA",
  fontSize = 120,
  fontFamily = "Arial, sans-serif",
  textColor = "transparent",
  particleSize = 4,
  particleColor = "#7c3aed",
  interactive = true,
}: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to match parent container
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
      initText()
    }

    // Initialize text particles
    const initText = () => {
      particlesRef.current = []
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw text to get pixel data
      ctx.font = `bold ${fontSize}px ${fontFamily}`
      ctx.fillStyle = textColor
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Calculate text position to center it
      const textX = canvas.width / 2
      const textY = canvas.height / 2

      ctx.fillText(text, textX, textY)

      // Get pixel data
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data

      // Create particles for text pixels
      for (let y = 0; y < canvas.height; y += 4) {
        for (let x = 0; x < canvas.width; x += 4) {
          const index = (y * canvas.width + x) * 4
          const alpha = pixels[index + 3]

          if (alpha > 128) {
            const size = particleSize
            const color = particleColor

            particlesRef.current.push({
              x,
              y,
              size,
              baseX: x,
              baseY: y,
              density: Math.random() * 30 + 1,
              color,
              velocity: {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2,
              },
            })
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Draw particle
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 5
        ctx.shadowColor = particle.color

        // Interactive behavior
        if (interactive) {
          // Calculate distance between mouse and particle
          const dx = mouseRef.current.x - particle.x
          const dy = mouseRef.current.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseRef.current.radius) {
            // Push particles away from mouse
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius

            const directionX = forceDirectionX * force * particle.density
            const directionY = forceDirectionY * force * particle.density

            particle.x -= directionX
            particle.y -= directionY
          } else {
            // Return to original position
            if (particle.x !== particle.baseX) {
              const dx = particle.x - particle.baseX
              particle.x -= dx / 10
            }
            if (particle.y !== particle.baseY) {
              const dy = particle.y - particle.baseY
              particle.y -= dy / 10
            }
          }
        } else {
          // Simple floating animation
          particle.x += particle.velocity.x * 0.2
          particle.y += particle.velocity.y * 0.2

          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.velocity.x *= -1
          }
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.velocity.y *= -1
          }

          // Gradually return to base position
          const dx = particle.x - particle.baseX
          const dy = particle.y - particle.baseY

          if (Math.abs(dx) > 50 || Math.abs(dy) > 50) {
            particle.x -= dx * 0.01
            particle.y -= dy * 0.01
          }
        }
      })

      // Reset shadow
      ctx.shadowBlur = 0

      animationRef.current = requestAnimationFrame(animate)
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    // Touch move handler
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current.x = e.touches[0].clientX - rect.left
        mouseRef.current.y = e.touches[0].clientY - rect.top
      }
    }

    // Add event listeners
    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove)

    // Initialize
    resizeCanvas()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [text, fontSize, fontFamily, textColor, particleSize, particleColor, interactive])

  return <canvas ref={canvasRef} className="h-full w-full cursor-pointer" />
}


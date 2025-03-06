"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  baseX: number
  baseY: number
  density: number
  color: string
  velocityX: number
  velocityY: number
  inText: boolean
}

export default function PhysiaParticleText() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar el canvas para que ocupe todo el contenedor
    const setCanvasSize = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }

    // Asegurar que el canvas tiene el tamaño correcto antes de continuar
    setCanvasSize()

    // Texto a mostrar
    const text = "PHYSIA"
    let fontSize = 130 // Tamaño base de la fuente

    // Ajustar el tamaño de la fuente según el ancho del contenedor
    if (container.offsetWidth < 768) {
      fontSize = 80
    } else if (container.offsetWidth < 1024) {
      fontSize = 110
    }

    // Configuración de partículas
    const particlesArray: Particle[] = []
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150, // Área de efecto
    }

    // Capturar posición del mouse con coordenadas relativas al canvas
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    // Asegurarnos de que los eventos se añaden al canvas
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // También añadir eventos al contenedor para mayor área de detección
    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    // Función para dibujar el texto
    const drawText = () => {
      if (!ctx || !canvas) return

      ctx.fillStyle = "#4dabf7" // Color azul brillante
      ctx.font = `bold ${fontSize}px Arial, sans-serif`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(text, canvas.width / 2, canvas.height / 2)
    }

    // Función para obtener los datos de los píxeles del texto
    const getTextPixels = () => {
      if (!ctx || !canvas || canvas.width === 0 || canvas.height === 0) {
        console.error("Canvas not properly initialized")
        return null
      }

      // Limpiar el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dibujar el texto
      drawText()

      try {
        // Obtener los datos de los píxeles
        return ctx.getImageData(0, 0, canvas.width, canvas.height)
      } catch (error) {
        console.error("Error getting image data:", error)
        return null
      }
    }

    // Inicializar partículas basadas en el texto
    const init = () => {
      particlesArray.length = 0

      const pixelData = getTextPixels()
      if (!pixelData) {
        console.error("Failed to get pixel data")
        return
      }

      const pixels = pixelData.data

      // Limpiar el canvas después de obtener los datos
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }

      // Crear partículas solo donde hay píxeles del texto
      // Muestreo más denso para capturar mejor la forma del texto
      for (let y = 0; y < canvas.height; y += 3) {
        for (let x = 0; x < canvas.width; x += 3) {
          const index = (y * canvas.width + x) * 4
          const alpha = pixels[index + 3]

          if (alpha > 128) {
            // Crear una partícula en esta posición
            const size = Math.random() * 2 + 1

            // Posición inicial aleatoria fuera del canvas
            let startX, startY

            if (Math.random() < 0.5) {
              startX = Math.random() < 0.5 ? -50 : canvas.width + 50
              startY = Math.random() * canvas.height
            } else {
              startX = Math.random() * canvas.width
              startY = Math.random() < 0.5 ? -50 : canvas.height + 50
            }

            // Colores más brillantes para modo oscuro
            let color
            if (Math.random() < 0.6) {
              // Tonos azules más brillantes
              const hue = 210 + Math.random() * 20 // Azul
              const saturation = 90 + Math.random() * 10
              const lightness = 65 + Math.random() * 15
              color = `hsla(${hue}, ${saturation}%, ${lightness}%, 1)` // Mayor opacidad
            } else {
              // Tonos morados más brillantes
              const hue = 270 + Math.random() * 20 // Morado
              const saturation = 90 + Math.random() * 10
              const lightness = 65 + Math.random() * 15
              color = `hsla(${hue}, ${saturation}%, ${lightness}%, 1)` // Mayor opacidad
            }

            particlesArray.push({
              x: startX,
              y: startY,
              size,
              baseX: x,
              baseY: y,
              density: Math.random() * 20 + 1,
              color,
              velocityX: (x - startX) * 0.01,
              velocityY: (y - startY) * 0.01,
              inText: false,
            })
          }
        }
      }
    }

    // Función para animar las partículas
    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Fondo completamente transparente para integrarse con el nuevo diseño
      ctx.fillStyle = "rgba(0, 0, 0, 0)" // Completamente transparente
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        const particle = particlesArray[i]

        // Dibujar la partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Añadir brillo a las partículas (más intenso para modo oscuro)
        ctx.shadowColor = particle.color
        ctx.shadowBlur = 5
        ctx.fill()
        ctx.shadowBlur = 0

        // Actualizar la posición
        if (!particle.inText) {
          // Mover hacia la posición base
          particle.x += particle.velocityX
          particle.y += particle.velocityY

          // Verificar si la partícula ha llegado a su posición
          const dx = particle.baseX - particle.x
          const dy = particle.baseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 5) {
            particle.inText = true
          }
        } else {
          // Comportamiento cuando está en posición
          if (mouse.x !== null && mouse.y !== null) {
            // Calcular la distancia entre la partícula y el mouse
            const dx = mouse.x - particle.x
            const dy = mouse.y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < mouse.radius) {
              // Repeler la partícula
              const forceDirectionX = dx / distance
              const forceDirectionY = dy / distance
              const force = (mouse.radius - distance) / mouse.radius

              // Fuerza de repulsión
              particle.x -= forceDirectionX * force * 6
              particle.y -= forceDirectionY * force * 6
            } else {
              // Volver lentamente a la posición base
              const dx = particle.baseX - particle.x
              const dy = particle.baseY - particle.y

              particle.x += dx * 0.1
              particle.y += dy * 0.1
            }
          } else {
            // Volver lentamente a la posición base
            const dx = particle.baseX - particle.x
            const dy = particle.baseY - particle.y

            particle.x += dx * 0.1
            particle.y += dy * 0.1
          }
        }
      }

      requestAnimationFrame(animate)
    }

    // Asegurar que el canvas tiene el tamaño correcto antes de inicializar
    const handleResize = () => {
      setCanvasSize()
      // Reinicializar partículas después del cambio de tamaño
      setTimeout(init, 100) // Pequeño retraso para asegurar que el canvas está listo
    }

    window.addEventListener("resize", handleResize)

    // Inicializar con un pequeño retraso para asegurar que el canvas está listo
    setTimeout(() => {
      if (canvas.width > 0 && canvas.height > 0) {
        init()
        animate()
      } else {
        console.error("Canvas dimensions are still invalid after delay")
      }
    }, 100)

    // Limpieza
    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute bottom-0 left-0 right-0 text-center text-gray-400 text-xs">
        Mueve el cursor sobre el texto para interactuar
      </div>
    </div>
  )
}


"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check } from "lucide-react"
import PhysiaParticleText from "@/components/physia-particle-text"

// Componente para texto iluminado por palabras
interface WordProps {
  children: React.ReactNode
  progress: MotionValue<number>
}

const Word: React.FC<WordProps> = ({ children, progress }) => {
  const opacity = useTransform(progress, [0, 0.5, 1], [0.4, 0.7, 1])
  const textGlow = useTransform(
    progress,
    [0, 0.5, 1],
    ["0 0 0px rgba(168, 85, 247, 0)", "0 0 15px rgba(168, 85, 247, 0.5)", "0 0 30px rgba(168, 85, 247, 0.8)"],
  )
  const textColor = useTransform(
    progress,
    [0, 0.5, 1],
    ["rgb(156, 163, 175)", "rgb(192, 132, 252)", "rgb(216, 180, 254)"],
  )

  return (
    <motion.span
      style={{
        opacity,
        textShadow: textGlow,
        color: textColor,
        display: "inline-block",
        marginRight: "0.25em",
        fontWeight: 500,
      }}
      className="font-medium"
    >
      {children}
    </motion.span>
  )
}

interface IlluminatedTextProps {
  text: string
}

const IlluminatedText: React.FC<IlluminatedTextProps> = ({ text }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  })

  const words = text.split(" ")

  const startDelay = 0.1 // Retraso inicial antes de que comience la animación
  const totalDuration = 0.4 // Duración total de la animación en términos de scroll progress
  const wordDuration = totalDuration / words.length

  const wordProgresses = words.map((_, i) =>
    useTransform(scrollYProgress, [startDelay + i * wordDuration, startDelay + (i + 1) * wordDuration, 1], [0, 1, 1]),
  )

  return (
    <div ref={containerRef} className="py-4">
      <div className="text-center font-sans text-lg sm:text-xl md:text-2xl tracking-wide leading-relaxed">
        {words.map((word: string, index: number) => (
          <Word key={index} progress={wordProgresses[index]}>
            {word}
          </Word>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  // Referencia para el efecto de estrellas en el fondo
  const starsCanvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Estado para controlar la visibilidad de la imagen
  const [imageVisible, setImageVisible] = useState(false)

  // Efecto de scroll para el texto descriptivo
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start", "end start"],
  })

  // Efecto para crear estrellas en el fondo
  useEffect(() => {
    const canvas = starsCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar el canvas para que ocupe toda la pantalla
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()

    // Crear estrellas
    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = []
    const starCount = 150

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.05 + 0.01,
      })
    }

    // Animar estrellas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Actualizar posición
        star.y += star.speed

        // Si la estrella sale de la pantalla, reiniciarla arriba
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        // Dibujar estrella
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.3})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Manejar cambio de tamaño de ventana
    window.addEventListener("resize", setCanvasSize)

    // Mostrar la imagen después de que el texto se haya formado
    const timer = setTimeout(() => {
      setImageVisible(true)
    }, 1500)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      clearTimeout(timer)
    }
  }, [])

  // Particle background effect
  useEffect(() => {
    const canvas = starsCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()

    // Create particles
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
    }[] = []

    // Create more particles for a richer effect
    for (let i = 0; i < 120; i++) {
      const size = Math.random() * 2 + 0.5
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: Math.random() > 0.5 ? "#a78bfa" : "#93c5fd",
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        // Connect nearby particles
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.05 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", setCanvasSize)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0f1729] to-[#1a1033]"
    >
      {/* Efecto de estrellas en el fondo */}
      <canvas ref={starsCanvasRef} className="absolute inset-0 z-0 opacity-40" />

      {/* Efectos de neblina */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-900/10 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-blue-900/10 to-transparent opacity-30"></div>

        {/* Círculos de luz difuminados */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Reorganizamos para que el texto tenga más protagonismo */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
          {/* Badge de IA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center rounded-full bg-white/10 border border-purple-500/20 px-3 py-1 text-sm text-purple-200 backdrop-blur-sm">
              <span className="mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-600">
                <Check className="h-3 w-3 text-white" />
              </span>
              Potenciado por IA
            </div>
          </motion.div>

          {/* Contenedor del efecto de texto - Ahora más grande y centrado */}
          <div className="relative w-full max-w-4xl mb-12">
            {/* Resplandor detrás del texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>

            {/* Aumentamos el tamaño y añadimos un marco decorativo */}
            <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">
              {/* Marco decorativo */}
              <div className="absolute -inset-4 border border-purple-500/20 rounded-3xl"></div>

              {/* Efecto de partículas */}
              <PhysiaParticleText />
            </div>
          </div>

          {/* Texto descriptivo con efecto de iluminación por palabras */}
          <div className="mb-10 max-w-3xl mx-auto">
            <IlluminatedText text="Herramienta de gestión centralizada para clínicas de profesionales de la salud, potenciada con Inteligencia Artificial." />
          </div>

          {/* Botones de acción */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Prueba Gratis
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500/30 bg-white/5 text-purple-200 hover:bg-white/10"
            >
              Ver Demostración
            </Button>
          </motion.div>

          {/* Características en fila */}
          <motion.div
            className="grid grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {["Automatiza tareas", "Mejora la experiencia", "Atención de calidad"].map((feature: string, i: number) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900/50 border border-purple-500/20">
                  <Check className="h-4 w-4 text-purple-300" />
                </div>
                <span className="text-sm font-medium text-gray-300">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* Imagen principal - Ahora aparece después del texto */}
          <motion.div
            className="relative z-10 mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: imageVisible ? 1 : 0, y: imageVisible ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Resplandor detrás de la imagen */}
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl"></div>

              {/* Imagen principal */}
              <div className="relative rounded-lg border border-white/10 overflow-hidden shadow-2xl">
                <Image
                  src="/mainimagge.png"
                  alt="Physia - Plataforma de gestión para clínicas"
                  width={800}
                  height={600}
                  className="relative"
                  priority
                />
              </div>

              {/* Insignia decorativa */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1 shadow-lg">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0f1729] text-white">
                  <span className="text-center text-xs font-bold">
                    IA
                    <br />
                    Integrada
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 1 },
          y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" },
        }}
      >
        <div className="flex flex-col items-center">
          <div className="text-gray-400 text-sm mb-2">Scroll para descubrir</div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}


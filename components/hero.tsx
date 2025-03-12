"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check, Sparkles } from "lucide-react"
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
    ["rgb(107, 114, 128)", "rgb(147, 51, 234)", "rgb(168, 85, 247)"],
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

  // Crear un componente separado para cada palabra
  return (
    <div ref={containerRef} className="py-4">
      <div className="text-center font-sans text-lg sm:text-xl md:text-2xl tracking-wide leading-relaxed text-purple-900">
        {words.map((word, index) => (
          <IlluminatedWord
            key={index}
            word={word}
            scrollYProgress={scrollYProgress}
            index={index}
            totalWords={words.length}
          />
        ))}
      </div>
    </div>
  )
}

// Componente separado para cada palabra que maneja su propio hook useTransform
interface IlluminatedWordProps {
  word: string
  scrollYProgress: MotionValue<number>
  index: number
  totalWords: number
}

const IlluminatedWord: React.FC<IlluminatedWordProps> = ({ word, scrollYProgress, index, totalWords }) => {
  const startDelay = 0.1
  const totalDuration = 0.4
  const wordDuration = totalDuration / totalWords

  const progress = useTransform(
    scrollYProgress,
    [startDelay + index * wordDuration, startDelay + (index + 1) * wordDuration, 1],
    [0, 1, 1],
  )

  return <Word progress={progress}>{word}</Word>
}

// Botón animado y llamativo con soporte para enlaces
interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className = "", href }) => {
  const buttonContent = (
    <>
      {children}

      {/* Partículas decorativas */}
      <motion.span
        className="absolute -top-1 -right-1 text-yellow-300"
        animate={{
          rotate: [0, 15, 0, -15, 0],
          scale: [1, 1.2, 1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <Sparkles className="h-4 w-4" />
      </motion.span>
    </>
  )

  const buttonElement = (
    <Button
      size="lg"
      className={`relative z-10 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 hover:from-purple-800 hover:via-purple-700 hover:to-purple-900 text-white shadow-xl shadow-purple-500/20 px-8 py-6 font-medium ${className}`}
    >
      {buttonContent}
    </Button>
  )

  return (
    <motion.div className="relative inline-block group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {/* Efecto de resplandor */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full opacity-70 blur-md"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(219,39,119,0.7) 0%, rgba(124,58,237,0.7) 50%, rgba(37,99,235,0.7) 100%)",
            "linear-gradient(90deg, rgba(37,99,235,0.7) 0%, rgba(219,39,119,0.7) 50%, rgba(124,58,237,0.7) 100%)",
            "linear-gradient(90deg, rgba(124,58,237,0.7) 0%, rgba(37,99,235,0.7) 50%, rgba(219,39,119,0.7) 100%)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Botón principal - con o sin enlace */}
      {href ? (
        <Link href={href} className="inline-block">
          {buttonElement}
        </Link>
      ) : (
        buttonElement
      )}
    </motion.div>
  )
}

export default function Hero() {
  // Referencia para el efecto de partículas
  const particlesCanvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Estado para controlar la visibilidad de la imagen
  const [imageVisible, setImageVisible] = useState(false)

  // Efecto de scroll para el texto descriptivo
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start", "end start"],
  })

  // Efecto para crear las partículas en el fondo
  useEffect(() => {
    const canvas = particlesCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()

    // Crear partículas
    const particles: {
      x: number
      y: number
      size: number
      opacity: number
      speedX: number
      speedY: number
    }[] = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
      })
    }

    // Función para dibujar las partículas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Crear gradiente
      const gradientBg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradientBg.addColorStop(0, "rgba(255, 255, 255, 0.8)")
      gradientBg.addColorStop(0.5, "rgba(233, 213, 255, 0.5)")
      gradientBg.addColorStop(1, "rgba(255, 255, 255, 0.8)")

      // Dibujar el fondo con el gradiente
      ctx.fillStyle = gradientBg
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Dibujar y actualizar cada partícula
      particles.forEach((particle) => {
        // Actualizar posición
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Dibujar partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`
        ctx.fill()

        // Conectar partículas cercanas
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.03 * (1 - distance / 100)})`
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

    // Mostrar la imagen después de que el texto se haya formado
    const timer = setTimeout(() => {
      setImageVisible(true)
    }, 1500)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-screen bg-white">
      {/* Canvas para el efecto de partículas */}
      <canvas ref={particlesCanvasRef} className="absolute inset-0 z-0" />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-100 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-purple-100 to-transparent opacity-50"></div>

        {/* Resplandores sutiles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-200/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-300/20 blur-3xl"></div>
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
            <div className="inline-flex items-center rounded-full bg-purple-50 border border-purple-200 px-3 py-1 text-sm text-purple-700 backdrop-blur-sm">
              <span className="mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-600">
                <Check className="h-3 w-3 text-white" />
              </span>
              Potenciado por IA
            </div>
          </motion.div>

          {/* Contenedor del efecto de texto - Ahora más grande y centrado */}
          <div className="relative w-full max-w-4xl mb-12">
            {/* Resplandor detrás del texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-purple-300/50 rounded-3xl blur-3xl"></div>

            {/* Aumentamos el tamaño y añadimos un marco decorativo */}
            <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">
              {/* Marco decorativo */}
              <div className="absolute -inset-4 border border-purple-200 rounded-3xl"></div>

              {/* Efecto de partículas */}
              <PhysiaParticleText />
            </div>
          </div>

          {/* NUEVO: Título principal exacto */}
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-purple-500 to-purple-800">
                Herramienta de gestión centralizada para clínicas de profesionales de la salud, potenciada con
                Inteligencia Artificial
              </span>
            </h1>

            <div className="max-w-4xl mx-auto">
              <motion.p
                className="text-lg md:text-xl text-purple-800 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Automatiza las tareas administrativas y mejora la experiencia de tus pacientes para que tu puedas
                centrarte en lo que realmente importa: ofrecer una atención de calidad y mejorar el bienestar de tus
                pacientes.
              </motion.p>
            </div>
          </motion.div>

          {/* Botones de acción - Ahora con el botón animado y enlace a funcionalidades */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <AnimatedButton href="/funcionalidades">
              DESCUBRE QUÉ HACE PHYSIA
              <ChevronRight className="ml-2 h-4 w-4" />
            </AnimatedButton>
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
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-purple-200 to-purple-300/50 blur-xl"></div>

              {/* Imagen principal */}
              <div className="relative rounded-lg border border-purple-100 overflow-hidden shadow-lg">
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
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 p-1 shadow-lg">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-purple-800">
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
          <div className="text-purple-500 text-sm mb-2">Scroll para descubrir</div>
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}


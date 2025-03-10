"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { User2, Bot, FolderOpen, Settings, ArrowRight, Sparkles, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SolutionPointProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const SolutionPoint: React.FC<SolutionPointProps> = ({ icon, title, description, index }) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(itemRef, { once: false, margin: "-100px 0px" })

  // Calcular retraso escalonado para animaciones
  const delay = index * 0.15

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: -50 }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6,
                delay,
                type: "spring",
                stiffness: 100,
              },
            }
          : {}
      }
      className="flex items-start gap-4 group bg-purple-700 p-4 rounded-lg"
    >
      {/* Icono decorativo */}
      <motion.div
        className="relative mt-1 flex-shrink-0"
        animate={
          isInView
            ? {
                scale: [0.8, 1.2, 1],
                rotate: [0, 5, 0],
              }
            : {}
        }
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        <div className="absolute -inset-2 rounded-full bg-white/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative h-12 w-12 flex items-center justify-center bg-purple-800 backdrop-blur-sm text-white rounded-full shadow-md border border-purple-600">
          {icon}
        </div>
      </motion.div>

      <div className="flex-grow">
        {/* Título */}
        <motion.h3
          className="text-lg font-semibold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Línea decorativa */}
        <motion.div
          className="h-px bg-gradient-to-r from-white/70 to-transparent mb-3"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 0.7, delay: delay + 0.4 }}
        />

        {/* Descripción */}
        <motion.p
          className="text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const isVideoInView = useInView(videoRef, { once: true, margin: "-100px 0px" })

  // Efecto para crear partículas en el fondo
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight || 1000
    }

    setCanvasSize()

    // Crear partículas
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
    }[] = []

    for (let i = 0; i < 80; i++) {
      const size = Math.random() * 2 + 0.5
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        color: Math.random() > 0.5 ? "#c084fc" : "#e9d5ff",
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Crear gradiente de fondo
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
      gradient.addColorStop(0.5, "rgba(243, 232, 255, 0.8)")
      gradient.addColorStop(1, "rgba(255, 255, 255, 1)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Dibujar partículas y sus conexiones
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
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        // Conectar partículas cercanas
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(192, 132, 252, ${0.05 * (1 - distance / 100)})`
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

  const solutions = [
    {
      icon: <User2 className="h-6 w-6" />,
      title: "Gestión personalizada y eficiente de tus pacientes",
      description:
        "La IA integrada asegura un trato personalizado para cada paciente, mejorando su experiencia y satisfacción. Desde la gestión de consultas hasta la programación de citas.",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Libérate de tareas repetitivas con la automatización de procesos gracias a la IA",
      description:
        "Physia te permite automatizar tareas como el envío de recordatorios, la coordinación de calendario, la firma de documentación...",
    },
    {
      icon: <FolderOpen className="h-6 w-6" />,
      title: "Todo en uno",
      description:
        "Con Physia puedes tener todas las gestiones de tu clínica centralizadas en una sola herramienta: historial médico, calendario, facturación y firma de documentación entre otras muchas más funcionalidades.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Una herramienta sencilla y ágil",
      description:
        "que se adapta a tu clínica en función de tus necesidades: multi calendario, varias actividades y atención personalizada.",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      {/* Canvas para el efecto de partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-100/50 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-purple-100/50 to-transparent opacity-50"></div>

        {/* Resplandores sutiles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-200/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-200/30 blur-3xl"></div>

        {/* Elementos flotantes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-100 border border-purple-200"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-50 border border-purple-200 backdrop-blur-sm mb-6"
          >
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-purple-800 font-medium">Descubre las soluciones</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-purple-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Physia te ayuda con:
          </motion.h2>

          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mb-16"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 128, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          />
        </div>

        {/* Lista de soluciones */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative p-8 shadow-xl rounded-xl overflow-hidden bg-purple-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative border */}
            <div className="absolute -inset-[3px] bg-gradient-to-r from-purple-300 via-white/50 to-purple-300 rounded-xl -z-20"></div>

            {/* Background glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/30 to-purple-700/30 rounded-xl blur-xl -z-30"></div>

            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <SolutionPoint
                  key={index}
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-xl text-purple-900 font-medium">
            Empieza hoy y mejora la gestión de tu clínica con Physia.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium shadow-lg shadow-purple-200 px-8 py-6 rounded-full transform transition-transform hover:scale-105"
          >
            Prueba Gratis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        {/* Video Demo Section */}
        <div ref={videoRef} className="mt-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVideoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-white/90 text-purple-800 text-sm font-medium mb-4">
              <Play className="h-4 w-4" />
              Video Demostrativo
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-900">Bienvenido a PHYSIA</h3>
            <p className="text-white mt-2">Te mostramos de una forma breve cómo funciona PHYSIA</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVideoInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-purple-700"
          >
            {/* Decorative elements */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 rounded-xl -z-10"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-400/20 to-purple-500/20 rounded-xl blur-xl -z-20"></div>

            {/* YouTube iframe */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2tTJ6zzFn2k"
              title="Bienvenido a PHYSIA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


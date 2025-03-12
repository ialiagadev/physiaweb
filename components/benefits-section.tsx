"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Calendar, FileText, BookOpen, User2, BotIcon as Robot, FolderOpen, Settings, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
  total: number
  variant?: "problem" | "solution"
  theme?: "dark" | "light"
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  index,
  total,
  variant = "problem",
  theme = "dark",
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px 0px" })

  // Calculate staggered animation delay
  const delay = index * 0.1

  // Determine styles based on variant
  const cardGradient =
    variant === "problem" ? "from-purple-500/90 to-purple-600/80" : "from-purple-700/90 to-purple-800/80"

  const iconBg = variant === "problem" ? "bg-purple-400/30" : "bg-white/20"

  const iconBorder = variant === "problem" ? "border-purple-300/30" : "border-white/30"

  const iconColor = variant === "problem" ? "text-white" : "text-white"

  const cardBorder =
    variant === "problem" ? "border-purple-400/30 hover:border-purple-300/50" : "border-white/20 hover:border-white/30"

  const decorationColor = variant === "problem" ? "bg-purple-300/30" : "bg-white/10"

  return (
    <div ref={cardRef} className="relative group h-full">
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${cardGradient} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0 } : {}}
        whileHover={{ opacity: 0.7 }}
        transition={{ duration: 0.5 }}
      />

      {/* Card content */}
      <div
        className={`relative bg-gradient-to-br ${cardGradient} backdrop-blur-sm ${cardBorder} rounded-xl p-4 sm:p-6 border transition-all duration-500 h-full shadow-md`}
      >
        {/* Decorative corner shape - different for each variant */}
        {variant === "problem" ? (
          <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 overflow-hidden">
            <div className="absolute transform rotate-45 bg-purple-400/20 w-12 sm:w-16 h-12 sm:h-16 -right-6 sm:-right-8 -top-6 sm:-top-8"></div>
          </div>
        ) : (
          <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-white/20 rounded-full -mt-1 -mr-1"></div>
        )}

        <div className="flex flex-col h-full">
          {/* Icon */}
          <div className={`p-3 sm:p-4 ${iconBg} rounded-xl mb-3 sm:mb-4 self-start relative`}>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className={`absolute inset-0 rounded-xl border ${iconBorder} opacity-50`}
            />
            <div className={`h-6 w-6 sm:h-8 sm:w-8 ${iconColor}`}>{icon}</div>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{title}</h3>

          {/* Description */}
          <p className="text-purple-100 leading-relaxed text-xs sm:text-sm">{description}</p>

          {/* Decorative elements */}
          <div
            className={`absolute -bottom-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 rounded-full ${decorationColor} blur-lg opacity-40`}
          />
        </div>
      </div>
    </div>
  )
}

// Componente para el texto con gradiente decorativo
const GradientDecoText: React.FC = () => {
  return (
    <div className="relative py-8 sm:py-12 px-4 sm:px-8 max-w-4xl mx-auto">
      {/* Fondo decorativo con resplandor */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-300/20 via-purple-400/20 to-purple-300/20 rounded-2xl blur-xl"></div>

      {/* Borde decorativo */}
      <div className="absolute inset-0 border border-purple-300/30 rounded-2xl"></div>

      {/* Contenedor principal */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Texto con gradiente */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center py-4 px-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-fuchsia-600 to-purple-600 animate-gradient-x">
            Empieza hoy y mejora la gestión de tu clínica con PHYSIA
          </span>
        </h2>

        {/* Decorative sparkles */}
        <motion.div
          className="absolute -top-6 -left-6 w-8 h-8 text-purple-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Sparkles className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute -bottom-6 -right-6 w-8 h-8 text-purple-500"
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Sparkles className="w-full h-full" />
        </motion.div>

        {/* Animated underline */}
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 rounded-full mt-4 mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />

        {/* Botón de Prueba Gratis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-4"
        >
          <Link href="/prueba-gratis">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
              {/* Efecto de resplandor */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>

              <Button
                size="lg"
                className="relative bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium shadow-lg shadow-purple-500/20 px-8 py-6 rounded-full"
              >
                Prueba Gratis
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Partículas decorativas adicionales */}
        <motion.div
          className="absolute top-1/2 left-0 w-6 h-6 text-purple-400/60"
          animate={{
            x: [0, 10, 0],
            y: [0, -5, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Sparkles className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-0 w-6 h-6 text-purple-400/60"
          animate={{
            x: [0, -10, 0],
            y: [0, 5, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        >
          <Sparkles className="w-full h-full" />
        </motion.div>
      </div>
    </div>
  )
}

export default function BenefitsSection() {
  // Estado para controlar si el componente está montado en el cliente
  const [isMounted, setIsMounted] = useState(false)
  
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const springScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Parallax effects
  const opacitySection = useTransform(springScrollY, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  // Actualizar el estado cuando el componente se monte en el cliente
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Background particle effect - solo ejecutar en el cliente
  useEffect(() => {
    if (!isMounted) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = sectionRef.current?.offsetHeight || 1000
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

    // Adjust number of particles based on screen size
    const particleCount = window.innerWidth < 768 ? 50 : 100

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.5 ? "#a855f7" : "#c4b5fd",
        opacity: Math.random() * 0.3 + 0.1,
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
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.05 * (1 - distance / 100)})`
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
  }, [isMounted])

  const problems = [
    {
      icon: <Calendar className="h-full w-full" />,
      title: "Gestión de citas",
      description: "Pasas más tiempo gestionando citas y recordatorios que atendiendo a tus pacientes.",
    },
    {
      icon: <FileText className="h-full w-full" />,
      title: "Información dispersa",
      description:
        "La información de tus pacientes está dispersa en diferentes sistemas, lo que complica que puedas hacer un seguimiento adecuado.",
    },
    {
      icon: <BookOpen className="h-full w-full" />,
      title: "Carga administrativa",
      description:
        "La carga administrativa que supone llevar un centro no te interesa y te genera sensación de no llegar a todo.",
    },
  ]

  const solutions = [
    {
      icon: <User2 className="h-full w-full" />,
      title: "Gestión personalizada y eficiente",
      description:
        "La IA integrada asegura un trato personalizado para cada paciente, mejorando su experiencia y satisfacción. Desde la gestión de consultas hasta la programación de citas.",
    },
    {
      icon: <Robot className="h-full w-full" />,
      title: "Libérate de tareas repetitivas",
      description:
        "Automatiza procesos gracias a la IA. Physia te permite automatizar tareas como el envío de recordatorios, la coordinación de calendario, la firma de documentación...",
    },
    {
      icon: <FolderOpen className="h-full w-full" />,
      title: "Todo en uno",
      description:
        "Con Physia puedes tener todas las gestiones de tu clínica centralizadas en una sola herramienta: historial médico, calendario, facturación y firma de documentación, entre otras muchas más funcionalidades.",
    },
    {
      icon: <Settings className="h-full w-full" />,
      title: "Herramienta sencilla y ágil",
      description:
        "Se adapta a tu clínica en función de tus necesidades: multi calendario, varias actividades y atención personalizada.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #f3e8ff 0%, #f5f3ff 50%, #f3e8ff 100%)",
      }}
    >
      {/* Background canvas for particles - solo renderizar en el cliente */}
      {isMounted && <canvas ref={canvasRef} className="absolute inset-0 z-0" />}

      {/* Background decorative elements - solo renderizar en el cliente */}
      {isMounted && (
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-200/40 to-transparent opacity-60" />
          <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-purple-200/40 to-transparent opacity-60" />

          {/* Glowing orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 rounded-full bg-purple-200/30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 rounded-full bg-purple-300/20 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
          />
        </div>
      )}

      <motion.div className="container relative z-10 mx-auto px-4 sm:px-6" style={{ opacity: opacitySection }}>
        {/* Problems Section */}
        <div className="mb-16 sm:mb-24 md:mb-32">
          <div className="text-center mb-10 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-purple-100 border border-purple-300/50 backdrop-blur-sm mb-4 sm:mb-6"
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
              <span className="text-xs sm:text-sm text-purple-700 font-medium">Identifica tus desafíos</span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 mb-3 sm:mb-4 animate-gradient-x"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              PHYSIA es para ti si:
            </motion.h2>

            <motion.div
              className="h-1 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full mb-8 sm:mb-12 md:mb-16"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {problems.map((problem, index) => (
              <BenefitCard
                key={index}
                icon={problem.icon}
                title={problem.title}
                description={problem.description}
                index={index}
                total={problems.length}
                variant="problem"
              />
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-10 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link href="/funcionalidades">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium shadow-lg shadow-purple-500/20 px-4 sm:px-8 py-3 sm:py-6 rounded-full transform transition-transform hover:scale-105 text-xs sm:text-base"
              >
                ENTIENDE CÓMO PHYSIA PUEDE AYUDARTE EN TU DÍA A DÍA
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="py-8 sm:py-12 md:py-16 px-4 bg-purple-100/70 backdrop-blur-sm rounded-2xl border border-purple-200/50 shadow-lg">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-purple-200/70 border border-purple-300/50 backdrop-blur-sm mb-4 sm:mb-6"
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-purple-700" />
              <span className="text-xs sm:text-sm text-purple-800 font-medium">Descubre las soluciones</span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 mb-3 sm:mb-4 animate-gradient-x"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              PHYSIA te ayuda con:
            </motion.h2>

            <motion.div
              className="h-1 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full mb-8 sm:mb-12 md:mb-16"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "8rem", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <BenefitCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                index={index}
                total={solutions.length}
                variant="solution"
                theme="light"
              />
            ))}
          </div>
        </div>

        {/* Video Demo Section */}
        <motion.div
          className="relative z-10 mx-auto px-0 sm:px-4 mb-16 sm:mb-24 md:mb-32 mt-16 sm:mt-24 md:mt-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-gray-600 text-xs sm:text-sm uppercase tracking-wider">No te pierdas el</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 animate-gradient-x mt-1 sm:mt-2 mb-8 sm:mb-16">
              Vídeo demo de PHYSIA
            </h2>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            {/* Video wrapper with aspect ratio */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              {/* Decorative elements */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-300/30 to-purple-400/20 rounded-3xl blur-xl"></div>

              {/* Video iframe */}
              <iframe
                className="absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl border border-purple-200 shadow-xl"
                src="https://www.youtube.com/embed/2tTJ6zzFn2k"
                title="Bienvenido a PHYSIA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Texto decorativo con gradiente */}
            <motion.div
              className="mt-16 sm:mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <GradientDecoText />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating elements - solo renderizar en el cliente con valores fijos */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Usar valores fijos en lugar de aleatorios */}
          <motion.div
            className="absolute rounded-full bg-purple-100 border border-purple-200"
            style={{ width: "30px", height: "30px", left: "10%", top: "20%" }}
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute rounded-full bg-purple-100 border border-purple-200"
            style={{ width: "20px", height: "20px", left: "30%", top: "50%" }}
            animate={{ y: [0, -15, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
          <motion.div
            className="absolute rounded-full bg-purple-100 border border-purple-200"
            style={{ width: "40px", height: "40px", left: "70%", top: "30%" }}
            animate={{ y: [0, -25, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          />
          <motion.div
            className="absolute rounded-full bg-purple-100 border border-purple-200"
            style={{ width: "25px", height: "25px", left: "85%", top: "60%" }}
            animate={{ y: [0, -10, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
          />
          <motion.div
            className="absolute rounded-full bg-purple-100 border border-purple-200"
            style={{ width: "35px", height: "35px", left: "50%", top: "80%" }}
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, delay: 4 }}
          />
        </div>
      )}
    </section>
  )
}

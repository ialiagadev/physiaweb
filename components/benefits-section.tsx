"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Calendar, FileText, BookOpen, User2, BotIcon as Robot, FolderOpen, Settings, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
  total: number
  variant?: "problem" | "solution"
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, index, total, variant = "problem" }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: false, margin: "-100px 0px" })

  // Calculate staggered animation delay
  const delay = index * 0.1

  // Calculate rotation for 3D effect
  const rotateY = variant === "problem" ? -5 + (index / (total - 1)) * 10 : 5 - (index / (total - 1)) * 10

  // Determine gradient based on variant
  const gradientBg = variant === "problem" ? "from-purple-600/20 to-blue-600/20" : "from-blue-600/20 to-purple-600/20"

  const iconBg = variant === "problem" ? "bg-purple-500/20" : "bg-blue-500/20"

  const iconColor = variant === "problem" ? "text-purple-400" : "text-blue-400"

  const borderColor =
    variant === "problem"
      ? "border-purple-500/20 hover:border-purple-500/40"
      : "border-blue-500/20 hover:border-blue-500/40"

  const titleGradient = variant === "problem" ? "from-purple-300 to-white" : "from-blue-300 to-white"

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateY }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              rotateY: 0,
              transition: {
                duration: 0.7,
                delay,
                type: "spring",
                stiffness: 100,
              },
            }
          : {}
      }
      className="relative group perspective"
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${gradientBg} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        animate={isInView ? { scale: [0.8, 1.05, 1] } : {}}
        transition={{ duration: 1, delay: delay + 0.2 }}
      />

      {/* Card content */}
      <div
        className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${borderColor} transition-all duration-500 h-full transform-gpu will-change-transform`}
      >
        <div className="flex flex-col h-full">
          {/* Icon */}
          <motion.div
            className={`p-4 ${iconBg} rounded-xl mb-4 self-start`}
            animate={
              isInView
                ? {
                    scale: [0.8, 1.2, 1],
                    rotate: [0, 5, 0],
                  }
                : {}
            }
            transition={{ duration: 0.5, delay: delay + 0.3 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 rounded-xl border border-white/10 opacity-50"
            />
            <div className={`h-8 w-8 ${iconColor}`}>{icon}</div>
          </motion.div>

          {/* Title */}
          <motion.h3
            className={`text-xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-3`}
            animate={isInView ? { opacity: [0, 1], y: [20, 0] } : {}}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-300 leading-relaxed text-sm"
            animate={isInView ? { opacity: [0, 1], y: [20, 0] } : {}}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
          >
            {description}
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-lg"
            animate={
              isInView
                ? {
                    scale: [0, 1],
                    opacity: [0, 0.6, 0.4],
                  }
                : {}
            }
            transition={{ duration: 1, delay: delay + 0.6 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function BenefitsSection() {
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
  const problemsY = useTransform(springScrollY, [0, 0.5], [100, 0])
  const solutionsY = useTransform(springScrollY, [0.3, 0.8], [100, 0])
  const opacitySection = useTransform(springScrollY, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  // Background particle effect
  useEffect(() => {
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

    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 3 + 1
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
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
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.1 * (1 - distance / 100)})`
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
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0f1729 0%, #1a1033 50%, #0f1729 100%)",
      }}
    >
      {/* Background canvas for particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-900/10 to-transparent opacity-30" />
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-blue-900/10 to-transparent opacity-30" />

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/5 blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl"
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

      <motion.div className="container relative z-10 mx-auto px-4" style={{ opacity: opacitySection }}>
        {/* Problems Section */}
        <motion.div style={{ y: problemsY }} className="mb-32">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm mb-6"
            >
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-purple-200 font-medium">Identifica tus desafíos</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              PHYSIA es para ti si:
            </motion.h2>

            <motion.div
              className="h-1 w-32 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full mb-16"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 128, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium shadow-lg shadow-purple-500/20 px-8 py-6 rounded-full transform transition-transform hover:scale-105"
            >
              ENTIENDE CÓMO PHYSIA PUEDE AYUDARTE EN TU DÍA A DÍA
            </Button>
          </motion.div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div style={{ y: solutionsY }}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-blue-500/20 backdrop-blur-sm mb-6"
            >
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-blue-200 font-medium">Descubre las soluciones</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              PHYSIA te ayuda con:
            </motion.h2>

            <motion.div
              className="h-1 w-32 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full mb-16"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 128, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <BenefitCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                index={index}
                total={solutions.length}
                variant="solution"
              />
            ))}
          </div>
        </motion.div>

        {/* Video Demo Section */}
        <motion.div
          className="container relative z-10 mx-auto px-4 mb-32 mt-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <span className="text-gray-400 text-sm uppercase tracking-wider">No te pierdas el</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-white mt-2 mb-16">
              Vídeo demo de PHYSIA
            </h2>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            {/* Video wrapper with aspect ratio */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>

              {/* Video iframe */}
              <iframe
                className="absolute inset-0 w-full h-full rounded-2xl border border-white/10 shadow-2xl"
                src="https://www.youtube.com/embed/2tTJ6zzFn2k"
                title="Bienvenido a PHYSIA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300"
              >
                EMPIEZA HOY Y MEJORA LA GESTIÓN DE TU CLÍNICA CON PHYSIA
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 border border-white/10"
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
    </section>
  )
}


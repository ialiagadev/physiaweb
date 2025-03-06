"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import Image from "next/image"
import {
  CheckCircle,
  Calendar,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Package,
  Coins,
  Shield,
  RefreshCw,
  Layers,
  HeadphonesIcon,
} from "lucide-react"

export default function ComparisonSection() {
  // Referencia para el efecto de estrellas en el fondo
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Efectos de scroll
  useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Efecto para crear estrellas y partículas conectadas en el fondo
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight || 2000
    }

    setCanvasSize()

    // Crear estrellas
    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = []
    const starCount = 100

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.03 + 0.01,
      })
    }

    // Crear partículas para el efecto de conexión
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
    }[] = []

    // Crear más partículas para un efecto más rico
    for (let i = 0; i < 80; i++) {
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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Dibujar estrellas
      stars.forEach((star) => {
        star.y += star.speed

        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.3})`
        ctx.fill()
      })

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
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-[#1a1033] to-[#0f1729] overflow-hidden">
      {/* Efecto de estrellas y partículas en el fondo */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60" />

      {/* Efectos de neblina */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-900/10 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-blue-900/10 to-transparent opacity-30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Diferencias entre PHYSIA y otras herramientas
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        {/* Sección 1: Potenciada con IA */}
        <div className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                      <Sparkles className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-purple-300">
                      Potenciada con Inteligencia Artificial
                    </h3>
                  </div>

                  <p className="text-lg text-gray-300 mb-8">
                    Automatiza las tareas administrativas y mejora la experiencia de tus pacientes para que tú puedas
                    centrarte en lo que realmente importa: ofrecer una atención de calidad y mejorar el bienestar de tus
                    pacientes.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      "Asistente virtual especializado",
                      "Evaluación preliminar de pacientes",
                      "Seguimiento personalizado",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-200">{feature}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors"
                    >
                      Descubre más sobre nuestra IA
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              {/* Elementos decorativos */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-purple-500/30 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
                <Image
                  src="/phone2.png"
                  alt="PHYSIA Chat Interface"
                  width={400}
                  height={800}
                  className="relative z-10 mx-auto"
                />

                {/* Etiqueta flotante */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3 shadow-lg z-20"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  <MessageSquare className="h-6 w-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sección 2: Herramienta todo en 1 */}
        <div className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Elementos decorativos */}
              <motion.div
                className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-blue-500/30 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20">
                  <Image
                    src="/calendar-physia.png"
                    alt="PHYSIA Calendar Interface"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                </div>

                {/* Etiqueta flotante */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 shadow-lg z-20"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  <Calendar className="h-6 w-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                      <Package className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-blue-300">Herramienta todo en 1</h3>
                  </div>

                  <p className="text-lg text-gray-300 mb-8">
                    Facturación, agenda, recordatorios a pacientes en WhatsApp, historial clínico... Physia te lo ofrece
                    todo en un mismo sitio.
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      "Gestión de citas y agenda",
                      "Facturación integrada",
                      "Historial clínico completo",
                      "Recordatorios automáticos",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-200">{feature}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      Explora todas las funcionalidades
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sección 3: Precio competitivo - REDISEÑADA */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl overflow-hidden">
              {/* Fondo decorativo */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 p-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
                  <div className="p-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl">
                    <Coins className="h-10 w-10 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2">
                      Precio competitivo
                    </h3>
                    <p className="text-xl text-gray-300">
                      Gracias a la Inteligencia Artificial podemos ofrecerte una herramienta todoterreno de gran calidad
                      a un precio asequible.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  {[
                    {
                      icon: Shield,
                      title: "Sin costes ocultos",
                      description: "Lo que ves es lo que pagas, sin sorpresas en tu factura",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: RefreshCw,
                      title: "Actualizaciones incluidas",
                      description: "Mejoras constantes sin pagos adicionales",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: Layers,
                      title: "Planes flexibles",
                      description: "Escala según tus necesidades sin complicaciones",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      icon: HeadphonesIcon,
                      title: "Soporte técnico incluido",
                      description: "Asistencia profesional sin coste adicional",
                      color: "from-orange-500 to-yellow-500",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="h-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/5">
                        <div className="mb-4">
                          <div
                            className="inline-flex p-3 rounded-xl bg-gradient-to-br"
                            style={{
                              background: `linear-gradient(to bottom right, ${feature.color})`,
                            }}
                          >
                            <feature.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div className="flex justify-center" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-4 rounded-full font-medium shadow-lg hover:shadow-green-500/20 transition-all text-lg"
                  >
                    Ver planes y precios
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-purple-500/20 transition-all transform hover:scale-105"
          >
            Prueba PHYSIA gratis
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="text-gray-400 mt-4">Sin compromiso. Cancela cuando quieras.</p>
        </motion.div>
      </div>
    </section>
  )
}


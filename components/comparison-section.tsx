"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { CheckCircle, ArrowRight, Sparkles, Package, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ComparisonSection() {
  // Referencia para el efecto de partículas en el fondo
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Efectos de scroll
  useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Efecto para crear partículas en el fondo
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

    // Crear patrones de partículas
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
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        color: Math.random() > 0.5 ? "#c084fc" : "#e9d5ff",
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Crear un gradiente de fondo con más lila
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(243, 232, 255, 1)") // Más lila en la parte superior
      gradient.addColorStop(0.5, "rgba(233, 213, 255, 0.9)") // Lila más intenso en el medio
      gradient.addColorStop(1, "rgba(243, 232, 255, 1)") // Más lila en la parte inferior

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

  return (
    <section ref={sectionRef} className="relative py-32 bg-purple-50 overflow-hidden">
      {/* Canvas para el efecto de partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-200/70 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-purple-200/70 to-transparent opacity-70"></div>

        {/* Resplandores sutiles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-300/40 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-300/40 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg blur-sm"></div>
            <div className="relative px-6 py-2 bg-white rounded-lg border border-purple-200">
              <span className="text-lg font-medium text-purple-700">DIFERENCIACIÓN</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-purple-900">Diferencias entre </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Physia</span>
            <span className="text-purple-900"> y otras herramientas</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-purple-700">
              Descubre por qué Physia es la solución más completa para la gestión de tu clínica
            </p>
          </div>

          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mt-8"></div>
        </motion.div>

        <div className="grid gap-12 mb-16">
          {/* Sección 1: Potenciada con IA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-300/60 to-purple-400/60 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-purple-200 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-purple-100 rounded-xl">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-800 mb-4">
                    Potenciada con Inteligencia Artificial
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-purple-900">
                        Gestiona automáticamente la agenda optimizando las citas en tiempo real.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-purple-900">
                        Envía de forma automática recordatorios y personaliza los mensajes para cada paciente.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sección 2: Herramienta todo en 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-300/60 to-purple-400/60 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-purple-200 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-purple-100 rounded-xl">
                  <Package className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-800 mb-4">Herramienta Todo en Uno</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-purple-900">
                        Centraliza todas tus gestiones: historial clínico, agenda, facturación y firma de documentación.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-purple-900">
                        Accede a toda la información de tus pacientes desde cualquier dispositivo y en cualquier
                        momento.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sección 3: Precio competitivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-300/60 to-purple-400/60 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-purple-200 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-purple-100 rounded-xl">
                  <Coins className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-800 mb-4">Precio Competitivo</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-purple-900">
                        Obtén una herramienta completa a un precio asequible gracias a nuestra tecnología de IA.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                      <p className="text-purple-900">
                        Ahorra costes al no necesitar múltiples herramientas para gestionar tu clínica.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA con enlace a la página de precios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/precios">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-6 rounded-full font-medium shadow-lg hover:shadow-purple-200 transition-all transform hover:scale-105"
            >
              VER LOS PLANES
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


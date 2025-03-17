"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles, Quote } from "lucide-react"

interface Testimonial {
  name: string
  text: string
  color: string
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [50, 0, 0, 50])

  // Canvas para efectos de partículas
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Ajustar número de partículas según tamaño de pantalla
    const particleCount = window.innerWidth < 768 ? 30 : 60

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 1
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: Math.random() > 0.5 ? "#a855f7" : "#c4b5fd",
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    // Animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

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
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.03 * (1 - distance / 100)})`
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

  // Modificar el array de testimonios para incluir la referencia a la imagen correcta
  const testimonials: Testimonial[] = [
    {
      name: "Clínica Víctor Díez",
      text: "El compañero perfecto. Nos ahorra tiempo para dedicarnos a lo que nos gusta",
      color: "from-purple-200 to-purple-300",
    },
    {
      name: "ZEM- Fisio Castro Sport",
      text: "Es una tecnología innovadora y muy fácil de utilizar. La personalización es lo mejor.",
      color: "from-purple-300 to-purple-400",
    },
    {
      name: "Fisioterapia Graciela",
      text: "Es súper atenta y personalizada. Parece un compañero más en la clínica.",
      color: "from-purple-400 to-purple-500",
    },
  ]

 
  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #f5f3ff 0%, #faf5ff 50%, #f5f3ff 100%)",
      }}
    >
      {/* Canvas para el efecto de partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-100/40 to-transparent opacity-60" />
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-purple-100/40 to-transparent opacity-60" />

        {/* Resplandores sutiles */}
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

      {/* Línea curva central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 z-0 hidden md:block">
        <div className="h-full w-full bg-gradient-to-b from-purple-300 via-purple-500 to-purple-300 rounded-full opacity-30"></div>
      </div>

      <motion.div className="container relative z-10 mx-auto px-4 sm:px-6" style={{ opacity, y }}>
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-purple-100 border border-purple-300/50 backdrop-blur-sm mb-4 sm:mb-6"
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
            <span className="text-xs sm:text-sm text-purple-700 font-medium">Lo que dicen nuestros clientes</span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-900 mb-3 sm:mb-4 animate-gradient-x"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Testimonios de éxito
          </motion.h2>

          <motion.div
            className="h-1 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full mb-8 sm:mb-12 md:mb-16"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "8rem", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          />
        </div>

        {/* Testimonios */}
        <div className="space-y-16 md:space-y-24 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative ${index % 2 === 1 ? "md:ml-auto" : "md:mr-auto"} max-w-3xl`}
            >
              {/* Tarjeta de testimonio */}
              <div className="relative group">
                {/* Efecto de resplandor */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  } items-center bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-purple-100 overflow-hidden`}
                >
                  {/* Imagen */}
                  <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6 md:mb-0 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-200 to-purple-300 blur-md opacity-50"></div>
                    <div className="relative rounded-full overflow-hidden border-2 border-purple-100 w-full h-full">
                      <Image
                        src={`/testimonio${index + 1}.png`}
                        alt={testimonial.name}
                        width={250}
                        height={250}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className={`flex-1 ${index % 2 === 1 ? "md:mr-8" : "md:ml-8"} text-center md:text-left`}>
                    <div className="relative mb-4">
                      <Quote className="absolute -top-2 -left-2 h-6 w-6 text-purple-300 transform rotate-180" />
                      <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
                        {testimonial.name}
                      </h3>
                    </div>
                    <p className="text-purple-800 italic text-lg">"{testimonial.text}"</p>
                  </div>

                  {/* Elemento decorativo */}
                  <motion.div
                    className={`absolute ${index % 2 === 0 ? "top-4 right-4" : "bottom-4 left-4"} text-purple-300`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="h-5 w-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


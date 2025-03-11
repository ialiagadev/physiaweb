"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import {
  Bot,
  Calendar,
  Bell,
  UserCheck,
  FileText,
  Receipt,
  FileSignature,
  MessageSquare,
  Sparkles,
  ChevronDown,
} from "lucide-react"
import { motion } from "framer-motion"

interface FeatureItemProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

// Componente para el efecto de resaltado del título
const HighlightedText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-3 bg-purple-400/20 w-full -z-10"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </span>
  )
}

const FeatureItem = ({ icon, title, description, index }: FeatureItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(itemRef, { once: true, amount: 0.3 })
  const isEven = index % 2 === 0
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
        <div className="relative">
          {/* Efecto de brillo animado */}
          <motion.div
            className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 1.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
          />

          {/* Círculo de fondo con efecto de rotación */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-400/30"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Icon container */}
          <div className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
            <motion.div
              className="text-white h-7 w-7 md:h-8 md:w-8"
              animate={{
                scale: isHovered ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          </div>

          {/* Línea conectora con animación de pulso */}
          {index < 7 && (
            <motion.div
              className="hidden md:block absolute top-full left-1/2 w-0.5 h-16 bg-gradient-to-b from-purple-400/50 to-transparent -translate-x-1/2"
              animate={{
                opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
              }}
              transition={{ duration: 1.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
            />
          )}
        </div>
      </div>

      <div className="flex-1 max-w-full md:max-w-xl">
        <motion.div
          className="p-5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          whileHover={{ y: -5 }}
        >
          {/* Efecto de gradiente en la esquina */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-md" />

          <h3 className="text-xl sm:text-2xl font-bold text-purple-900 mb-2 sm:mb-3">{title}</h3>
          <p className="text-sm sm:text-base text-purple-700/80 leading-relaxed">{description}</p>

          {/* Indicador de hover */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500/80 to-purple-300/30"
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function FeaturesPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })

  const features = [
    {
      icon: <Bot className="h-full w-full" />,
      title: "Asistente Virtual con IA",
      description:
        "Automatiza la comunicación con tus pacientes: agenda citas, responde dudas y gestiona recordatorios en tiempo real, mejorando la experiencia para tus pacientes.",
    },
    {
      icon: <Calendar className="h-full w-full" />,
      title: "Calendario inteligente",
      description:
        "La IA de Physia te organiza las citas de forma automática, evitando solapamientos y optimizando la disponibilidad de cada profesional. Physia gestiona tu agenda en tiempo real, reajustando horarios y priorizando según necesidades. Tú decides las reglas, y Physia se encarga de que todo funcione sin errores.",
    },
    {
      icon: <Bell className="h-full w-full" />,
      title: "Recordatorios automatizados",
      description:
        "Evita cancelaciones de última hora y huecos en la agenda con recordatorios automáticos por WhatsApp y email. Configura cuándo y cómo se envían para que tus pacientes siempre lleguen a tiempo. Menos olvidos, menos ausencias y una agenda más optimizada.",
    },
    {
      icon: <UserCheck className="h-full w-full" />,
      title: "Seguimientos personalizados de tus pacientes",
      description:
        "Envía seguimientos automatizados y personalizados después de cada sesión, para estar presente en la recuperación del paciente. Mantén el contacto con tus pacientes y mejora su recuperación.",
    },
    {
      icon: <FileText className="h-full w-full" />,
      title: "Historial clínico automatizado",
      description:
        "Accede a la información de tus pacientes en segundos con historiales clínicos organizados y siempre actualizados. Con transcripción de voz y resúmenes automáticos, todo está siempre actualizado sin esfuerzo.",
    },
    {
      icon: <Receipt className="h-full w-full" />,
      title: "Facturación simplificada",
      description:
        "Genera, envía y organiza facturas automáticamente. Configura pagos recurrentes, gestiona bonos y mantén un control total de tu facturación. Más claridad financiera y menos tiempo en tareas administrativas.",
    },
    {
      icon: <FileSignature className="h-full w-full" />,
      title: "Firma digital para documentación",
      description:
        "Recoge firmas para consentimientos y documentos legales de forma digital. Seguro, rápido y sin necesidad de imprimir nada. Agiliza procesos, evita errores y ten siempre todo archivado y accesible cuando lo necesites.",
    },
    {
      icon: <MessageSquare className="h-full w-full" />,
      title: "WhatsApp API: todo en tu propio número",
      description:
        "Toda la comunicación automatizada se hace desde tu número de WhatsApp pero con la inteligencia de Physia. Sin apps extra, sin líos. Tus pacientes te contactan como siempre, pero ahora con respuestas automatizadas.",
    },
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Fondo con gradiente - De lila a blanco */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #EDE9FE 0%, #F5F3FF 30%, white 70%, white 100%)",
        }}
      />

      {/* Efecto de ondas en la parte superior */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute top-0 left-0 h-64 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0 67L21.5 64.3C43 61.7 86 56.3 128.8 54.7C171.7 53 214.3 55 257.2 58.7C300 62.3 343 67.7 385.8 68.7C428.7 69.7 471.3 66.3 514.2 62.3C557 58.3 600 53.7 642.8 54.7C685.7 55.7 728.3 62.3 771.2 64.3C814 66.3 857 63.7 878.5 62.3L900 61L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
            fill="#a78bfa"
            fillOpacity="0.2"
          ></path>
          <path
            d="M0 35L21.5 35.7C43 36.3 86 37.7 128.8 37.7C171.7 37.7 214.3 36.3 257.2 34.7C300 33 343 31 385.8 28.7C428.7 26.3 471.3 23.7 514.2 25.7C557 27.7 600 34.3 642.8 35.7C685.7 37 728.3 33 771.2 30.7C814 28.3 857 27.7 878.5 27.3L900 27L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
            fill="#a78bfa"
            fillOpacity="0.1"
          ></path>
        </svg>
      </div>

      {/* Efecto de ondas adicional en la parte media-superior */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute top-[15%] left-0 h-48 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 900 150"
          preserveAspectRatio="none"
        >
          <path
            d="M0 67L30 63.7C60 60.3 120 53.7 180 51.8C240 50 300 53 360 56.2C420 59.3 480 62.7 540 63.5C600 64.3 660 62.7 720 59.5C780 56.3 840 51.7 870 49.3L900 47L900 0L870 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0L0 0Z"
            fill="#c4b5fd"
            fillOpacity="0.15"
          ></path>
        </svg>
      </div>

      {/* Efecto de ondas en la parte inferior (existente) */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          preserveAspectRatio="none"
        >
          <path
            d="M0 433L21.5 435.7C43 438.3 86 443.7 128.8 445.3C171.7 447 214.3 445 257.2 441.3C300 437.7 343 432.3 385.8 431.3C428.7 430.3 471.3 433.7 514.2 437.7C557 441.7 600 446.3 642.8 445.3C685.7 444.3 728.3 437.7 771.2 435.7C814 433.7 857 436.3 878.5 437.7L900 439L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#a78bfa"
            fillOpacity="0.2"
          ></path>
          <path
            d="M0 465L21.5 464.3C43 463.7 86 462.3 128.8 462.3C171.7 462.3 214.3 463.7 257.2 465.3C300 467 343 469 385.8 471.3C428.7 473.7 471.3 476.3 514.2 474.3C557 472.3 600 465.7 642.8 464.3C685.7 463 728.3 467 771.2 469.3C814 471.7 857 472.3 878.5 472.7L900 473L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#a78bfa"
            fillOpacity="0.1"
          ></path>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto"
        >
          {/* Badge con animación */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-purple-100 mb-4 sm:mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
            </motion.div>
            <span className="text-purple-700 font-medium text-xs sm:text-sm">Funcionalidades</span>
          </motion.div>

          {/* Título con efecto de resaltado */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-900 mb-4 sm:mb-6">
            Todo lo que <HighlightedText>necesitas</HighlightedText> para tu clínica
          </h1>

          {/* Separador animado */}
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full mb-4 sm:mb-6 md:mb-8"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.p
            className="text-sm sm:text-base md:text-lg text-purple-700 mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Descubre todas las herramientas que Physia pone a tu disposición para optimizar la gestión de tu clínica
          </motion.p>
        </motion.div>

        {/* Scroll indicator con efecto de rebote */}
        <motion.div
          className="flex flex-col items-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1 }}
        >
          <div className="text-purple-600 text-xs sm:text-sm font-medium mb-2">Descubre más funcionalidades</div>
          <motion.div
            className="flex justify-center items-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-purple-400/30"
            animate={{
              y: [0, 10, 0],
              boxShadow: [
                "0 0 0 0 rgba(192, 132, 252, 0.3)",
                "0 0 0 10px rgba(192, 132, 252, 0)",
                "0 0 0 0 rgba(192, 132, 252, 0)",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
            }}
          >
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
          </motion.div>
        </motion.div>

        {/* Features */}
        <div className="max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


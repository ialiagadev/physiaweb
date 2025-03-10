"use client"

import type React from "react"

import { useRef } from "react"
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
  ChevronRight,
} from "lucide-react"
import { motion } from "framer-motion"

interface FeatureItemProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, index }) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(itemRef, { once: true, amount: 0.3 })

  const isEven = index % 2 === 0

  return (
    <div
      ref={itemRef}
      className={`relative flex items-start gap-6 py-16 ${isEven ? "flex-row" : "flex-row-reverse"} max-md:flex-col max-md:gap-4`}
    >
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-300 -translate-x-1/2 max-md:hidden" />

      {/* Icon container */}
      <div className={`relative z-10 ${isEven ? "text-right" : "text-left"} max-md:text-left`}>
        <div
          className={`
            inline-flex items-center justify-center w-20 h-20 rounded-full 
            bg-gradient-to-br from-purple-600 to-purple-800 
            shadow-lg shadow-purple-300/30
            ${isInView ? "opacity-100" : "opacity-0"} 
            transition-opacity duration-700
          `}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <div className="text-white h-10 w-10">{icon}</div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`
          flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-8
          border border-purple-100 shadow-xl shadow-purple-100/20
          ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
          transition-all duration-700 ease-out
          max-w-xl
        `}
        style={{
          transitionDelay: `${index * 100 + 200}ms`,
        }}
      >
        <h3 className="text-2xl font-bold text-purple-900 mb-4">{title}</h3>
        <p className="text-purple-700 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function FeaturesPage() {
  const sectionRef = useRef<HTMLElement>(null)
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
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-purple-50"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-96 bg-purple-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-purple-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`
            text-center mb-24 max-w-3xl mx-auto
            ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
            transition-all duration-1000
          `}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
            <Sparkles className="h-4 w-4 text-purple-700" />
            <span className="text-purple-800 font-medium">Funcionalidades</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">Todo lo que necesitas para tu clínica</h1>

          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full mb-8" />

          <p className="text-purple-800 text-lg mb-8">
            Descubre todas las herramientas que Physia pone a tu disposición para optimizar la gestión de tu clínica
          </p>

          {/* Botón animado que enlaza a la página de funcionalidades */}
       
        </div>

        {/* Indicador de scroll */}
        <motion.div
          className="flex flex-col items-center mt-16 mb-8"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            y: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" },
          }}
        >
          <div className="text-purple-600 text-sm font-medium mb-2">Descubre más funcionalidades</div>
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Features Timeline */}
        <div className="relative">
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


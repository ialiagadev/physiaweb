"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Sparkles, User, Mail, Phone, Clock, ArrowRight, Loader2 } from "lucide-react"

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

export default function PruebaGratisPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    horario: "mañanas",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el formulario")
      }

      // Resetear el formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        horario: "mañanas",
      })

      // Mostrar mensaje de éxito
      setSuccessMessage(
        "¡Gracias! Tus datos han sido registrados correctamente y hemos enviado una notificación al equipo.",
      )
    } catch (error) {
      console.error("Error:", error)
      setSuccessMessage("Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 max-w-xl mx-auto"
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
            <span className="text-purple-700 font-medium text-xs sm:text-sm">Demo Gratuita</span>
          </motion.div>

          {/* Título con efecto de resaltado */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-900 mb-4 sm:mb-6">
            Regístrate Y <HighlightedText>Obtén Tu Demo Gratis</HighlightedText>
          </h1>

          {/* Separador animado */}
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.p
            className="text-sm sm:text-base text-purple-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            ¡Bienvenido a PHYSIA! Rellenando el formulario que se encuentra debajo y tendrás tu prueba gratuita durante{" "}
            <span className="font-semibold">14 días</span> a todas las funcionalidades de PHYSIA, sin compromiso ni
            necesidad de tarjeta de crédito.
          </motion.p>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-purple-900 mb-6 text-center">Accede a la demo</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Campo Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-purple-700 mb-1">
                  Tu nombre
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-400">
                    <User className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="bg-white border border-purple-200 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-3"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-700 mb-1">
                  Correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white border border-purple-200 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-3"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              {/* Campo Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-purple-700 mb-1">
                  Teléfono
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="bg-white border border-purple-200 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-3"
                    placeholder="Tu número de teléfono"
                    required
                  />
                </div>
              </div>

              {/* Campo Preferencia Horaria */}
              <div>
                <label htmlFor="horario" className="block text-sm font-medium text-purple-700 mb-1">
                  Preferencia horaria
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <select
                    id="horario"
                    name="horario"
                    value={formData.horario}
                    onChange={handleChange}
                    className="bg-white border border-purple-200 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-3 appearance-none"
                  >
                    <option value="mañanas">Mañanas</option>
                    <option value="tardes">Tardes</option>
                    <option value="cualquiera">Cualquier horario</option>
                  </select>
                </div>
              </div>

              {/* Botón de envío */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center justify-center gap-2 disabled:opacity-70 mt-8"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Procesando...</span>
                  </>
                ) : (
                  <>
                    <span>EMPIEZA AHORA</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </motion.button>

              {/* Texto legal */}
              <p className="text-xs text-purple-500 text-center mt-4">
                Al presionar el botón de Empieza ahora aceptas nuestros términos y condiciones y nuestra política de
                privacidad.
              </p>
            </form>
          </div>
        </motion.div>
        {/* Mensaje de confirmación */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">¡Enviado con éxito!</span>
            </div>
            <p>{successMessage}</p>
            <button
              onClick={() => setSuccessMessage("")}
              className="mt-2 text-sm font-medium text-green-700 hover:text-green-900"
            >
              Cerrar
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

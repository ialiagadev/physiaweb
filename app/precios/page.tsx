"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Users2, Bell, Phone, Database, Smartphone, Sparkles, Star, Zap, Bot, CreditCard, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

// Tipos de planes
type BillingPeriod = "monthly" | "biannual" | "annual"
type PlanFeature = {
  text: string
  icon: React.ReactNode
  highlight?: boolean
  value?: string | number | React.ReactNode
}

// Configuración de precios exactos según las imágenes
const PRICING = {
  initial: {
    monthly: 75,
    biannual: 68,
    annual: 60,
  },
  advanced: {
    monthly: 150,
    biannual: 135,
    annual: 120,
  },
  enterprise: {
    monthly: 200,
    biannual: 180,
    annual: 160,
  },
}

// Componente para las características del plan
const FeatureItem = ({ feature }: { feature: PlanFeature }) => (
  <li className={`flex items-start gap-3 ${feature.highlight ? "font-medium" : ""}`}>
    <span className={`rounded-full p-1 ${feature.highlight ? "bg-purple-100 text-purple-700" : "text-purple-600"}`}>
      {feature.icon}
    </span>
    <div className="flex-1">
      <span className={feature.highlight ? "text-purple-900" : "text-gray-700"}>{feature.text}</span>
      {feature.value && <span className="ml-2 font-semibold text-purple-800">{feature.value}</span>}
    </div>
  </li>
)

// Modificar el componente TidyCal para habilitar el scroll
const TidyCalEmbed = () => {
  return (
    <div className="w-full overflow-hidden">
      <iframe
        src="https://tidycal.com/gsfisioterapiaclientes/physia"
        frameBorder="0"
        style={{
          width: "100%",
          height: "650px", // Altura ajustada para mostrar el calendario completo
          border: 0,
          overflow: "auto", // Cambiado a "auto" para permitir scroll
          display: "block",
        }}
        scrolling="yes" // Cambiado a "yes" para permitir scroll
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly")
  const router = useRouter()
  const pathname = usePathname()
  const tidyCalKey = useRef(`tidycal-${Date.now()}`)

  // Regenerar la key del componente TidyCal cuando cambia la ruta
  useEffect(() => {
    tidyCalKey.current = `tidycal-${Date.now()}`
  }, [pathname])

  // Características de cada plan
  const plans = [
    {
      name: "INICIAL",
      description: "Para clínicas de 1 a 2 profesionales que quieren simplificar la gestión del día a día",
      price: PRICING.initial[billingPeriod],
      features: [
        {
          icon: <Users2 className="h-5 w-5" />,
          text: "Administradores",
          highlight: true,
          value: "2",
        },
        {
          icon: <Bot className="h-5 w-5" />,
          text: "Usuarios IA",
          highlight: true,
          value: "1",
        },
        {
          icon: <Phone className="h-5 w-5" />,
          text: "Números de teléfono",
          highlight: true,
          value: "1",
        },
        {
          icon: <Bell className="h-5 w-5" />,
          text: "Citas y recordatorios",
          highlight: true,
          value: "100",
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          text: "Sincronización con Google Calendar",
          value: "",
        },
        {
          icon: <CreditCard className="h-5 w-5" />,
          text: "Pagos integrados",
          value: "",
        },
        {
          icon: <Database className="h-5 w-5" />,
          text: "Servicio de migración incluido (valorado en 300€)",
          value: "",
        },
        {
          icon: <Smartphone className="h-5 w-5" />,
          text: "App",
          value: <span className="text-purple-600 italic">(próximamente)</span>,
        },
      ].filter((feature) => feature.text !== "Coste Web"),
      color: "from-blue-400 to-purple-500",
      icon: <Users2 className="h-8 w-8" />,
    },
    {
      name: "AVANZADO",
      description:
        "Ideal para clínicas de hasta 10 profesionales que necesitan funcionalidades adicionales para la gestión diaria",
      price: PRICING.advanced[billingPeriod],
      features: [
        {
          icon: <Users2 className="h-5 w-5" />,
          text: "Administradores",
          highlight: true,
          value: "5",
        },
        {
          icon: <Bot className="h-5 w-5" />,
          text: "Usuarios IA",
          highlight: true,
          value: "2",
        },
        {
          icon: <Phone className="h-5 w-5" />,
          text: "Números de teléfono",
          highlight: true,
          value: "2",
        },
        {
          icon: <Bell className="h-5 w-5" />,
          text: "Citas y recordatorios",
          highlight: true,
          value: "300",
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          text: "Sincronización con Google Calendar",
          value: "",
        },
        {
          icon: <CreditCard className="h-5 w-5" />,
          text: "Pagos integrados",
          value: "",
        },
        {
          icon: <Database className="h-5 w-5" />,
          text: "Servicio de migración incluido (valorado en 300€)",
          value: "",
        },
        {
          icon: <Smartphone className="h-5 w-5" />,
          text: "App",
          value: <span className="text-purple-600 italic">(próximamente)</span>,
        },
      ].filter((feature) => feature.text !== "Coste Web"),
      popular: true,
      color: "from-purple-500 to-purple-700",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      name: "ENTERPRISE",
      description: "Para clínicas en crecimiento que necesitan funcionalidades concretas y personalización avanzada",
      price: PRICING.enterprise[billingPeriod],
      features: [
        {
          icon: <Users2 className="h-5 w-5" />,
          text: "Administradores",
          highlight: true,
          value: "10",
        },
        {
          icon: <Bot className="h-5 w-5" />,
          text: "Usuarios IA",
          highlight: true,
          value: "4",
        },
        {
          icon: <Phone className="h-5 w-5" />,
          text: "Números de teléfono",
          highlight: true,
          value: "5",
        },
        {
          icon: <Bell className="h-5 w-5" />,
          text: "Citas y recordatorios",
          highlight: true,
          value: "600",
        },
        {
          icon: <Calendar className="h-5 w-5" />,
          text: "Sincronización con Google Calendar",
          value: "",
        },
        {
          icon: <CreditCard className="h-5 w-5" />,
          text: "Pagos integrados",
          value: "",
        },
        {
          icon: <Database className="h-5 w-5" />,
          text: "Servicio de migración incluido (valorado en 300€)",
          value: "",
        },
        {
          icon: <Smartphone className="h-5 w-5" />,
          text: "App",
          value: <span className="text-purple-600 italic">(próximamente)</span>,
        },
      ].filter((feature) => feature.text !== "Coste Web"),
      color: "from-indigo-600 to-blue-700",
      icon: <Star className="h-8 w-8" />,
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-purple-50 via-white to-purple-50">
      <div className="container px-4 mx-auto">
        {/* Cabecera */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
            <Sparkles className="h-4 w-4 text-purple-700" />
            <span className="text-purple-800 font-medium">Planes y Precios</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Encuentra el plan perfecto para tu clínica
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full mb-8" />

          <p className="text-xl text-purple-800 mb-12 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades
          </p>

          {/* Selector de período de facturación */}
          <div className="inline-flex p-1.5 bg-purple-100 rounded-full shadow-inner mb-16">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === "monthly"
                  ? "bg-white text-purple-900 shadow-md"
                  : "text-purple-700 hover:text-purple-900"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingPeriod("biannual")}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === "biannual"
                  ? "bg-white text-purple-900 shadow-md"
                  : "text-purple-700 hover:text-purple-900"
              }`}
            >
              Semestral
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                -10%
              </span>
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                billingPeriod === "annual"
                  ? "bg-white text-purple-900 shadow-md"
                  : "text-purple-700 hover:text-purple-900"
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Grid de planes */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl ${plan.popular ? "md:-translate-y-2 z-10" : ""}`}>
              {/* Contenido de la tarjeta */}
              <div className="relative rounded-2xl bg-white border border-purple-100 shadow-lg p-8 h-full flex flex-col">
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-purple-600 text-white text-sm font-medium px-6 py-1 rounded-full shadow">
                      Más popular
                    </span>
                  </div>
                )}

                {/* Cabecera del plan */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-full bg-gradient-to-br ${plan.color} text-white`}>{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-purple-900">{plan.name}</h3>
                  </div>
                  <p className="text-purple-600 min-h-[60px]">{plan.description}</p>
                </div>

                {/* Precio */}
                <div className="mb-6 flex items-baseline">
                  <span className="text-5xl font-bold text-purple-900">{plan.price}€</span>
                  <span className="text-purple-600 ml-2">/mes</span>
                </div>

                {/* Lista de características */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <FeatureItem key={i} feature={feature} />
                  ))}
                </ul>

                {/* Botones de acción */}
                <div className="space-y-3 mt-auto">
                  <Button
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity duration-200 border-0 text-white`}
                    size="lg"
                  >
                    Empezar ahora
                  </Button>
                  <Link href="/prueba-gratis" className="w-full block">
                    <Button
                      variant="outline"
                      className="w-full border-purple-200 text-purple-700 hover:bg-purple-50"
                      size="lg"
                    >
                      Prueba gratis
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota IVA */}
        <p className="text-center text-gray-500 mt-12">*IVA no incluido</p>

        {/* Sección de calendario simplificada */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">¿Tienes dudas? Te llamamos</h2>

          {/* TidyCal Embed con key única para forzar remontaje */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div key={tidyCalKey.current} className="tidycal-container">
              <TidyCalEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


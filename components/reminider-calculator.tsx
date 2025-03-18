"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Bell, Package, Zap, Building, Calculator, Sparkles } from "lucide-react"

const ReminderCalculator = () => {
  // Datos de los planes con diferentes tonos de lila (precios actualizados)
  const plans = [
    {
      id: "inicial",
      name: "Inicial",
      basePrice: 75,
      includedReminders: 100,
      icon: <Package className="h-4 w-4" />,
      color: "from-indigo-400 to-indigo-600", // Tono más azulado
    },
    {
      id: "avanzado",
      name: "Avanzado",
      basePrice: 150,
      includedReminders: 300,
      icon: <Zap className="h-4 w-4" />,
      color: "from-purple-400 to-purple-600", // Tono medio (púrpura)
    },
    {
      id: "enterprise",
      name: "Enterprise",
      basePrice: 200,
      includedReminders: 600,
      icon: <Building className="h-4 w-4" />,
      color: "from-fuchsia-500 to-fuchsia-700", // Tono más rosado
    },
  ]

  // Estado del componente
  const [selectedPlanId, setSelectedPlanId] = useState("inicial")
  const [extraReminders, setExtraReminders] = useState(0)

  // Obtener el plan seleccionado
  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) || plans[0]

  // Calcular totales
  const extraCost = extraReminders * 0.1
  const totalCost = selectedPlan.basePrice + extraCost
  const totalReminders = selectedPlan.includedReminders + extraReminders

  // Manejar cambio de recordatorios extra
  const handleExtraRemindersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 0
    setExtraReminders(Math.max(0, value))
  }

  // Obtener el color del plan seleccionado para el panel de costes
  const getSelectedPlanGradient = () => {
    switch (selectedPlanId) {
      case "inicial":
        return "from-indigo-500 to-indigo-700"
      case "avanzado":
        return "from-purple-500 to-purple-700"
      case "enterprise":
        return "from-fuchsia-500 to-fuchsia-700"
      default:
        return "from-purple-500 to-purple-700"
    }
  }

  // Obtener el color del anillo para el plan seleccionado
  const getRingColor = (planId: string) => {
    switch (planId) {
      case "inicial":
        return "ring-indigo-500"
      case "avanzado":
        return "ring-purple-500"
      case "enterprise":
        return "ring-fuchsia-500"
      default:
        return "ring-purple-500"
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100">
        {/* Encabezado con efecto de gradiente y patrón */}
        <div className="relative bg-gradient-to-r from-violet-600 to-purple-800 px-6 py-5 text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-1 flex items-center">
                <Calculator className="mr-2 h-5 w-5" />
                Calculadora de Recordatorios
              </h2>
              <p className="text-purple-100 text-sm">Calcula el coste mensual según tus necesidades</p>
            </div>
            <div className="hidden md:block">
              <Sparkles className="h-8 w-8 text-purple-200 opacity-70" />
            </div>
          </div>
        </div>

        <div className="p-5">
          {/* Selector de planes con tarjetas */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-purple-900 mb-3">Selecciona tu plan:</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {plans.map((plan) => (
                <motion.div
                  key={plan.id}
                  className={`relative rounded-xl cursor-pointer transition-all overflow-hidden ${
                    selectedPlanId === plan.id
                      ? `ring-2 ${getRingColor(plan.id)} shadow-md`
                      : "border border-purple-100 hover:border-purple-300"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPlanId(plan.id)}
                >
                  <div className={`bg-gradient-to-r ${plan.color} text-white p-2 flex items-center justify-between`}>
                    <div className="flex items-center">
                      {plan.icon}
                      <span className="ml-2 font-medium">{plan.name}</span>
                    </div>
                    {selectedPlanId === plan.id && <Check className="h-4 w-4" />}
                  </div>
                  <div className="p-2 bg-white">
                    <div className="text-base font-bold text-purple-900">
                      {plan.basePrice}€<span className="text-xs font-normal text-purple-500">/mes</span>
                    </div>
                    <div className="text-xs text-purple-600 mt-1">Incluye {plan.includedReminders} recordatorios</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sección de recordatorios extra */}
          <div className="bg-purple-50 rounded-xl p-4 mb-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-purple-900 mb-2">Recordatorios extra:</label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    value={extraReminders || ""}
                    onChange={handleExtraRemindersChange}
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="0"
                  />
                  <Bell className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-400" />
                </div>
                <div className="text-xs text-purple-600 mt-2">Cada recordatorio extra cuesta 0,10€</div>
              </div>

              <div className="flex-1 bg-white rounded-lg p-3 border border-purple-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-purple-700">Incluidos:</span>
                  <span className="font-medium text-purple-900">{selectedPlan.includedReminders}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-purple-700">Extra:</span>
                  <span className="font-medium text-purple-900">{extraReminders}</span>
                </div>
                <div className="border-t border-dashed border-purple-100 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-purple-900">Total:</span>
                  <span className="font-bold text-purple-900">{totalReminders}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen de costes - color dinámico basado en el plan seleccionado */}
          <motion.div
            className={`bg-gradient-to-br ${getSelectedPlanGradient()} rounded-xl p-4 text-white mb-4`}
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={selectedPlanId} // Para que se anime al cambiar de plan
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-base font-medium mb-1">Coste total mensual</h3>
                {extraReminders > 0 && (
                  <div className="text-xs text-purple-100">
                    Base: {selectedPlan.basePrice}€ + Extras: {extraCost.toFixed(2)}€
                  </div>
                )}
              </div>
              <motion.div
                className="text-2xl md:text-3xl font-bold"
                key={totalCost}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {totalCost.toFixed(2)}€
              </motion.div>
            </div>
          </motion.div>

          {/* Botón de acción - color dinámico basado en el plan seleccionado */}
          <motion.button
            className={`w-full bg-gradient-to-r ${
              selectedPlanId === "inicial"
                ? "from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600"
                : selectedPlanId === "avanzado"
                  ? "from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600"
                  : "from-fuchsia-600 to-fuchsia-700 hover:from-fuchsia-500 hover:to-fuchsia-600"
            } text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Empezar mi prueba
          </motion.button>

          <div className="text-center text-xs text-purple-500 mt-3">
            Sin compromiso de permanencia. Cancela cuando quieras.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReminderCalculator


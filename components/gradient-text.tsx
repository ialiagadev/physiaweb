"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function GradientHeading() {
  return (
    <div className="relative my-8 px-4">
      {/* Decorative background glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-200/30 to-purple-300/30 rounded-xl blur-lg"></div>

      {/* Main heading with gradient text */}
      <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-center py-6 px-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-fuchsia-600 to-purple-600 animate-gradient-x">
          Empieza hoy y mejora la gestión de tu clínica con PHYSIA
        </span>

        {/* Decorative sparkles */}
        <motion.div
          className="absolute -top-2 -left-2 w-6 h-6 text-purple-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Sparkles className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute -bottom-2 -right-2 w-6 h-6 text-purple-500"
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Sparkles className="w-full h-full" />
        </motion.div>

        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </h2>
    </div>
  )
}


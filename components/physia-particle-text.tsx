"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function PhysiaTitle() {
  // Track if component is mounted (client-side)
  const [isMounted, setIsMounted] = useState(false)
  // Para la animación del gradiente
  const [gradientPosition, setGradientPosition] = useState(0)

  useEffect(() => {
    // Set mounted state to true after hydration
    setIsMounted(true)

    // Animación del gradiente - only start after hydration
    const intervalId = setInterval(() => {
      setGradientPosition((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 60) // 60ms * 100 steps ≈ 6 segundos para completar un ciclo

    return () => clearInterval(intervalId)
  }, [])

  // Use a static gradient on server, animated gradient on client
  const gradientStyle = isMounted
    ? {
        background: `linear-gradient(90deg, #2D9CDB, #9B51E0, #BB6BD9, #2D9CDB)`,
        backgroundSize: "400%",
        backgroundPosition: `${gradientPosition}% 0`,
      }
    : {
        background: `linear-gradient(90deg, #2D9CDB, #9B51E0, #BB6BD9, #2D9CDB)`,
        backgroundSize: "400%",
        backgroundPosition: "0% 0",
      }

  const titleStyle = {
    ...gradientStyle,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold uppercase tracking-tighter leading-[0.85] mb-2 px-2 whitespace-nowrap"
          style={titleStyle}
        >
          PHYSIA
        </h1>

        {/* Animated underline */}
        <motion.div
          className="h-[3px] sm:h-1 md:h-1.5 rounded-full w-1/3 mb-10"
          style={gradientStyle}
          initial={{ width: "0%" }}
          animate={{ width: "33%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>
    </div>
  )
}


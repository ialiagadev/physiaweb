"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇬🇧" },
]

export default function SimpleLanguageToggle() {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Recuperar el idioma del localStorage al cargar
    const savedLang = localStorage.getItem("preferred-language")
    if (savedLang === "en") {
      setCurrentLanguage(languages[1])
    }
  }, [])

  // No renderizar nada durante SSR para evitar errores de hidratación
  if (!mounted) return null

  function switchLanguage(langCode: string) {
    if (langCode === currentLanguage.code) return

    if (langCode === "es") {
      setCurrentLanguage(languages[0])
      localStorage.setItem("preferred-language", "es")

      // Si estamos en una página traducida, volver a la original
      if (window.location.hostname.includes("translate.goog")) {
        // Extraer la URL original de la URL de Google Translate
        const originalUrl = new URL(window.location.href).searchParams.get("u") || "/"
        window.location.href = originalUrl
      } else {
        // Simplemente recargar la página
        window.location.reload()
      }
    } else {
      setCurrentLanguage(languages[1])
      localStorage.setItem("preferred-language", "en")

      // Abrir la página en Google Translate
      const currentUrl = window.location.href
      const translateUrl = `https://translate.google.com/translate?sl=es&tl=en&u=${encodeURIComponent(currentUrl)}`

      // Abrir en la misma pestaña
      window.location.href = translateUrl
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-purple-900 hover:bg-purple-50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{currentLanguage.flag}</span>
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => switchLanguage(lang.code)}
          >
            <span className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </span>
            {currentLanguage.code === lang.code && <span className="h-2 w-2 rounded-full bg-purple-500"></span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

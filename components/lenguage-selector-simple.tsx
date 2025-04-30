'use client' // <-- ESTO es lo que faltaba al principio del archivo

import { useState, useEffect, useRef } from "react"
import { Globe } from "lucide-react"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Definir la interfaz para la ventana global para TypeScript
declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: {
      translate: {
        TranslateElement: any & {
          InlineLayout: {
            SIMPLE: string
          }
        }
      }
    }
  }
}

const languages = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇬🇧" },
]

export default function LanguageSelectorFixed() {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const translateInitialized = useRef(false)
  const maxRetries = useRef(10)
  const retryCount = useRef(0)

  useEffect(() => {
    setMounted(true)

    const savedLang = localStorage.getItem("preferred-language")
    if (savedLang === "en") {
      setCurrentLanguage(languages[1])
      setTimeout(() => {
        initGoogleTranslate()
      }, 2000) // <- Más tiempo para asegurar que el DOM esté listo
    }

    return () => {
      const gTransScript = document.getElementById("google-translate-script")
      if (gTransScript) {
        gTransScript.remove()
      }
    }
  }, [])

  if (!mounted) return null

  function initGoogleTranslate() {
    console.log("Iniciando Google Translate...")
    setIsLoading(true)

    if (translateInitialized.current) {
      console.log("Google Translate ya está inicializado")
      setIsLoading(false)
      return
    }

    if (!document.getElementById("google_translate_element")) {
      const div = document.createElement("div")
      div.id = "google_translate_element"
      div.style.display = "none"
      document.body.appendChild(div)
    }

    window.googleTranslateElementInit = () => {
      console.log("Función googleTranslateElementInit ejecutada")
      try {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "es",
              includedLanguages: "en,es",
              autoDisplay: false,
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "google_translate_element"
          )

          console.log("Widget de Google Translate creado")

          // Esperar más tiempo antes de activar
          setTimeout(() => {
            retryActivateTranslation()
          }, 3000)

          translateInitialized.current = true
        } else {
          console.error("Google Translate API no está disponible")
          setIsLoading(false)
        }
      } catch (error) {
        console.error("Error al inicializar Google Translate:", error)
        setIsLoading(false)
      }
    }

    const script = document.createElement("script")
    script.id = "google-translate-script"
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    script.async = true
    script.onerror = () => {
      console.error("Error al cargar el script de Google Translate")
      setIsLoading(false)
    }

    document.body.appendChild(script)
  }

  function retryActivateTranslation() {
    retryCount.current = 0

    const attemptActivation = () => {
      if (retryCount.current >= maxRetries.current) {
        console.error(`No se pudo activar la traducción después de ${maxRetries.current} intentos`)
        setIsLoading(false)
        return
      }

      const selectElement =
        (document.querySelector(".goog-te-combo") as HTMLSelectElement) ||
        (document.querySelector(".VIpgJd-ZVi9od-xl07Ob-lTBxed") as HTMLSelectElement) ||
        (document.querySelector("[aria-label='Language Translate Widget']") as HTMLSelectElement)

      if (selectElement) {
        console.log("Selector de idioma encontrado, cambiando a inglés")

        try {
          selectElement.value = "en"
          const event = new Event("change", { bubbles: true })
          selectElement.dispatchEvent(event)

          console.log("Traducción activada")
          setIsLoading(false)
        } catch (error) {
          console.error("Error al cambiar el idioma:", error)
          retryCount.current++
          setTimeout(attemptActivation, 500)
        }
      } else {
        console.log(`Intento ${retryCount.current + 1}: No se encontró el selector de idioma, reintentando...`)
        retryCount.current++
        setTimeout(attemptActivation, 500)
      }
    }

    setTimeout(attemptActivation, 500)
  }

  function switchLanguage(langCode: string) {
    if (langCode === currentLanguage.code) return

    if (langCode === "es") {
      setCurrentLanguage(languages[0])
      localStorage.setItem("preferred-language", "es")
      console.log("Cambiando a español, recargando página...")
      window.location.reload()
    } else {
      setCurrentLanguage(languages[1])
      localStorage.setItem("preferred-language", "en")
      console.log("Cambiando a inglés, iniciando traducción...")
      initGoogleTranslate()
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.button
            className="flex items-center gap-1 px-3 py-1.5 rounded-full text-purple-900 hover:bg-purple-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">{isLoading ? "..." : currentLanguage.flag}</span>
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

      {/* Contenedor oculto para Google Translate */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      <style jsx global>{`
        .goog-te-banner-frame {
          display: none !important;
        }
        .goog-te-menu-value:hover {
          text-decoration: none !important;
        }
        body {
          top: 0 !important;
        }
        .VIpgJd-ZVi9od-aZ2wEe-wOHMyf {
          display: none !important;
        }
        .VIpgJd-ZVi9od-aZ2wEe-OiiCO {
          display: none !important;
        }
      `}</style>
    </>
  )
}

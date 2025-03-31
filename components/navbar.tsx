"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Brain, Sparkles, MessageCircle } from "lucide-react"

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Funcionalidades", href: "/funcionalidades" },
  { name: "Precios", href: "/precios" },
]

// WhatsApp link
const WHATSAPP_LINK = "https://wa.me/34966945075?text=%C2%A1Hola%20PHYSIA!"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle client-side only code after mounting
  useEffect(() => {
    setMounted(true)

    // Initial scroll check
    if (window.scrollY > 10) {
      setIsScrolled(true)
    }

    // Scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    // Resize event listener
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobileMenuOpen])

  // Render a simplified version during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Static Logo */}
            <div className="flex items-center">
              <div className="relative z-10 bg-gradient-to-br from-purple-600 to-purple-800 p-2 rounded-full mr-2">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500">
                Physia
              </span>
            </div>

            {/* Static placeholder for navigation */}
            <div className="hidden md:flex items-center space-x-8">{/* Placeholder for nav links */}</div>

            {/* Mobile menu button placeholder */}
            <div className="md:hidden">
              <button className="p-2 rounded-md text-purple-900">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo y navegación principal juntos */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center mr-4">
              <motion.div
                className="relative flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Logo background glow */}
                <motion.div
                  className="absolute -inset-2 rounded-full bg-purple-200/50 blur-md"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Logo icon */}
                <div className="relative z-10 bg-gradient-to-br from-purple-600 to-purple-800 p-2 rounded-full mr-2">
                  <Brain className="h-6 w-6 text-white" />
                </div>

                {/* Logo text */}
                <span className="relative z-10 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-500">
                  Physia
                </span>
              </motion.div>
            </Link>

            {/* Navegación principal - directamente al lado del logo */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-purple-900 hover:text-purple-700 font-medium rounded-md relative"
                >
                  {link.name}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Botones de acción en escritorio */}
          <div className="hidden md:flex items-center">
            {/* WhatsApp Button */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="mr-3"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-medium py-2 px-4 rounded-full transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Habla con nuestra IA</span>
              </a>
            </motion.div>

            {/* Botón de Prueba Gratis destacado con efecto de zoom */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/prueba-gratis">
                <button className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-medium py-2 px-4 rounded-full transition-all duration-300">
                  <Sparkles className="h-4 w-4" />
                  <span>Prueba gratis</span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Botón de Prueba Gratis para móvil con efecto de zoom */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="mr-2"
            >
              <Link href="/prueba-gratis">
                <button className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-medium py-1.5 px-3 rounded-full">
                  <Sparkles className="h-3 w-3" />
                  <span>Prueba</span>
                </button>
              </Link>
            </motion.div>

            <button
              className="p-2 rounded-md text-purple-900 hover:bg-purple-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-purple-100">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name} className="py-1">
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-purple-900 hover:bg-purple-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}

            {/* WhatsApp Button in mobile menu */}
            <div className="py-1 mt-2 border-t border-purple-100 pt-3">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium py-3 px-4 rounded-md mb-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Habla con nuestra IA</span>
                </a>
              </motion.div>
            </div>

            {/* Botón de Prueba Gratis destacado en menú móvil con efecto de zoom */}
            <div className="py-1">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link href="/prueba-gratis" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium py-3 px-4 rounded-md">
                    <Sparkles className="h-4 w-4" />
                    <span>Comenzar prueba gratuita</span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


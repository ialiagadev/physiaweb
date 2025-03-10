"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Brain } from "lucide-react"

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Funcionalidades", href: "/funcionalidades" },
  { name: "Precios", href: "/precios" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Detectar scroll para cambiar la apariencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar el menú móvil al cambiar de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-purple-900 hover:bg-purple-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
          </div>
        </div>
      )}
    </header>
  )
}


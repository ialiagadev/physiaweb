import Link from "next/link"
import { Brain, Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-purple-100">
      <div className="container mx-auto px-4 py-8">
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Información de la empresa */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-1.5 rounded-full mr-2">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-purple-800">Physia</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Transformando la gestión de clínicas con inteligencia artificial.
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div>
            <h3 className="text-sm font-semibold text-purple-900 mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-purple-600">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/funcionalidades" className="text-sm text-gray-600 hover:text-purple-600">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="/precios" className="text-sm text-gray-600 hover:text-purple-600">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-purple-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-purple-900 mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600">info@physia.es</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600">+34 912 345 678</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes sociales */}
          <div>
            <h3 className="text-sm font-semibold text-purple-900 mb-4">Síguenos</h3>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-purple-600 hover:bg-purple-50 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-purple-600 hover:bg-purple-50 transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-purple-600 hover:bg-purple-50 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-purple-600 hover:bg-purple-50 transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-100 pt-6">
          {/* Copyright y enlaces legales */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-4 sm:mb-0">© {currentYear} Physia. Todos los derechos reservados.</p>
            <div className="flex space-x-4">
              <Link href="/terminos" className="text-xs text-gray-500 hover:text-purple-600">
                Términos
              </Link>
              <Link href="/privacidad" className="text-xs text-gray-500 hover:text-purple-600">
                Privacidad
              </Link>
              <Link href="/cookies" className="text-xs text-gray-500 hover:text-purple-600">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


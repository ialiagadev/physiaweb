import Link from "next/link"
import { Instagram, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 sm:mb-0">
            <Link href="/" className="text-lg font-bold text-purple-700">
              PHYSIA
            </Link>
          </div>

          {/* Enlaces de contacto */}
          <div className="flex items-center">
            <a
              href="https://instagram.com/my_physia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-purple-700 transition-colors mx-4"
            >
              <Instagram className="h-5 w-5" />
              <span className="ml-2 text-sm">@my_physia</span>
            </a>

            <a
              href="tel:966944876"
              className="flex items-center text-gray-600 hover:text-purple-700 transition-colors mx-4"
            >
              <Phone className="h-5 w-5" />
              <span className="ml-2 text-sm">966 944 876</span>
            </a>

            <a
              href="mailto:info@physia.es"
              className="flex items-center text-gray-600 hover:text-purple-700 transition-colors mx-4"
            >
              <Mail className="h-5 w-5" />
              <span className="ml-2 text-sm">info@physia.es</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-xs text-gray-500">&copy;  Physia. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}


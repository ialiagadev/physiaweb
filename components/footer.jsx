import Link from "next/link"
import { Instagram, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 sm:flex-row sm:justify-between sm:items-start sm:space-y-0">
          {/* Logo */}
          <div className="text-center sm:text-left">
            <Link href="/" className="text-lg font-bold text-purple-700">
              PHYSIA
            </Link>
          </div>

          {/* Enlaces de contacto */}
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6">
            <a
              href="https://instagram.com/my_physia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-purple-700 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="ml-2 text-sm">@my_physia</span>
            </a>

            <a href="tel:966944876" className="flex items-center text-gray-600 hover:text-purple-700 transition-colors">
              <Phone className="h-5 w-5" />
              <span className="ml-2 text-sm">966 944 876</span>
            </a>

            <a
              href="mailto:mvalera@myphysia.com"
              className="flex items-center text-gray-600 hover:text-purple-700 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="ml-2 text-sm">mvalera@myphysia.com</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Physia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}


import Link from "next/link"
import { FileText, LayoutGrid, User, Settings, Code, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SoportePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-purple-600 mb-8">¿Cómo podemos ayudar?</h1>
          <p className="text-xl text-gray-600 mb-8">Busca rápidamente un tema:</p>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <Link
              href="#documentacion"
              className="border border-gray-300 rounded-full px-6 py-2 hover:border-purple-600 transition-colors"
            >
              <span className="text-gray-700">Documentación</span>
            </Link>

            <Link
              href="/soporte/faq"
              className="border border-gray-300 rounded-full px-6 py-2 hover:border-purple-600 transition-colors"
            >
              <span className="text-gray-700">FAQ</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Documentation Section */}
      <section id="documentacion" className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Documentación</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <Link
              href="/soporte/documentacion/como-empezar"
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <FileText className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Empezar
                </h3>
                <p className="text-gray-600">Cómo empezar con PHYSIA</p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              href="/soporte/documentacion/control-acceso"
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <User className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Control de acceso
                </h3>
                <p className="text-gray-600">Controlar el acceso a tu horario</p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link
              href="/soporte/documentacion/proceso"
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <Settings className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Proceso de usuario
                </h3>
                <p className="text-gray-600">Configurar el proceso de usuario</p>
              </div>
            </Link>

            {/* Card 4 */}
            <Link
              href="/soporte/documentacion/disposicion"
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <LayoutGrid className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Disposición
                </h3>
                <p className="text-gray-600">Cambiar la disposición de tu horario</p>
              </div>
            </Link>

            {/* Card 5 */}
            <Link
              href="/soporte/documentacion/pagos"
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Pagos
                </h3>
                <p className="text-gray-600">Configurar pagos en tu sistema</p>
              </div>
            </Link>

            {/* Card 6 */}
            <Link
              href="/soporte/documentacion/integracion"
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <Code className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Integración
                </h3>
                <p className="text-gray-600">Integrar PHYSIA con otros sistemas</p>
              </div>
            </Link>

            {/* Card 7 */}
            <Link
              href="/soporte/documentacion/uso-diario"
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <Coffee className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Uso diario
                </h3>
                <p className="text-gray-600">Gestión diaria de tu calendario</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

 
    </main>
  )
}

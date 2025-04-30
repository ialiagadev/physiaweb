import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function EmpezarPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/soporte" className="hover:text-purple-600">
              Soporte
            </Link>
            <span className="mx-2">/</span>
            <Link href="/soporte#documentacion" className="hover:text-purple-600">
              Documentación
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Cómo empezar</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/soporte" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a soporte
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">Cómo empezar con PHYSIA</h1>

          <div className="prose prose-purple max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              PHYSIA es una herramienta de gestión centralizada para clínicas de profesionales de la salud, potenciada
              con Inteligencia Artificial. Esta guía te ayudará a configurar tu cuenta y empezar a utilizar todas las
              funcionalidades que ofrecemos.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Primeros pasos</h2>

            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li className="text-gray-700">
                <strong className="text-gray-900">Crea una cuenta:</strong> Regístrate en PHYSIA para comenzar.
                Necesitarás proporcionar información básica sobre tu clínica.
              </li>
              <li className="text-gray-700">
                <strong className="text-gray-900">Configura tu calendario:</strong> Establece tus horarios de trabajo,
                días no laborables y duración de las citas.
              </li>
              <li className="text-gray-700">
                <strong className="text-gray-900">Personaliza tu perfil:</strong> Añade información sobre tu clínica,
                servicios y profesionales.
              </li>
              <li className="text-gray-700">
                <strong className="text-gray-900">Configura el asistente virtual:</strong> Personaliza las respuestas
                automáticas y el comportamiento del asistente de IA.
              </li>
              <li className="text-gray-700">
                <strong className="text-gray-900">Integra WhatsApp:</strong> Conecta tu número de WhatsApp para
                automatizar la comunicación con tus pacientes.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Configuración del calendario</h2>

            <p className="text-gray-700 mb-4">El calendario es el núcleo de PHYSIA. Aquí puedes configurar:</p>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-gray-700">Horarios de trabajo para cada profesional</li>
              <li className="text-gray-700">Duración predeterminada de las citas</li>
              <li className="text-gray-700">Tipos de servicios y sus duraciones específicas</li>
              <li className="text-gray-700">Días no laborables y vacaciones</li>
              <li className="text-gray-700">Intervalos entre citas</li>
            </ul>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-8">
              <p className="text-purple-700">
                <strong>Consejo:</strong> Configura recordatorios automáticos para reducir las cancelaciones de última
                hora. Nuestros clientes han reportado una reducción del 60% en las ausencias gracias a esta función.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Configuración del asistente virtual</h2>

            <p className="text-gray-700 mb-6">
              El asistente virtual de PHYSIA utiliza inteligencia artificial para automatizar la comunicación con tus
              pacientes. Puedes configurar:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-gray-700">Mensajes de bienvenida personalizados</li>
              <li className="text-gray-700">Respuestas a preguntas frecuentes</li>
              <li className="text-gray-700">Recordatorios de citas</li>
              <li className="text-gray-700">Seguimiento post-tratamiento</li>
              <li className="text-gray-700">Solicitud de valoraciones</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Próximos pasos</h2>

            <p className="text-gray-700 mb-4">
              Una vez que hayas configurado lo básico, te recomendamos explorar estas funcionalidades avanzadas:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-gray-700">Integración con Google Calendar</li>
              <li className="text-gray-700">Configuración de pagos online</li>
              <li className="text-gray-700">Personalización de formularios para pacientes</li>
              <li className="text-gray-700">Configuración de recordatorios automáticos</li>
              <li className="text-gray-700">Análisis de datos y estadísticas</li>
            </ul>

            <div className="bg-gray-100 p-6 rounded-lg mt-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Necesitas más ayuda?</h3>
              <p className="text-gray-700 mb-4">
                Nuestro equipo de soporte está disponible para ayudarte en cada paso del camino.
              </p>
              <Link href="/soporte/contacto" className="text-purple-600 hover:text-purple-700 font-medium">
                Contacta con soporte →
              </Link>
            </div>
          </div>
        </div>
      </div>

     
    </main>
  )
}


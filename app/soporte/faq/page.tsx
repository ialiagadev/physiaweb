import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function FAQPage() {
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
            <span className="text-gray-900">Preguntas frecuentes</span>
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

          <h1 className="text-3xl font-bold text-gray-900 mb-8">Preguntas frecuentes</h1>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">¿Qué es PHYSIA?</h2>
              <p className="text-gray-700">
              PHYSIA es un software de inteligencia artificial especializado en salud, diseñado para automatizar la gestión de pacientes en clínicas y consultas. Ayuda a los profesionales sanitarios a ahorrar tiempo y ofrecer una atención más personalizada.
              Está desarrollado en una plataforma de WhatsApp profesional, especialmente desarrollada para el entorno sanitario, que permite atender a los pacientes de forma ágil, segura y personalizada. Para ti, whatsapp web, para tus pacientes, Whatsapp. Sin aplicaciones externas.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">¿Cómo funciona el asistente virtual?</h2>
              <p className="text-gray-700">
              El asistente virtual de PHYSIA es una inteligencia artificial entrenada específicamente para el entorno clínico. Interactúa con los pacientes a través de WhatsApp, y tú tienes el control de la personalización del asistente, ya que es 100% personalizable.
Se adapta a cada paciente según su perfil, tratamiento y evolución, ofreciendo respuestas personalizadas basadas en evidencia científica y protocolos clínicos.
Además, está conectado al calendario, al sistema de citas y a las herramientas administrativas del centro, por lo que puede automatizar tareas como agendar citas, confirmar asistencias, emitir recordatorios o recopilar datos antes de las sesiones.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">¿Qué funcionalidades incluye?
              </h2>
              <p className="text-gray-700">
              PHYSIA automatiza tareas como:

              Entrevista inicial con el paciente,
              Recordatorios de citas y seguimiento,
              Gestión integral de calendario (coger citas, enviar recordatorios, hacer seguimiento),
              Generación de rutinas personalizadas,
              Asistencia clínica basada en evidencia científica
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                ¿Necesito conocimientos técnicos para usar PHYSIA?
              </h2>
              <p className="text-gray-700">
                No, PHYSIA está diseñado para ser intuitivo y fácil de usar. No necesitas conocimientos técnicos
                especiales. Además, ofrecemos tutoriales detallados y soporte personalizado para ayudarte en cada paso
                del camino.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                ¿Puedo integrar PHYSIA con otros sistemas que ya uso?
              </h2>
              <p className="text-gray-700">
                Sí, PHYSIA se integra con varias herramientas populares como Google Calendar, sistemas de pago online, y
                plataformas de marketing por email. También ofrecemos una API para integraciones personalizadas con
                otros sistemas específicos de tu clínica.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                ¿Es seguro PHYSIA para los datos de mis pacientes?
              </h2>
              <p className="text-gray-700">
                Absolutamente. La seguridad de los datos es nuestra prioridad. PHYSIA cumple con todas las normativas de
                protección de datos, incluyendo el RGPD. Utilizamos encriptación de extremo a extremo y seguimos las
                mejores prácticas de seguridad para proteger la información de tus pacientes.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                ¿Puedo personalizar PHYSIA según las necesidades de mi clínica?
              </h2>
              <p className="text-gray-700">
                Sí, PHYSIA es altamente personalizable. Puedes adaptar el sistema según el tipo de clínica,
                especialidades, servicios ofrecidos, horarios de trabajo, y muchos otros aspectos para que se ajuste
                perfectamente a tus necesidades específicas.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">¿Qué soporte ofrece PHYSIA?</h2>
              <p className="text-gray-700">
                Ofrecemos soporte completo a través de múltiples canales: chat en vivo, correo electrónico y teléfono.
                Nuestro equipo de soporte está disponible para ayudarte con cualquier duda o problema que puedas tener.
                Además, proporcionamos documentación detallada, tutoriales en video y webinars regulares para ayudarte a
                sacar el máximo provecho de PHYSIA.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">¿Puedo probar PHYSIA antes de comprometerme?</h2>
              <p className="text-gray-700">
                Sí, ofrecemos una prueba gratuita de 14 días para que puedas explorar todas las funcionalidades de
                PHYSIA sin compromiso. No se requiere tarjeta de crédito para la prueba gratuita, y puedes cancelar en
                cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </div>

     
    </main>
  )
}


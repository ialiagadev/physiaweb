import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  Users,
  CreditCard,
  FileText,
  Smartphone,
  ShoppingBag,
  Lightbulb,
  User,
} from "lucide-react"

export default function UsoDiarioPage() {
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
            <span className="text-gray-900">Uso diario</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-4">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Uso diario</h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#trabajar-horario"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Trabajar con tu horario de día a día
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gestionar-reservas"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Gestionar reservas y usuarios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gestionar-pagos"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Gestionar pagos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#trabajar-formularios"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Trabajar con formularios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#dispositivos-moviles"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Utilizar PHYSIA en dispositivos móviles
                  </Link>
                </li>
                <li>
                  <Link
                    href="#fines-comerciales"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Utilizar PHYSIA para fines comerciales
                  </Link>
                </li>
                <li>
                  <Link
                    href="#consejos-trucos"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Consejos & trucos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main content */}
          <div className="md:w-3/4">
            <Link
              href="/soporte/documentacion"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a documentación
            </Link>

            <h1 id="trabajar-horario" className="text-3xl font-bold text-gray-900 mb-6">
              Trabajar con tu horario de día a día
            </h1>

            <div className="prose prose-purple max-w-none">
              <p className="text-gray-700 mb-6">
                Esta sección explica cómo trabajar con tu horario de citas online en el día a día. Si quieres, te puedes
                enfocar en algunos procesos operativos comunes, como por ejemplo manejar tus citas, pagos y formularios.
                También puedes leer más sobre el uso de la versión móvil de tu programador de citas. Además, hemos
                incluido algunos consejos y trucos que te pueden ayudar a mejorar el flujo de trabajo.
              </p>

              <div className="bg-purple-50 rounded-lg p-6 my-8 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/2">
                    <div className="bg-white rounded-lg shadow-md p-4 border border-purple-100">
                      <Image
                        src="/usoDiario.png"
                        alt="Gestión diaria del calendario"
                        width={400}
                        height={300}
                        className="rounded"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">Gestión eficiente</h3>
                    <p className="text-gray-700">
                      PHYSIA te permite gestionar tu agenda de forma eficiente, con herramientas para supervisar citas,
                      gestionar pagos y analizar el rendimiento de tu clínica.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20"></div>
              </div>

              <h2 id="gestionar-reservas" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Gestionar citas y clientes
              </h2>

              <p className="text-gray-700 mb-6">
                La mayor parte de las interacciones diarias con tu sistema de programación de citas las harás a través
                de la sección Supervisar de tus horarios. Desde esta, podrás revisar tus reservas, aprobarlas o
                rechazarlas, buscar reservas eliminadas o ver reservas previas o cercanas. Existen diversos informes
                disponibles que te proporcionarán información sobre los datos de tu horario y su utilización. En esta
                parte puedes acceder a los datos de tus clientes y concertar citas en su nombre a través de{" "}
                <span className="inline-flex items-center bg-gray-100 px-2 py-1 rounded text-sm">
                  <User className="h-4 w-4 mr-1" /> Gestión de usuario
                </span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestión de citas</h3>
                  <p className="text-gray-700 text-sm">
                    Revisa, aprueba, rechaza y modifica citas fácilmente desde el panel de supervisión. Configura
                    notificaciones para mantenerte al día con los cambios.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestión de clientes</h3>
                  <p className="text-gray-700 text-sm">
                    Accede a la información de tus clientes, gestiona sus perfiles y programa citas en su nombre para
                    una atención personalizada.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-yellow-800">
                  <strong>Consejo:</strong> Utiliza los filtros de búsqueda para encontrar rápidamente citas específicas
                  por fecha, cliente o servicio.
                </p>
              </div>

              <h2 id="gestionar-pagos" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Gestionar pagos
              </h2>

              <p className="text-gray-700 mb-6">
                Dependiendo de las opciones de pago que hayas configurado (manual, online y/o tarjeta de crédito),
                existen diferentes opciones para gestionar pagos y manejar excepciones o situaciones especiales:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Registrar pagos manuales realizados en la clínica</li>
                <li>Verificar el estado de los pagos online</li>
                <li>Procesar reembolsos cuando sea necesario</li>
                <li>Generar informes de facturación y contabilidad</li>
                <li>Gestionar bonos y paquetes de sesiones</li>
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Procesamiento de pagos</h3>
                  <p className="text-gray-700 text-sm">
                    Gestiona pagos con tarjeta, efectivo o transferencia bancaria, manteniendo un registro completo de
                    todas las transacciones.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Informes financieros</h3>
                  <p className="text-gray-700 text-sm">
                    Genera informes detallados de ingresos, pagos pendientes y estadísticas financieras para optimizar
                    tu gestión.
                  </p>
                </div>
              </div>

              <h2 id="trabajar-formularios" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Trabajar con formularios
              </h2>

              <p className="text-gray-700 mb-6">
                Los formularios son una parte esencial para recopilar información de tus pacientes. PHYSIA te permite:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Crear formularios personalizados para diferentes tipos de citas</li>
                <li>Recopilar información médica relevante antes de las consultas</li>
                <li>Solicitar consentimientos y firmas digitales</li>
                <li>Exportar los datos de los formularios para su análisis</li>
                <li>Integrar la información de los formularios con historiales clínicos</li>
              </ul>

              <h2 id="dispositivos-moviles" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Utilizar PHYSIA en dispositivos móviles
              </h2>

              <p className="text-gray-700 mb-6">
                PHYSIA está optimizado para dispositivos móviles, permitiéndote gestionar tu clínica desde cualquier
                lugar:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Aplicación móvil</h3>
                  <p className="text-gray-700 text-sm">
                    Accede a todas las funcionalidades desde tu smartphone o tablet, con una interfaz adaptada para
                    pantallas pequeñas.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestión en movimiento</h3>
                  <p className="text-gray-700 text-sm">
                    Revisa tu agenda, confirma citas y gestiona cambios de última hora desde cualquier lugar y en
                    cualquier momento.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-yellow-800">
                  <strong>Consejo:</strong> Activa las notificaciones push en tu dispositivo móvil para recibir alertas
                  instantáneas sobre nuevas reservas o cancelaciones.
                </p>
              </div>

              <h2 id="fines-comerciales" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Utilizar PHYSIA para fines comerciales
              </h2>

              <p className="text-gray-700 mb-6">
                Además de la gestión de citas, PHYSIA ofrece herramientas para potenciar tu negocio:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Análisis de ocupación y patrones de reserva</li>
                <li>Seguimiento de clientes recurrentes y nuevos</li>
                <li>Campañas de marketing y promociones especiales</li>
                <li>Programas de fidelización y bonos de descuento</li>
                <li>Informes de rendimiento y crecimiento</li>
              </ul>

              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow my-8">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing y crecimiento</h3>
                <p className="text-gray-700">
                  Utiliza los datos de reservas para identificar tendencias, optimizar tu oferta de servicios y
                  desarrollar estrategias de crecimiento efectivas para tu clínica.
                </p>
              </div>

              <h2 id="consejos-trucos" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Consejos & trucos
              </h2>

              <p className="text-gray-700 mb-6">
                Aquí tienes algunos consejos para sacar el máximo provecho de PHYSIA en tu día a día:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-800">
                      <strong>Personaliza las notificaciones:</strong> Configura recordatorios automáticos para reducir
                      las cancelaciones de última hora.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-800">
                      <strong>Utiliza bloques de tiempo:</strong> Bloquea periodos para descansos, preparación o tareas
                      administrativas en tu agenda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-800">
                      <strong>Crea plantillas de mensajes:</strong> Prepara respuestas estándar para situaciones comunes
                      como confirmaciones o reprogramaciones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-800">
                      <strong>Revisa las estadísticas semanalmente:</strong> Analiza los patrones de reserva para
                      optimizar tu disponibilidad en horas de mayor demanda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-800">
                      <strong>Configura accesos rápidos:</strong> Crea atajos para las funciones que más utilizas para
                      ahorrar tiempo en la gestión diaria.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Ejemplo de flujo de trabajo diario</h3>
                <p className="text-gray-700 mb-4">Una clínica podría seguir esta rutina diaria con PHYSIA:</p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Inicio del día:</strong> Revisar las citas programadas y enviar recordatorios automáticos
                  </li>
                  <li>
                    <strong>Durante el día:</strong> Gestionar llegadas de pacientes y posibles cambios en la agenda
                  </li>
                  <li>
                    <strong>Después de cada cita:</strong> Registrar pagos y programar seguimientos si es necesario
                  </li>
                  <li>
                    <strong>Final del día:</strong> Revisar las citas del día siguiente y preparar los recursos
                    necesarios
                  </li>
                  <li>
                    <strong>Semanalmente:</strong> Analizar estadísticas y optimizar la disponibilidad para la próxima
                    semana
                  </li>
                </ol>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Necesitas más ayuda?</h3>
                <p className="text-gray-700 mb-4">
                  Si tienes dudas específicas sobre cómo optimizar tu flujo de trabajo diario con PHYSIA, nuestro equipo
                  de soporte está disponible para ayudarte.
                </p>
                <Link href="/soporte/contacto" className="text-purple-600 hover:text-purple-700 font-medium">
                  Contacta con soporte →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </main>
  )
}


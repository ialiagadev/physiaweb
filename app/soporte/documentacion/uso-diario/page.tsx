import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, CreditCard, FileText, Smartphone, Briefcase, Lightbulb } from "lucide-react"

export default function TrabajarHorarioPage() {
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
            <span className="text-gray-900">Trabajar con tu horario</span>
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
                    href="#gestionar-citas"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Gestionar citas y clientes
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
                    Utilizar tu horario en dispositivos móviles
                  </Link>
                </li>
                <li>
                  <Link
                    href="#fines-comerciales"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Utilizar tu horario para fines comerciales
                  </Link>
                </li>
                <li>
                  <Link
                    href="#consejos-trucos"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Consejos y trucos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main content */}
          <div className="md:w-3/4">
            <Link
              href="/soporte#documentacion"
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
                        src="/horario-diario.png"
                        alt="Gestión diaria del horario"
                        width={400}
                        height={300}
                        className="rounded"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">Gestión eficiente</h3>
                    <p className="text-gray-700">
                      PHYSIA te ofrece herramientas intuitivas para gestionar tu horario de citas de manera eficiente,
                      permitiéndote centrarte en lo que realmente importa: tus clientes.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20"></div>
              </div>

              <h2 id="gestionar-citas" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Gestionar citas y clientes
              </h2>

              <p className="text-gray-700 mb-6">
                La mayor parte de las interacciones diarias con tu sistema de programación de citas las harás a través
                de la sección Supervisar de tus horarios. Desde esta, podrás revisar tus reservas, aprobarlas o
                rechazarlas, buscar reservas eliminadas o ver reservas previas o cercanas. Existen diversos informes
                disponibles que te proporcionarán información sobre los datos de tu horario y su utilización. En esta
                parte puedes acceder a los datos de tus clientes y concertar citas en su nombre a través de Gestión de
                usuario.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Supervisión de reservas</h3>
                  <p className="text-gray-700 text-sm">
                    Revisa, aprueba o rechaza reservas fácilmente desde el panel de supervisión, manteniendo el control
                    total de tu agenda.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Informes y análisis</h3>
                  <p className="text-gray-700 text-sm">
                    Accede a informes detallados sobre la utilización de tu horario, patrones de reserva y datos de
                    clientes para optimizar tu servicio.
                  </p>
                </div>
              </div>

              <h2 id="gestionar-pagos" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Gestionar pagos
              </h2>

              <p className="text-gray-700 mb-6">
                Dependiendo de las opciones de pago que hayas configurado (manual, online y/o tarjeta de crédito),
                existen diferentes opciones disponibles para gestionar pagos y manejar excepciones o reembolsos.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-yellow-800">
                  <strong>Consejo:</strong> Revisa regularmente el estado de los pagos pendientes y envía recordatorios
                  automáticos para reducir los impagos.
                </p>
              </div>

              <h2 id="trabajar-formularios" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Trabajar con formularios
              </h2>

              <p className="text-gray-700 mb-6">
                Añadir un formulario a tu registro y/o proceso de reserva, podrás recoger información adicional sobre
                los usuarios. De esta forma, puedes acceder fácilmente a los formularios presentados. Una vez que se
                hayan procesado, puedes eliminarlos o almacenarlos para futuras referencias. Los datos del formulario se
                pueden descargar para utilizar en otras aplicaciones, como por ejemplo un sistema CRM.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Formularios personalizados</h3>
                  <p className="text-gray-700 text-sm">
                    Crea formularios adaptados a tus necesidades específicas para recopilar información relevante de tus
                    clientes.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Exportación de datos</h3>
                  <p className="text-gray-700 text-sm">
                    Exporta los datos de los formularios a formatos estándar para utilizarlos en otras aplicaciones o
                    sistemas.
                  </p>
                </div>
              </div>

              <h2 id="dispositivos-moviles" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Utilizar tu horario en dispositivos móviles
              </h2>

              <p className="text-gray-700 mb-6">
                Cuando tú o tus clientes visitan el programa de citas a través de un dispositivo móvil, como un iPhone o
                un iPad, el sistema mostrará de forma automática una versión optimizada para utilizar en estos
                dispositivos. Por tanto, no se necesita hacer ninguna configuración para que tus horarios se puedan
                utilizar en dispositivos móviles. Sin embargo, la versión móvil se puede utilizar como versión de
                escritorio y viceversa. Si accedes de forma frecuente a programa de PHYSIA desde un dispositivo móvil,
                puede ser conveniente que añadas un icono a tu pantalla de inicio de acceso rápido.
              </p>

              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm my-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Experiencia móvil optimizada</h3>
                    <p className="text-gray-700">
                      PHYSIA se adapta automáticamente a cualquier dispositivo, ofreciendo una experiencia fluida tanto
                      para ti como para tus clientes, sin necesidad de configuraciones adicionales.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="fines-comerciales" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Utilizar tu horario para fines comerciales
              </h2>

              <p className="text-gray-700 mb-6">
                Si planeas utilizar tu horario de citas para fines comerciales, esta sección te proporcionará algunos
                consejos y sugerencias que te ayudarán a aprovechar el sistema al máximo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing y promociones</h3>
                  <p className="text-gray-700 text-sm">
                    Utiliza el sistema de reservas como herramienta de marketing, ofreciendo promociones especiales en
                    horarios de baja demanda.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimización de ingresos</h3>
                  <p className="text-gray-700 text-sm">
                    Implementa estrategias de precios dinámicos y paquetes de servicios para maximizar tus ingresos.
                  </p>
                </div>
              </div>

              <h2 id="consejos-trucos" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Consejos y trucos
              </h2>

              <p className="text-gray-700 mb-6">
                Esta sección proporciona algunas características especializadas para mejorar el flujo de trabajo de tu
                horario de citas. Los consejos y trucos que se describen incluyen la creación de menús desplegables
                personalizados, lo que permite a los usuarios reservar citas repetidas y almacenar información
                adicional. También puedes aprender más sobre cómo conectar con otros sitios web a través de Zapier o
                Make, habilitando algunas opciones ocultas e insertando texto automático para personalizar las
                notificaciones de correo electrónico.
              </p>

              <div className="bg-purple-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-3 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Consejos para optimizar tu flujo de trabajo
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Automatiza recordatorios:</strong> Configura recordatorios automáticos para reducir las
                    cancelaciones de última hora
                  </li>
                  <li>
                    <strong>Utiliza plantillas:</strong> Crea plantillas de mensajes para comunicaciones frecuentes con
                    clientes
                  </li>
                  <li>
                    <strong>Configura bloques de tiempo:</strong> Establece bloques de tiempo para diferentes tipos de
                    servicios para optimizar tu agenda
                  </li>
                  <li>
                    <strong>Personaliza campos:</strong> Añade campos personalizados para recopilar información
                    específica relevante para tu negocio
                  </li>
                  <li>
                    <strong>Integra con otras herramientas:</strong> Conecta PHYSIA con tus otras herramientas de
                    negocio para centralizar la información
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Necesitas más ayuda?</h3>
                <p className="text-gray-700 mb-4">
                  Si tienes dudas específicas sobre cómo utilizar tu horario de manera más eficiente, nuestro equipo de
                  soporte está disponible para ayudarte.
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

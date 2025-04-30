import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Layout, Monitor, Palette, Globe, Bell } from 'lucide-react'

export default function DisposicionPage() {
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
          <span className="text-gray-900">Disposición</span>
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
              <Layout className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">Disposición</h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#cambiar-disposicion"
                  className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                >
                  Cambiar la disposición de tu horario
                </Link>
              </li>
              <li>
                <Link
                  href="#ajustar-vistas"
                  className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                >
                  Ajustar las vistas y sus dimensiones
                </Link>
              </li>
              <li>
                <Link
                  href="#personalizar-mensajes"
                  className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                >
                  Personalizar mensajes en pantalla
                </Link>
              </li>
              <li>
                <Link
                  href="#cambiar-apariencia"
                  className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                >
                  Cambiar la apariencia de un horario
                </Link>
              </li>
              <li>
                <Link
                  href="#disposicion-general"
                  className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                >
                  Disposición general
                </Link>
              </li>
              <li>
                <Link
                  href="#personalizar-notificaciones"
                  className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                >
                  Personalizar notificaciones y recordatorios
                </Link>
              </li>
              <li>
                <Link
                  href="#utilizar-dominio"
                  className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                >
                  Utilizar un dominio personalizado
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

          <h1 id="cambiar-disposicion" className="text-3xl font-bold text-gray-900 mb-6">
            Cambiar la disposición de tu horario
          </h1>

          <div className="prose prose-purple max-w-none">
            <p className="text-gray-700 mb-6">
              PHYSIA te ofrece muchas opciones para personalizar el estilo y la apariencia de tu horario. Esto incluye desde las dimensiones de tu
              horario y el formato de hora hasta el contenido de los diferentes mensajes del sistema, así como los colores de los horarios individuales
              y los elementos de la interfaz de usuario.
            </p>

            <div className="bg-purple-50 rounded-lg p-6 my-8 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2">
                  <div className="bg-white rounded-lg shadow-md p-4 border border-purple-100">
                    <Image
                      src="/disposicion.png"
                      alt="Opciones de disposición del horario"
                      width={400}
                      height={300}
                      className="rounded"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Personalización completa</h3>
                  <p className="text-gray-700">
                    PHYSIA te permite personalizar completamente la apariencia de tus horarios para adaptarlos a la imagen de tu marca y a las necesidades específicas de tu organización.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20"></div>
            </div>

            <p className="text-gray-700 mb-6">
              Mientras algunas configuraciones de diseño están relacionadas con horarios individuales, otras afectan a todos los horarios de tu
              cuenta. En esta sección, se tratarán los ajustes a nivel de cuenta y de horario. Las configuraciones relacionadas con la cuenta se
              remarcarán como tales.
            </p>

            <h2 id="ajustar-vistas" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
              Ajustar las vistas y sus dimensiones
            </h2>

            <p className="text-gray-700 mb-6">
              Un horario proporciona diferentes "vistas", o formas de ver el horario, por ejemplo mostrar el calendario por días, semanas o meses, o
              como una lista de espacios disponibles. Puedes cambiar las vistas que estén disponibles para el usuario final y configurar varios
              ajustes, como por ejemplo el tamaño.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Layout className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tipos de vistas</h3>
                <p className="text-gray-700 text-sm">
                  Configura qué vistas estarán disponibles: diaria, semanal, mensual o lista de disponibilidad.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dimensiones</h3>
                <p className="text-gray-700 text-sm">
                  Ajusta el tamaño y las proporciones de tu horario para adaptarlo a diferentes dispositivos y pantallas.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-yellow-800">
                <strong>Consejo:</strong> Asegúrate de que tu horario sea responsive y se vea bien tanto en dispositivos móviles como en ordenadores de escritorio.
              </p>
            </div>

            <h2 id="personalizar-mensajes" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
              Personalizar mensajes en pantalla
            </h2>

            <p className="text-gray-700 mb-6">
              La mayoría de los mensajes generados que se muestran como parte del registro, reserva y/o proceso de pago se pueden reemplazar.
              Esto te permite personalizar completamente la experiencia del usuario y adaptar los mensajes a tu marca y estilo de comunicación.
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
              <li>Mensajes de confirmación de reserva</li>
              <li>Notificaciones de cancelación</li>
              <li>Instrucciones para el proceso de pago</li>
              <li>Mensajes de error</li>
              <li>Textos de ayuda y orientación</li>
            </ul>

            <h2 id="cambiar-apariencia" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
              Cambiar la apariencia de un horario
            </h2>

            <p className="text-gray-700 mb-6">
              Puedes personalizar completamente la apariencia visual de tus horarios para adaptarlos a la imagen de tu marca:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Colores y estilos</h3>
                <p className="text-gray-700 text-sm">
                  Personaliza los colores de fondo, texto, bordes y elementos interactivos para que coincidan con tu marca.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Layout className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Diseño y estructura</h3>
                <p className="text-gray-700 text-sm">
                  Ajusta la disposición de los elementos, encabezados, pies de página y otros componentes visuales.
                </p>
              </div>
            </div>

            <h2 id="disposicion-general" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
              Disposición general
            </h2>

            <p className="text-gray-700 mb-6">
              Además de personalizar horarios individuales, puedes configurar aspectos generales que afectan a toda tu cuenta:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
              <li>Página de inicio personalizada</li>
              <li>Menús de navegación</li>
              <li>Logotipos y elementos de marca</li>
              <li>Estilos globales que se aplican a todos los horarios</li>
              <li>Integración con el diseño de tu sitio web</li>
            </ul>

            <h2 id="personalizar-notificaciones" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
              Personalizar notificaciones y recordatorios
            </h2>

            <p className="text-gray-700 mb-6">
              PHYSIA te permite personalizar completamente las notificaciones y recordatorios que se envían a los usuarios:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Correos electrónicos</h3>
                <p className="text-gray-700 text-sm">
                  Personaliza el contenido, formato y diseño de los correos electrónicos de confirmación y recordatorio.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SMS y notificaciones</h3>
                <p className="text-gray-700 text-sm">
                  Configura el contenido de los mensajes SMS y otras notificaciones enviadas a los usuarios.
                </p>
              </div>
            </div>

            <h2 id="utilizar-dominio" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
              Utilizar un dominio personalizado
            </h2>

            <p className="text-gray-700 mb-6">
              Para una integración perfecta con tu marca, puedes utilizar tu propio dominio para acceder a tu sistema de reservas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dominio propio</h3>
                <p className="text-gray-700 text-sm">
                  Configura tu propio dominio o subdominio para acceder a tu sistema de reservas (por ejemplo, reservas.tuempresa.com).
                </p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Layout className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Integración web</h3>
                <p className="text-gray-700 text-sm">
                  Integra el sistema de reservas directamente en tu sitio web para una experiencia de usuario fluida.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Ejemplo de personalización completa</h3>
              <p className="text-gray-700 mb-4">Una clínica podría personalizar su sistema de la siguiente manera:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Colores y logotipo:</strong> Utilizando los colores corporativos y el logotipo de la clínica
                </li>
                <li>
                  <strong>Dominio personalizado:</strong> reservas.nombredelaclínica.com
                </li>
                <li>
                  <strong>Mensajes personalizados:</strong> Con un tono amable y profesional acorde con la imagen de la clínica
                </li>
                <li>
                  <strong>Recordatorios:</strong> Configurados para enviar instrucciones específicas según el tipo de tratamiento
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Necesitas más ayuda?</h3>
              <p className="text-gray-700 mb-4">
                Si tienes dudas específicas sobre cómo personalizar la disposición de tu sistema, nuestro equipo
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

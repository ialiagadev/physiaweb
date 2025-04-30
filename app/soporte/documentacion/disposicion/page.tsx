import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Settings, Layout, MessageSquare, Palette, Bell } from "lucide-react"

export default function CambiarDisposicionPage() {
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
            <span className="text-gray-900">Cambiar disposición</span>
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
                    href="#opciones-disposicion"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Opciones de disposición
                  </Link>
                </li>
                <li>
                  <Link
                    href="#ajustar-vistas"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Ajustar vistas y dimensiones
                  </Link>
                </li>
                <li>
                  <Link
                    href="#personalizar-mensajes"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Personalizar mensajes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cambiar-apariencia"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Cambiar apariencia
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
                    Personalizar notificaciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="#zonas-horarias"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Zonas horarias
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

            <h1 id="opciones-disposicion" className="text-3xl font-bold text-gray-900 mb-6">
              Cambiar la disposición de tu horario
            </h1>

            <div className="prose prose-purple max-w-none">
              <p className="text-gray-700 mb-6">
                PHYSIA te ofrece muchas opciones para personalizar el estilo y la apariencia de tu horario. Esto incluye
                desde las dimensiones de tu horario y el formato de hora hasta el contenido de los diferentes mensajes
                del sistema, así como los colores de los horarios individuales y los elementos de la interfaz de
                usuario.
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
                      Mientras algunas configuraciones de diseño están relacionadas con horarios individuales, otras
                      afectan a todos los horarios de tu cuenta. En esta sección, se tratarán los ajustes a nivel de
                      cuenta y de horario.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20"></div>
              </div>

              <h2 id="ajustar-vistas" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Ajustar las vistas y sus dimensiones
              </h2>

              <p className="text-gray-700 mb-6">
                Un horario proporciona diferentes "vistas", o formas de ver el horario, por ejemplo mostrar el
                calendario por días, semanas o meses, o como una lista de espacios disponibles. Puedes cambiar las
                vistas que estén disponibles para el usuario final y configurar varios ajustes, como por ejemplo el
                tamaño.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Layout className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Vistas disponibles</h3>
                  <p className="text-gray-700 text-sm">
                    Configura qué vistas (diaria, semanal, mensual, lista) estarán disponibles para tus usuarios.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dimensiones</h3>
                  <p className="text-gray-700 text-sm">
                    Ajusta el tamaño y las proporciones de las diferentes vistas del calendario para adaptarlas a tus
                    necesidades.
                  </p>
                </div>
              </div>

              <h2 id="personalizar-mensajes" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Personalizar mensajes en pantalla
              </h2>

              <p className="text-gray-700 mb-6">
                La mayoría de los mensajes generados que se muestran como parte del registro, reserva y/o proceso de
                pago se pueden reemplazar por mensajes personalizados. Casi todos los mensajes pueden contener los
                llamados "autotextos", que consisten en palabras mágicas que se reemplazan automáticamente por algún
                valor dinámico cuando se genera el mensaje.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-yellow-800">
                  <strong>Consejo:</strong> Utiliza autotextos para personalizar los mensajes con información dinámica
                  como el nombre del usuario, la fecha de la reserva o el servicio seleccionado.
                </p>
              </div>

              <h2 id="cambiar-apariencia" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Cambiar la apariencia de un horario
              </h2>

              <p className="text-gray-700 mb-6">
                La apariencia visual del horario y la interfaz general de usuario pueden configurarse de forma separada.
                Puedes cambiar la paleta de color de tu horario seleccionando otro tema de color o escoger tu propio
                color para cada uno de los diferentes elementos del calendario. En el nivel de cuenta, puedes hacer algo
                parecido para los colores de la interfaz de usuario. La apariencia de la cabecera y el pie de página
                también se configura en el nivel de cuenta.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Temas de color</h3>
                  <p className="text-gray-700 text-sm">
                    Selecciona entre los temas predefinidos o crea tu propia paleta de colores personalizada.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Layout className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cabecera y pie de página</h3>
                  <p className="text-gray-700 text-sm">
                    Personaliza la apariencia de la cabecera y el pie de página para integrarlos con tu marca.
                  </p>
                </div>
              </div>

              <h2 id="disposicion-general" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Disposición General
              </h2>

              <p className="text-gray-700 mb-6">
                En el nivel de cuenta, puedes cambiar el formato de fecha y hora por defecto, así como también la zona
                horaria y el idioma predeterminado. También puedes cambiar el término que el sistema utiliza para
                referirse a los usuarios, de modo que sea algo más apropiado, como por ejemplo "estudiantes".
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Formato de fecha y hora</li>
                <li>Zona horaria predeterminada</li>
                <li>Idioma de la interfaz</li>
                <li>Terminología personalizada</li>
              </ul>

              <h2 id="personalizar-notificaciones" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Personalizar notificaciones y recordatorios
              </h2>

              <p className="text-gray-700 mb-6">
                Los mensajes de correo electrónico y SMS que se generan como parte del proceso de registro y reserva
                pueden personalizarse o reemplazarse por sus propios mensajes. Los recordatorios y los mensajes de
                seguimiento se pueden personalizar de manera similar.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Correos electrónicos</h3>
                  <p className="text-gray-700 text-sm">
                    Personaliza los correos de confirmación, recordatorio y seguimiento que se envían a los usuarios.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">SMS y notificaciones</h3>
                  <p className="text-gray-700 text-sm">
                    Configura el contenido de los SMS y otras notificaciones para mantener informados a tus usuarios.
                  </p>
                </div>
              </div>

              <h2 id="zonas-horarias" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Zonas horarias
              </h2>

              <p className="text-gray-700 mb-6">
                PHYSIA te permite operar en varias zonas horarias, presentando tu horario a cada usuario en su propia
                zona horaria. El sistema te permite configurar varias opciones que determinan el comportamiento del
                sistema en cuanto a las zonas horarias.
              </p>

              <div className="bg-purple-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Beneficios de las zonas horarias</h3>
                <p className="text-gray-700 mb-4">Configurar correctamente las zonas horarias te permite:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Evitar confusiones:</strong> Los usuarios ven las horas en su zona horaria local
                  </li>
                  <li>
                    <strong>Operación global:</strong> Gestionar reservas de clientes en diferentes países
                  </li>
                  <li>
                    <strong>Precisión:</strong> Asegurar que las reservas se registren en el momento correcto
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

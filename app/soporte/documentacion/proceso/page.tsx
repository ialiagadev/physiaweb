import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Settings, Calendar, ClipboardList, Clock } from "lucide-react"

export default function ProcesoUsuarioPage() {
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
            <span className="text-gray-900">Proceso de usuario</span>
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
                <Settings className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Proceso</h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#configurar-proceso"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Configurar el proceso para el usuario
                  </Link>
                </li>
                <li>
                  <Link
                    href="#recoger-datos"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Recoger datos de reserva
                  </Link>
                </li>
                <li>
                  <Link
                    href="#configurar-reserva"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Configurar el proceso de reserva
                  </Link>
                </li>
                <li>
                  <Link
                    href="#establecer-limitaciones"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Establecer limitaciones de reservas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#anadir-formularios"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Añadir formularios personalizados
                  </Link>
                </li>
                <li>
                  <Link
                    href="#combinar-horarios"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Combinar horarios
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

            <h1 id="configurar-proceso" className="text-3xl font-bold text-gray-900 mb-6">
              Configurar el proceso para el usuario
            </h1>

            <div className="prose prose-purple max-w-none">
              <p className="text-gray-700 mb-6">
                El proceso de reserva tal y como lo experimentan los usuarios de tu horario es totalmente configurable.
                Puedes especificar qué información deben dar los usuarios una vez hagan la reserva y qué pasos tienen
                que dar para completarla. Las restricciones te permiten controlar el comportamiento de tu horario y
                especificar qué es lo que los usuarios pueden hacer y qué no.
              </p>

              <div className="bg-purple-50 rounded-lg p-6 my-8 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/2">
                    <div className="bg-white rounded-lg shadow-md p-4 border border-purple-100">
                      <Image
                        src="/proceso.png"
                        alt="Configuración del proceso de usuario"
                        width={400}
                        height={300}
                        className="rounded"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">Proceso personalizable</h3>
                    <p className="text-gray-700">
                      PHYSIA te permite personalizar completamente el proceso de reserva para adaptarlo a tus
                      necesidades específicas y a las de tus usuarios.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20"></div>
              </div>

              <h2 id="recoger-datos" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Recoger datos de reserva
              </h2>

              <p className="text-gray-700 mb-6">
                Al utilizar los campos estándar y personalizables, puedes recoger la información que necesitas para
                crear una reserva.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <ClipboardList className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Campos estándar</h3>
                  <p className="text-gray-700 text-sm">
                    Nombre, correo electrónico, teléfono y otros campos básicos para identificar al usuario y contactar
                    con él.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Campos personalizados</h3>
                  <p className="text-gray-700 text-sm">
                    Crea campos adicionales para recoger información específica relevante para tu negocio u
                    organización.
                  </p>
                </div>
              </div>

              <h2 id="configurar-reserva" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Configurar el proceso de reserva
              </h2>

              <p className="text-gray-700 mb-6">
                ¿Deberían los usuarios poder repetir reservas o no? ¿Las reservas necesitan efectuar un pago o
                aprobación? ¿Es necesario que se confirmen las nuevas reservas? ¿A quién? ¿Y qué pasa con los
                recordatorios? El sistema te permite realizar un control exhaustivo sobre cada uno de los pasos del
                proceso.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-yellow-800">
                  <strong>Consejo:</strong> Configura recordatorios automáticos para reducir las cancelaciones de última
                  hora y mejorar la asistencia a las citas.
                </p>
              </div>

              <h2 id="establecer-limitaciones" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Establecer limitaciones de reservas
              </h2>

              <p className="text-gray-700 mb-6">
                Puedes establecer diversas limitaciones para controlar cómo los usuarios interactúan con tu sistema de
                reservas:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Limitar el número de reservas por usuario</li>
                <li>Establecer plazos mínimos y máximos para realizar reservas</li>
                <li>Definir períodos de cancelación</li>
                <li>Restringir la visibilidad de ciertos horarios a grupos específicos</li>
                <li>Configurar reglas para evitar reservas duplicadas</li>
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Límites temporales</h3>
                  <p className="text-gray-700 text-sm">
                    Configura con cuánta antelación se pueden hacer reservas y hasta cuándo se pueden cancelar.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Límites de cantidad</h3>
                  <p className="text-gray-700 text-sm">
                    Establece cuántas reservas puede hacer un usuario en un período determinado.
                  </p>
                </div>
              </div>

              <h2 id="anadir-formularios" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Añadir formularios personalizados
              </h2>

              <p className="text-gray-700 mb-6">
                Puedes añadir formularios personalizados para recoger información adicional durante el proceso de
                reserva. Estos formularios pueden incluir:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Campos de texto para notas o comentarios</li>
                <li>Casillas de verificación para aceptar términos y condiciones</li>
                <li>Menús desplegables para seleccionar opciones</li>
                <li>Botones de radio para elegir entre alternativas</li>
                <li>Campos para subir archivos</li>
              </ul>

              <h2 id="combinar-horarios" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Combinar horarios
              </h2>

              <p className="text-gray-700 mb-6">
                Si tienes múltiples horarios o recursos, puedes combinarlos para ofrecer una experiencia más integrada a
                tus usuarios:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Mostrar varios horarios en una sola vista</li>
                <li>Permitir reservas simultáneas en diferentes recursos</li>
                <li>Crear dependencias entre horarios relacionados</li>
                <li>Configurar reglas de disponibilidad compartida</li>
              </ul>

              <div className="bg-purple-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Ejemplo de combinación de horarios</h3>
                <p className="text-gray-700 mb-4">Un centro de servicios podría combinar los siguientes horarios:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Horario de profesionales:</strong> Mostrando la disponibilidad de cada profesional
                  </li>
                  <li>
                    <strong>Horario de salas:</strong> Indicando qué espacios están disponibles
                  </li>
                  <li>
                    <strong>Horario de equipamiento:</strong> Para reservar equipos específicos necesarios
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Al combinarlos, un usuario podría reservar simultáneamente un profesional, una sala y el equipamiento
                  necesario.
                </p>
              </div>

             
            </div>
          </div>
        </div>
      </div>

     
    </main>
  )
}


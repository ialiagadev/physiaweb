import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Code, Link2, Calendar, Share2, Globe, Database } from "lucide-react"

export default function IntegracionPage() {
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
            <span className="text-gray-900">Integración</span>
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
                <Code className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Integración</h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#integrar-horario"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Integrar un horario en tu web
                  </Link>
                </li>
                <li>
                  <Link
                    href="#enlaces-physia"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Enlaces a PHYSIA desde un sitio web
                  </Link>
                </li>
                <li>
                  <Link
                    href="#widget-reservas"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Colocar un widget de reservas en tu web
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sincronizar-calendarios"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Sincronizar con otros calendarios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#redes-sociales"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Añadir PHYSIA a tus redes sociales
                  </Link>
                </li>
                <li>
                  <Link
                    href="#videoconferencias"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Conectar a videoconferencias
                  </Link>
                </li>
                <li>
                  <Link
                    href="#iframe"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Poner PHYSIA dentro de un iframe
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cms-inicio-sesion"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    WordPress, Joomla! & Drupal inicio de sesión único
                  </Link>
                </li>
                <li>
                  <Link
                    href="#webhooks-api"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Utilizar webhooks y API
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

            <h1 id="integrar-horario" className="text-3xl font-bold text-gray-900 mb-6">
              Integrar un horario en tu sitio web
            </h1>

            <div className="prose prose-purple max-w-none">
              <p className="text-gray-700 mb-6">
                Una vez que estás contento con el aspecto de tu horario de citas, lo has probado y te has asegurado de
                que se comporta como esperabas cuando alguien visita tu sitio, estás preparado para revelarlo al mundo.
              </p>

              <div className="bg-purple-50 rounded-lg p-6 my-8 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/2">
                    <div className="bg-white rounded-lg shadow-md p-4 border border-purple-100">
                      <Image
                        src="/integracion.png"
                        alt="Opciones de integración"
                        width={400}
                        height={300}
                        className="rounded"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">Múltiples opciones de integración</h3>
                    <p className="text-gray-700">
                      PHYSIA ofrece varias formas de integrar tu sistema de reservas en tu sitio web, desde simples
                      enlaces hasta widgets interactivos.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20"></div>
              </div>

              <p className="text-gray-700 mb-6">
                Hay varias formas para permitir a gente hacer reservas en tu horario:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-semibold">
                    1
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-800">
                      Colocar un <strong>enlace</strong> o botón en tu sitio web que redirija a la gente a tu horario de
                      PHYSIA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-semibold">
                    2
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-800">
                      Colocar un <strong>widget</strong> en tu sitio web que permite a la gente quedarse en tu sitio web
                      mientras hace una reserva
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-semibold">
                    3
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-gray-800">
                      Colocar un <strong>marco</strong> en tu sitio web que incrusta una página entera de PHYSIA
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                La primera opción, utilizar un enlace o botón en tu propio sitio, es la forma más fácil. La segunda
                opción permite una mejor integración visual y ayuda a asegurar al visitante que el sistema de reservas
                es tuyo. El marco te permite mostrar la aplicación completa en una ventana en tu propio sitio. Sin
                embargo, algunos navegadores bloquean las cookies dentro de los marcos, lo que genera una experiencia de
                usuario menos óptima.
              </p>

              <h2 id="enlaces-physia" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Enlaces a PHYSIA desde un sitio web
              </h2>

              <p className="text-gray-700 mb-6">
                La forma más sencilla de integrar PHYSIA en tu sitio web es mediante enlaces directos. Puedes crear
                enlaces personalizados que:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Dirijan a tus usuarios directamente a tu horario de reservas</li>
                <li>Preseleccionen servicios o recursos específicos</li>
                <li>Incluyan información del usuario para agilizar el proceso de reserva</li>
                <li>Personalicen la experiencia según el origen del enlace</li>
              </ul>

              <div className="bg-gray-100 p-4 rounded-lg my-6 font-mono text-sm">
                &lt;a href="https://www.myphysia.com/horario/tuclinica"&gt;Reservar cita&lt;/a&gt;
              </div>

              <h2 id="widget-reservas" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Colocar un widget de reservas en tu web
              </h2>

              <p className="text-gray-700 mb-6">
                Los widgets de PHYSIA te permiten integrar la funcionalidad de reservas directamente en tu sitio web,
                sin que los usuarios tengan que salir de él:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Widget de calendario</h3>
                  <p className="text-gray-700 text-sm">
                    Muestra un calendario interactivo donde los usuarios pueden ver la disponibilidad y seleccionar
                    fechas para sus citas.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Link2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Widget de reserva rápida</h3>
                  <p className="text-gray-700 text-sm">
                    Permite a los usuarios reservar servicios específicos con unos pocos clics, sin necesidad de navegar
                    por todo el calendario.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg my-6 font-mono text-sm overflow-x-auto">
                &lt;script src="https://www.myphysia.com/widget.js?schedule=tuclinica"&gt;&lt;/script&gt;
                <br />
                &lt;div id="physia-widget"&gt;&lt;/div&gt;
              </div>

              <h2 id="sincronizar-calendarios" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Sincronizar con otros calendarios
              </h2>

              <p className="text-gray-700 mb-6">
                PHYSIA se puede sincronizar con otros sistemas de calendario populares para mantener toda tu agenda
                centralizada:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Sincronización bidireccional con Google Calendar</li>
                <li>Integración con Microsoft Outlook</li>
                <li>Compatibilidad con Apple Calendar mediante iCal</li>
                <li>Exportación e importación de eventos en formato estándar</li>
              </ul>

              <h2 id="redes-sociales" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Añadir PHYSIA a tus redes sociales
              </h2>

              <p className="text-gray-700 mb-6">
                Amplía tu alcance integrando PHYSIA con tus perfiles de redes sociales:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Share2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Botones de reserva en redes</h3>
                  <p className="text-gray-700 text-sm">
                    Añade botones de "Reservar ahora" a tus perfiles de Facebook, Instagram y otras plataformas
                    sociales.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Compartir disponibilidad</h3>
                  <p className="text-gray-700 text-sm">
                    Permite a tus seguidores ver tu disponibilidad y reservar directamente desde tus publicaciones en
                    redes sociales.
                  </p>
                </div>
              </div>

              <h2 id="videoconferencias" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Conectar a videoconferencias
              </h2>

              <p className="text-gray-700 mb-6">
                PHYSIA se integra con plataformas de videoconferencia para facilitar las consultas virtuales:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Integración con Zoom para crear reuniones automáticamente al reservar</li>
                <li>Compatibilidad con Google Meet para consultas virtuales</li>
                <li>Soporte para Microsoft Teams y otras plataformas populares</li>
                <li>Envío automático de enlaces de videoconferencia a los pacientes</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-yellow-800">
                  <strong>Consejo:</strong> La integración con videoconferencias es especialmente útil para clínicas que
                  ofrecen consultas virtuales o seguimientos remotos.
                </p>
              </div>

              <h2 id="iframe" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Poner PHYSIA dentro de un iframe
              </h2>

              <p className="text-gray-700 mb-6">
                Puedes incrustar PHYSIA completamente en tu sitio web mediante un iframe:
              </p>

              <div className="bg-gray-100 p-4 rounded-lg my-6 font-mono text-sm overflow-x-auto">
                &lt;iframe src="https://www.myphysia.com/horario/tuclinica" width="100%" height="600"
                frameborder="0"&gt;&lt;/iframe&gt;
              </div>

              <p className="text-gray-700 mb-6">
                Esta opción permite a los usuarios ver y utilizar todas las funcionalidades de PHYSIA sin salir de tu
                sitio web. Sin embargo, ten en cuenta que algunos navegadores tienen restricciones con las cookies en
                iframes, lo que podría afectar a la experiencia del usuario.
              </p>

              <h2 id="cms-inicio-sesion" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                WordPress, Joomla! & Drupal inicio de sesión único
              </h2>

              <p className="text-gray-700 mb-6">
                PHYSIA ofrece plugins y extensiones para los CMS más populares, permitiendo una integración perfecta:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">WordPress</h3>
                  <p className="text-gray-700 text-sm">
                    Plugin oficial con inicio de sesión único y shortcodes para incrustar calendarios
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Joomla!</h3>
                  <p className="text-gray-700 text-sm">
                    Extensión para integrar PHYSIA manteniendo la identidad visual de tu sitio
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Drupal</h3>
                  <p className="text-gray-700 text-sm">
                    Módulo que permite sincronización de usuarios y reservas desde tu sitio Drupal
                  </p>
                </div>
              </div>

              <h2 id="webhooks-api" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Utilizar webhooks y API
              </h2>

              <p className="text-gray-700 mb-6">
                Para integraciones más avanzadas, PHYSIA ofrece una API completa y sistema de webhooks:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">API REST</h3>
                  <p className="text-gray-700 text-sm">
                    API completa para crear, leer, actualizar y eliminar reservas, usuarios y configuraciones
                    programáticamente.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Webhooks</h3>
                  <p className="text-gray-700 text-sm">
                    Recibe notificaciones en tiempo real cuando se crean, modifican o cancelan reservas para integrar
                    con otros sistemas.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Ejemplo de integración completa</h3>
                <p className="text-gray-700 mb-4">
                  Una clínica podría implementar la siguiente estrategia de integración:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Sitio web WordPress:</strong> Utilizar el plugin oficial para mantener la coherencia visual
                  </li>
                  <li>
                    <strong>Sincronización con Google Calendar:</strong> Para que los profesionales vean sus citas en
                    sus calendarios personales
                  </li>
                  <li>
                    <strong>Integración con Zoom:</strong> Para consultas virtuales con generación automática de enlaces
                  </li>
                  <li>
                    <strong>Webhooks:</strong> Para sincronizar las reservas con el sistema de gestión de pacientes
                    existente
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Necesitas más ayuda?</h3>
                <p className="text-gray-700 mb-4">
                  Si tienes dudas específicas sobre cómo integrar PHYSIA con tu sitio web o con otros sistemas, nuestro
                  equipo de soporte está disponible para ayudarte.
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


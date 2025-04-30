import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, User, Users, Shield } from "lucide-react"

export default function ControlAccesoPage() {
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
            <span className="text-gray-900">Control de acceso</span>
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
                <User className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Control de acceso</h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#controlar-acceso"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Controlar el acceso a tus horarios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#tipos-usuario"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Tres tipos de usuario
                  </Link>
                </li>
                <li>
                  <Link
                    href="#quien-registrar"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    ¿Quién se puede registrar?
                  </Link>
                </li>
                <li>
                  <Link
                    href="#que-pueden-hacer"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    ¿Qué pueden hacer los usuarios?
                  </Link>
                </li>
                <li>
                  <Link
                    href="#grupos-usuarios"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Grupos de usuarios
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

            <h1 id="controlar-acceso" className="text-3xl font-bold text-gray-900 mb-6">
              Controlar el acceso a tus horarios
            </h1>

            <div className="prose prose-purple max-w-none">
              <p className="text-gray-700 mb-6">
                En la mayoría de los casos, lo preferible es restringir el acceso a tus horarios. De esta forma, nadie
                podrá verlos o realizar cambios. El sistema te da la opción de especificar quién puede utilizar el
                horario de citas, qué información puede ver y qué es lo que puede cambiar. Este modelo de acceso
                representa una de las partes más complejas del sistema PHYSIA. Por tanto, resulta aconsejable confirmar
                que funcione como se desea probando tu sistema de horarios desde el punto de vista de los usuarios.
              </p>

              <div className="bg-purple-50 rounded-lg p-6 my-8 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/2">
                    <div className="bg-white rounded-lg shadow-md p-4 border border-purple-100">
                      <Image
                        src="/controlAcceso.png"
                        alt="Pantalla de inicio de sesión"
                        width={400}
                        height={300}
                        className="rounded"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">Control de acceso personalizado</h3>
                    <p className="text-gray-700">
                      PHYSIA te permite configurar diferentes niveles de acceso para distintos tipos de usuarios, desde
                      administradores con control total hasta usuarios que solo pueden ver y reservar horarios
                      específicos.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20"></div>
              </div>

              <h2 id="tipos-usuario" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Tres tipos de usuario
              </h2>

              <p className="text-gray-700 mb-6">
                Cuando se trata de controlar el acceso a los horarios, el sistema PHYSIA distingue entre tres tipos
                diferentes de usuario: administrador, usuario y superusuario. Cada cuenta tiene un único administrador.
                Generalmente, es la misma persona que creó la cuenta y que ahora está utilizándola. El administrador
                tiene el control total de toda la cuenta, sistema de horarios y ajustes de usuario.
              </p>

              <p className="text-gray-700 mb-6">
                Los usuarios son las personas que realmente van a utilizar los sistemas de horarios dentro de tu cuenta.
                Por ejemplo, tus clientes, miembros de tu club o tus estudiantes. Puedes solicitar a los usuarios que se
                registren antes de reservar, o bien permitirles programar una cita sin necesidad de iniciar sesión. Si
                tu cuenta tiene múltiples horarios, los usuarios solo necesitan registrarse una vez para poder acceder a
                todos los horarios de tu cuenta.
              </p>

              <p className="text-gray-700 mb-6">
                Como administrador, puedes crear superusuarios y asignarles permisos adicionales, a fin de que puedan
                gestionar horarios y usuarios. Los superusuarios pueden tener diferentes niveles de acceso según lo que
                configures, desde solo ver las citas hasta poder modificar configuraciones específicas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Administrador</h3>
                  <p className="text-gray-700 text-sm">
                    Control total sobre la cuenta, horarios y usuarios. Puede configurar todos los aspectos del sistema.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <User className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Usuario</h3>
                  <p className="text-gray-700 text-sm">
                    Clientes que utilizan el sistema para reservar citas. Tienen acceso limitado según la configuración.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Superusuario</h3>
                  <p className="text-gray-700 text-sm">
                    Usuarios con permisos adicionales para gestionar horarios y otros usuarios. Ideal para personal o
                    colaboradores.
                  </p>
                </div>
              </div>

              <h2 id="quien-registrar" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                ¿Quién se puede registrar?
              </h2>

              <p className="text-gray-700 mb-6">
                Puedes controlar quién puede registrarse en tu sistema PHYSIA. Hay varias opciones disponibles:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Permitir que cualquier persona se registre</li>
                <li>Requerir aprobación del administrador para nuevos registros</li>
                <li>Limitar el registro a dominios de correo específicos</li>
                <li>Crear códigos de invitación para registro exclusivo</li>
                <li>Desactivar completamente el registro y crear manualmente las cuentas de usuario</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <p className="text-yellow-800">
                  <strong>Consejo:</strong> Si trabajas con información sensible, considera limitar el registro y crear
                  manualmente las cuentas de usuario para mantener un mayor control sobre quién accede a tu sistema.
                </p>
              </div>

              <h2 id="que-pueden-hacer" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                ¿Qué pueden hacer los usuarios en tu horario?
              </h2>

              <p className="text-gray-700 mb-6">
                Puedes configurar con precisión lo que cada tipo de usuario puede hacer en tu sistema de horarios:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Acción</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Usuario</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Superusuario</th>
                      <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Administrador</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b text-sm">Ver horarios disponibles</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b text-sm">Reservar citas</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b text-sm">Cancelar sus propias citas</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b text-sm">Ver citas de otros usuarios</td>
                      <td className="py-3 px-4 border-b text-sm">✗</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b text-sm">Modificar citas de otros</td>
                      <td className="py-3 px-4 border-b text-sm">✗</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b text-sm">Gestionar horarios</td>
                      <td className="py-3 px-4 border-b text-sm">✗</td>
                      <td className="py-3 px-4 border-b text-sm">Limitado</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b text-sm">Configurar el sistema</td>
                      <td className="py-3 px-4 border-b text-sm">✗</td>
                      <td className="py-3 px-4 border-b text-sm">✗</td>
                      <td className="py-3 px-4 border-b text-sm">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-6">
                Puedes personalizar estos permisos según las necesidades específicas de tu organización, permitiendo
                diferentes niveles de acceso para distintos superusuarios.
              </p>

              <h2 id="grupos-usuarios" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Grupos de usuarios
              </h2>

              <p className="text-gray-700 mb-6">
                PHYSIA te permite organizar a tus usuarios en grupos para facilitar la gestión de permisos y accesos.
                Esto es especialmente útil si tienes diferentes tipos de clientes o si trabajas con varios
                profesionales.
              </p>

              <p className="text-gray-700 mb-6">Con los grupos de usuarios puedes:</p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Asignar permisos específicos a grupos enteros</li>
                <li>Limitar el acceso a ciertos horarios según el grupo</li>
                <li>Ofrecer tarifas o servicios especiales a grupos determinados</li>
                <li>Enviar comunicaciones personalizadas a grupos específicos</li>
                <li>Generar informes y estadísticas por grupo</li>
              </ul>

              <div className="bg-purple-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Ejemplo de uso de grupos</h3>
                <p className="text-gray-700 mb-4">Una organización podría crear los siguientes grupos:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Clientes regulares:</strong> Con acceso a reservar cualquier tipo de servicio
                  </li>
                  <li>
                    <strong>Clientes nuevos:</strong> Limitados a reservar solo primeras consultas
                  </li>
                  <li>
                    <strong>Miembros VIP:</strong> Con acceso a horarios exclusivos y servicios premium
                  </li>
                  <li>
                    <strong>Profesionales:</strong> Con permisos de superusuario para gestionar sus propios horarios
                  </li>
                  <li>
                    <strong>Personal administrativo:</strong> Con permisos para gestionar citas pero no para modificar
                    configuraciones
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Necesitas más ayuda?</h3>
                <p className="text-gray-700 mb-4">
                  Si tienes dudas específicas sobre cómo configurar el control de acceso para tu organización, nuestro
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


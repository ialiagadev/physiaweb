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
            <span className="text-gray-900">Controlar el acceso</span>
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

          <h1 className="text-3xl font-bold text-gray-900 mb-6">Controlar el acceso a tus horarios</h1>

          <div className="prose prose-purple max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              En la mayoría de los casos, lo preferible es restringir el acceso a tus horarios. De esta forma, nadie
              podrá verlos o realizar cambios. El sistema te da la opción de especificar quién puede utilizar el horario
              de citas, qué información puede ver y qué es lo que puede cambiar. Este modelo de acceso representa una de
              las partes más complejas del sistema Physia. Por tanto, resulta aconsejable confirmar que funcione como
              se desea probando tu sistema de horarios desde el punto de vista de los usuarios.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Tres tipos de usuario</h2>

            <p className="text-gray-700 mb-4">
              Cuando se trata de controlar el acceso a los horarios, el sistema Physia distingue entre tres tipos
              diferentes de usuario: administrador, usuario y superusuario.
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-gray-700">
                <strong className="text-gray-900">Administrador:</strong> Cada cuenta tiene un único administrador.
                Generalmente, es la misma persona que creó la cuenta y que ahora está utilizándola. El administrador
                tiene el control total de toda la cuenta, sistema de horarios y ajustes de usuario.
              </li>
              <li className="text-gray-700">
                <strong className="text-gray-900">Usuarios:</strong> Son las personas que realmente van a utilizar los
                sistemas de horarios dentro de tu cuenta. Por ejemplo, tus clientes, miembros de tu club o tus
                estudiantes. Puedes solicitar a los usuarios que se registren antes de reservar, o bien permitirles
                programar una cita sin necesidad de iniciar sesión.
              </li>
              <li className="text-gray-700">
                <strong className="text-gray-900">Superusuarios:</strong> Como administrador, puedes crear superusuarios
                y proveerles de permisos adicionales, a fin de que puedan gestionar horarios y reservas. Por ejemplo,
                podrías asignar el estado de "superusuario" a un colega de trabajo para que este pueda concertar o
                cambiar citas en nombre de otra persona.
              </li>
            </ul>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-8">
              <p className="text-purple-700">
                <strong>Nota:</strong> Si tu cuenta tiene múltiples horarios, los usuarios solo necesitan registrarse
                una vez para poder acceder a todos los horarios de tu cuenta.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">¿Quién puede registrarse como usuario?</h2>

            <p className="text-gray-700 mb-6">
              Todos los ajustes para designar quién puede registrarse para utilizar tus horarios se encuentran bajo el
              Control de Acceso. Ten en cuenta que esas configuraciones solo están activas si requieres que los usuarios
              se registren. En caso de que permitas a los usuarios reservar sin iniciar sesión, es innecesario que las
              cambies.
            </p>

            <p className="text-gray-700 mb-6">
              En esta página también puedes configurar el proceso de registro: ¿qué pasos debe seguir un usuario cuando
              se registra? Fíjate también en que los usuarios están asociados con una cuenta. Una vez registrados para
              tu cuenta, por defecto tienen acceso a todos los horarios de tu cuenta.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              ¿Qué pueden hacer los usuarios en mi horario?
            </h2>

            <p className="text-gray-700 mb-6">
              Si quieres que los usuarios tengan que registrarse para un horario determinado, debes configurarlo en
              Configurar &gt; Acceso de ese horario. Aquí puedes definir lo que los usuarios (y superusuarios) pueden
              hacer en cuanto a añadir, actualizar o borrar reservas. Esta página también te permite definir qué
              información sobre las reservas será visible para los usuarios regulares. Como administrador, siempre
              podrás ver toda la información que necesites.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Grupos de usuarios</h2>

            <p className="text-gray-700 mb-6">
              Para tener un control más detallado sobre qué horarios se puedan acceder por usuarios diferentes, puedes
              utilizar grupos de usuarios. Por ejemplo, si tienes un horario que solo se debe poder acceder por los
              empleados del departamento de ventas, crea un grupo de usuarios "Dpto. Ventas" y asigna los empleados de
              ese departamento al grupo.
            </p>

            <p className="text-gray-700 mb-6">
              Después de esto configuras que solo el grupo "Dpto. Ventas" pueda acceder al horario en cuestión. Crear
              grupos de usuarios y asignar usuarios se puede hacer en Gestión de Usuarios. Controlar el acceso a cada
              horario se hace en la pestaña Configurar{'>'}Acceso del horario.
            </p>

            
      
          </div>
        </div>
      </div>
    </main>
  )
}

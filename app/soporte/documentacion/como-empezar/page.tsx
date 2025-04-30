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

          <h1 className="text-3xl font-bold text-gray-900 mb-6">Empezar con PHYSIA</h1>

          <div className="prose prose-purple max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Configurar un horario de PHYSIA es bastante sencillo. Realmente no hay un orden fijo que debas seguir para
              configurar las diferentes partes de tu horario, pero una buena forma de empezar es decidir primero qué vas
              a necesitar a partir de las siguientes 5 preguntas:
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Tipos de horarios de reservas</h2>

            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li className="text-gray-700">
                ¿Cuál de los tres tipos de horarios es más adecuado para tus necesidades?
              </li>
              <li className="text-gray-700">
                ¿Quién debería poder ver y/o utilizar tu horario? ¿Qué pueden y qué no pueden ver y hacer?
              </li>
              <li className="text-gray-700">
                ¿Cómo debería ser el proceso de reserva para los usuarios? ¿Cuál debería ser el comportamiento de tu
                horario?
              </li>
              <li className="text-gray-700">¿Deseas cobrar a los usuarios al hacer una reserva?</li>
              <li className="text-gray-700">
                ¿Cuál debe ser la apariencia visual de tu horario? ¿Dirigirás directamente a las personas a este sitio
                web, o quieres integrarlo en un marco dentro de tu sitio web?
              </li>
            </ol>

            <p className="text-gray-700 mb-6">
              Una vez que tengas claras estas preguntas, es hora de empezar a configurar tu horario. Lo mejor para
              hacerlo es seguir un ciclo de "construcción y prueba":
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 my-8">
              <p className="text-purple-700">
                <strong>Consejo:</strong> Sigue estos pasos para configurar tu horario de manera efectiva.
              </p>
            </div>

            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li className="text-gray-700">
                <strong className="text-gray-900">Configuración básica:</strong> Utilizando el Asistente de Nuevo
                Horario, configuras un horario básico
              </li>
              <li className="text-gray-700">
                <strong className="text-gray-900">Prueba:</strong> Pruébalo para ver si funciona como esperas
              </li>
              <li className="text-gray-700">
                <strong className="text-gray-900">Ajustes:</strong> Si no funciona de la manera en la que quieres, haz
                cambios en la configuración del horario y vuelve al paso 2.
              </li>
            </ol>

            <p className="text-gray-700 mb-6">
              Una vez que te sientas a gusto con la forma en que funciona tu horario y su estilo, ya estarás preparado
              para comunicar el URL a tus usuarios, o integrarlo en tu propio sitio web.
            </p>

            

           
          </div>
        </div>
      </div>
    </main>
  )
}

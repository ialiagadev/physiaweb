import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Reembolso | PHYSIA",
  description: "Política de reembolso de PHYSIA. Conoce nuestro compromiso y transparencia con los clientes.",
}

export default function PoliticaReembolsoPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center mb-8 text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="rounded-lg p-6 sm:p-10 border border-gray-200 shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-black text-center">
            Política de Reembolso de PHYSIA: Compromiso y Transparencia
          </h1>

          <div className="space-y-6 text-black">
            <p className="text-lg">
              En el improbable caso de que PHYSIA no lance su aplicación según lo prometido, nos comprometemos a
              garantizar la tranquilidad y confianza de nuestros clientes. A continuación detallamos nuestra política de
              reembolso para garantizar la máxima satisfacción y seguridad en su inversión.
            </p>

            <div className="bg-gray-100 rounded-lg p-6 space-y-4">
              <div className="flex">
                <span className="flex-shrink-0 font-bold mr-2">1.</span>
                <p>
                  <span className="font-semibold">Plazo de Reembolso:</span> Los clientes que hayan adquirido alguna de
                  nuestras ofertas de preventa tendrán derecho a solicitar un reembolso completo dentro de los 30 días
                  siguientes al anuncio oficial del cese del desarrollo de la aplicación.
                </p>
              </div>

              <div className="flex">
                <span className="flex-shrink-0 font-bold mr-2">2.</span>
                <p>
                  <span className="font-semibold">Proceso de Reembolso:</span> Para solicitar un reembolso, el cliente
                  deberá ponerse en contacto con nuestro equipo de soporte a través del correo electrónico
                  proporcionado, aportando todos los datos necesarios para confirmar la compra.
                </p>
              </div>

              <div className="flex">
                <span className="flex-shrink-0 font-bold mr-2">3.</span>
                <p>
                  <span className="font-semibold">Tiempo de Procesamiento:</span> Una vez recibida y confirmada la
                  solicitud, el reembolso se procesará en un plazo máximo de 60 días laborables.
                </p>
              </div>

              <div className="flex">
                <span className="flex-shrink-0 font-bold mr-2">4.</span>
                <p>
                  <span className="font-semibold">Método de Reembolso:</span> El reembolso se realizará utilizando el
                  mismo método de pago que se usó para realizar la compra inicial.
                </p>
              </div>

              <div className="flex">
                <span className="flex-shrink-0 font-bold mr-2">5.</span>
                <p>
                  <span className="font-semibold">Confirmación:</span> Una vez procesado el reembolso, se enviará una
                  confirmación por correo electrónico al cliente.
                </p>
              </div>
            </div>

            <p>
              Estamos comprometidos con la transparencia y la satisfacción del cliente, y esta política de reembolso
              está diseñada para garantizar que su inversión está segura con nosotros.
            </p>

            <div className="bg-gray-100 rounded-lg p-6">
              <p>
                Para cualquier consulta adicional sobre esta política, no duden en contactar con nuestro equipo de
                soporte:{" "}
                <a href="mailto:info@myphysia.com" className="text-blue-600 hover:text-blue-800 underline">
                  info@myphysia.com
                </a>
              </p>
            </div>

            <p className="text-lg font-medium">
              Esperamos que esta política demuestre nuestro compromiso y dedicación hacia un servicio de alta calidad y
              la satisfacción del cliente.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}


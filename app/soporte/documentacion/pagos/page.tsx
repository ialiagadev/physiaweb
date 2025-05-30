import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CreditCard, DollarSign, Receipt, Wallet, Tag, Store } from "lucide-react"

export default function PagosPage() {
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
            <span className="text-gray-900">Pagos</span>
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
                <CreditCard className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">Pagos</h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#anadir-pagos"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Añadir pagos a tu horario
                  </Link>
                </li>
                <li>
                  <Link
                    href="#presentar-precios"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Presentar precios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#trabajar-pagos-online"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Trabajar con pagos online
                  </Link>
                </li>
                <li>
                  <Link
                    href="#facturacion-pagos-manuales"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Facturación y pagos manuales
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sistema-creditos"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Utilizar el sistema de créditos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#descuentos-promociones"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Configurar descuentos y promociones
                  </Link>
                </li>
                <li>
                  <Link
                    href="#proveedores-pago"
                    className="block py-2 px-3 rounded-md text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  >
                    Proveedores de pago
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

            <h1 id="anadir-pagos" className="text-3xl font-bold text-gray-900 mb-6">
              Añadir pagos a tu horario
            </h1>

            <div className="prose prose-purple max-w-none">
              <p className="text-gray-700 mb-6">
                Si los servicios o recursos que ofreces requieren pago, puedes mostrar el precio en el momento de la
                reserva. Quizás también te interese manejar las transacciones de pago como parte del proceso de reserva.
                Physia te ofrece una amplia gama de opciones de pago, desde la presentación de los precios de los
                servicios y recursos a la recogida de datos de tarjetas de crédito, la gestión de pagos o utilizar
                nuestro sistema de créditos. Además de estas opciones de pago, el sistema también te permite ofrecer
                varios tipos de descuentos y ofertas de promoción a tus clientes.
              </p>

              <div className="bg-purple-50 rounded-lg p-6 my-8 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="md:w-1/2">
                    <div className="bg-white rounded-lg shadow-md p-4 border border-purple-100">
                      <Image
                        src="/pagos.png"
                        alt="Configuración de pagos"
                        width={400}
                        height={300}
                        className="rounded"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">Sistema de pagos integrado</h3>
                    <p className="text-gray-700">
                     Physia te ofrece un sistema de pagos completo e integrado que te permite gestionar todas las
                      transacciones relacionadas con tus servicios.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20"></div>
              </div>

              <h2 id="presentar-precios" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Presentar precios
              </h2>

              <p className="text-gray-700 mb-6">
                Ya sea que quieras exigir el pago inmediatamente después de la reserva o recibir el pago en una etapa
                posterior, puedes mostrar precios para tus servicios y recursos. Puedes configurar tu horario para
                presentar precios fijos o calcular precios basados en un conjunto de reglas de precios, o criterios
                relacionados con la reserva, como la duración de la reserva y la hora del día.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Precios fijos</h3>
                  <p className="text-gray-700 text-sm">
                    Establece precios fijos para cada servicio o recurso que ofreces, facilitando la comprensión para
                    tus clientes.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Receipt className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Precios dinámicos</h3>
                  <p className="text-gray-700 text-sm">
                    Configura reglas de precios basadas en factores como duración, hora del día, día de la semana o
                    características específicas del servicio.
                  </p>
                </div>
              </div>

             

              <h2 id="trabajar-pagos-online" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Trabajar con pagos online
              </h2>

              <p className="text-gray-700 mb-6">
                Si exiges el pago de tus clientes al realizar la reserva, puedes utilizar nuestro sistema de pagos
                online integrado. Puedes elegir entre PayPal, Stripe y varios otros proveedores de pago, o incluso una
                combinación de varios proveedores.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Pagos con tarjeta</h3>
                  <p className="text-gray-700 text-sm">
                    Acepta pagos con tarjeta de crédito o débito a través de proveedores seguros y confiables.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Store className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Múltiples proveedores</h3>
                  <p className="text-gray-700 text-sm">
                    Integra con PayPal, Stripe y otros proveedores populares para ofrecer opciones flexibles a tus
                    clientes.
                  </p>
                </div>
              </div>

              <h2 id="facturacion-pagos-manuales" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Trabajar con facturación o pagos manuales
              </h2>

              <p className="text-gray-700 mb-6">
                Si deseas cobrar el pago de una cita, pero no en el momento de la reserva, puedes utilizar la
                facturación o gestionar el pago tú mismo. Puedes enviar una factura a través de un proveedor de
                facturación en el momento de la reserva o después de que la cita haya tenido lugar. Si eliges manejar el
                pago tú mismo, puedes mostrar un mensaje en el momento de la reserva que explica el proceso al usuario.
                Podrías, por ejemplo, decirle al usuario que envíe un cheque o que haga una transferencia bancaria.
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>Generar facturas automáticamente</li>
                <li>Registrar pagos manuales</li>
                <li>Enviar recordatorios de pago</li>
                <li>Gestionar estados de pago (pendiente, completado, reembolsado)</li>
                <li>Exportar datos de facturación a sistemas contables</li>
              </ul>

              <h2 id="sistema-creditos" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Trabajar con un sistema de créditos
              </h2>

              <p className="text-gray-700 mb-6">
                Como alternativa, puedes dar a tus clientes la opción de pagar con créditos que reciban de ti o que
                compraron en tu tienda web en Physia. Dado que los créditos se muestran como moneda, puedes dejar que
                los clientes pueden utilizar su crédito en combinación con un pago extra online.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Wallet className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Paquetes de créditos</h3>
                  <p className="text-gray-700 text-sm">
                    Crea paquetes de créditos con diferentes valores y precios, incentivando la compra por volumen.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Receipt className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Gestión de saldo</h3>
                  <p className="text-gray-700 text-sm">
                    Gestiona el saldo de créditos de tus clientes, con opciones para añadir, restar o transferir
                    créditos.
                  </p>
                </div>
              </div>

              <h2 id="descuentos-promociones" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Configurar descuentos y promociones
              </h2>

              <p className="text-gray-700 mb-6">
                Hay varias maneras en las que puedes ofrecer descuentos y promociones. Estos abarcarían desde descuentos
                únicos para clientes individuales hasta aceptar cupones como parte de una campaña promocional.
                Utilizando reglas de precios, puedes implementar una amplia gama de descuentos basados en el tiempo,
                como descuentos estacionales o para el fin de semana. Además, ofrecer paquetes de créditos a precios
                rebajados puede ser una manera efectiva de generar lealtad del cliente y conseguir que los clientes
                vuelvan en el futuro.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Tag className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Códigos promocionales</h3>
                  <p className="text-gray-700 text-sm">
                    Crea códigos de descuento para campañas específicas, con control sobre su validez temporal y
                    condiciones de uso.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Descuentos automáticos</h3>
                  <p className="text-gray-700 text-sm">
                    Configura descuentos automáticos basados en criterios como volumen de reservas, fidelidad del
                    cliente o temporada.
                  </p>
                </div>
              </div>

              <h2 id="proveedores-pago" className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
                Proveedores de pago
              </h2>

              <p className="text-gray-700 mb-6">
                Physia se integra con múltiples proveedores de pago para ofrecerte flexibilidad:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>
                  <strong>PayPal:</strong> Solución global con amplia aceptación y protección para compradores y
                  vendedores
                </li>
                <li>
                  <strong>Stripe:</strong> Procesamiento de pagos con tarjeta simplificado con tarifas transparentes
                </li>
                <li>
                  <strong>Redsys:</strong> Popular en España, ideal para negocios locales
                </li>
                <li>
                  <strong>Mollie:</strong> Solución europea con múltiples métodos de pago
                </li>
                <li>
                  <strong>Otros proveedores:</strong> Posibilidad de integrar con otros proveedores según necesidades
                  específicas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

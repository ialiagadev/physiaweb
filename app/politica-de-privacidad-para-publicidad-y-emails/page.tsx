import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad | PHYSIA",
  description:
    "Política de Privacidad para Correos Electrónicos y Publicidad de PHYSIA. Información sobre cómo manejamos tus datos personales.",
}

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center mb-8 text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a inicio
        </Link>

        <div className="rounded-lg p-6 sm:p-8 shadow-md border border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-black mb-2">
            Política de Privacidad para Correos Electrónicos y Publicidad de PHYSIA
          </h1>

          <p className="text-center text-gray-600 mb-8">Última actualización: 23/12/2023</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Introducción</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              En PHYSIA, comprendemos profundamente la importancia de la privacidad y la confianza. Nos comprometemos a
              mantener la confidencialidad y protección de la información personal de nuestros suscriptores, usuarios y
              clientes. Esta política de privacidad detalla con precisión y transparencia las prácticas que
              implementamos en la recopilación, uso, y protección de la información personal que obtenemos a través de
              nuestros servicios de suscripción por correo electrónico y actividades de publicidad digital.
            </p>
          </section>

          <section className="mb-8 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">Interacción con Nuestro Chatbot de Asistencia</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Reconociendo la creciente relevancia de las interacciones automatizadas, en PHYSIA, utilizamos un chatbot
              de asistencia avanzado para mejorar tu experiencia de usuario. Durante tu interacción con nuestro chatbot,
              podríamos solicitar tu dirección de correo electrónico para brindarte una comunicación más personalizada y
              directa. Al proporcionar tu dirección de correo electrónico en este contexto, consientes explícitamente en
              recibir comunicaciones de nuestra parte. Estas pueden incluir información relacionada con tus consultas,
              así como actualizaciones periódicas sobre nuestros servicios, productos, y avances en la tecnología de
              PHYSIA. Nuestro objetivo es asegurar que esta información sea altamente relevante y útil, ajustándose a
              tus necesidades y áreas de interés. Recuerda que tienes el control total sobre estas comunicaciones y
              puedes optar por no recibirlas en cualquier momento, simplemente enviando una solicitud a nuestra
              dirección de correo electrónico: <span className="font-semibold">info@myphysia.com</span>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Recopilación de Información</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Nuestro compromiso con tu privacidad se extiende a cómo manejamos la información personal que recopilamos.
              Al suscribirte a nuestros correos electrónicos o al interactuar con nuestras campañas publicitarias,
              recabamos datos como tu dirección de correo electrónico, nombre, apellidos y número de teléfono. Esta
              recopilación de datos se lleva a cabo con el único propósito de mejorar tu experiencia con PHYSIA y para
              proporcionarte información y servicios personalizados. Nos esforzamos por asegurar que cada interacción
              con nosotros sea segura, informativa y enriquecedora.
            </p>
          </section>

          <section className="mb-8 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">Uso de la Información</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              En PHYSIA, la información recopilada se utiliza de manera estratégica y respetuosa. Las principales
              aplicaciones de esta información incluyen:
            </p>
            <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
              <li>
                Enviar actualizaciones regulares sobre nuestros productos y servicios, asegurando que estés al tanto de
                lo último en tecnología y avances en el campo de la salud digital.
              </li>
              <li>
                Proporcionar información publicitaria y promocional específicamente relacionada con tu especialidad
                médica, asegurando que los contenidos sean altamente pertinentes y beneficiosos para tu práctica
                profesional.
              </li>
              <li>
                Comunicar actualizaciones significativas y noticias de interés sobre el desarrollo y evolución de
                PHYSIA, manteniéndote informado sobre cómo nuestras innovaciones pueden impactar y mejorar tu
                experiencia.
              </li>
              <li>
                Mejorar continuamente nuestros productos y servicios, adaptándolos no solo a tus necesidades actuales
                sino también anticipando tus futuras exigencias en el ámbito de la salud digital.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Seguridad de la Información</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              La seguridad de tu información personal es una prioridad absoluta para PHYSIA. Implementamos medidas de
              seguridad de vanguardia para proteger tus datos contra cualquier acceso no autorizado, alteración
              indebida, divulgación o destrucción. Nuestros protocolos de seguridad están en constante evolución para
              mantenerse al día con las mejores prácticas y tecnologías emergentes en la protección de datos.
            </p>
          </section>

          <section className="mb-8 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">Opciones de Suscripción</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Creemos firmemente en el derecho de nuestros usuarios a tener el control total sobre la información que
              reciben. Por eso, ofrecemos la opción de cancelar la suscripción a nuestros correos electrónicos en
              cualquier momento. Para ello, simplemente haz clic en el enlace «Cancelar suscripción» situado en la parte
              inferior de cada correo electrónico que enviamos. Este proceso es simple y respetuoso, asegurando que tus
              preferencias sean respetadas sin demora.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Cambios a Esta Política</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              PHYSIA se reserva el derecho de modificar esta política de privacidad en cualquier momento. Los cambios
              serán efectivos inmediatamente después de su publicación en nuestro sitio web. Para garantizar que estés
              siempre informado sobre cómo protegemos tu información, te notificaremos sobre cualquier cambio
              significativo a través de un correo electrónico enviado a la dirección que nos proporcionaste.
            </p>
          </section>

          <section className="mb-4 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">Contáctanos</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Tu privacidad y seguridad son de suma importancia para nosotros. Si tienes alguna pregunta o preocupación
              sobre esta política de privacidad o cómo manejamos tu información personal, no dudes en ponerte en
              contacto con nosotros a través de <span className="font-semibold">info@myphysia.com</span>. Estamos
              comprometidos a brindarte respuestas claras y asistencia eficiente en todo lo relacionado con la
              protección de tus datos.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


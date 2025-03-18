import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad | PHYSIA",
  description:
    "Política de Privacidad de PHYSIA. Información detallada sobre cómo manejamos y protegemos tus datos personales y de salud.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center mb-8 text-gray-600 hover:text-black transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a inicio
        </Link>

        <div className="rounded-lg p-6 sm:p-8 shadow-md border border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-black mb-6">Política de Privacidad</h1>

          <div className="bg-gray-100 p-4 rounded-lg mb-8 text-black font-medium">
            <p className="text-center">
              POR FAVOR, LEA ATENTAMENTE LA SIGUIENTE DECLARACIÓN DE PRIVACIDAD ANTES DE UTILIZAR LOS SERVICIOS DE
              PHYSIA.
            </p>
          </div>

          <section className="mb-8">
            <p className="text-gray-800 mb-4 leading-relaxed">
              Bienvenido a PHYSIA, su asistente virtual para información general de salud. Queremos que comprenda que la
              información y los consejos proporcionados aquí son exclusivamente para fines educativos e informativos, y
              no deben interpretarse como asesoramiento médico profesional, diagnóstico o tratamiento en ningún caso.
              Nuestra plataforma utiliza inteligencia artificial para comparar sus síntomas reportados con un conjunto
              de diagnósticos conocidos y para ofrecer consejos generales relacionados con el bienestar general, sin
              sustituir en ningún caso el asesoramiento de profesionales de la salud. Tenga en cuenta que tanto los
              posibles diagnósticos como los consejos ofrecidos u otros servicios de PHYSIA son solo directrices y no
              sustituyen el juicio profesional de un médico cualificado. Para un diagnóstico y tratamiento precisos, y
              para consejos de salud adaptados a su situación, consulte siempre con un profesional médico cualificado.
              Al utilizar este servicio, usted acepta asumir toda la responsabilidad por cualquier acción que tome
              basada en la información y los consejos proporcionados y reconoce que ha leído y comprendido este descargo
              de responsabilidad.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed">
              Para utilizar nuestros servicios, debe tener al menos 18 años de edad.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed">
              PHYSIA AI SOFTWARE SOLUTIONS, S.L., (en adelante, "PHYSIA") actúa como responsable de los datos personales
              y de salud de acuerdo con el Reglamento (UE) 2016/679 de Protección de Datos (en adelante, «RGPD») y la
              Ley Orgánica 3/2018. Nuestro objetivo es que los usuarios se sientan seguros al interactuar con nuestras
              plataformas.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed">
              Esta Declaración de Privacidad, junto con nuestras Condiciones Generales disponibles en
              www.myphysia.com/terms-and-conditions, nuestra Política de Cookies en www.myphysia.com/cookie-policy y los
              documentos mencionados en ellos, establecen la base para el tratamiento de todos los datos personales que
              recopilamos de usted o que comunicamos a terceros.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed">
              Al acceder y utilizar PHYSIA a través de nuestro sitio web www.myphysia.com y demás productos y servicios,
              le solicitaremos su confirmación y, en ciertos casos, su consentimiento para los procesos descritos a
              continuación.
            </p>
          </section>

          <section className="mb-8 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">Descargo de Responsabilidad Médica de PHYSIA</h2>
            <p className="text-black font-medium mb-4">Importante: Por favor, lea cuidadosamente.</p>

            <p className="text-gray-800 mb-4 leading-relaxed">
              PHYSIA es una herramienta de asistencia virtual diseñada para proporcionar información general de salud y
              consejos educativos. Es importante que comprenda que la información y los consejos ofrecidos a través de
              PHYSIA se proporcionan únicamente con fines educativos e informativos. No deben interpretarse como
              asesoramiento médico profesional, diagnóstico, tratamiento, o como un sustituto de la consulta médica
              profesional.
            </p>

            <h3 className="text-xl font-semibold text-black mb-2 mt-4">Limitaciones de PHYSIA:</h3>
            <p className="text-gray-800 mb-4 leading-relaxed">
              PHYSIA no está calificado para proporcionar diagnósticos médicos o tratamientos. La información
              proporcionada por PHYSIA se basa en una combinación de sus entradas y datos generales de salud, y no debe
              considerarse como un consejo médico personalizado ni como sustitución del mismo. Las recomendaciones de
              PHYSIA son generalizadas y podrían no ser aplicables a todas las personas o condiciones de salud. Antes de
              seguir las directrices proporcionadas, el usuario debe asegurarse de que no representan un riesgo para su
              salud y buscar la opinión de un profesional antes de hacer uso de las recomendaciones.
            </p>

            <h3 className="text-xl font-semibold text-black mb-2 mt-4">Recomendaciones para los Usuarios:</h3>
            <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
              <li>
                Siempre busque el consejo de su médico u otro profesional de la salud cualificado con cualquier pregunta
                que pueda tener respecto a una condición médica.
              </li>
              <li>
                Nunca ignore el consejo médico profesional o se demore en buscarlo debido a algo que haya leído o
                interpretado a través de PHYSIA.
              </li>
              <li>
                En caso de una emergencia médica, contacte inmediatamente a los servicios de emergencia o acuda al
                centro médico más cercano.
              </li>
            </ul>

            <p className="text-gray-800 mt-4 leading-relaxed">
              Al utilizar PHYSIA o los servicios derivados de PHYSIA, usted reconoce y acepta que la plataforma no
              proporciona consejos médicos, diagnósticos o tratamientos, y que su uso no crea una relación
              médico-paciente. La confianza en cualquier información proporcionada por PHYSIA es bajo propio riesgo del
              usuario.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Quiénes Somos</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Esta Declaración de Privacidad se aplica a todos los datos personales tratados por PHYSIA AI SOFTWARE
              SOLUTIONS, S.L., responsable de la protección de datos de acuerdo con el artículo 4, apartado 7 del RGPD.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed">
              Para cualquier consulta relacionada con la privacidad, puede dirigirse a nuestro responsable de protección
              de datos a través del correo electrónico <span className="font-semibold">info@myphysia.com</span>.
            </p>
          </section>

          <section className="mb-8 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Descripción General de la Protección de Datos en Relación con Nuestros Servicios
            </h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Antes de acceder a nuestros servicios, debe confirmar que ha leído esta Declaración de Privacidad y dar su
              consentimiento para que PHYSIA procese sus datos personales de salud para su valoración y asesoramiento
              sanitario. A continuación, se describe cómo protegemos sus datos:
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed">
              Nuestra política de cookies y pautas de seguimiento (apartado 4), Dónde almacenamos sus datos personales
              (apartado 5), Requisitos para la divulgación de sus datos personales (apartado 6), Conservación de los
              datos (apartado 7), Sus derechos como interesado (apartado 8), Sus derechos específicos como residente de
              California (EE. UU.) (apartado 9), Directrices para modificaciones en esta Declaración (apartado 10).
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed">
              <strong>Datos que nos proporciona:</strong> Recopilamos y procesamos datos personales que nos facilita al:
            </p>

            <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
              <li>Registrarse en nuestro sitio web</li>
              <li>Utilizar nuestros servicios</li>
              <li>Comunicarse con nosotros por cualquier medio</li>
              <li>Participar en encuestas o investigaciones</li>
            </ul>

            <p className="text-gray-800 mt-4 mb-4 leading-relaxed">
              <strong>Datos que recopilamos automáticamente:</strong> Cada vez que visita o utiliza nuestros servicios,
              recopilamos ciertos datos automáticamente. Estos datos se utilizan para mejorar nuestros servicios, sin
              emplearse para identificarlo personalmente.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed">
              Nuestra página web puede contener enlaces a sitios web de terceros. Si sigue un enlace a dichas páginas,
              tenga en cuenta que tienen sus propias políticas de privacidad y que no asumimos ninguna responsabilidad o
              garantía respecto a estas políticas o al tratamiento de sus datos personales por parte de dichos terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Qué datos personales recopilamos y procesamos, para qué finalidades y durante cuánto tiempo
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-2">3.1 Al utilizar nuestra plataforma web</h3>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
                <li>
                  <strong>Tipo de datos:</strong> Dirección IP del dispositivo, fecha y hora del acceso, actividad en la
                  plataforma, dispositivo usado.
                </li>
                <li>
                  <strong>Finalidad del tratamiento:</strong> Garantizar una operación fluida y segura de nuestra
                  aplicación, analizar la estabilidad del sistema y facilitar actualizaciones pertinentes.
                </li>
                <li>
                  <strong>Base jurídica:</strong> Intereses legítimos (art. 6, ap.1, f) RGPD).
                </li>
                <li>
                  <strong>Plazo del almacenamiento:</strong> Eliminamos sus datos tras 30 días si no se detectan
                  problemas de seguridad relevantes.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-2">3.2 Al crear una cuenta de prueba en PHYSIA</h3>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
                <li>
                  <strong>Tipos de datos:</strong> Correo electrónico, nombre, apellidos, fecha de nacimiento, número de
                  teléfono.
                </li>
                <li>
                  <strong>Finalidad del tratamiento:</strong> Facilitar el acceso a nuestro producto médico y
                  personalizar su experiencia.
                </li>
                <li>
                  <strong>Base jurídica:</strong> Consentimiento (art. 9, ap. 2, a) RGPD).
                </li>
                <li>
                  <strong>Duración del almacenamiento:</strong> Conservamos los datos mientras la cuenta esté activa o
                  hasta que se solicite su eliminación.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-2">
                3.3 Registro a través de instituciones médicas colaboradoras
              </h3>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
                <li>
                  <strong>Tipos de datos:</strong> ID institucional, información compartida por la institución médica.
                </li>
                <li>
                  <strong>Finalidad del tratamiento:</strong> Facilitar la integración con EMRs y otras herramientas
                  médicas.
                </li>
                <li>
                  <strong>Base jurídica:</strong> Intereses legítimos (art. 6, ap.1, f) RGPD).
                </li>
                <li>
                  <strong>Duración del almacenamiento:</strong> Limitado al plazo establecido en el apartado 3.2.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-2">
                3.4 Uso del motor de análisis y recomendaciones de PHYSIA
              </h3>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
                <li>
                  <strong>Tipos de datos:</strong> Síntomas, resultados de pruebas, diagnósticos anteriores.
                </li>
                <li>
                  <strong>Finalidad del tratamiento:</strong> Proveer análisis clínico y recomendaciones personalizadas.
                </li>
                <li>
                  <strong>Base jurídica:</strong> Consentimiento (art. 9, ap. 2, a) RGPD).
                </li>
                <li>
                  <strong>Duración del almacenamiento:</strong> Limitado al plazo establecido en el apartado 3.2.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-2">
                3.5 Uso de datos para investigación y análisis estadístico
              </h3>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
                <li>
                  <strong>Tipos de datos:</strong> ID de la cuenta, datos médicos, edad, género, ubicación geográfica,
                  resultados de análisis.
                </li>
                <li>
                  <strong>Finalidad del tratamiento:</strong> Generar estadísticas que puedan contribuir al avance de la
                  medicina.
                </li>
                <li>
                  <strong>Base jurídica:</strong> Interés legítimo y fines estadísticos (Art. 9, 2, j) RGPD).
                </li>
                <li>
                  <strong>Duración del almacenamiento:</strong> Según el tratamiento previsto o hasta que el usuario
                  retire su consentimiento.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-2">3.6 Uso de datos para la salud pública</h3>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
                <li>
                  <strong>Tipos de datos:</strong> ID de la cuenta, perfil médico, datos clínicos, factores de riesgo,
                  ubicación.
                </li>
                <li>
                  <strong>Finalidad del tratamiento:</strong> Contribuir al interés público en el sector de la sanidad,
                  como la identificación de brotes de enfermedades.
                </li>
                <li>
                  <strong>Base jurídica:</strong> Interés público (Art. 9, 2, i) RGPD).
                </li>
                <li>
                  <strong>Duración del almacenamiento:</strong> Según lo estipulado en la duración del tratamiento
                  previsto.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-2">
                3.7 Retroalimentación y mejoras basadas en datos
              </h3>
              <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
                <li>
                  <strong>Tipos de datos:</strong> Encuestas de satisfacción, feedback proporcionado a través de la
                  plataforma.
                </li>
                <li>
                  <strong>Finalidad del tratamiento:</strong> Mejorar la plataforma y adaptarla a las necesidades de los
                  usuarios.
                </li>
                <li>
                  <strong>Base jurídica:</strong> Intereses legítimos (art. 6, ap. 1, f) RGPD).
                </li>
                <li>
                  <strong>Duración del almacenamiento:</strong> Hasta que la retroalimentación se haya evaluado y
                  aplicado, o hasta un máximo de 24 meses.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">Derechos del Usuario</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Conforme al RGPD, usted tiene varios derechos con respecto a sus datos personales:
            </p>

            <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
              <li>
                <strong>Derecho de acceso:</strong> Solicitar información sobre sus datos personales tratados por
                PHYSIA.
              </li>
              <li>
                <strong>Derecho de rectificación:</strong> Corregir datos inexactos o incompletos.
              </li>
              <li>
                <strong>Derecho de supresión:</strong> Solicitar la eliminación de sus datos personales cuando ya no
                sean necesarios.
              </li>
              <li>
                <strong>Derecho de limitación:</strong> Solicitar que sus datos sean tratados únicamente para ciertas
                finalidades.
              </li>
              <li>
                <strong>Derecho a la portabilidad:</strong> Solicitar sus datos en un formato estructurado para su
                transmisión a otro responsable.
              </li>
              <li>
                <strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos, especialmente en casos de
                marketing directo.
              </li>
              <li>
                <strong>Derecho a retirar el consentimiento:</strong> Cuando el tratamiento se base en el
                consentimiento, puede retirarlo en cualquier momento.
              </li>
            </ul>

            <p className="text-gray-800 mt-4 leading-relaxed">
              Si solicita la supresión de sus datos personales o cesa su procesamiento, esto podría afectar su acceso a
              los servicios de PHYSIA.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Seguridad y Protección de los Datos</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              PHYSIA aplica medidas de seguridad para proteger los datos personales de los usuarios contra accesos no
              autorizados y alteraciones, en conformidad con la normativa aplicable.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed">
              PHYSIA implementa diversas medidas técnicas y organizativas para garantizar la protección de los datos
              personales, entre ellas:
            </p>

            <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
              <li>
                <strong>Cifrado de datos en tránsito:</strong> Toda la información transmitida entre el navegador del
                usuario y nuestros servidores se cifra mediante el protocolo TLS (Transport Layer Security), asegurando
                la confidencialidad y seguridad de los datos personales.
              </li>
              <li>
                <strong>Control de acceso:</strong> Solo el personal autorizado puede acceder a los datos personales, y
                únicamente cuando sea necesario para el cumplimiento de sus funciones específicas en la plataforma.
              </li>
              <li>
                <strong>Almacenamiento en servidores seguros:</strong> Los datos se almacenan en servidores
                especializados y seguros, localizados en centros de datos que cumplen con los estándares de protección
                de datos médicos, bajo estrictos controles de acceso y seguridad.
              </li>
              <li>
                <strong>Auditorías y revisiones de seguridad:</strong> PHYSIA realiza revisiones periódicas y auditorías
                de sus políticas y prácticas de seguridad para asegurar que se ajusten a las normas vigentes y a las
                mejores prácticas de la industria.
              </li>
            </ul>
          </section>

          <section className="mb-8 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">Divulgación de Sus Datos Personales</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              PHYSIA solo compartirá sus datos personales en los siguientes casos:
            </p>

            <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
              <li>
                <strong>Encargados del tratamiento de datos:</strong> Trabajamos con plataformas tecnológicas como
                WhatsApp y OpenAI, que actúan como encargados del tratamiento. Estas empresas cumplen con el RGPD y
                están ubicadas dentro del Espacio Económico Europeo (EEE), o en el caso de países terceros, cuentan con
                garantías adecuadas para la protección de datos.
                <br />
                <em>Base jurídica:</em> La misma base legal para el tratamiento de sus datos por parte de PHYSIA
                (interés legítimo o consentimiento).
              </li>
              <li>
                <strong>Transacciones empresariales:</strong> En el caso de que PHYSIA participe en una venta, fusión o
                adquisición, sus datos personales podrían ser divulgados a los futuros compradores o vendedores de la
                empresa.
                <br />
                <em>Base jurídica:</em> Nuestro interés legítimo en la transacción empresarial, o su consentimiento en
                el caso de datos especialmente sensibles.
              </li>
              <li>
                <strong>Obligaciones legales:</strong> PHYSIA podrá divulgar sus datos personales cuando esté legalmente
                obligada a hacerlo, como en el cumplimiento de mandatos judiciales o requerimientos legales por parte de
                autoridades competentes.
                <br />
                <em>Base jurídica:</em> Cumplimiento de una obligación legal.
              </li>
              <li>
                <strong>Proyectos de investigación:</strong> Con su consentimiento explícito, PHYSIA puede compartir
                ciertos datos con organizaciones que participan en estudios clínicos u otros proyectos de investigación
                en el ámbito de la salud.
                <br />
                <em>Base jurídica:</em> Consentimiento explícito del usuario.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Conservación de los Datos Personales</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              PHYSIA almacenará sus datos personales durante el tiempo que sea necesario para cumplir con las
              finalidades descritas en esta política o durante el período exigido por las leyes y regulaciones
              aplicables, siempre respetando el principio de minimización de datos. Los plazos exactos de almacenamiento
              varían según el tipo de datos y las finalidades de su tratamiento, detallados en la sección 3 de esta
              política.
            </p>

            <p className="text-gray-800 mb-4 leading-relaxed">
              Cuando sus datos personales se utilizan para múltiples finalidades, se conservarán hasta que finalice el
              plazo de la finalidad más extensa, aunque se dejarán de usar para otras finalidades cuyo plazo de
              conservación sea más corto.
            </p>

            <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
              <li>
                <strong>Datos administrativos y fiscales:</strong> Conservados por hasta 10 años, en cumplimiento de las
                leyes fiscales y comerciales.
              </li>
              <li>
                <strong>Datos de marketing:</strong> Conservados mientras el usuario no retire su consentimiento.
              </li>
              <li>
                <strong>Datos de seguridad y mantenimiento:</strong> Conservados durante un máximo de 30 días en caso de
                datos asociados a incidentes de seguridad.
              </li>
            </ul>

            <p className="text-gray-800 mt-4 leading-relaxed">
              Al concluir la finalidad para la cual se recopilaron los datos personales, estos se anonimizarán de forma
              irreversible o se eliminarán de manera segura.
            </p>
          </section>

          <section className="mb-8 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4">Derechos de los Usuarios de PHYSIA</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              Conforme al RGPD, los usuarios de PHYSIA tienen derechos sobre sus datos personales, incluyendo:
            </p>

            <ul className="list-disc pl-6 text-gray-800 space-y-2 leading-relaxed">
              <li>
                <strong>Derecho de acceso:</strong> Solicitar información sobre sus datos personales tratados y
                cualquier comunicación de los mismos a terceros.
              </li>
              <li>
                <strong>Derecho de rectificación:</strong> Corregir los datos inexactos o incompletos.
              </li>
              <li>
                <strong>Derecho de supresión (derecho al olvido):</strong> Solicitar la eliminación de los datos
                personales cuando ya no sean necesarios para los fines para los cuales fueron recogidos.
              </li>
              <li>
                <strong>Derecho a la limitación del tratamiento:</strong> Solicitar la restricción del tratamiento de
                sus datos en determinadas circunstancias.
              </li>
              <li>
                <strong>Derecho a la portabilidad:</strong> Solicitar sus datos personales en un formato estructurado y
                legible para su transmisión a otro responsable del tratamiento.
              </li>
              <li>
                <strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos en casos de interés legítimo
                o en actividades de marketing.
              </li>
              <li>
                <strong>Derecho a retirar el consentimiento:</strong> Cuando el tratamiento de datos esté basado en el
                consentimiento del usuario, este puede retirarlo en cualquier momento, sin que esto afecte la legalidad
                del tratamiento basado en el consentimiento previo.
              </li>
            </ul>

            <p className="text-gray-800 mt-4 leading-relaxed">
              Para ejercer cualquiera de estos derechos, puede contactarnos en{" "}
              <span className="font-semibold">info@myphysia.com</span> o mediante el formulario de atención al cliente
              en nuestra plataforma.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-semibold text-black mb-4">Modificaciones de la Política de Privacidad</h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              PHYSIA se reserva el derecho de modificar esta Declaración de Privacidad en cualquier momento para
              reflejar cambios en la normativa, en las prácticas de tratamiento de datos o en los servicios
              proporcionados. Cualquier cambio será publicado en esta página y, cuando sea pertinente, comunicado a los
              usuarios a través de medios electrónicos o la plataforma. Se recomienda a los usuarios revisar esta
              Declaración periódicamente para mantenerse informados sobre nuestras prácticas de privacidad.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


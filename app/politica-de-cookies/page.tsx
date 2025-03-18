import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Cookies | PHYSIA",
  description: "Información sobre el uso de cookies en la web de PHYSIA",
}

export default function PoliticaCookiesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full max-w-4xl mx-auto">
        <div className="rounded-lg p-6 sm:p-10 border border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8">Política de Cookies</h1>

          <div className="space-y-6 text-black">
            <p>
              En la web www.myphysia.com utilizamos cookies para facilitar la relación de los visitantes con nuestro
              contenido.
            </p>

            <p>
              En cumplimiento de la Directiva 2009/136/CE, desarrollada en nuestro ordenamiento por el apartado segundo
              del artículo 22 de la Ley de Servicios de Sociedad de la Información, siguiendo las directrices de la
              Agencia Española de Protección de Datos, procedemos a informarle detalladamente del uso que se realiza en
              nuestra web.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 my-6">
              <h2 className="text-xl font-semibold text-black mb-3">¿Qué son las cookies?</h2>
              <p>
                Se denominan cookies a unos pequeños archivos que se graban en el navegador utilizado por cada visitante
                de nuestra web para que el servidor pueda recordar la visita de ese usuario con posterioridad cuando
                vuelva a acceder a nuestros contenidos. Esta información no revela su identidad, ni dato personal
                alguno, ni accede al contenido almacenado en su pc, pero sí que permite a nuestro sistema identificarle
                a usted como un usuario determinado que ya visitó la web con anterioridad, visualizó determinadas
                páginas, etc. y además permite guardar sus preferencias personales e información técnica como por
                ejemplo las visitas realizadas o páginas concretas que visite.
              </p>
            </div>

            <p>
              La finalidad de las cookies es la de facilitar al Usuario un acceso más rápido a los Servicios
              seleccionados.
            </p>

            <h2 className="text-xl font-semibold text-black mt-8 mb-3">Configuración de cookies</h2>

            <p>
              Si no desea que se guarden cookies en su navegador o prefiere recibir una información cada vez que una
              cookie solicite instalarse, puede configurar sus opciones de navegación para que se haga de esa forma. La
              mayor parte de los navegadores permiten la gestión de las cookies de 3 formas diferentes:
            </p>

            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Las cookies son siempre rechazadas;</li>
              <li>El navegador pregunta si el usuario desea instalar cada cookie;</li>
              <li>Las cookies son siempre aceptadas;</li>
            </ul>

            <p className="mt-4">
              Su navegador también puede incluir la posibilidad de seleccionar con detalle las cookies que desea que se
              instalen en su ordenador. En concreto, el usuario puede normalmente aceptar alguna de las siguientes
              opciones:
            </p>

            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>rechazar las cookies de determinados dominios;</li>
              <li>rechazar las cookies de terceros;</li>
              <li>aceptar cookies como no persistentes (se eliminan cuando el navegador se cierra);</li>
              <li>permitir al servidor crear cookies para un dominio diferente.</li>
            </ul>

            <h2 className="text-xl font-semibold text-black mt-8 mb-3">
              Cómo configurar las cookies en los principales navegadores
            </h2>

            <p>
              Para permitir, conocer, bloquear o eliminar las cookies instaladas en su equipo puede hacerlo mediante la
              configuración de las opciones del navegador instalado en su ordenador.
            </p>

            <p className="mt-4">
              Puede encontrar información sobre cómo configurar los navegadores más usados en las siguientes
              ubicaciones:
            </p>

            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>
                <strong>Internet Explorer:</strong> Herramientas -&gt; Opciones de Internet -&gt; Privacidad -&gt;
                Configuración. Para más información, puede consultar el soporte de Microsoft o la Ayuda del navegador.
              </li>
              <li>
                <strong>Firefox:</strong> Herramientas -&gt; Opciones -&gt; Privacidad -&gt; Historial -&gt;
                Configuración Personalizada. Para más información, puede consultar el soporte de Mozilla o la Ayuda del
                navegador.
              </li>
              <li>
                <strong>Chrome:</strong> Configuración -&gt; Mostrar opciones avanzadas -&gt; Privacidad -&gt;
                Configuración de contenido. Para más información, puede consultar el soporte de Google o la Ayuda del
                navegador.
              </li>
              <li>
                <strong>Safari:</strong> Preferencias -&gt; Seguridad. Para más información, puede consultar el soporte
                de Apple o la Ayuda del navegador.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-black mt-8 mb-3">Cookies de terceros</h2>

            <p>
              Respecto de las cookies de terceros, es decir aquellas que son ajenas a nuestro sitio web, no podemos
              hacernos responsables del contenido y veracidad de las políticas de privacidad que ellos incluyen por lo
              que la información que le ofrecemos es siempre con referencia a la fuente.
            </p>

            <h2 className="text-xl font-semibold text-black mt-8 mb-3">Actualización de la política de cookies</h2>

            <p>
              Se puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con
              la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección
              de Datos, por ello se aconseja a los Usuarios que la visiten periódicamente.
            </p>

            <p className="mt-4">
              Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicarán a los Usuarios bien
              mediante la web o a través de correo electrónico a los Usuarios registrados.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-sm"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}


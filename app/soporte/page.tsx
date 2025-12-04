"use client"

import { useEffect } from "react"
import { FileText, LayoutGrid, User, Settings, Code, Coffee } from "lucide-react"

export default function SoportePage() {
  // ---------- SCRIPT DEL POPUP ----------
  useEffect(() => {
    const btn = document.getElementById("healthmate-booking-btn")

    if (!btn) return

    const bookingUrl = "https://app.healthmate.tech/booking/68"

    const handler = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()

      // Crear overlay oscuro
      const overlay = document.createElement("div")
      overlay.id = "healthmate-overlay"
      overlay.style.cssText =
        "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:99998;display:flex;align-items:center;justify-content:center;"

      // Crear popup
      const popup = document.createElement("div")
      popup.style.cssText =
        "position:relative;width:95%;max-width:900px;height:90vh;background:white;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.3);overflow:hidden;"

      // Botón cerrar
      const closeBtn = document.createElement("button")
      closeBtn.innerHTML = "✕"
      closeBtn.style.cssText =
        "position:absolute;top:10px;right:10px;z-index:1;background:white;border:none;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:20px;box-shadow:0 2px 8px rgba(0,0,0,0.15);transition:all 0.2s;"
      closeBtn.onclick = () => {
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay)
        }
      }

      // Iframe popup
      const iframe = document.createElement("iframe")
      iframe.src = bookingUrl
      iframe.style.cssText = "width:100%;height:100%;border:none;"

      iframe.onerror = () => {
        console.error("[v0] Error cargando iframe de Healthmate")
      }

      popup.appendChild(closeBtn)
      popup.appendChild(iframe)
      overlay.appendChild(popup)
      document.body.appendChild(overlay)

      // Cerrar haciendo clic fuera
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay && document.body.contains(overlay)) {
          document.body.removeChild(overlay)
        }
      })

      // Mensaje de Healthmate al enviar reserva
      const listener = (event: { data: { type: string } }) => {
        if (event.data?.type === "healthmate:calendar:booking_submitted") {
          setTimeout(() => {
            const existingOverlay = document.getElementById("healthmate-overlay")
            if (existingOverlay && document.body.contains(existingOverlay)) {
              document.body.removeChild(existingOverlay)
            }
          }, 3000)
        }
      }

      window.addEventListener("message", listener)
    }

    btn.addEventListener("click", handler)
    return () => btn.removeEventListener("click", handler)
  }, [])

  // ---------- UI PRINCIPAL ----------
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-purple-600 mb-8">¿Cómo podemos ayudar?</h1>
          <p className="text-xl text-gray-600 mb-8">Busca rápidamente un tema:</p>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <button
              onClick={() => document.getElementById("documentacion")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-gray-300 rounded-full px-6 py-2 hover:border-purple-600 transition-colors cursor-pointer"
            >
              <span className="text-gray-700">Documentación</span>
            </button>

            <div className="border border-gray-300 rounded-full px-6 py-2 opacity-50 cursor-not-allowed">
              <span className="text-gray-700">FAQ (próximamente)</span>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Documentation Section */}
      <section id="documentacion" className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Documentación</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg opacity-75 cursor-not-allowed">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <FileText className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Empezar</h3>
                <p className="text-gray-600">Cómo empezar con PHYSIA</p>
                <p className="text-sm text-gray-400 mt-2">Próximamente</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg opacity-75 cursor-not-allowed">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <User className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Control de acceso</h3>
                <p className="text-gray-600">Controlar el acceso a tu horario</p>
                <p className="text-sm text-gray-400 mt-2">Próximamente</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg opacity-75 cursor-not-allowed">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <Settings className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proceso de usuario</h3>
                <p className="text-gray-600">Configurar el proceso de usuario</p>
                <p className="text-sm text-gray-400 mt-2">Próximamente</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg opacity-75 cursor-not-allowed">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <LayoutGrid className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Disposición</h3>
                <p className="text-gray-600">Cambiar la disposición de tu horario</p>
                <p className="text-sm text-gray-400 mt-2">Próximamente</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg opacity-75 cursor-not-allowed">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pagos</h3>
                <p className="text-gray-600">Configurar pagos en tu sistema</p>
                <p className="text-sm text-gray-400 mt-2">Próximamente</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg opacity-75 cursor-not-allowed">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <Code className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integración</h3>
                <p className="text-gray-600">Integrar PHYSIA con otros sistemas</p>
                <p className="text-sm text-gray-400 mt-2">Próximamente</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg opacity-75 cursor-not-allowed">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center text-purple-500 mb-6">
                  <Coffee className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Uso diario</h3>
                <p className="text-gray-600">Gestión diaria de tu calendario</p>
                <p className="text-sm text-gray-400 mt-2">Próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BOTÓN DEL POPUP (SUSTITUYE AL IFRAME) ---------- */}
      <section className="py-16 text-center">
        <button
          id="healthmate-booking-btn"
          type="button"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            ;(e.target as HTMLButtonElement).style.transform = "translateY(-2px)"
            ;(e.target as HTMLButtonElement).style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)"
          }}
          onMouseOut={(e) => {
            ;(e.target as HTMLButtonElement).style.transform = "translateY(0)"
            ;(e.target as HTMLButtonElement).style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"
          }}
        >
          Reservar Cita
        </button>
      </section>
    </main>
  )
}

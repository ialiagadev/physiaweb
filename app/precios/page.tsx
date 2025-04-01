import type { Metadata } from "next"
import PricingPage from "@/components/pricing-page"

export const metadata: Metadata = {
  title: "Precios | Physia - Gestión centralizada para clínicas de salud",
  description: "Descubre nuestros planes para automatizar las tareas administrativas y mejorar la experiencia de tus pacientes. Potenciado con Inteligencia Artificial.",
  keywords: "physia, precios physia, gestión clínicas, software médico, inteligencia artificial salud, automatización clínicas",
  openGraph: {
    title: "Precios | Physia - Gestión centralizada para clínicas de salud",
    description: "Descubre nuestros planes para automatizar las tareas administrativas y mejorar la experiencia de tus pacientes. Potenciado con Inteligencia Artificial.",
    images: [
      {
        url: "/images/physia-og.jpg",
        width: 1200,
        height: 630,
        alt: "Physia - Gestión centralizada para clínicas",
      },
    ],
    locale: "es_ES",
    type: "website",
    siteName: "Physia",
    url: "https://www.myphysia.com/precios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precios | Physia - Gestión centralizada para clínicas de salud",
    description: "Descubre nuestros planes para automatizar las tareas administrativas y mejorar la experiencia de tus pacientes. Potenciado con Inteligencia Artificial.",
    images: ["/images/physia-og.jpg"],
    creator: "@physia",
  },
  alternates: {
    canonical: "https://www.myphysia.com/precios",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#7e22ce", // Color púrpura basado en el diseño del sitio
}

export default function Page() {
  return <PricingPage />
}
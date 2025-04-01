import Script from "next/script"

export default function AIFeaturesSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PHYSIA - Gestión de clínicas con IA",
    applicationCategory: "HealthcareApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "80",
      priceCurrency: "EUR",
    },
    description:
      "Software de gestión clínica potenciado con Inteligencia Artificial para automatizar tareas administrativas y mejorar la experiencia del paciente",
    featureList: [
      "Asistente virtual con IA para atención al paciente",
      "Recordatorios inteligentes que reducen cancelaciones",
      "Automatización de tareas administrativas con IA",
      "Análisis predictivo de patrones de pacientes",
      "Optimización de agendas mediante algoritmos inteligentes",
    ],
    keywords: "IA para clínicas, software con inteligencia artificial, gestión clínica IA, automatización clínicas",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Dr. Carlos Martínez",
      },
      reviewBody:
        "La IA de PHYSIA ha transformado completamente la gestión de mi clínica. Los recordatorios inteligentes han reducido las cancelaciones en un 40%.",
    },
  }

  return (
    <Script
      id="ai-features-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}


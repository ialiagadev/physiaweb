import Script from "next/script"

export default function SchemaOrg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PHYSIA",
    applicationCategory: "HealthcareApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "80",
      priceCurrency: "EUR",
    },
    description: "Software de gestión clínica con Inteligencia Artificial para profesionales de la salud",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "127",
    },
  }

  return (
    <Script id="schema-org" type="application/ld+json">
      {JSON.stringify(schemaData)}
    </Script>
  )
}


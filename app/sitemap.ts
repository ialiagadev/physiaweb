import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.myphysia.com"

  // Fecha actual para lastModified
  const currentDate = new Date()

  return [
    {
      url: baseUrl, // Página de inicio
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0, // Máxima prioridad para la página principal
    },
    {
      url: `${baseUrl}/funcionalidades`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9, // Alta prioridad para la página de funcionalidades
    },
    {
      url: `${baseUrl}/precios`,
      lastModified: currentDate,
      changeFrequency: "weekly", // Actualización más frecuente para precios
      priority: 0.9, // Alta prioridad para la página de precios
    },
    {
      url: `${baseUrl}/prueba-gratis`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8, // Buena prioridad para la página de prueba gratuita
    },
  ]
}


import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GoogleTagManager from "@/components/gtm"
import { SearchParamsProvider } from "@/components/search-params-provider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: {
    default: "PHYSIA - Gestión de clínicas con IA",
    template: "%s | PHYSIA",
  },
  description:
    "Herramienta de gestión centralizada para clínicas de profesionales de la salud, potenciada con Inteligencia Artificial. Automatiza tareas administrativas y mejora la experiencia de tus pacientes.",
  keywords: [
    "gestión clínicas",
    "software médico",
    "IA salud",
    "automatización clínicas",
    "gestión pacientes",
    "agenda médica",
    "inteligencia artificial salud",
    "software fisioterapia",
    "gestión citas médicas",
  ],
  authors: [{ name: "PHYSIA" }],
  creator: "PHYSIA",
  publisher: "PHYSIA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://myphysia.com"),
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "PHYSIA - Gestión de clínicas con IA",
    description:
      "Herramienta de gestión centralizada para clínicas de profesionales de la salud, potenciada con Inteligencia Artificial",
    url: "https://myphysia.com",
    siteName: "PHYSIA",
    images: [
      {
        url: "/og-image.jpg", // Asegúrate de tener esta imagen en tu carpeta public
        width: 1200,
        height: 630,
        alt: "PHYSIA - Gestión de clínicas con IA",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PHYSIA - Gestión de clínicas con IA",
    description: "Herramienta de gestión centralizada para clínicas de profesionales de la salud, potenciada con IA",
    images: ["/twitter-image.jpg"], // Asegúrate de tener esta imagen en tu carpeta public
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#8b5cf6", // Color púrpura que coincide con tu tema
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    // Añade tus códigos de verificación cuando los tengas
    google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },
  category: "Technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        {/* Añadir el componente GoogleTagManager */}
        <GoogleTagManager />
        <SearchParamsProvider>
          <Navbar />
          <main className="pt-16 flex-grow">{children}</main>
          <Footer />
        </SearchParamsProvider>
      </body>
    </html>
  )
}


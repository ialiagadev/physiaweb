import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/navbar"

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
  title: "Physia - Gestión de clínicas con IA",
  description:
    "Herramienta de gestión centralizada para clínicas de profesionales de la salud, potenciada con Inteligencia Artificial",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
          <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}


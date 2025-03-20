"use client"

import type React from "react"
import { Suspense, createContext, useContext } from "react"
import { useSearchParams as useNextSearchParams } from "next/navigation"

// Crear un contexto para los parámetros de búsqueda
const SearchParamsContext = createContext<URLSearchParams | null>(null)

// Hook personalizado para usar los parámetros de búsqueda
export function useSearchParams() {
  const context = useContext(SearchParamsContext)
  const nextSearchParams = useNextSearchParams()

  // Si el contexto está disponible, úsalo; de lo contrario, usa el hook de Next.js
  return context || nextSearchParams
}

// Proveedor que captura los parámetros de búsqueda y los proporciona a través del contexto
export function SearchParamsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={null}>
      <SearchParamsProviderInner>{children}</SearchParamsProviderInner>
    </Suspense>
  )
}

// Componente interno que maneja la lógica real
function SearchParamsProviderInner({ children }: { children: React.ReactNode }) {
  const searchParams = useNextSearchParams()

  return <SearchParamsContext.Provider value={searchParams}>{children}</SearchParamsContext.Provider>
}


"use client"

import type React from "react"

import { Suspense } from "react"

export function SearchParamsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Suspense fallback={null}>{children}</Suspense>
}


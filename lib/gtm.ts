// Este archivo lo usaremos cuando tengamos el ID de GTM

type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[]
  }
  
  declare const window: WindowWithDataLayer
  
  // Usar el ID de GTM proporcionado
  export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-NZJV3KW4"
  
  export const pageview = (url: string) => {
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event: "pageview",
        page: url,
      })
    } else {
      console.log({
        event: "pageview",
        page: url,
      })
    }
  }
  
  export const event = ({
    action,
    category,
    label,
    value,
  }: {
    action: string
    category: string
    label?: string
    value?: number
  }) => {
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event: "customEvent",
        eventAction: action,
        eventCategory: category,
        eventLabel: label,
        eventValue: value,
      })
    } else {
      console.log({
        event: "customEvent",
        eventAction: action,
        eventCategory: category,
        eventLabel: label,
        eventValue: value,
      })
    }
  }
  
  
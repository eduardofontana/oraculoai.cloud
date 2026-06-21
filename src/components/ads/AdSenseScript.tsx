"use client"

import Script from "next/script"
import { useConsent } from "@/contexts/ConsentContext"

export function AdSenseScript() {
  const { consent } = useConsent()

  if (!consent?.marketing) return null

  return (
    <Script
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2572298012241654"
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  )
}

"use client"

import { useSyncExternalStore } from "react"
import Script from "next/script"
import { useConsent } from "@/contexts/ConsentContext"

const emptySubscribe = () => () => {}

export function ConditionalAdSense() {
  const { consent } = useConsent()
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false)

  if (!mounted || !consent?.analytics) return null

  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2572298012241654"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}

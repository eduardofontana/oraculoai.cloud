"use client"

import dynamic from "next/dynamic"

const FloatingChat = dynamic(() =>
  import("@/components/layout/FloatingChat").then((m) => m.FloatingChat),
)

const CookieConsentBanner = dynamic(() =>
  import("@/components/layout/CookieConsentBanner").then((m) => m.CookieConsentBanner),
)

const ConditionalAnalytics = dynamic(() =>
  import("@/components/ads/ConditionalAnalytics").then((m) => m.ConditionalAnalytics),
)

const ConditionalAdSense = dynamic(() =>
  import("@/components/ads/ConditionalAdSense").then((m) => m.ConditionalAdSense),
)

export function ClientShell() {
  return (
    <>
      <FloatingChat />
      <CookieConsentBanner />
      <ConditionalAnalytics />
      <ConditionalAdSense />
    </>
  )
}

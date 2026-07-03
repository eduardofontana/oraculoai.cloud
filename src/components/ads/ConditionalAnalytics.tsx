"use client"

import { Analytics } from "@vercel/analytics/next"
import { useEffect, useState } from "react"
import { useConsent } from "@/contexts/ConsentContext"

export function ConditionalAnalytics() {
  const { consent } = useConsent()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    void Promise.resolve().then(() => setMounted(true))
  }, [])

  if (!mounted || !consent?.analytics) return null

  return <Analytics />
}

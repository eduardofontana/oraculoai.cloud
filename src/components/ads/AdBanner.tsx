"use client"

import { useEffect, useRef } from "react"
import { hasConsent } from "@/lib/consent"

interface AdBannerProps {
  slot: string
  format?: "auto" | "rectangle" | "horizontal" | "vertical"
  className?: string
}

export function AdBanner({ slot, format = "auto", className = "" }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const mounted = useRef(false)

  useEffect(() => {
    if (!hasConsent("marketing")) return
    if (mounted.current) return
    mounted.current = true

    try {
      const adsbygoogle = (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle || []
      adsbygoogle.push({})
    } catch {
      // silent
    }
  }, [])

  if (!hasConsent("marketing")) return null

  return (
    <div className={`flex justify-center ${className}`}>
      <div ref={adRef}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-2572298012241654"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  )
}

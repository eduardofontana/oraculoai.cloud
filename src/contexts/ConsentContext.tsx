"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { getConsent, setConsent, type ConsentPreferences } from "@/lib/consent"

interface ConsentContextType {
  consent: ConsentPreferences | null
  acceptAll: () => void
  declineAll: () => void
  savePreferences: (prefs: ConsentPreferences) => void
}

const ConsentContext = createContext<ConsentContextType>({
  consent: null,
  acceptAll: () => {},
  declineAll: () => {},
  savePreferences: () => {},
})

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ConsentPreferences | null>(null)

  useEffect(() => {
    void Promise.resolve().then(() => setConsentState(getConsent()))
  }, [])

  const acceptAll = () => {
    const prefs: ConsentPreferences = { necessary: true, analytics: true, marketing: false }
    setConsent(prefs)
    setConsentState(prefs)
  }

  const declineAll = () => {
    const prefs: ConsentPreferences = { necessary: true, analytics: false, marketing: false }
    setConsent(prefs)
    setConsentState(prefs)
  }

  const savePreferences = (prefs: ConsentPreferences) => {
    setConsent(prefs)
    setConsentState(prefs)
  }

  return (
    <ConsentContext.Provider value={{ consent, acceptAll, declineAll, savePreferences }}>
      {children}
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  return useContext(ConsentContext)
}

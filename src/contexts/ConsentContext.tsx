"use client"

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"
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
  const [consent, setConsentState] = useState<ConsentPreferences | null>(() => {
    return getConsent()
  })

  const acceptAll = useCallback(() => {
    const prefs: ConsentPreferences = { necessary: true, analytics: true, marketing: false }
    setConsent(prefs)
    setConsentState(prefs)
  }, [])

  const declineAll = useCallback(() => {
    const prefs: ConsentPreferences = { necessary: true, analytics: false, marketing: false }
    setConsent(prefs)
    setConsentState(prefs)
  }, [])

  const savePreferences = useCallback((prefs: ConsentPreferences) => {
    setConsent(prefs)
    setConsentState(prefs)
  }, [])

  const value = useMemo(() => ({ consent, acceptAll, declineAll, savePreferences }), [consent, acceptAll, declineAll, savePreferences])

  return (
    <ConsentContext.Provider value={value}>
      {children}
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  return useContext(ConsentContext)
}

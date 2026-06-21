export type ConsentCategory = "necessary" | "analytics" | "marketing"

export type ConsentPreferences = Record<ConsentCategory, boolean>

const CONSENT_COOKIE = "oraculoai_consent"
const CONSENT_EXPIRY_DAYS = 180

export function getConsent(): ConsentPreferences | null {
  if (typeof document === "undefined") return null
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=([^;]*)`))
  if (!match) return null
  try {
    return JSON.parse(decodeURIComponent(match[1])) as ConsentPreferences
  } catch {
    return null
  }
}

export function setConsent(prefs: ConsentPreferences): void {
  const expires = new Date()
  expires.setDate(expires.getDate() + CONSENT_EXPIRY_DAYS)
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(prefs))}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`
}

export function hasConsent(category: ConsentCategory): boolean {
  if (category === "necessary") return true
  const prefs = getConsent()
  return prefs?.[category] ?? false
}

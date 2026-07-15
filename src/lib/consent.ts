import { z } from "zod"

export const consentPreferencesSchema = z.object({
  necessary: z.boolean(),
  analytics: z.boolean(),
  marketing: z.boolean(),
})

export type ConsentCategory = "necessary" | "analytics" | "marketing"

export type ConsentPreferences = z.infer<typeof consentPreferencesSchema>

const CONSENT_COOKIE = "oraculoai_consent"
const CONSENT_EXPIRY_DAYS = 180

export function getConsent(): ConsentPreferences | null {
  if (typeof document === "undefined") return null
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=([^;]*)`))
  if (!match) return null
  try {
    const parsed = JSON.parse(decodeURIComponent(match[1]))
    const result = consentPreferencesSchema.safeParse(parsed)
    return result.success ? result.data : null
  } catch {
    return null
  }
}

export function setConsent(prefs: ConsentPreferences): void {
  const expires = new Date()
  expires.setDate(expires.getDate() + CONSENT_EXPIRY_DAYS)
  const secure = location.protocol === "https:" ? "; Secure" : ""
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(prefs))}; expires=${expires.toUTCString()}; path=/; SameSite=Lax${secure}`
}

export function hasConsent(category: ConsentCategory): boolean {
  if (category === "necessary") return true
  const prefs = getConsent()
  return prefs?.[category] ?? false
}

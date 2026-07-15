"use client"

import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { useConsent } from "@/contexts/ConsentContext"

const focusableSelector = "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
const emptySubscribe = () => () => {}

export function CookieConsentBanner() {
  const { consent, acceptAll, declineAll, savePreferences } = useConsent()
  const [customizing, setCustomizing] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false)
  const panelRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!mounted || consent !== null) return
    const panel = panelRef.current
    panel?.querySelector<HTMLElement>(focusableSelector)?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        return
      }
      if (event.key !== "Tab" || !panel) return
      const items = Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)).filter((item) => !item.hasAttribute("disabled"))
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [consent, mounted])

  if (!mounted || consent !== null) return null

  return (
    <AnimatePresence>
      <motion.div className="consent-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>
        <motion.section
          ref={panelRef}
          className="consent-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="consent-title"
          aria-describedby="consent-description"
          initial={{ y: reduceMotion ? 0 : 28 }}
          animate={{ y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <h2 id="consent-title">Privacidade sob seu controle</h2>
          <p id="consent-description">
            Cookies necessários mantêm o site funcionando. Analytics só é ativado com sua escolha e ajuda a entender a navegação.
            Não exibimos anúncios. <Link href="/cookies">Saiba mais</Link>.
          </p>
          {customizing ? (
            <div className="consent-options">
              <div className="consent-option"><div><strong>Necessários</strong><small>Sempre ativos para preferências e segurança.</small></div><input type="checkbox" checked disabled aria-label="Cookies necessários sempre ativos" /></div>
              <label className="consent-option"><div><strong>Analytics</strong><small>Métricas anônimas de uso e desempenho.</small></div><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /></label>
            </div>
          ) : null}
          <div className="consent-actions">
            {customizing ? (
              <button className="button button--primary" type="button" onClick={() => savePreferences({ necessary: true, analytics, marketing: false })}>Salvar escolhas</button>
            ) : (
              <button className="button button--primary" type="button" onClick={acceptAll}>Aceitar analytics</button>
            )}
            <button className="button button--ghost" type="button" onClick={declineAll}>Somente necessários</button>
            {!customizing ? <button className="button button--ghost" type="button" onClick={() => setCustomizing(true)}>Personalizar</button> : null}
          </div>
        </motion.section>
      </motion.div>
    </AnimatePresence>
  )
}

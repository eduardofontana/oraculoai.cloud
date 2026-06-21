"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Cookie, ChevronDown } from "lucide-react"
import { useConsent } from "@/contexts/ConsentContext"
import type { ConsentCategory, ConsentPreferences } from "@/lib/consent"

const CATEGORIES: { key: ConsentCategory; title: string; description: string; required: boolean }[] = [
  { key: "necessary", title: "Necessários", description: "Essenciais para o funcionamento do site. Não podem ser desativados.", required: true },
  { key: "analytics", title: "Analytics", description: "Nos ajudam a entender como você usa o site para melhorar sua experiência.", required: false },
  { key: "marketing", title: "Marketing", description: "Usados para exibir anúncios relevantes (Google AdSense).", required: false },
]

export function CookieConsentBanner() {
  const { consent, acceptAll, declineAll, savePreferences } = useConsent()
  const [customizing, setCustomizing] = useState(false)
  const [prefs, setPrefs] = useState<ConsentPreferences>({ necessary: true, analytics: false, marketing: false })

  if (consent !== null) return null

  const handleSaveCustom = () => {
    savePreferences(prefs)
    setCustomizing(false)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
      >
        <div className="mx-auto max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6">
          {!customizing ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Este site usa cookies
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                    Utilizamos cookies próprios e de terceiros para melhorar sua navegação, analisar o tráfego e exibir anúncios personalizados. Ao clicar em &quot;Aceitar Todos&quot;, você concorda com o uso de todas as categorias. Para gerenciar suas preferências, clique em &quot;Personalizar&quot;.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => {
                    setPrefs({ necessary: true, analytics: false, marketing: false })
                    setCustomizing(true)
                  }}
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Personalizar
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={declineAll}
                  className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Recusar
                </button>
                <button
                  onClick={acceptAll}
                  className="text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg transition-colors"
                >
                  Aceitar Todos
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Personalizar Preferências</h3>
                <button
                  onClick={() => setCustomizing(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-3 mb-4">
                {CATEGORIES.map((cat) => (
                  <label
                    key={cat.key}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={prefs[cat.key]}
                      disabled={cat.required}
                      onChange={(e) => setPrefs((prev) => ({ ...prev, [cat.key]: e.target.checked }))}
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 disabled:opacity-60"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {cat.title}
                        {cat.required && <span className="text-xs text-gray-400 font-normal ml-1">(sempre ativo)</span>}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{cat.description}</p>
                    </div>
                  </label>
                ))}
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={() => setCustomizing(false)}
                  className="text-xs font-medium text-gray-500 dark:text-gray-400 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Voltar
                </button>
                <button
                  onClick={handleSaveCustom}
                  className="text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-lg transition-colors"
                >
                  Salvar Preferências
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

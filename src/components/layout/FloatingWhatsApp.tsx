"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { SITE } from "@/lib/constants"

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-20 right-0 bg-white dark:bg-gray-800 rounded-xl shadow-premium-xl p-4 min-w-[220px] border border-gray-100 dark:border-gray-700"
          >
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
              Fale com a gente!
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
                  Tire dúvidas, solicite orçamento ou agende uma conversa.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=Olá!%20Quero%20saber%20mais%20sobre%20as%20soluções%20da%20OráculoAI.`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}

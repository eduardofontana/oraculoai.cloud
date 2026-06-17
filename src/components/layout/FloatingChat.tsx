"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, X, MessageCircle, ClipboardCheck, ChevronRight } from "lucide-react"

const CHAT_OPTIONS = [
  {
    icon: ClipboardCheck,
    label: "Fazer Diagnóstico Gratuito",
    href: "/#diagnostico",
  },
  {
    icon: MessageCircle,
    label: "Falar com Especialista",
    href: "https://wa.me/5511999999999?text=Olá!%20Quero%20falar%20com%20um%20especialista%20da%20OráculoAI.",
  },
  {
    icon: ChevronRight,
    label: "Ver Planos e Preços",
    href: "/#servicos",
  },
]

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="absolute bottom-20 left-0 w-[300px] sm:w-[360px] bg-white dark:bg-gray-800 rounded-2xl shadow-premium-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="gradient-accent p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Oráculo IA</p>
                  <p className="text-xs text-white/70">Assistente virtual</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Olá! 👋 Sou o assistente virtual da OráculoAI. Como posso ajudar?
              </p>
              <div className="space-y-2">
                {CHAT_OPTIONS.map((option, index) => (
                  <a
                    key={index}
                    href={option.href}
                    target={option.href.startsWith("http") ? "_blank" : undefined}
                    rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-[#9B7DFF] transition-all duration-200 text-sm font-medium text-gray-700 dark:text-gray-200 group"
                  >
                    <option.icon className="w-4 h-4 text-[#7B4DFF]" />
                    <span className="flex-1">{option.label}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#7B4DFF] group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 rounded-full gradient-accent text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
        aria-label={isOpen ? "Fechar chat" : "Abrir chat Oráculo IA"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>
    </div>
  )
}

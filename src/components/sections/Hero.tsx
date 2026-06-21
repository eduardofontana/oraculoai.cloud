"use client"

import { motion } from "framer-motion"
import { Sparkles, Star, ClipboardCheck, TrendingUp, Bot } from "lucide-react"
import Link from "next/link"
import { HERO } from "@/lib/constants"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

function WhatsAppMockup() {
  const messages = [
    { id: 1, from: "user", text: "Olá! Quanto custa o plano de vocês?", time: "14:23" },
    { id: 2, from: "bot", text: "Olá! 👋 Temos planos a partir de R$ 97/mês. Posso te ajudar a escolher o ideal para seu negócio?", time: "14:23" },
    { id: 3, from: "user", text: "Tenho uma clínica odontológica...", time: "14:24" },
    { id: 4, from: "bot", text: "Ótimo! Já atendemos várias clínicas. Posso agendar um diagnóstico gratuito para você agora?", time: "14:24" },
    { id: 5, from: "bot", text: "Enquanto isso, veja o que nossos clientes conquistaram:", time: "14:24", isMetric: true },
  ]

  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl shadow-premium-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
      {/* Clipping wrapper for background and phone */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="w-full h-full" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #7B4DFF 1px, transparent 0)",
            backgroundSize: "24px 24px"
          }} />
        </div>

        {/* Phone frame */}
        <div className="absolute inset-2 sm:inset-4 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-600 flex flex-col">
        {/* WhatsApp header */}
        <div className="bg-[#075E54] dark:bg-[#075E54] px-3 py-2.5 flex items-center gap-2.5 flex-shrink-0">
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-semibold truncate">Oráculo IA</p>
            <p className="text-white/70 text-[10px]">online</p>
          </div>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </div>
        </div>

        {/* Chat background */}
        <div
          className="flex-1 p-2.5 overflow-hidden flex flex-col gap-1.5 justify-end relative bg-[#ECE5DD] dark:bg-gray-700"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L35 15 L30 25 L25 15 Z' fill='%23f0f0f0' opacity='0.4'/%3E%3C/svg%3E\")",
          }}
        >
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              {msg.from === "bot" && (
                <div className="w-6 h-6 rounded-full bg-[#075E54] flex items-center justify-center flex-shrink-0 mt-1 mr-1.5">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed shadow-sm ${
                msg.from === "user"
                  ? "bg-[#DCF8C6] dark:bg-[#DCF8C6] text-gray-800 rounded-br-sm"
                  : "bg-white dark:bg-white text-gray-800 rounded-bl-sm"
              }`}>
                <p>{msg.text}</p>
                <p className="text-[9px] text-gray-400 text-right mt-0.5">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input bar */}
        <div className="bg-white dark:bg-gray-100 px-2 py-1.5 flex items-center gap-1.5 border-t border-gray-200 flex-shrink-0">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
            <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div className="flex-1 bg-gray-100 rounded-full px-3 py-1.5 text-[10px] text-gray-400">Digite sua mensagem...</div>
          <div className="w-6 h-6 rounded-full bg-[#075E54] flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </div>
        </div>
      </div>
      </div>

      {/* Floating metric card */}
      <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-700 rounded-xl shadow-premium-lg px-3 py-2 flex items-center gap-2 border border-gray-100 dark:border-gray-600">
        <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-[10px] text-gray-500">Atendimento 24h</p>
          <p className="text-xs font-bold text-[#0A2540] dark:text-white">+40% conversão</p>
        </div>
      </div>

      {/* Bottom-left Hostinger badge */}
      <div className="absolute -bottom-3 -left-3 bg-white dark:bg-gray-700 rounded-xl shadow-premium-lg px-3 py-2 flex items-center gap-2 border border-gray-100 dark:border-gray-600">
        <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center">
          <Star className="w-4 h-4 text-white fill-white" />
        </div>
        <div>
          <p className="text-[10px] text-gray-500">Parceiro Oficial</p>
          <p className="text-xs font-bold text-[#0A2540] dark:text-white">Hostinger</p>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="max-w-2xl">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full bg-purple-50 dark:bg-purple-900/30 px-4 py-1.5 text-sm font-medium text-[#7B4DFF] dark:text-[#9B7DFF] mb-6">
              <Sparkles className="w-4 h-4" />
              Agência de IA para pequenos negócios
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#0A2540] dark:text-white leading-[1.1]"
            >
              {HERO.headline}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mt-6 leading-relaxed max-w-xl"
            >
              {HERO.subheadline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/#diagnostico"
                className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 px-8 py-4 text-lg bg-[#7B4DFF] hover:bg-[#6D28D9] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
              >
                <ClipboardCheck className="w-5 h-5" />
                {HERO.ctaPrimary}
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  ;(document.querySelector('[aria-label="Abrir chat Oráculo IA"]') as HTMLElement)?.click()
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 px-8 py-4 text-lg bg-white dark:bg-gray-800 text-[#0A2540] dark:text-white border-2 border-[#0A2540] dark:border-white hover:bg-[#0A2540] dark:hover:bg-white hover:text-white dark:hover:text-[#0A2540] cursor-pointer"
              >
                <Bot className="w-5 h-5" />
                {HERO.ctaSecondary}
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 sm:gap-6 mt-8 text-sm text-gray-400 dark:text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-[10px] font-bold text-white"
                  >
                    {["CM", "AB", "RO", "JC"][i - 1]}
                  </div>
                ))}
              </div>
              <span>{HERO.trustText}</span>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative hidden lg:block">
            <WhatsAppMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

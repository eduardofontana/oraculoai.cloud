"use client"

import { motion } from "framer-motion"
import { Sparkles, Star, Shield, ClipboardCheck, TrendingUp, MessageCircle, Bot } from "lucide-react"
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
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-premium-xl">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                  <img
                    src="/oraculoai_logo.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain opacity-15 dark:opacity-10 select-none"
                  />
                </div>
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-400/15 dark:bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-pink-300/10 dark:bg-pink-500/5 rounded-full blur-3xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="w-full h-full relative">
                  <div className="absolute inset-6 p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-premium max-w-[200px]">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs font-semibold text-emerald-600">+40% atendimentos</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-gradient-to-r from-[#7B4DFF] to-purple-400 rounded-full" />
                        </div>
                      </div>
                      <div className="bg-white/90 backdrop-blur rounded-xl p-3 shadow-premium">
                        <Bot className="w-6 h-6 text-[#7B4DFF]" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="bg-white/90 backdrop-blur rounded-xl p-3 shadow-premium flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        <span className="text-xs font-medium">24h online</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur rounded-xl p-3 shadow-premium flex items-center gap-2">
                        <Shield className="w-4 h-4 text-[#7B4DFF]" />
                        <span className="text-xs font-medium">LGPD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-premium-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Parceiro Oficial</p>
                <p className="text-sm font-bold text-[#0A2540]">Hostinger</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

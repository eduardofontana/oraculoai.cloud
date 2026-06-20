"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Sparkles, Star, Shield, ClipboardCheck,
  TrendingUp, MessageCircle, Bot, Zap, Users,
} from "lucide-react"
import Link from "next/link"
import { HERO } from "@/lib/constants"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

const floatingBadge = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: 0.8 + i * 0.15, duration: 0.5, ease: "easeOut" } as const,
  }),
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-gray-900">
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      </motion.div>

      <div className="container-main relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="max-w-2xl">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-purple-50 dark:bg-purple-900/30 px-4 py-1.5 text-sm font-medium text-[#7B4DFF] dark:text-[#9B7DFF] mb-6 border border-purple-200/50 dark:border-purple-700/30 shadow-premium"
            >
              <Sparkles className="w-4 h-4" />
              Agência de IA para pequenos negócios
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-balance"
            >
              <span className="text-[#0A2540] dark:text-white">IA que funciona de verdade para o seu </span>
              <span className="gradient-text-hero animate-gradient">pequeno negócio crescer</span>
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
                className="group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 px-8 py-4 text-lg bg-[#7B4DFF] hover:bg-[#6D28D9] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <ClipboardCheck className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                {HERO.ctaPrimary}
              </Link>
              <button
                onClick={() => {
                  (document.querySelector('[aria-label="Abrir chat Or\u00e1culo IA"]') as HTMLElement)?.click()
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 px-8 py-4 text-lg bg-white dark:bg-gray-800 text-[#0A2540] dark:text-white border-2 border-[#0A2540] dark:border-white hover:bg-[#0A2540] dark:hover:bg-white hover:text-white dark:hover:text-[#0A2540] cursor-pointer active:scale-[0.98]"
              >
                <Bot className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                {HERO.ctaSecondary}
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 sm:gap-6 mt-8 text-sm text-gray-400 dark:text-gray-500">
              <div className="flex -space-x-2">
                {["CM", "AB", "RO", "JC"].map((initials) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span>{HERO.trustText}</span>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-premium-xl border border-gray-100 dark:border-gray-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-950/40 dark:via-gray-900 dark:to-blue-950/40" />
              <div className="absolute inset-0 bg-grid opacity-[0.03]" />

              <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-400/20 dark:bg-purple-500/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/20 dark:bg-blue-500/15 rounded-full blur-3xl" />
              <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-pink-300/15 dark:bg-pink-500/10 rounded-full blur-3xl" />

              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-3xl gradient-accent flex items-center justify-center opacity-10 dark:opacity-20 rotate-12">
                      <Bot className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  <motion.div
                    custom={0}
                    variants={floatingBadge}
                    initial="hidden"
                    animate="visible"
                    className="absolute top-4 left-4 glass-card-solid rounded-xl p-3 shadow-premium-lg flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/40 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Aumento médio</p>
                      <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">+40% atendimentos</p>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={floatingBadge}
                    initial="hidden"
                    animate="visible"
                    className="absolute top-4 right-4 glass-card-solid rounded-xl p-3 shadow-premium-lg"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">24h online</span>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={2}
                    variants={floatingBadge}
                    initial="hidden"
                    animate="visible"
                    className="absolute bottom-20 left-4 glass-card-solid rounded-xl p-3 shadow-premium-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#7B4DFF]" />
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Resposta instantânea</span>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={3}
                    variants={floatingBadge}
                    initial="hidden"
                    animate="visible"
                    className="absolute bottom-20 right-4 glass-card-solid rounded-xl p-3 shadow-premium-lg"
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-[#7B4DFF]" />
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">LGPD</span>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={4}
                    variants={floatingBadge}
                    initial="hidden"
                    animate="visible"
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card-solid rounded-xl px-4 py-2.5 shadow-premium-lg flex items-center gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#7B4DFF]" />
                      <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">50+ negócios atendidos</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-premium-lg p-4 flex items-center gap-3 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Parceiro Oficial</p>
                <p className="text-sm font-bold text-[#0A2540] dark:text-white">Hostinger</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

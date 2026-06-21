"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { CTA_FINAL } from "@/lib/constants"

export function FinalCTA() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-100/20 via-transparent to-blue-100/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-accent mb-6 shadow-lg shadow-purple-500/20 glow-accent">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] dark:text-white mb-4 text-balance">
            {CTA_FINAL.title}
          </h2>

          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            {CTA_FINAL.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#diagnostico"
              className="group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 px-8 py-4 text-lg bg-[#7B4DFF] hover:bg-[#6D28D9] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              {CTA_FINAL.cta}
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Quero%20falar%20com%20um%20consultor%20da%20OráculoAI."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 px-8 py-4 text-lg bg-white dark:bg-gray-800 text-[#0A2540] dark:text-white border-2 border-[#0A2540] dark:border-white hover:bg-[#0A2540] dark:hover:bg-white hover:text-white dark:hover:text-[#0A2540] active:scale-[0.98]"
            >
              <Zap className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              {CTA_FINAL.secondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

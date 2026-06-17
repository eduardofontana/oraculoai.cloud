"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { CTA_FINAL } from "@/lib/constants"

export function FinalCTA() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-accent mb-6 shadow-lg shadow-purple-500/20">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4 text-balance">
            {CTA_FINAL.title}
          </h2>

          <p className="text-lg sm:text-xl text-gray-500 mb-8 max-w-xl mx-auto">
            {CTA_FINAL.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#diagnostico"
              className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 px-8 py-4 text-lg bg-[#7B4DFF] hover:bg-[#6D28D9] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
            >
              <ArrowRight className="w-5 h-5" />
              {CTA_FINAL.cta}
            </Link>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Quero%20falar%20com%20um%20consultor%20da%20OráculoAI."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 px-8 py-4 text-lg bg-white text-[#0A2540] border-2 border-[#0A2540] hover:bg-[#0A2540] hover:text-white"
            >
              {CTA_FINAL.secondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

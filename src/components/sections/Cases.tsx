"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Stethoscope, ShoppingBag, Scale, CheckCircle, ArrowRight } from "lucide-react"
import { CASES } from "@/lib/constants"

const caseIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope, ShoppingBag, Scale,
}

export function Cases() {
  return (
    <section id="cases" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 dark:bg-purple-900/30 px-4 py-1.5 text-sm font-medium text-[#7B4DFF] dark:text-[#9B7DFF] mb-4">
            Resultados reais
          </span>
          <h2 className="section-title">{CASES.title}</h2>
          <p className="section-subtitle">{CASES.subtitle}</p>
        </motion.div>

        <div className="space-y-10">
          {CASES.items.map((caseItem, index) => {
            const Icon = caseIconMap[caseItem.icon]
            return (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#F8FAFC] dark:bg-gray-800 rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-100 dark:border-gray-700"
              >
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
                        {Icon && <Icon className="w-5 h-5 text-white" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0A2540] dark:text-white">{caseItem.client}</h3>
                        <span className="text-xs text-gray-400 dark:text-gray-300">{caseItem.segment}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-red-500 mb-2">Desafio</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{caseItem.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#7B4DFF] mb-2">Solução</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{caseItem.solution}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 h-full">
                      <h4 className="text-sm font-semibold text-emerald-600 mb-4">Resultados</h4>
                      <ul className="space-y-3 mb-6">
                        {caseItem.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>

                      <blockquote className="border-l-2 border-[#7B4DFF] pl-4 py-1">
                        <p className="text-xs text-gray-500 dark:text-gray-300 italic leading-relaxed mb-2">
                          &ldquo;{caseItem.testimonial}&rdquo;
                        </p>
                        <cite className="text-xs font-semibold text-[#0A2540] dark:text-white not-italic">
                          — {caseItem.author}
                        </cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/#diagnostico"
            className="inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-300 px-6 py-3 text-base bg-[#7B4DFF] hover:bg-[#6D28D9] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
          >
            Quero resultados como esses
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
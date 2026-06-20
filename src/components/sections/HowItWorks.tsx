"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, Route, Zap, GraduationCap, TrendingUp, Sparkles } from "lucide-react"
import { HOW_IT_WORKS } from "@/lib/constants"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardCheck, Route, Zap, GraduationCap, TrendingUp,
}

export function HowItWorks() {
  return (
    <section className="section-padding bg-[#F8FAFC] dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 dark:bg-purple-900/30 px-4 py-1.5 text-sm font-medium text-[#7B4DFF] dark:text-[#9B7DFF] mb-4 border border-purple-200/50 dark:border-purple-700/30">
            <Sparkles className="w-4 h-4" />
            Passo a passo
          </span>
          <h2 className="section-title">{HOW_IT_WORKS.title}</h2>
          <p className="section-subtitle">{HOW_IT_WORKS.subtitle}</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden lg:block absolute top-24 left-[72px] right-[72px] h-0.5 bg-gradient-to-r from-[#7B4DFF]/10 via-[#7B4DFF]/60 to-[#7B4DFF]/10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {HOW_IT_WORKS.steps.map((step, index) => {
              const Icon = iconMap[step.icon]
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative z-10 w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-300">
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                  </div>
                  <span className="text-[10px] font-bold text-[#7B4DFF] dark:text-[#9B7DFF] uppercase tracking-widest mb-2">
                    Passo {step.number}
                  </span>
                  <h3 className="text-base font-bold text-[#0A2540] dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

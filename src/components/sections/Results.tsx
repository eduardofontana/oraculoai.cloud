"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { RESULTS } from "@/lib/constants"

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center px-1 sm:px-0">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2 break-words">
        {value}
      </div>
      <p className="text-base font-medium text-[#0A2540] dark:text-white">{label}</p>
    </div>
  )
}

export function Results() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            Números
          </span>
          <h2 className="section-title">{RESULTS.title}</h2>
          <p className="section-subtitle">{RESULTS.subtitle}</p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {RESULTS.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/40 dark:to-blue-900/40 border border-purple-100/50 dark:border-purple-800/30 shadow-premium"
            >
              {isInView && <AnimatedCounter value={metric.value} label={metric.label} />}
              <p className="text-sm text-gray-500 text-center mt-3">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

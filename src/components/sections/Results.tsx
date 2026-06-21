"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Clock, Zap } from "lucide-react"
import { RESULTS } from "@/lib/constants"

interface CounterProps {
  prefix?: string
  suffix?: string
  value: string
  label: string
  icon: React.ReactNode
  isInView: boolean
}

function AnimatedCounter({ prefix = "", suffix = "", value, label, icon, isInView }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const numericValue = parseInt(value.replace(/[^0-9]/g, ""))
    if (isNaN(numericValue)) return

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(increment * step, numericValue)
      setCount(Math.round(current))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  const displayValue = value.includes("%")
    ? `${prefix}${count}${suffix}%`
    : value.includes("24")
    ? value
    : value.includes("x")
    ? `${prefix}${count}${suffix}x`
    : `${prefix}${count}${suffix}`

  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
        {displayValue}
      </div>
      <p className="text-base font-medium text-[#0A2540] dark:text-white">{label}</p>
    </div>
  )
}

const iconMap = [
  <TrendingUp key="0" className="w-6 h-6 text-[#7B4DFF]" />,
  <BarChart3 key="1" className="w-6 h-6 text-[#7B4DFF]" />,
  <Clock key="2" className="w-6 h-6 text-[#7B4DFF]" />,
  <Zap key="3" className="w-6 h-6 text-[#7B4DFF]" />,
]

export function Results() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="resultados" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
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

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {RESULTS.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-premium hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300"
            >
              <AnimatedCounter
                value={metric.value}
                label={metric.label}
                icon={iconMap[index]}
                isInView={isInView}
                prefix=""
                suffix=""
              />
              <p className="text-sm text-gray-500 dark:text-gray-300 text-center mt-3 leading-relaxed">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

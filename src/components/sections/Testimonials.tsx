"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star, TrendingUp, Clock, Zap } from "lucide-react"
import { TESTIMONIALS } from "@/lib/constants"
import { cn } from "@/lib/utils"

const resultHighlights = [
  { icon: TrendingUp, label: "+40% atendimentos", color: "text-emerald-500" },
  { icon: Clock, label: "24h online", color: "text-blue-500" },
  { icon: Zap, label: "7 dias de implementação", color: "text-purple-500" },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.items.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.items.length) % TESTIMONIALS.items.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const item = TESTIMONIALS.items[current]

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  return (
    <section className="section-padding bg-white dark:bg-gray-900 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" />
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
            Depoimentos
          </span>
          <h2 className="section-title">{TESTIMONIALS.title}</h2>
          <p className="section-subtitle">{TESTIMONIALS.subtitle}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="w-full"
              >
                <div className="text-center px-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7B4DFF] to-[#6D28D9] flex items-center justify-center mx-auto mb-6 text-xl font-bold text-white shadow-lg shadow-purple-500/20">
                    {item.avatar}
                  </div>
                  <Quote className="w-10 h-10 text-[#7B4DFF]/15 mx-auto mb-4" />
                  <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6 italic font-[var(--font-heading)]">
                    &ldquo;{item.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="font-bold text-lg text-[#0A2540] dark:text-white">{item.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-200 dark:hover:border-purple-700 hover:text-[#7B4DFF] dark:hover:text-[#9B7DFF] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#7B4DFF] focus-visible:outline-none"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={cn(
                    "rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#7B4DFF] focus-visible:outline-none",
                    index === current ? "bg-[#7B4DFF] w-8 h-2.5" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 w-2.5 h-2.5"
                  )}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-200 dark:hover:border-purple-700 hover:text-[#7B4DFF] dark:hover:text-[#9B7DFF] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#7B4DFF] focus-visible:outline-none"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-10"
          >
            {resultHighlights.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-100/50 dark:border-purple-800/30 text-xs font-medium text-gray-600 dark:text-gray-300"
              >
                <Icon className={`w-3.5 h-3.5 ${color}`} />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { FAQ } from "@/lib/constants"
import { cn } from "@/lib/utils"

function AccordionItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-premium">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left bg-white hover:bg-gray-50/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold text-[#0A2540] flex-1">{q}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300",
            isOpen && "rotate-180 text-[#7B4DFF]"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1.5 text-sm font-medium text-[#7B4DFF] mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="section-title">{FAQ.title}</h2>
          <p className="section-subtitle">{FAQ.subtitle}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <AccordionItem
                q={item.q}
                a={item.a}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

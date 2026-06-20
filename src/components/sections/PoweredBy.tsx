"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Smartphone, Globe, BarChart3 } from "lucide-react"

const techStack = [
  { name: "Next.js", description: "Performance SSR", icon: Globe },
  { name: "React 19", description: "Interface moderna", icon: Smartphone },
  { name: "Tailwind CSS", description: "Design responsivo", icon: Zap },
  { name: "TypeScript", description: "Código seguro", icon: Shield },
  { name: "Hostinger", description: "Hospedagem premium", icon: BarChart3 },
]

export function PoweredBy() {
  return (
    <section className="py-10 sm:py-14 bg-[#F8FAFC] dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500">
            Stack que faz seu negócio decolar
          </span>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-premium hover:shadow-premium-lg hover:border-purple-200 dark:hover:border-purple-700/50 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4 h-4 text-[#7B4DFF] dark:text-[#9B7DFF]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-[#0A2540] dark:text-white">{tech.name}</p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500">{tech.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

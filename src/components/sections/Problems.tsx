"use client"

import { motion } from "framer-motion"
import { Clock, Users, TrendingDown, BarChart3, HardDrive, Shield } from "lucide-react"
import { PROBLEMS } from "@/lib/constants"
import { Card } from "@/components/ui/Card"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock, Users, TrendingDown, BarChart3, HardDrive, Shield,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export function Problems() {
  return (
    <section className="section-padding bg-[#F8FAFC] dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 dark:bg-red-900/30 px-4 py-1.5 text-sm font-medium text-red-500 dark:text-red-400 mb-4 border border-red-200/50 dark:border-red-800/30">
            Dores reais
          </span>
          <h2 className="section-title">{PROBLEMS.title}</h2>
          <p className="section-subtitle">{PROBLEMS.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROBLEMS.items.map((problem) => {
            const Icon = iconMap[problem.icon]
            return (
              <motion.div key={problem.title} variants={itemVariants}>
                <Card hover className="h-full group">
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="w-6 h-6 text-red-500 dark:text-red-400" />}
                  </div>
                   <h3 className="text-lg font-bold text-[#0A2540] dark:text-white mb-2">{problem.title}</h3>
                   <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">{problem.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

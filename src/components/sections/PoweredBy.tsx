"use client"

import { motion } from "framer-motion"

const tools = [
  { name: "Claude", svg: "/icons/claude.svg" },
  { name: "OpenClaw", svg: "/icons/openclaw.svg" },
  { name: "Hermes Agent", svg: "/icons/hermesagent.svg" },
  { name: "Codex", svg: "/icons/codex.svg" },
  { name: "Antigravity", svg: "/icons/antigravity.svg" },
]

export function PoweredBy() {
  return (
    <section className="py-10 sm:py-14 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500">
            Construído com tecnologia de ponta
          </span>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 group"
              >
                <img
                  src={tool.svg}
                  alt={tool.name}
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

const tools = [
  {
    name: "Claude Code",
    color: "#D97706",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <rect x="8" y="6" width="24" height="28" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M14 16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 26h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="28" cy="28" r="6" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
  {
    name: "OpenClaw",
    color: "#0F172A",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <path d="M20 4C14 4 10 10 10 16c0 8 10 16 10 16s10-8 10-16C30 10 26 4 20 4z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M16 14l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Hermes Agent",
    color: "#7C3AED",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 10v4M20 26v4M10 20h4M26 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Codex",
    color: "#059669",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <path d="M12 12l-6 8 6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M28 12l6 8-6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M22 8l-4 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "Antigravity",
    color: "#0D9488",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
        <path d="M20 6c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20 20v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 28h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M16 34l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      </svg>
    ),
  },
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
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tool.color, backgroundColor: `${tool.color}10` }}
                >
                  {tool.icon}
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Bot, Brain, Lightbulb, ShieldCheck, Globe, LayoutGrid, Check, Sparkles, ArrowRight } from "lucide-react"
import { SERVICES } from "@/lib/constants"
import { Card } from "@/components/ui/Card"
import { cn } from "@/lib/utils"

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot, Brain, Lightbulb, ShieldCheck, Globe, LayoutGrid,
}

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  gradient: string
  index: number
}

function ServiceCard({ icon, title, description, gradient, index }: ServiceCardProps) {
  const Icon = serviceIconMap[icon]
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Card hover className="h-full group">
        <div className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
          gradient
        )}>
          {Icon && <Icon className="w-7 h-7 text-white" />}
        </div>
        <h3 className="text-lg font-bold text-[#0A2540] dark:text-white mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  )
}

function PricingCard({ plan, index }: { plan: (typeof SERVICES.pricing.plans)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-1 flex flex-col",
        plan.highlight
          ? "bg-[#0A2540] dark:bg-[#0A2540] text-white border-transparent shadow-premium-xl glow-accent"
          : "bg-white dark:bg-gray-800 text-[#0A2540] dark:text-white border-gray-100 dark:border-gray-700 hover:shadow-premium-lg"
      )}
    >
      {plan.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7B4DFF] to-[#6D28D9] text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg shadow-purple-500/25">
          Mais Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <p className={cn("text-sm", plan.highlight ? "text-gray-300" : "text-gray-500")}>{plan.description}</p>
      </div>
      <div className="mb-6">
        <span className="text-4xl font-bold">{plan.price}</span>
        <span className={cn("text-sm ml-1", plan.highlight ? "text-gray-300" : "text-gray-400")}>{plan.period}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check className={cn(
              "w-5 h-5 flex-shrink-0 mt-0.5",
              plan.highlight ? "text-emerald-400" : "text-emerald-500"
            )} />
            <span className={plan.highlight ? "text-gray-200" : "text-gray-600 dark:text-gray-300"}>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={plan.highlight ? "/#diagnostico" : "https://wa.me/5511999999999"}
        target={!plan.highlight ? "_blank" : undefined}
        rel={!plan.highlight ? "noopener noreferrer" : undefined}
        className={cn(
          "group block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2",
          plan.highlight
            ? "bg-[#7B4DFF] hover:bg-[#6D28D9] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            : "bg-[#0A2540] hover:bg-[#1a3a5c] text-white"
        )}
      >
        {plan.cta}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="servicos" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
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
            Nossas soluções
          </span>
          <h2 className="section-title">{SERVICES.title}</h2>
          <p className="section-subtitle">{SERVICES.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SERVICES.items.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{SERVICES.pricing.title}</h2>
          <p className="section-subtitle">{SERVICES.pricing.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {SERVICES.pricing.plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Target, Headphones, PiggyBank, Rocket, Award, Shield, Sparkles } from "lucide-react"
import { WHY_US } from "@/lib/constants"
import { Card } from "@/components/ui/Card"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target, Headphones, PiggyBank, Rocket, Award, Shield,
}

export function WhyUs() {
  return (
    <section className="section-padding bg-[#F8FAFC] dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
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
            Diferenciais
          </span>
          <h2 className="section-title">{WHY_US.title}</h2>
          <p className="section-subtitle">{WHY_US.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_US.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon]
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card hover className="h-full group">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="w-6 h-6 text-[#7B4DFF] dark:text-[#9B7DFF]" />}
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 text-center shadow-premium hover:shadow-premium-lg transition-all duration-300"
        >
          <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/20">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-[#0A2540] dark:text-white mb-2">Parceiro Oficial Hostinger</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Todos os planos incluem hospedagem, e-mail profissional e infraestrutura Hostinger — a melhor plataforma de hospedagem do mundo.
          </p>
          <a
            href="https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=LJOFONTANIXB&referral_id=019ede22-fbe3-735b-999b-d80410738aed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7B4DFF] hover:text-[#6D28D9] transition-colors group"
          >
            Saiba mais sobre a parceria <Rocket className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

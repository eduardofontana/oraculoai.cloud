"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles, Target, Eye, Heart, Shield } from "lucide-react"
import { ABOUT } from "@/lib/constants"
import { Card } from "@/components/ui/Card"
import { AdBanner } from "@/components/ads/AdBanner"

const valueIcons = [Target, Eye, Heart, Shield]

export function AboutContent() {
  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white dark:bg-gray-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 dark:bg-purple-900/30 px-4 py-1.5 text-sm font-medium text-[#7B4DFF] dark:text-[#9B7DFF] mb-4">
              <Sparkles className="w-4 h-4" />
              Quem somos
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540] dark:text-white mb-6">
              {ABOUT.title}
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-300 leading-relaxed">{ABOUT.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC] dark:bg-gray-950">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] dark:text-white mb-4">Nossa Missão</h2>
              <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-lg">{ABOUT.mission}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] dark:text-white mb-4">Nossa Visão</h2>
              <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-lg">{ABOUT.vision}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] dark:text-white mb-4">Nossos Valores</h2>
            <p className="text-gray-500 dark:text-gray-300 max-w-xl mx-auto">Os princípios que guiam cada decisão na OráculoAI.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {ABOUT.values.map((value, index) => {
              const Icon = valueIcons[index]
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                      {Icon && <Icon className="w-6 h-6 text-[#7B4DFF] dark:text-[#9B7DFF]" />}
                    </div>
                    <h3 className="font-bold text-[#0A2540] dark:text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{value.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <AdBanner slot="about_values_team" format="horizontal" className="my-12" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] dark:text-white mb-4">Nosso Time</h2>
            <p className="text-gray-500 dark:text-gray-300 max-w-xl mx-auto">Conheça as pessoas por trás da OráculoAI.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT.team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden shadow-lg shadow-purple-500/20">
                    <Image src={member.imageUrl} alt={member.name} width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-[#0A2540] dark:text-white">{member.name}</h3>
                  <p className="text-sm text-[#7B4DFF] dark:text-[#9B7DFF] font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

import { motion } from "framer-motion"
import { Sparkles, Target, Eye, Heart, Shield } from "lucide-react"
import { ABOUT } from "@/lib/constants"
import { Card } from "@/components/ui/Card"

const valueIcons = [Target, Eye, Heart, Shield]

export function AboutContent() {
  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
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
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1.5 text-sm font-medium text-[#7B4DFF] mb-4">
              <Sparkles className="w-4 h-4" />
              Quem somos
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6">
              {ABOUT.title}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">{ABOUT.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-4">Nossa Missão</h2>
              <p className="text-gray-500 leading-relaxed text-lg">{ABOUT.mission}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-4">Nossa Visão</h2>
              <p className="text-gray-500 leading-relaxed text-lg">{ABOUT.vision}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-4">Nossos Valores</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Os princípios que guiam cada decisão na OráculoAI.</p>
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
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mx-auto mb-4">
                      {Icon && <Icon className="w-6 h-6 text-[#7B4DFF]" />}
                    </div>
                    <h3 className="font-bold text-[#0A2540] mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-500">{value.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-4">Nosso Time</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Conheça as pessoas por trás da OráculoAI.</p>
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
                  <div className="w-20 h-20 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-lg shadow-purple-500/20">
                    {member.avatar}
                  </div>
                  <h3 className="font-bold text-[#0A2540]">{member.name}</h3>
                  <p className="text-sm text-[#7B4DFF] font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

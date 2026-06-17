"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, Sparkles } from "lucide-react"
import { CONTACT, SITE } from "@/lib/constants"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const contactIcons = [Mail, Phone, MapPin]

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const templateParams = {
        to_name: "Equipe OráculoAI",
        from_name: data.get("nome"),
        from_email: data.get("email"),
        telefone: data.get("telefone"),
        assunto: data.get("assunto"),
        mensagem: data.get("mensagem"),
        message: `Nova mensagem de ${data.get("nome")} - ${data.get("assunto")}`,
      }

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
          template_params: templateParams,
        }),
      })

      if (!response.ok) throw new Error("Erro ao enviar")
      setSubmitted(true)
      form.reset()
    } catch {
      alert("Erro ao enviar. Tente novamente ou nos chame no WhatsApp.")
    }
  }

  return (
    <>
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
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
              Fale conosco
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6">
              {CONTACT.title}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">{CONTACT.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {CONTACT.info.map((item, index) => {
                const Icon = contactIcons[index]
                return (
                  <Card key={item.label}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                        {Icon && <Icon className="w-6 h-6 text-[#7B4DFF]" />}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="font-semibold text-[#0A2540]">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}

              <Card>
                <h3 className="font-bold text-[#0A2540] mb-3">Redes Sociais</h3>
                <div className="flex gap-3">
                  <a
                    href={`https://instagram.com/${SITE.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-50 text-[#7B4DFF] hover:bg-purple-100 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a
                    href={`https://linkedin.com/company/${SITE.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-50 text-[#7B4DFF] hover:bg-purple-100 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 text-[#25D366] hover:bg-green-100 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-white rounded-2xl p-8 shadow-premium border border-gray-100 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">Mensagem enviada! 🎉</h3>
                  <p className="text-gray-500 mb-6">
                    Recebemos sua mensagem e responderemos em até 24h.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-premium border border-gray-100 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nome *</label>
                      <input
                        name="nome"
                        required
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B4DFF] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B4DFF] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Telefone</label>
                      <input
                        name="telefone"
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B4DFF] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Assunto *</label>
                      <select
                        name="assunto"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B4DFF] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Selecione...</option>
                        <option value="Quero um orçamento">Quero um orçamento</option>
                        <option value="Dúvida sobre serviços">Dúvida sobre serviços</option>
                        <option value="Parceria / Revenda">Parceria / Revenda</option>
                        <option value="Suporte">Suporte</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mensagem *</label>
                    <textarea
                      name="mensagem"
                      required
                      rows={5}
                      placeholder="Conte como podemos ajudar..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B4DFF] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full justify-center">
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

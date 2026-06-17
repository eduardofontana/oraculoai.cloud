"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ClipboardCheck, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"

const schema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  empresa: z.string().min(2, "Nome da empresa é obrigatório"),
  segmento: z.string().min(1, "Selecione um segmento"),
  funcionarios: z.string().min(1, "Selecione uma opção"),
  desafio: z.string().min(10, "Conte um pouco mais sobre seu desafio"),
})

type FormData = z.infer<typeof schema>

const SEGMENTOS = [
  "Clínica / Saúde",
  "Advocacia / Jurídico",
  "Loja / E-commerce",
  "Academia / Esportes",
  "Restaurante / Alimentação",
  "Corretora / Imóveis",
  "Consultoria / Serviços",
  "Outro",
]

const FUNCIONARIOS = [
  "Só eu (autônomo)",
  "2 a 5 funcionários",
  "6 a 15 funcionários",
  "16 a 30 funcionários",
  "Mais de 30 funcionários",
]

export function DiagnosisForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      const templateParams = {
        to_name: "Equipe OráculoAI",
        from_name: data.nome,
        from_email: data.email,
        telefone: data.telefone,
        empresa: data.empresa,
        segmento: data.segmento,
        funcionarios: data.funcionarios,
        desafio: data.desafio,
        message: `Nova solicitação de diagnóstico de ${data.nome} (${data.email}) - ${data.empresa}`,
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

      if (!response.ok) throw new Error("Erro ao enviar formulário")

      setIsSubmitted(true)
      reset()
    } catch {
      alert("Erro ao enviar. Tente novamente ou nos chame no WhatsApp.")
    }
  }

  if (isSubmitted) {
    return (
      <section id="diagnostico" className="section-padding bg-[#F8FAFC]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">Diagnóstico recebido! 🎉</h2>
            <p className="text-gray-500 text-lg mb-8">
              Nossa equipe vai analisar seu negócio e enviar um diagnóstico personalizado em até 24h.
              Fique de olho no WhatsApp e email!
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Enviar outro diagnóstico
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="diagnostico" className="section-padding bg-[#F8FAFC]">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-accent mb-4 shadow-lg shadow-purple-500/20">
            <ClipboardCheck className="w-7 h-7 text-white" />
          </div>
          <h2 className="section-title">Diagnóstico Gratuito</h2>
          <p className="section-subtitle">
            Preencha o formulário abaixo e nossa equipe analisará seu negócio. Em até 24h você recebe um diagnóstico personalizado com oportunidades de automação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-premium border border-gray-100 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-1.5">Nome *</label>
                <input
                  id="nome"
                  {...register("nome")}
                  autoComplete="name"
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B4DFF] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                />
                {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                <input
                  id="email"
                  {...register("email")}
                  autoComplete="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B4DFF] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-1.5">Telefone / WhatsApp *</label>
                <input
                  id="telefone"
                  {...register("telefone")}
                  autoComplete="tel"
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B4DFF] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                />
                {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone.message}</p>}
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-semibold text-gray-700 mb-1.5">Empresa *</label>
                <input
                  id="empresa"
                  {...register("empresa")}
                  autoComplete="organization"
                  placeholder="Nome da sua empresa"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B4DFF] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                />
                {errors.empresa && <p className="text-red-500 text-xs mt-1">{errors.empresa.message}</p>}
              </div>
              <div>
                <label htmlFor="segmento" className="block text-sm font-semibold text-gray-700 mb-1.5">Segmento *</label>
                <select
                  id="segmento"
                  {...register("segmento")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B4DFF] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm bg-white"
                >
                  <option value="">Selecione...</option>
                  {SEGMENTOS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.segmento && <p className="text-red-500 text-xs mt-1">{errors.segmento.message}</p>}
              </div>
              <div>
                <label htmlFor="funcionarios" className="block text-sm font-semibold text-gray-700 mb-1.5">Funcionários *</label>
                <select
                  id="funcionarios"
                  {...register("funcionarios")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B4DFF] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm bg-white"
                >
                  <option value="">Selecione...</option>
                  {FUNCIONARIOS.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
                {errors.funcionarios && <p className="text-red-500 text-xs mt-1">{errors.funcionarios.message}</p>}
              </div>
            </div>

              <div>
                <label htmlFor="desafio" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Qual seu principal desafio? *
                </label>
                <textarea
                  id="desafio"
                  {...register("desafio")}
                  autoComplete="off"
                  rows={4}
                  placeholder="Conte um pouco sobre os desafios que seu negócio enfrenta hoje..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7B4DFF] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm resize-none"
                />
                {errors.desafio && <p className="text-red-500 text-xs mt-1">{errors.desafio.message}</p>}
            </div>

            <p className="text-xs text-gray-400">
              Ao enviar, você autoriza a OráculoAI a entrar em contato. Seus dados estão protegidos conforme a LGPD.
            </p>

            <Button type="submit" loading={isSubmitting} size="lg" className="w-full justify-center">
              <Send className="w-5 h-5" />
              {isSubmitting ? "Enviando..." : "Enviar Diagnóstico Gratuito"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

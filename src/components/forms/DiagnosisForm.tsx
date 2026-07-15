"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, Check, LoaderCircle, RotateCcw } from "lucide-react"
import { diagnosisSchema, type DiagnosisFormData, type DiagnosisFormInput } from "@/lib/forms"
import { Field } from "@/components/forms/Field"
import { getCsrfToken } from "@/lib/csrf"

const segmentos = ["Clínica / Saúde", "Advocacia / Jurídico", "Loja / E-commerce", "Restaurante / Alimentação", "Imóveis", "Consultoria / Serviços", "Outro"]
const equipes = ["Só eu", "2 a 5 pessoas", "6 a 15 pessoas", "16 a 30 pessoas", "Mais de 30 pessoas"]
const fieldOrder = ["nome", "email", "telefone", "empresa", "segmento", "funcionarios", "desafio"] as const

export function DiagnosisForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { register, handleSubmit, reset, setFocus, formState: { errors, isSubmitting, submitCount } } = useForm<DiagnosisFormInput, unknown, DiagnosisFormData>({
    resolver: zodResolver(diagnosisSchema),
  })

  useEffect(() => {
    if (submitCount === 0) return
    const firstInvalid = fieldOrder.find((field) => errors[field])
    if (firstInvalid) setFocus(firstInvalid)
  }, [errors, setFocus, submitCount])

  const onSubmit = async (data: DiagnosisFormData) => {
    setSubmitError(null)
    try {
      const response = await fetch("/api/diagnosis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": getCsrfToken() || "",
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.error || "Não foi possível enviar agora.")
      }
      setSubmitted(true)
      reset()
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Não foi possível enviar agora. Tente novamente.")
    }
  }

  return (
    <section id="diagnostico" className="diagnosis-section" aria-labelledby="diagnosis-title">
      <div className="container-main diagnosis-layout">
        <div className="diagnosis-intro">
          <span className="eyebrow">Diagnóstico gratuito</span>
          <h2 id="diagnosis-title">Conte um pouco sobre a sua rotina.</h2>
          <p>
            Em poucos minutos, descreva o que mais consome tempo hoje. Em até 24h, retornamos com sugestões práticas,
            sem compromisso e com prioridade de contato.
          </p>
          <p className="lgpd-note">Seus dados são usados apenas para análise do diagnóstico. Respeitamos a LGPD e não compartilhamos sem sua autorização.</p>
          <ol>
            <li><span>01</span> Você descreve a operação.</li>
            <li><span>02</span> Nós identificamos hipóteses de automação.</li>
            <li><span>03</span> O próximo passo é combinado com clareza.</li>
          </ol>
        </div>

        {submitted ? (
          <div className="diagnosis-success" role="status" aria-live="polite">
            <span><Check aria-hidden="true" /></span>
            <p className="mono-label">CONTEXTO RECEBIDO</p>
            <h3>Seu diagnóstico entrou no mapa.</h3>
            <p>As informações serão analisadas antes de qualquer recomendação ou contato.</p>
            <button type="button" className="button button--ghost" onClick={() => setSubmitted(false)}>
              <RotateCcw aria-hidden="true" /> Enviar outro diagnóstico
            </button>
          </div>
        ) : (
          <form className="diagnosis-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="bot-field" aria-hidden="true">
              <label htmlFor="diagnosis-website">Site</label>
              <input id="diagnosis-website" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>
            <div className="form-grid">
              <Field label="Seu nome" error={errors.nome?.message} htmlFor="nome">
                <input id="nome" autoComplete="name" aria-invalid={Boolean(errors.nome)} aria-describedby={errors.nome ? "nome-error" : undefined} {...register("nome")} />
              </Field>
              <Field label="E-mail" error={errors.email?.message} htmlFor="email">
                <input id="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
              </Field>
              <Field label="Telefone / WhatsApp" error={errors.telefone?.message} htmlFor="telefone">
                <input id="telefone" type="tel" inputMode="tel" autoComplete="tel" aria-invalid={Boolean(errors.telefone)} aria-describedby={errors.telefone ? "telefone-error" : undefined} {...register("telefone")} />
              </Field>
              <Field label="Nome do negócio" error={errors.empresa?.message} htmlFor="empresa">
                <input id="empresa" autoComplete="organization" aria-invalid={Boolean(errors.empresa)} aria-describedby={errors.empresa ? "empresa-error" : undefined} {...register("empresa")} />
              </Field>
              <Field label="Segmento" error={errors.segmento?.message} htmlFor="segmento">
                <select id="segmento" defaultValue="" aria-invalid={Boolean(errors.segmento)} aria-describedby={errors.segmento ? "segmento-error" : undefined} {...register("segmento")}>
                  <option value="" disabled>Selecione</option>
                  {segmentos.map((item) => <option key={item}>{item}</option>)}
                </select>
              </Field>
              <Field label="Tamanho da equipe" error={errors.funcionarios?.message} htmlFor="funcionarios">
                <select id="funcionarios" defaultValue="" aria-invalid={Boolean(errors.funcionarios)} aria-describedby={errors.funcionarios ? "funcionarios-error" : undefined} {...register("funcionarios")}>
                  <option value="" disabled>Selecione</option>
                  {equipes.map((item) => <option key={item}>{item}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Qual processo mais consome tempo hoje?" error={errors.desafio?.message} htmlFor="desafio">
              <textarea id="desafio" rows={5} placeholder="Ex.: responder as mesmas dúvidas, organizar agendamentos, acompanhar novos contatos..." aria-invalid={Boolean(errors.desafio)} aria-describedby={errors.desafio ? "desafio-error" : undefined} {...register("desafio")} />
            </Field>
            {submitError ? <div className="form-status form-status--error" role="alert">{submitError} Revise os dados ou tente novamente em instantes.</div> : null}
            <div className="form-footer">
              <p>Ao enviar, você concorda com o contato sobre este diagnóstico. Consulte a <a href="/privacidade">Política de Privacidade</a>.</p>
              <button className="button button--primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? <LoaderCircle className="spin" aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
                {isSubmitting ? "Enviando contexto..." : "Enviar para análise"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

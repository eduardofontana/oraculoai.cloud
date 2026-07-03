"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { ArrowRight, Check, LoaderCircle } from "lucide-react"
import { contactSchema, type ContactFormData, type ContactFormInput } from "@/lib/forms"

const fieldOrder = ["nome", "email", "telefone", "assunto", "mensagem"] as const

export function ContactContent() {
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { register, handleSubmit, reset, setFocus, formState: { errors, isSubmitting, submitCount } } = useForm<ContactFormInput, unknown, ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  useEffect(() => {
    const firstInvalid = fieldOrder.find((field) => errors[field])
    if (firstInvalid) setFocus(firstInvalid)
  }, [errors, setFocus, submitCount])

  async function submit(data: ContactFormData) {
    setSubmitError(null)
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      if (!response.ok) {
        const body = await response.json().catch(() => null)
        throw new Error(body?.error || "Falha no envio")
      }
      setSuccess(true)
      reset()
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "A mensagem não foi enviada. Tente novamente em instantes.")
    }
  }

  return (
    <>
      <header className="page-hero"><div className="container-main"><span className="eyebrow">Contato</span><h1>Uma conversa começa melhor com contexto.</h1><p>Para avaliar uma oportunidade de automação, prefira o diagnóstico. Para outros assuntos, use o formulário abaixo.</p></div></header>
      <section className="page-section"><div className="container-main diagnosis-layout">
        <div className="diagnosis-intro"><span className="eyebrow">Canal direto</span><h2>Escreva para a OráculoAI.</h2><p>Não exibimos telefones ou perfis provisórios. A mensagem é enviada pelo canal configurado no projeto.</p><Link className="button button--ghost" href="/#diagnostico">Prefiro o diagnóstico <ArrowRight aria-hidden="true" /></Link></div>
        {success ? <div className="diagnosis-success" role="status" aria-live="polite"><span><Check aria-hidden="true" /></span><p className="mono-label">MENSAGEM RECEBIDA</p><h3>Obrigado pelo contexto.</h3><p>A mensagem foi enviada para análise.</p></div> : (
          <form className="diagnosis-form" onSubmit={handleSubmit(submit)} noValidate>
            <div className="bot-field" aria-hidden="true">
              <label htmlFor="contact-website">Site</label>
              <input id="contact-website" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>
            <div className="form-grid">
              <Field label="Seu nome" error={errors.nome?.message} htmlFor="nome">
                <input id="nome" autoComplete="name" aria-invalid={Boolean(errors.nome)} aria-describedby={errors.nome ? "nome-error" : undefined} {...register("nome")} />
              </Field>
              <Field label="E-mail" error={errors.email?.message} htmlFor="email">
                <input id="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
              </Field>
              <Field label="Telefone" error={errors.telefone?.message} htmlFor="telefone" optional>
                <input id="telefone" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.telefone)} aria-describedby={errors.telefone ? "telefone-error" : undefined} {...register("telefone")} />
              </Field>
              <Field label="Assunto" error={errors.assunto?.message} htmlFor="assunto">
                <input id="assunto" aria-invalid={Boolean(errors.assunto)} aria-describedby={errors.assunto ? "assunto-error" : undefined} {...register("assunto")} />
              </Field>
            </div>
            <Field label="Mensagem" error={errors.mensagem?.message} htmlFor="mensagem">
              <textarea id="mensagem" rows={6} aria-invalid={Boolean(errors.mensagem)} aria-describedby={errors.mensagem ? "mensagem-error" : undefined} {...register("mensagem")} />
            </Field>
            {submitError ? <div className="form-status form-status--error" role="alert">{submitError} Revise os dados ou tente novamente em instantes.</div> : null}
            <div className="form-footer"><p>Ao enviar, você concorda com o tratamento descrito na <Link href="/privacidade">Política de Privacidade</Link>.</p><button className="button button--primary" type="submit" disabled={isSubmitting}>{isSubmitting ? <LoaderCircle className="spin" aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}{isSubmitting ? "Enviando..." : "Enviar mensagem"}</button></div>
          </form>
        )}
      </div></section>
    </>
  )
}

function Field({ label, error, htmlFor, children, optional = false }: { label: string; error?: string; htmlFor: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <div className="field">
      <label htmlFor={htmlFor}>{label}{optional ? null : <span aria-hidden="true"> *</span>}</label>
      {children}
      {error ? <p id={`${htmlFor}-error`} className="field-error" role="alert">{error}</p> : null}
    </div>
  )
}

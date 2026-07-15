"use client"

import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Bot, FileSearch, MessageCircle, X } from "lucide-react"

export function FloatingChat() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <div className="floating-chat">
      <AnimatePresence>
        {open ? (
          <motion.div
            className="floating-chat__panel"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12, scale: .96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 8, scale: .98 }}
            transition={{ duration: reduceMotion ? 0 : .2 }}
          >
            <header>
              <span><Bot aria-hidden="true" /></span>
              <div><strong>Oráculo</strong><small>Atalhos de navegação</small></div>
            </header>
            <p>Posso levar você ao ponto certo. Nenhuma resposta aqui substitui a análise humana do diagnóstico.</p>
            <nav aria-label="Atalhos do Oráculo">
              <Link href="/#diagnostico" onClick={() => setOpen(false)}><span><FileSearch aria-hidden="true" /> Diagnóstico</span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/#solucoes" onClick={() => setOpen(false)}><span><Bot aria-hidden="true" /> Soluções</span><ArrowRight aria-hidden="true" /></Link>
              <Link href="/contato" onClick={() => setOpen(false)}><span><MessageCircle aria-hidden="true" /> Contato</span><ArrowRight aria-hidden="true" /></Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button className="floating-chat__trigger" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Fechar atalhos" : "Abrir atalhos do Oráculo"}>
        {open ? <X aria-hidden="true" /> : <Bot aria-hidden="true" />}
      </button>
    </div>
  )
}

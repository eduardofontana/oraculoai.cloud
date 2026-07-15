"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Wordmark } from "@/components/brand/Wordmark"
import { NAVIGATION } from "@/lib/content"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduceMotion = useReducedMotion()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    if (!open) return
    const firstLink = mobileNavRef.current?.querySelector<HTMLAnchorElement>("a")
    firstLink?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      setOpen(false)
      menuButtonRef.current?.focus()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open])

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container-main site-header__inner">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {NAVIGATION.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link href="/#diagnostico" className="header-cta">
          Vamos conversar <ArrowUpRight aria-hidden="true" />
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            ref={mobileNavRef}
            id="mobile-navigation"
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <nav aria-label="Navegação móvel">
              {NAVIGATION.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
              ))}
              <Link className="button button--primary" href="/#diagnostico" onClick={() => setOpen(false)}>
                Iniciar diagnóstico <ArrowUpRight aria-hidden="true" />
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

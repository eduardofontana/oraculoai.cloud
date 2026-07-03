import type { ReactNode } from "react"

export function LegalDocument({ label, title, description, children }: { label: string; title: string; description: string; children: ReactNode }) {
  return (
    <>
      <header className="page-hero"><div className="container-main"><span className="eyebrow">{label}</span><h1>{title}</h1><p>{description}</p></div></header>
      <section className="page-section"><div className="container-main legal-layout"><aside className="legal-aside">ÚLTIMA ATUALIZAÇÃO<br />JUNHO DE 2026</aside><div className="legal-content">{children}</div></div></section>
    </>
  )
}

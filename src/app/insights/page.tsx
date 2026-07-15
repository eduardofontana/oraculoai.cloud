import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { INSIGHTS } from "@/lib/insights"

export const metadata: Metadata = {
  title: "Insights",
  description: "Guias práticos sobre automação e IA para pequenos negócios e profissionais autônomos.",
}

export default function InsightsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container-main">
          <span className="eyebrow">Insights OráculoAI</span>
          <h1>IA aplicada, sem complicação.</h1>
          <p>Conteúdo direto para escolher melhor o que automatizar e manter seu negócio no controle.</p>
        </div>
      </header>
      <section className="arrow-section">
        <div className="container-main insights-grid">
          {INSIGHTS.map((insight, index) => (
            <Link href={`/insights/${insight.slug}`} className="insight-card" key={insight.slug}>
              <div className={`insight-art insight-art--${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div>
                <span className="card-label">{insight.category} · {insight.readingTime}</span>
                <h2>{insight.title}</h2>
                <p>{insight.excerpt}</p>
                <strong>Ler artigo <ArrowRight aria-hidden="true" /></strong>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

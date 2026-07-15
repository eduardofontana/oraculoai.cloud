import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"
import { getInsight, INSIGHTS } from "@/lib/insights"

type InsightPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return INSIGHTS.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const insight = getInsight((await params).slug)
  if (!insight) return {}
  return { title: insight.title, description: insight.excerpt }
}

export default async function InsightPage({ params }: InsightPageProps) {
  const insight = getInsight((await params).slug)
  if (!insight) notFound()

  return (
    <article>
      <header className="page-hero article-hero">
        <div className="container-main">
          <div className="article-meta"><span>{insight.category}</span><span>·</span><time>{insight.publishedAt}</time><span>·</span><span>{insight.readingTime}</span></div>
          <h1>{insight.title}</h1>
          <p>{insight.excerpt}</p>
        </div>
      </header>
      <div className="article-shell">
        <Link href="/insights"><ArrowLeft aria-hidden="true" /> Todos os insights</Link>
        {insight.content.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
        <aside className="article-next">
          <span className="eyebrow">Próximo passo</span>
          <h2>Quer encontrar uma oportunidade na sua rotina?</h2>
          <Link className="button button--primary" href="/#diagnostico">Fazer diagnóstico <ArrowRight aria-hidden="true" /></Link>
        </aside>
      </div>
    </article>
  )
}

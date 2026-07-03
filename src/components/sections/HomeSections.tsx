import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarCheck,
  Check,
  FileText,
  LockKeyhole,
  Mail,
  MessageSquareText,
  PenTool,
  Route,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react"
import {
  BENEFITS,
  CAPABILITIES,
  CONTROL_POINTS,
  EXPECTATIONS,
  FAQ_ITEMS,
  INTEGRATIONS,
  PLANS,
  PROCESS,
  ROUTINES,
  SEGMENTS,
  TRUST_CHECKLIST,
} from "@/lib/content"
import { INSIGHTS } from "@/lib/insights"

const benefitIcons = [Zap, Users, CalendarCheck, Workflow, BarChart3, LockKeyhole]

export function HomeSections() {
  return (
    <>
      <section className="logo-strip" aria-labelledby="segments-title">
        <p id="segments-title">Rotinas reais para negócios como o seu</p>
        <div className="marquee" aria-label="Segmentos atendidos">
          <div>{[...SEGMENTS, ...SEGMENTS].map((segment, index) => <span key={`${segment}-${index}`}><Sparkles aria-hidden="true" />{segment}</span>)}</div>
        </div>
      </section>

      <section id="beneficios" className="arrow-section benefits-section">
        <div className="container-main">
          <SectionHeading eyebrow="O que muda na rotina" title="Menos caça a informação. Mais próxima ação." text="O ganho não vem de deixar a IA solta. Vem de organizar entradas, prazos e decisões em um fluxo que você entende." />
          <div className="benefits-grid">
            {BENEFITS.map((benefit, index) => {
              const Icon = benefitIcons[index]
              return <article className="benefit-card" key={benefit.title}><span><Icon aria-hidden="true" /></span><h3>{benefit.title}</h3><p>{benefit.description}</p></article>
            })}
          </div>
        </div>
      </section>

      <section id="solucoes" className="arrow-section routines-section">
        <div className="container-main">
          <SectionHeading eyebrow="Rotinas automatizáveis" title="Cada automação nasce de uma cena real do seu dia" text="Antes de escolher ferramenta, o diagnóstico mostra onde a operação perde tempo, contexto e oportunidade." />
          <div className="routines-grid">
            {ROUTINES.map((routine, index) => (
              <article className="routine-card" key={routine.title}>
                <div className="routine-card__visual"><RoutineVisual index={index} /></div>
                <div className="routine-card__copy">
                  <span className="card-label">{routine.output}</span>
                  <h3>{routine.title}</h3>
                  <div className="routine-comparison">
                    <p><strong>Antes</strong>{routine.before}</p>
                    <p><strong>Depois</strong>{routine.after}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="arrow-section control-section">
        <div className="container-main control-layout">
          <div>
            <SectionHeading eyebrow="Controle em cada etapa" title="A automação boa tem freios visíveis" text="O projeto define onde a IA ajuda, onde ela para e quais dados precisa para operar sem excesso." align="left" />
            <div className="control-grid">
              {CONTROL_POINTS.map((item) => (
                <article key={item.title}>
                  <ShieldCheck aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="trust-panel" aria-label="Checklist de implantação segura">
            <span className="card-label">Amostra do diagnóstico</span>
            <h3>O que fica claro antes de colocar no ar</h3>
            <ul>
              {TRUST_CHECKLIST.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section id="processo" className="arrow-section process-section">
        <div className="container-main">
          <SectionHeading eyebrow="Processo" title="Diagnosticar, testar, colocar no ar" text="Um caminho curto, mas cuidadoso: entender a rotina, validar com situações reais e só então automatizar." />
          <ol className="process-grid">
            {PROCESS.map((step) => <li key={step.number}><span className="process-number">{step.number}</span><div className="process-visual"><ProcessGraphic index={step.number} /></div><h3>{step.title}</h3><p>{step.description}</p><ul>{step.tags.map((tag) => <li key={tag}><Check aria-hidden="true" />{tag}</li>)}</ul></li>)}
          </ol>
        </div>
      </section>

      <section className="arrow-section integrations-section">
        <div className="container-main">
          <SectionHeading eyebrow="Integrações" title="A rotina conecta as ferramentas, não o contrário" text="WhatsApp, agenda, planilhas e CRM entram quando resolvem um fluxo claro e com permissão adequada." />
          <div className="integration-cloud">{INTEGRATIONS.map((item, index) => <span key={item} style={{ "--delay": `${index * .15}s` } as React.CSSProperties}>{item}</span>)}</div>
        </div>
      </section>

      <section className="arrow-section insights-section">
        <div className="container-main">
          <SectionHeading eyebrow="Conteúdo" title="IA sem mistério" text="Guias práticos para entender onde a automação faz sentido no pequeno negócio." />
          <div className="insights-grid">{INSIGHTS.map((insight, index) => <Link href={`/insights/${insight.slug}`} className="insight-card" key={insight.slug}><div className={`insight-art insight-art--${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span></div><div><span className="card-label">{insight.category} · {insight.readingTime}</span><h3>{insight.title}</h3><p>{insight.excerpt}</p><strong>Ler artigo <ArrowRight aria-hidden="true" /></strong></div></Link>)}</div>
        </div>
      </section>

      <section id="planos" className="arrow-section plans-section">
        <div className="container-main">
          <SectionHeading eyebrow="Modelos de contratação" title="Comece pelo tamanho certo do risco" text="O investimento continua sob diagnóstico, mas o formato fica claro: quantidade de fluxos, integrações e acompanhamento." />
          <div className="plans-grid">{PLANS.map((plan) => <article className={`plan-card ${plan.highlight ? "is-highlighted" : ""}`} key={plan.name}>{plan.highlight ? <span className="popular-label">Mais completo</span> : null}<h3>{plan.name}</h3><p>{plan.description}</p><div className="plan-price">Sob diagnóstico</div><dl className="plan-meta"><div><dt>Indicado para</dt><dd>{plan.fit}</dd></div><div><dt>Ritmo</dt><dd>{plan.timing}</dd></div></dl><ul>{plan.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul><Link href="/#diagnostico" className="button button--plan">Conhecer este modelo <ArrowRight aria-hidden="true" /></Link></article>)}</div>
        </div>
      </section>

      <section className="arrow-section expectations-section">
        <div className="container-main">
          <SectionHeading eyebrow="Expectativas honestas" title="Sem números inventados. Com critérios claros." text="O compromisso é clareza sobre o que a automação faz, quando ela deve parar e o que continua humano." />
          <div className="expectations-grid">{EXPECTATIONS.map((item, index) => <article key={item.title}><span>0{index + 1}</span><blockquote>{item.title}</blockquote><p>{item.description}</p></article>)}</div>
        </div>
      </section>

      <section className="arrow-section capabilities-section">
        <div className="container-main">
          <SectionHeading eyebrow="Competências" title="Um projeto de IA também é projeto de operação" text="Tecnologia, processo, conteúdo e segurança entram juntos para a rotina não ficar frágil." />
          <div className="capabilities-grid">{CAPABILITIES.map((item, index) => <article key={item.title}><div className={`capability-avatar capability-avatar--${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span></div><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        </div>
      </section>

      <section id="faq" className="arrow-section faq-section">
        <div className="container-main faq-shell">
          <SectionHeading eyebrow="FAQ" title="Perguntas comuns" text="Respostas claras antes de começar um diagnóstico." align="left" />
          <div className="faq-list">{FAQ_ITEMS.map((item, index) => <details key={item.question} open={index === 0}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="closing-cta"><div className="closing-glow" aria-hidden="true" /><div className="container-main"><h2>Pronto para transformar rotina em sistema?</h2><p>Conte onde a operação trava. O diagnóstico mostra se IA, automação ou processo simples resolvem melhor.</p><Link href="/#diagnostico" className="button button--primary">Começar diagnóstico <ArrowRight aria-hidden="true" /></Link></div></section>
    </>
  )
}

function SectionHeading({ eyebrow, title, text, align = "center" }: { eyebrow: string; title: string; text: string; align?: "center" | "left" }) {
  return <div className={`arrow-heading ${align === "left" ? "arrow-heading--left" : ""}`}><span>{eyebrow}</span><h2>{title}</h2><p>{text}</p></div>
}

function RoutineVisual({ index }: { index: number }) {
  if (index === 0) return <ChatDemo />
  if (index === 1) return <AgendaDemo />
  if (index === 2) return <TaskDemo />
  if (index === 3) return <ContentDemo />
  return <DataDemo />
}

function TaskDemo() {
  const tasks = [[Mail, "Retorno pedido", "Hoje 16h"], [MessageSquareText, "Resumo criado", "Interesse: orçamento"], [Check, "Responsável definido", "Aguardando contato"]] as const
  return <div className="task-demo">{tasks.map(([Icon, title, status]) => <div key={title}><span><Icon aria-hidden="true" /></span><div><strong>{title}</strong><small>{status}</small></div><Check aria-hidden="true" /></div>)}</div>
}

function AgendaDemo() {
  return <div className="agenda-demo"><header><CalendarCheck aria-hidden="true" /><div><small>Google Agenda</small><strong>Janelas sugeridas</strong></div></header><div className="agenda-slots"><span>Ter 14:00</span><span>Qui 10:00</span><span>Sex 16:30</span></div><footer>Conflito evitado: retorno já marcado</footer></div>
}

function ChatDemo() {
  return <div className="chat-demo"><header><span><Bot aria-hidden="true" /></span><div><strong>Triagem Oráculo</strong><small>Assistente com limites definidos</small></div></header><div className="chat-messages"><p>Olá! Posso entender o que você precisa e chamar uma pessoa se for necessário.</p><p className="is-user">Quero marcar uma avaliação.</p><p>Perfeito. Vou verificar dados mínimos e sugerir horários disponíveis.</p></div><footer><span>Ação sensível: aprovação humana</span><Send aria-hidden="true" /></footer></div>
}

function ContentDemo() {
  return <div className="content-demo"><div className="content-toolbar"><PenTool aria-hidden="true" /><span>Resposta pronta para revisar</span><Sparkles aria-hidden="true" /></div><div className="content-lines"><span /><span /><span /><span /></div><div className="content-tags"><span>Tom da marca</span><span>Revisão humana</span><span>Enviar depois</span></div><button type="button"><Sparkles aria-hidden="true" />Gerar rascunho</button></div>
}

function DataDemo() {
  return <div className="data-demo"><header><div><small>Visão da operação</small><strong>Atendimentos organizados</strong></div><TrendingUp aria-hidden="true" /></header><div className="data-bars">{[42, 58, 48, 72, 66, 86, 78].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div><footer><span><i />Novos contatos</span><span><i />Encaminhados</span></footer></div>
}

function ProcessGraphic({ index }: { index: string }) {
  if (index === "01") return <div className="discover-graphic"><Route /><MessageSquareText /><FileText /></div>
  if (index === "02") return <div className="build-graphic">{Array.from({ length: 25 }, (_, i) => <i key={i} />)}</div>
  return <div className="launch-graphic"><span>Projeto</span><strong>No ar</strong><span className="live-dot" /></div>
}

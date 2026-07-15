import Link from "next/link"
import { ArrowUpRight, CalendarCheck, CheckCircle2, ClipboardList, MessageCircle, ShieldCheck } from "lucide-react"

const lanes = [
  { label: "Entrada", title: "Mensagem recebida", text: "Cliente pede horários e envia contexto pelo WhatsApp." },
  { label: "IA", title: "Triagem segura", text: "A intenção é identificada e só dados mínimos são coletados." },
  { label: "Humano", title: "Aprovação", text: "A sugestão fica pronta para revisar antes de enviar." },
  { label: "Registro", title: "Próxima ação", text: "Agenda, status e follow-up ficam documentados." },
] as const

export function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-vignette" aria-hidden="true" />
      <div className="container-main hero-content hero-content--operacao">
        <div className="hero-copy">
          <div className="hero-badge">Operação viva para pequenos negócios</div>
          <h1>IA para tirar sua rotina do improviso.</h1>
          <p>
            A OráculoAI transforma atendimento, agenda, follow-up e registros em fluxos claros, com limites para a IA
            e aprovação humana nas decisões importantes.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" href="/#diagnostico">Começar diagnóstico <ArrowUpRight aria-hidden="true" /></Link>
            <Link className="button button--ghost" href="/#solucoes">Ver rotinas automatizáveis</Link>
          </div>
          <ul className="hero-proof" aria-label="Garantias do diagnóstico">
            <li><ShieldCheck aria-hidden="true" /> Sem compromisso</li>
            <li><CheckCircle2 aria-hidden="true" /> Dados mínimos</li>
            <li><ClipboardList aria-hidden="true" /> Processo antes da ferramenta</li>
          </ul>
        </div>

        <div className="operation-board" aria-label="Mapa visual de uma operação automatizada com IA">
          <div className="operation-board__top">
            <div className="brand-chip">
              <span>Mapa de rotina</span>
            </div>
            <strong>Cliente novo</strong>
          </div>

          <div className="operation-card operation-card--message">
            <span><MessageCircle aria-hidden="true" /></span>
            <div>
              <small>WhatsApp</small>
              <p>&quot;Quero saber horários para avaliação esta semana.&quot;</p>
            </div>
          </div>

          <div className="operation-lanes">
            {lanes.map((lane) => (
              <div key={lane.label}>
                <small>{lane.label}</small>
                <strong>{lane.title}</strong>
                <p>{lane.text}</p>
              </div>
            ))}
          </div>

          <div className="approval-strip">
            <span><CalendarCheck aria-hidden="true" /></span>
            <div>
              <small>Aguardando aprovação</small>
              <strong>Enviar terça 14h ou quinta 10h?</strong>
            </div>
            <button type="button">Aprovar</button>
          </div>

          <div className="operation-log">
            <span>Registro salvo</span>
            <span>Follow-up em 2h</span>
            <span>Humano no controle</span>
          </div>
        </div>
      </div>
    </section>
  )
}

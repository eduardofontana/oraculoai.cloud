import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Wordmark } from "@/components/brand/Wordmark"
import { BRAND, LEGAL_NAVIGATION, NAVIGATION } from "@/lib/content"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-main site-footer__grid">
        <div className="site-footer__brand">
          <Wordmark />
          <p>{BRAND.description}</p>
        </div>
        <div>
          <span className="mono-label">NAVEGAR</span>
          <nav aria-label="Navegação do rodapé">
            {NAVIGATION.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/contato">Contato</Link>
          </nav>
        </div>
        <div>
          <span className="mono-label">LEGAL</span>
          <nav aria-label="Páginas legais">
            {LEGAL_NAVIGATION.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </div>
        <div className="site-footer__action">
          <span className="mono-label">COMEÇAR</span>
          <Link href="/#diagnostico">Mapear meu negócio <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="container-main site-footer__bottom">
        <p>© {new Date().getFullYear()} OráculoAI.</p>
        <p>Inteligência aplicada à realidade de quem empreende.</p>
      </div>
    </footer>
  )
}

import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { FloatingChat } from "@/components/layout/FloatingChat"
import { ConsentProvider } from "@/contexts/ConsentContext"
import { CookieConsentBanner } from "@/components/layout/CookieConsentBanner"
import { ConditionalAnalytics } from "@/components/ads/ConditionalAnalytics"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono" })

export const viewport: Viewport = {
  themeColor: "#101820",
  colorScheme: "light",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://oraculoai.cloud"),
  title: {
    default: "OráculoAI - IA aplicada ao pequeno negócio",
    template: "%s | OráculoAI",
  },
  description:
    "Automação e agentes de IA desenhados para atendimento, operação e crescimento de pequenos negócios brasileiros.",
  keywords: ["automação com IA", "agentes de IA", "pequenos negócios", "atendimento inteligente"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://oraculoai.cloud",
    siteName: "OráculoAI",
    title: "OráculoAI - Leia o próximo movimento do seu negócio",
    description: "Processos claros, automação responsável e pessoas no controle.",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: "OráculoAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OráculoAI",
    description: "IA aplicada à rotina do pequeno negócio.",
    images: ["/brand/og-image.png"],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <ConsentProvider>
          <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
          <FloatingChat />
          <CookieConsentBanner />
          <ConditionalAnalytics />
        </ConsentProvider>
      </body>
    </html>
  )
}

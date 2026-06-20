import type { Metadata, Viewport } from "next"
import { Inter, Outfit } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp"
import { FloatingChat } from "@/components/layout/FloatingChat"
import { ThemeProvider } from "@/contexts/ThemeContext"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  colorScheme: "light dark",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://oraculoai.cloud"),
  title: {
    default: "OráculoAI — IA para pequenos negócios brasileiros",
    template: "%s | OráculoAI",
  },
  description:
    "Agência de IA para pequenos negócios brasileiros. Automatização com chatbots, consultoria em IA, segurança digital e ecossistema completo com Hostinger.",
  keywords: [
    "IA para pequenos negócios",
    "chatbot whatsapp",
    "automação de atendimento",
    "consultoria IA",
    "agência de IA Brasil",
    "hostinger parceiro",
    "oraculoai",
  ],
  openGraph: {
    title: "OráculoAI — IA que funciona para seu pequeno negócio",
    description:
      "Automação inteligente, chatbots, consultoria em IA e ecossistema completo com Hostinger para transformar seu negócio.",
    url: "https://oraculoai.cloud",
    siteName: "OráculoAI",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "OráculoAI — IA que funciona de verdade para seu pequeno negócio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OráculoAI",
    description:
      "IA que funciona de verdade para o seu pequeno negócio crescer.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OráculoAI",
              url: "https://oraculoai.cloud",
              logo: "https://oraculoai.cloud/logo.png",
              description:
                "Agência de IA para pequenos negócios e empreendedores brasileiros.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-99999-9999",
                contactType: "sales",
                availableLanguage: ["Portuguese", "English"],
              },
              sameAs: [
                "https://instagram.com/oraculoai",
                "https://linkedin.com/company/oraculoai",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white dark:bg-[#0F172A] text-gray-600 dark:text-gray-300 transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <FloatingChat />
        </ThemeProvider>
      </body>
    </html>
  )
}

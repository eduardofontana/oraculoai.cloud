import Link from "next/link"

export function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="OráculoAI - página inicial" translate="no">
      <span>Oráculo<span>AI</span></span>
    </Link>
  )
}

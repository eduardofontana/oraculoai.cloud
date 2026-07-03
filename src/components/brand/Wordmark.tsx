import Link from "next/link"

export function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="OráculoAI - página inicial" translate="no">
      <svg className="wordmark__mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect className="wordmark__bot-bg" x="4" y="4" width="56" height="56" rx="15" />
        <path className="wordmark__bot-line" d="M32 16V10" />
        <circle className="wordmark__bot-node" cx="32" cy="9" r="4" />
        <rect className="wordmark__bot-face" x="15" y="20" width="34" height="28" rx="10" />
        <path className="wordmark__bot-tail" d="M24 48L18 56V47" />
        <circle className="wordmark__bot-eye" cx="26" cy="34" r="3.5" />
        <circle className="wordmark__bot-eye" cx="38" cy="34" r="3.5" />
        <path className="wordmark__bot-mouth" d="M26 41H38" />
      </svg>
      <span>Oráculo<span>AI</span></span>
    </Link>
  )
}

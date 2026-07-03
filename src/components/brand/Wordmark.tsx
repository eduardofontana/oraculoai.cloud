import Link from "next/link"

export function Wordmark() {
  return (
    <Link href="/" className="wordmark" aria-label="OráculoAI - página inicial" translate="no">
      <svg className="wordmark__mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect width="64" height="64" rx="15" />
        <path className="wordmark__flow" d="M14 18H45C49.4183 18 53 21.5817 53 26V43" />
        <path className="wordmark__flow" d="M47 38L53 44L59 38" />
        <path className="wordmark__flow" d="M50 46H19C14.5817 46 11 42.4183 11 38V21" />
        <path className="wordmark__flow" d="M17 26L11 20L5 26" />
        <circle className="wordmark__check-bg" cx="16" cy="32" r="9" />
        <path className="wordmark__check" d="M12 32L15 35L21 28" />
        <rect className="wordmark__human-bg" x="43.9" y="24" width="16" height="16" rx="4" transform="rotate(45 43.9 24)" />
        <path className="wordmark__eye-white" d="M17 32C22 22 42 22 47 32C42 42 22 42 17 32Z" />
        <circle className="wordmark__iris" cx="32" cy="32" r="9" />
        <circle className="wordmark__pupil" cx="32" cy="32" r="4" />
        <circle className="wordmark__spark" cx="36" cy="28" r="2" />
      </svg>
      <span>Oráculo<span>AI</span></span>
    </Link>
  )
}

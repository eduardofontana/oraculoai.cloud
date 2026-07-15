interface FieldProps {
  label: string
  error?: string
  htmlFor: string
  children: React.ReactNode
  optional?: boolean
}

export function Field({ label, error, htmlFor, children, optional = false }: FieldProps) {
  return (
    <div className="field">
      <label htmlFor={htmlFor}>{label}{optional ? " (opcional)" : <span aria-hidden="true"> *</span>}</label>
      {children}
      {error ? <p id={`${htmlFor}-error`} className="field-error" role="alert">{error}</p> : null}
    </div>
  )
}

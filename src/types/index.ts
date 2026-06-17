import { type ReactNode } from "react"

export interface BaseComponentProps {
  className?: string
  children?: ReactNode
}

export interface CardProps extends BaseComponentProps {
  hover?: boolean
  glow?: boolean
}

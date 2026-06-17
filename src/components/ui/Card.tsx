"use client"

import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  className?: string
  children: ReactNode
  hover?: boolean
  glow?: boolean
}

export function Card({ className, children, hover = false, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white dark:bg-gray-800 p-6 sm:p-8 border border-gray-100 dark:border-gray-700 transition-all duration-300",
        "shadow-premium",
        hover && "hover:shadow-premium-lg hover:-translate-y-1",
        glow && "hover:shadow-premium-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  )
}

"use client"

import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  className?: string
  children: ReactNode
  hover?: boolean
  glow?: boolean
  glass?: boolean
}

export function Card({ className, children, hover = false, glow = false, glass = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 border transition-all duration-300",
        glass
          ? "glass-card"
          : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-premium",
        hover && "hover:shadow-premium-lg hover:-translate-y-1 cursor-default",
        glow && "glow-accent hover:glow-accent-strong hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  )
}

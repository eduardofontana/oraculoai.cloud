"use client"

import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BadgeProps {
  children: ReactNode
  className?: string
  variant?: "accent" | "primary" | "success"
}

export function Badge({ children, className, variant = "accent" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium",
        variant === "accent" && "bg-purple-50 dark:bg-purple-900/30 text-[#7B4DFF] dark:text-[#9B7DFF]",
        variant === "primary" && "bg-[#0A2540]/5 dark:bg-white/10 text-[#0A2540] dark:text-gray-200",
        variant === "success" && "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400",
        className
      )}
    >
      {children}
    </span>
  )
}

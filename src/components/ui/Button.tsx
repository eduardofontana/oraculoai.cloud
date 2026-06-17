"use client"

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B4DFF] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[#7B4DFF] hover:bg-[#6D28D9] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5",
        secondary:
          "bg-white text-[#0A2540] border-2 border-[#0A2540] hover:bg-[#0A2540] hover:text-white",
        ghost: "text-[#0A2540] hover:bg-gray-100",
        outline:
          "bg-transparent border-2 border-[#7B4DFF] text-[#7B4DFF] hover:bg-[#7B4DFF] hover:text-white",
        whatsapp:
          "bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-lg shadow-green-500/25",
        dark: "bg-[#0A2540] hover:bg-[#1a3a5c] text-white",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  icon?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, icon, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : icon ? (
          icon
        ) : null}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { buttonVariants }

"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-300 hover:text-[#7B4DFF] dark:hover:text-[#9B7DFF]"
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      <Sun className="w-5 h-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-5 h-5 top-2 left-2 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  )
}

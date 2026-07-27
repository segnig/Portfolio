"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Coding", href: "#competitive-programming" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call on mount to set initial active section
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      const navHeight = 80 // Account for fixed navigation height
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="fixed top-0 w-full z-40 bg-background/60 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative w-15 h-15 rounded-full overflow-hidden border-2 border-primary/20 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:border-primary animate-scale-hover"
        >
          <img
            src="/my-logo.png"
            alt="SG"
            className="w-full h-full object-cover transition-all duration-300"
          />
        </button>
        <div className="hidden md:flex items-center gap-8 bg-card/50 px-8 py-3 rounded-full border border-border backdrop-blur-md shadow-sm">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium transition-all duration-200 hover:text-foreground relative ${
                activeSection === item.href.slice(1) ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full bg-primary transition-all duration-200 ${
                  activeSection === item.href.slice(1) ? "w-1" : "w-0 opacity-0"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection("#contact")}
            className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_15px_rgba(0,102,255,0.3)] hover:bg-primary/90 transition-colors"
          >
            Let's Talk
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

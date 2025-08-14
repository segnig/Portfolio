"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
}

export function AnimatedSection({ children, className = "", delay = 0, id }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-90 translate-y-2"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  )
}

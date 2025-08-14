"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold, rootMargin: "50px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

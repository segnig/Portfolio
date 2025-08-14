"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/segnig",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/validresults",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:segnigirma11@gmail.com",
    icon: Mail,
  },
]

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      const navHeight = 80
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">Segni Girma</h1>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground">
            Software Engineer & Data Scientist
          </h2>
        </div>

        {/* Tagline */}
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Crafting elegant solutions at the intersection of software engineering and Data Science. Passionate about
          building scalable systems that make a difference.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-4 pt-8">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <Button
                key={link.name}
                variant="outline"
                size="icon"
                asChild
                className="w-12 h-12 animate-scale-hover hover:border-primary hover:text-primary transition-all duration-200 bg-transparent"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            )
          })}
        </div>

        {/* Call to action */}
        <div className="pt-12">
          <Button
            onClick={scrollToAbout}
            variant="ghost"
            className="group animate-bounce-subtle hover:bg-primary/10 transition-all duration-200"
          >
            <span className="mr-2">Explore my work</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center hover:border-primary transition-colors cursor-pointer"
          aria-label="Scroll to about section"
        >
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
        </button>
      </div>
    </section>
  )
}

"use client"

import { Github, Linkedin, Mail, ArrowRight, Code2, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/valid_result/",
    icon: Code2,
  },
  {
    name: "Codeforces",
    href: "https://codeforces.com/profile/valid_result",
    icon: Trophy,
  },
]

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
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
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative pt-20 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-up text-left">
          <div className="space-y-4">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Engineering Scalable Systems <br className="hidden md:block" />
              & <span className="inline-block bg-primary text-primary-foreground px-5 py-1 rounded-[2rem] mt-2 shadow-[0_0_30px_rgba(0,102,255,0.5)]">Intelligent</span> Data Solutions
            </h1>
            <h2 className="font-heading text-xl md:text-2xl font-medium text-muted-foreground pt-2">
              Segni Girma — Software Engineer & Data Scientist
            </h2>
          </div>

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Crafting elegant solutions at the intersection of software engineering and Data Science. Passionate about building scalable systems that make a difference.
          </p>

          {/* Call to action & Socials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <Button
              onClick={scrollToProjects}
              className="group animate-scale-hover bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-lg shadow-[0_0_20px_rgba(0,102,255,0.4)]"
            >
              <span className="mr-2">Explore my work</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center gap-2">
              {socialLinks.slice(0, 5).map((link) => {
                const Icon = link.icon
                return (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="w-10 h-10 rounded-full hover:bg-primary/10 transition-all duration-200 text-muted-foreground hover:text-foreground"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Content - 3D Robot Image */}
        <div className="relative flex justify-center items-center animate-fade-up mt-12 lg:mt-0" style={{ animationDelay: '200ms' }}>
          <div className="relative w-full max-w-[500px] aspect-square animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <Image
              src="/hero-robot.png"
              alt="Futuristic Robot with Shield"
              fill
              className="object-contain drop-shadow-2xl z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Github, Linkedin, MessageCircle, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/segnig", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/validresults", icon: Linkedin },
  { name: "Telegram", href: "https://t.me/Valid_result", icon: MessageCircle },
  { name: "Email", href: "mailto:segnigirma11@gmail.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl font-bold mb-2">Segni Girma</h3>
            <p className="text-muted-foreground">Software Engineer & Data Science</p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="animate-scale-hover hover:text-primary"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              )
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-current" /> using Next.js, TypeScript & Tailwind CSS
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © {new Date().getFullYear()} Segni Girma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

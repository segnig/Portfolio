"use client"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/animated-counter"

export function AboutSection() {
  const highlights = ["2+ years experience", "Backend development", "ML/AI expertise", "Open source contributor", "Community mentor", "Data-driven solutions"]

  const stats = [
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Happy Clients", value: 1, suffix: "+" },
    { label: "Code Commits", value: 1000, suffix: "+" },
    { label: "Coffee Cups", value: 2, suffix: "+" },
  ]

  return (
    <AnimatedSection id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                <img
                  src="/segni-girma-profile.png"
                  alt="Segni Girma - Software Engineer and Data Scientist"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <span className="text-primary-foreground font-bold text-lg">SG</span>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate Software Engineer and Data Science with a love for creating elegant,
                scalable solutions that bridge the gap between complex algorithms and user-friendly applications.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With expertise spanning Backend development, Data Science, and cutting-edge ML/AI technologies,
                I thrive on solving challenging problems and building systems that make a meaningful impact.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me contributing to open source projects, exploring the latest in AI
                research, or mentoring aspiring developers in the tech community.
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 pt-4">
              {highlights.map((highlight, index) => (
                <Badge
                  key={highlight}
                  variant="secondary"
                  className="px-3 py-1 text-sm transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

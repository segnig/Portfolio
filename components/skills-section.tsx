"use client"

import {
  Code2,
  Database,
  Cloud,
  Wrench,
  Brain,
  BarChart3,
  Server,
  Smartphone,
  GitBranch,
  DockIcon as Docker,
  VerifiedIcon as Verify,
  Cpu,
  Globe,
  icons,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "JavaScript", icon: Code2, level: 60 },
      { name: "Python", icon: Code2, level: 90 },
      { name: "C++", icon: Code2, level: 95 },
      { name: "Java", icon: Server, level: 85 },
      { name: "Go", icon: Code2, level: 85 },
      { name: "Dart", icon: Code2, level: 70 },
    ],
  },
  {
    title: "ML & Data",
    icon: Brain,
    skills: [
      { name: "TensorFlow/PyTorch", icon: Brain, level: 85 },
      { name: "Scikit-learn", icon: BarChart3, level: 90 },
      { name: "Pandas/NumPy", icon: BarChart3, level: 95 },
      { name: "Computer Vision", icon: Brain, level: 80 },
      { name: "NLP", icon: Brain, level: 85 },
      { name: "MLOps", icon: Cpu, level: 75 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS/GCP", icon: Cloud, level: 85 },
      { name: "Docker/Kubernetes", icon: Docker, level: 80 },
      { name: "CI/CD", icon: GitBranch, level: 90 },
      { name: "Monitoring", icon: BarChart3, level: 80 },
      { name: "Microservices", icon: Server, level: 85 },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      { name: "Git/GitHub", icon: GitBranch, level: 95 },
      { name: "PostgreSQL/MongoDB", icon: Database, level: 85 },
      { name: "Redis", icon: Database, level: 80 },
      { name: "Clean Architecture", icon: Server, level: 89},
      { name: "PowerBI", icon: BarChart3, level: 75 },
      { name: "GraphQL/REST", icon: Globe, level: 90 },
      { name: "Testing", icon: Wrench, level: 85 },
      { name: "System Design", icon: Cpu, level: 80 },
    ],
  },
]

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit spanning modern web development, machine learning, and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <Card
                key={category.title}
                className="p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <CategoryIcon className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    return (
                      <div key={skill.name} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <SkillIcon className="h-4 w-4 text-muted-foreground group-hover/skill:text-primary transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:drop-shadow-sm" />
                            <span className="text-sm font-medium group-hover/skill:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          {skill.level >= 50 && (
                            <span
                              className={`text-xs group-hover/skill:text-primary transition-colors duration-300 ${
                                skill.level >= 90
                                  ? 'text-green-500 bg-green-100'
                                  : skill.level >= 80
                                  ? 'text-blue-500 bg-blue-100'
                                  : skill.level >= 70
                                  ? 'text-yellow-500 bg-yellow-100'
                                  : 'text-muted-foreground bg-muted'
                              } rounded-full px-1.5 py-0.5 flex items-center`}
                            >
                              <Verify className="h-4 w-4" />
                            </span>
                          )}

                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-1000 group-hover/skill:bg-primary/80 animate-skill-bar"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${categoryIndex * 150 + skillIndex * 100}ms`,
                            }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="font-heading text-xl font-semibold mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile/Scrum",
              "Technical Leadership",
              "Code Review",
              "Architecture Design",
              "Performance Optimization",
              "Security Best Practices",
              "API Design",
              "Database Design",
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-primary hover:text-primary hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default animate-fade-up"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

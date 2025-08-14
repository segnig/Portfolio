"use client"

import { Calendar, MapPin, TrendingUp, Users, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"

const experiences = [
  {
    id: 1,
    title: "Back End Engineer",
    company: "Eskalate",
    location: "Adama, Oromia Region, Ethiopia",
    period: "Jun 2025 - Present",
    type: "Internship",
    description: "Skilled in designing and building scalable backend systems using Golang following Clean Architecture principles. Experienced in developing RESTful APIs with secure authentication using JWT, integrating SQL and NoSQL databases, and implementing concurrency for optimized performance. Proficient in writing clean, well-structured code, applying error handling, logging, and automated testing. Collaborates effectively in agile teams using Git and Docker.",
    achievements: [
      "Designed scalable backend systems using Golang following Clean Architecture",
      "Developed RESTful APIs with JWT-based authentication",
      "Integrated SQL and NoSQL databases and implemented concurrency for optimized performance",
      "Applied error handling, logging, and automated testing for reliability"
    ],
    technologies: ["Golang", "REST API", "SQL", "NoSQL", "Docker", "Git"]
  },
  {
    id: 2,
    title: "Data Science Mentor",
    company: "CSEC-ASTU",
    location: "Adama, Oromia Region, Ethiopia",
    period: "Apr 2024 - Present",
    type: "Part-time",
    description: "Deliver lectures and workshops on Python programming, data analysis, and machine learning to junior students. Support projects, help students develop practical skills, and foster a collaborative and inclusive data science community. Role builds leadership skills and contributes to growth of aspiring tech professionals.",
    achievements: [
      "Delivered lectures and workshops on Python, data analysis, and ML",
      "Guided students on projects and practical skill development",
      "Fostered a collaborative and inclusive data science community"
    ],
    technologies: ["Python", "Machine Learning", "Data Analysis"]
  },
  {
    id: 3,
    title: "Junior Data Analyst",
    company: "Kegeberew Technology Solution",
    location: "Addis Ababa, Ethiopia",
    period: "Jun 2024 - Oct 2024",
    type: "Internship",
    description: "Extracted and analyzed large datasets from PostgreSQL to drive data-informed business decisions. Cleaned and transformed raw data using Python (Pandas, NumPy). Designed and deployed interactive Power BI dashboards to track KPIs and performance trends. Collaborated with cross-functional teams to turn business needs into actionable insights. Automated workflows, boosting reporting efficiency by 25% and reducing manual errors.",
    achievements: [
      "Extracted & analyzed large datasets from PostgreSQL",
      "Cleaned & transformed raw data using Python (Pandas, NumPy)",
      "Designed & deployed interactive Power BI dashboards",
      "Automated workflows, increasing efficiency by 25%"
    ],
    technologies: ["Python", "PostgreSQL", "Power BI", "Pandas", "NumPy"]
  }
];

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A journey through innovative companies, building scalable solutions and leading high-impact projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block animate-pulse"></div>

                <Card
                  className="md:ml-16 p-6 hover:shadow-xl transition-all duration-500 group animate-fade-up hover:-translate-y-1"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground mt-1">
                        <span className="group-hover:text-foreground transition-colors">{exp.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors">
                    {exp.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-3 group/achievement">
                        <div className="mt-2">
                          {achievementIndex === 0 && (
                            <TrendingUp className="h-4 w-4 text-green-500 group-hover/achievement:scale-110 transition-transform" />
                          )}
                          {achievementIndex === 1 && (
                            <Users className="h-4 w-4 text-blue-500 group-hover/achievement:scale-110 transition-transform" />
                          )}
                          {achievementIndex === 2 && (
                            <Award className="h-4 w-4 text-purple-500 group-hover/achievement:scale-110 transition-transform" />
                          )}
                        </div>
                        <p className="text-sm leading-relaxed group-hover/achievement:text-foreground transition-colors">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                        style={{ animationDelay: `${index * 200 + techIndex * 50}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

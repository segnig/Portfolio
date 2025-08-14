"use client"

import { Calendar, Clock, ArrowRight, Tag, ExternalLink, Mail, Share2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "@/components/animated-section"
import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "Introduction: From Manual Pain to AI-Powered Gain",
    excerpt: "How we built a Retrieval-Augmented Generation (RAG) chatbot for CrediTrust’s FinTech complaint system",
    contentUrl: "https://medium.com/@segnigirma11/introduction-from-manual-pain-to-ai-powered-gain-6b2feedde25f",
    source: "https://medium.com/@segnigirma11/introduction-from-manual-pain-to-ai-powered-gain-6b2feedde25f",
    date: "2025-07-10",
    tags: ["AI", "RAG", "FinTech", "Complaint Analysis"],
    author: "Segni Girma",
    href: "#",
    image: "/credit-trust-camplaint-assistant.webp",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Optimizing Car Insurance Marketing with Data-Driven Risk Insights: A South African Case Study",
    excerpt: "How predictive analytics can shape smarter marketing and pricing strategies in the South African car insurance industry.",
    contentUrl: "https://medium.com/@segnigirma11/optimizing-car-insurance-marketing-with-data-driven-risk-insights-a-south-african-case-study-2649876d9a3a",
    source: "https://medium.com/@segnigirma11/optimizing-car-insurance-marketing-with-data-driven-risk-insights-a-south-african-case-study-2649876d9a3a",
    date: "2025-06-18",
    readTime: "4 min read",
    tags: ["Data Science", "Insurance", "Risk Analysis", "Marketing"],
    author: "Segni Girma",
    href: "#",
    image: "/Optimizing-Car-Insurance-Marketing-with-Data-Driven-Risk-Insights.webp",
    featured: true
  }
]

export function BlogSection() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate email submission
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail("")
      setMessage("")
      alert("Thank you for your message! I'll get back to you soon.")
    }, 1000)
  }

  return (
    <AnimatedSection className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Insights and thoughts on software engineering, machine learning, and the latest technology trends
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={`featured-${post.id}`} className="mb-12 overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-heading text-2xl font-bold mb-3">{post.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button asChild>
                    <a href={post.href} className="flex items-center gap-2">
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={post.source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Source
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <div key={tag} className="flex items-center gap-1">
                      <Tag className="h-3 w-3 text-muted-foreground" />
                      <Badge
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                        style={{ animationDelay: `${index * 150 + tagIndex * 50}ms` }}
                      >
                        {tag}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto font-medium animate-scale-hover hover:text-primary"
                  >
                    <a href={post.href} className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={post.source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                      <ExternalLink className="h-4 w-4" />
                      Source
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            variant="outline"
            className="animate-scale-hover bg-transparent hover:bg-primary hover:text-primary-foreground"
          >
            <Share2 className="h-4 w-4 mr-2" />
            View All Articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}

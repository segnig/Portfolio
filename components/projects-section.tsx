"use client"

import { useState } from "react"
import { ExternalLink, Github, Heart, Eye } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AnimatedSection } from "@/components/animated-section"

const projects = [
  {
    id: 1,
    title: "Telegram Health Data Analytics Pipeline",
    description: "Data engineering pipeline extracting and analyzing health product data from Ethiopian medical Telegram channels",
    image: "/telegram-pipeline.png",
    tech: ["Python", "Telethon", "PostgreSQL", "dbt", "YOLOv8", "FastAPI", "Dagster", "Docker"],
    github: "https://github.com/segnig/From-Raw-Telegram-Data-to-an-Analytical-API",
    demo: "https://github.com/segnig/From-Raw-Telegram-Data-to-an-Analytical-API",
    likes: 0,
    views: 0,
    date: "2025",
    details: {
      overview: "A robust end-to-end data engineering pipeline that scrapes health product-related messages from public Ethiopian medical Telegram channels, enriches data using object detection (YOLOv8), models data with dbt, and serves analytics through a FastAPI endpoint orchestrated with Dagster.",
      features: [
        "ETL/ELT pipeline for Telegram message extraction",
        "Object detection on images using YOLOv8",
        "Data modeling and enrichment via dbt",
        "Analytics served through FastAPI endpoints",
        "Trend tracking for products, pricing, vendors, and visual content"
      ],
      impact: "Enabled stakeholders to track medical product trends and vendor activity in real-time, improving market insights and decision-making efficiency."
    }
  },
  {
    id: 2,
    title: "Event Driven Oil Analysis",
    description: "Analyzes how geopolitical and economic events impact Brent crude oil prices using Bayesian Change Point Detection.",
    image: "/oil-analysis-dashboard.jpg",
    tech: ["Python", "PyMC3", "Flask", "React", "Pandas", "Matplotlib"],
    github: "https://github.com/segnig/Events-driven-oil-analysis",
    demo: "https://github.com/segnig/Events-driven-oil-analysis",
    likes: 0,
    views: 0,
    date: "2025",
    details: {
      overview: "A project that detects statistically significant change points in Brent oil prices from 1987 to 2022 and links them to major geopolitical and economic events. Insights support investors, policymakers, and energy companies in making informed decisions.",
      features: [
        "Bayesian Change Point Detection with PyMC3",
        "Mapping detected change points to historical events (OPEC decisions, wars, sanctions, pandemics)",
        "Quantifying shifts in price mean and volatility",
        "Interactive dashboard with Flask backend and React frontend",
        "Exploratory Data Analysis with price trends, log returns, and event overlays"
      ],
      impact: "Enabled stakeholders to understand the impact of major events on oil price regimes, supporting data-driven investment and policy decisions."
    }
  },
  {
    id: 3,
    title: "CrediTrust AI Complaint-Answering Chatbot",
    description: "RAG system transforming consumer complaint data into actionable insights for CrediTrust Financial.",
    image: "/credit-trust-camplaint-assistant.webp",
    tech: ["Python", "LangChain", "ChromaDB", "Gradio", "OpenAI API"],
    github: "https://github.com/segnig/crediTrust-chatbot",
    demo: "https://github.com/segnig/crediTrust-chatbot",
    likes: 1,
    views: 1,
    date: "2025",
    details: {
      overview: "A Retrieval-Augmented Generation (RAG) system that accepts plain-English queries, retrieves relevant complaint narratives, and synthesizes concise answers to provide actionable insights across multiple financial products.",
      features: [
        "Real-time consumer complaint analysis",
        "Semantic search to retrieve relevant complaints",
        "LLM-powered answer generation",
        "Multi-product and source traceability",
        "Gradio-powered chatbot interface"
      ],
      impact: "Reduced trend detection time from days to minutes, empowering non-technical teams to derive insights and enabling proactive product improvements."
    }
  },
  {
    id: 4,
    title: "Fraud Detection Project",
    description: "Machine learning pipeline for detecting fraudulent transactions in credit card and e-commerce datasets.",
    image: "/fraud-detection-project.webp",
    tech: ["Python", "scikit-learn", "LightGBM", "CatBoost", "Neural Networks", "SHAP", "Pandas", "Matplotlib"],
    github: "https://github.com/segnig/ml4fraud-ecommerce-banking",
    demo: "https://github.com/segnig/ml4fraud-ecommerce-banking",
    likes: 0,
    views: 0,
    date: "2025",
    details: {
      overview: "Comprehensive pipeline that detects fraud in imbalanced financial datasets, engineers meaningful features, trains multiple ML models, and interprets predictions with SHAP for transparency.",
      features: [
        "Data cleaning, EDA, and feature engineering",
        "Handling imbalanced datasets (SMOTE, undersampling)",
        "Training multiple models: Logistic Regression, Random Forest, LightGBM, CatBoost, Neural Networks",
        "Evaluation with Precision, Recall, F1, ROC AUC",
        "Model explainability with SHAP (summary, force, bar plots)"
      ],
      impact: "Improved fraud detection accuracy and provided actionable insights to reduce financial losses and strengthen prevention strategies."
    }
  }
];

export function ProjectsSection() {
  const [likedProjects, setLikedProjects] = useState<Set<number>>(new Set())

  const toggleLike = (projectId: number) => {
    setLikedProjects((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }

  return (
    <AnimatedSection id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI, distributed systems, and blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.date}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleLike(project.id)}
                    className="p-1 h-auto animate-scale-hover"
                  >
                    <Heart
                      className={`h-5 w-5 transition-all duration-300 ${
                        likedProjects.has(project.id)
                          ? "fill-red-500 text-red-500 scale-125 animate-pulse"
                          : "text-muted-foreground hover:text-red-500 hover:scale-110"
                      }`}
                    />
                  </Button>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 200 + techIndex * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>{project.likes + (likedProjects.has(project.id) ? 1 : 0)}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Eye className="h-4 w-4" />
                      <span>{project.views}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="animate-scale-hover bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="animate-scale-hover bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="animate-scale-hover hover:shadow-lg">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-heading">{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <div>
                            <h4 className="font-semibold mb-2">Overview</h4>
                            <p className="text-muted-foreground leading-relaxed">{project.details.overview}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Key Features</h4>
                            <ul className="space-y-1">
                              {project.details.features.map((feature, index) => (
                                <li key={index} className="text-muted-foreground flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Impact</h4>
                            <p className="text-muted-foreground">{project.details.impact}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

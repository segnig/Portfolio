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
    id: 6,
    title: "Nalack - E-Commerce Platform",
    description: "Full-stack commerce platform at nalack.com — Node.js/Express API with OTP auth, orders, loyalty, and async workers, powering a live fashion and lifestyle storefront",
    image: "/projects/nalack.png",
    tech: [
      "Node.js", "Express", "PostgreSQL", "Redis", "RabbitMQ",
      "Docker", "Nginx", "Swagger", "JWT", "Supabase", "Cloudinary"
    ],
    github: "https://nalack.com/",
    demo: "https://nalack.com/",
    likes: 0,
    views: 0,
    date: "2025",
    details: {
      overview: "Nalack is a production-grade e-commerce platform serving nalack.com. The backend (Nalack-Backend) is a modular Node.js/Express API with versioned routes under /api/v1, powering user authentication, product catalog, orders, wishlists, discount rules, loyalty processing, and admin analytics. The system runs as a containerized multi-service stack with PostgreSQL migrations, Redis caching, RabbitMQ workers, and Nginx — deployed to production with SSL on Hostinger.",
      features: [
        "JWT authentication with OTP verification, refresh-token rotation, and role-based access (CUSTOMER, ADMIN, SUPER_ADMIN)",
        "Modular REST API: auth, users, products, brands, colors, wishlist, orders, reviews, discounts, and stats",
        "Background workers: email delivery, loyalty points, special-date reminders, and discount cleanup",
        "PostgreSQL migrations with full-text product search and stock-calculation PLpgSQL triggers",
        "Redis caching for OTP storage, token revocation lists, and temporary session state",
        "RabbitMQ message queuing with dedicated email_queue and graceful fallback handling",
        "Payment details, order workflows, and first-order discount business logic",
        "Special dates (birthdays, anniversaries) tied to promotions and loyalty",
        "Media uploads via Multer, Cloudinary, and Sharp image processing",
        "Swagger/OpenAPI docs, rate limiting, Helmet security headers, and request tracing",
        "Docker Compose stack: API, RabbitMQ, Redis, Nginx, and four worker services"
      ],
      impact: "Delivered a scalable, production-ready commerce platform with async processing, secure multi-role authentication, loyalty and discount engines, and full API documentation — powering a live e-commerce storefront with reliable order workflows."
    },
    backendRole: {
      role: "Backend Engineer",
      responsibilities: [
        "Built modular, versioned REST API using Node.js and Express with feature-based route modules",
        "Implemented JWT auth with OTP verification, refresh-token rotation, and password reset flows",
        "Designed PostgreSQL schema with transactional migrations, full-text search, and stock triggers",
        "Integrated Redis for caching and RabbitMQ for async worker communication",
        "Developed four background workers: email, loyalty, special-date, and discount cleanup",
        "Configured Docker Compose multi-service deployment with Nginx reverse proxy and SSL on Hostinger",
        "Documented API with Swagger/OpenAPI and established Winston/Morgan logging with rate limiting"
      ],
      technologies: {
        languages: ["JavaScript", "PLpgSQL", "Shell"],
        frameworks: ["Express.js", "Swagger UI"],
        databases: ["PostgreSQL", "Redis", "Supabase"],
        infrastructure: ["Docker", "Docker Compose", "Nginx", "RabbitMQ", "Hostinger"],
        architectures: ["Modular Monolith", "Event-Driven Workers", "Migration-First DB", "REST API"]
      },
      achievements: [
        "Architected multi-service stack with API server and four dedicated background workers",
        "Implemented secure token rotation with hashed refresh token storage",
        "Built migration runner with manifest tracking and transactional SQL migrations",
        "Added database-level full-text search and automated stock quantity calculation",
        "Deployed production environment with SSL-ready Nginx and automated deploy scripts",
        "Integrated email delivery via Nodemailer, Resend, and Africa's Talking"
      ]
    }
  },
  {
    id: 7,
    title: "Staygent - Rentals & Services Platform",
    description: "Full-stack Ethiopian marketplace — Go backend API with layered architecture, plus a Next.js web app for guest, host, and admin flows with KYC, bookings, and an AI travel agent",
    image: "/projects/staygent.png",
    tech: [
      "Go", "Next.js", "React", "TypeScript", "PostgreSQL",
      "Docker", "Tailwind CSS", "Server Actions", "i18next",
      "Leaflet", "SSE Streaming", "GitHub Actions", "PM2"
    ],
    github: "https://staygent.tech/",
    demo: "https://staygent.tech/",
    likes: 0,
    views: 0,
    date: "2026",
    details: {
      overview: "Staygent is a production platform at staygent.tech connecting guests, hosts, and admins for property rentals and on-demand services in Ethiopia. The system spans a Go backend (staygent-backend) powering core REST APIs and business logic, and a Next.js web frontend (staygent-web) with BFF route handlers, server actions, and real-time AI agent streaming — integrated with separate mobile and blockchain services.",
      features: [
        "Go backend with layered architecture: api/, services/, internal/, pkg/, and migrations/",
        "REST API for auth, listings, bookings, KYC verification, and admin workflows",
        "Migration-first PostgreSQL schema evolution with PLpgSQL functions",
        "Next.js App Router frontend with guest, host, and admin dashboards",
        "Auth flows: login, social login, OTP registration, password reset, mode switching, and KYC",
        "Rentals and services listings with geo search, filtering, pagination, and taxonomy loading",
        "AI travel agent with SSE-streamed responses, session init, and approval flows",
        "Admin analytics: KYC queue, listings/bookings stats, and activity logs",
        "BFF route handlers for session management, cookie refresh, and translation",
        "Real-time notifications via WebSocket; i18n with locale parity CI checks",
        "Containerized deployment: Docker Compose, Makefile, Air hot-reload, and PM2/systemd"
      ],
      impact: "Built and shipped a full-stack platform modernizing rentals and services in Ethiopia — combining a scalable Go API backend with a production Next.js frontend, AI-assisted discovery, and automated CI/CD across both services."
    },
    backendRole: {
      role: "Backend Engineer",
      responsibilities: [
        "Developed core platform APIs in Go with clean separation across api/, services/, and internal/ packages",
        "Implemented REST endpoints for auth, listings, bookings, KYC, and admin verification workflows",
        "Designed migration-first database evolution with PostgreSQL and PLpgSQL functions",
        "Structured reusable packages in pkg/ and enforced encapsulation via internal/ boundaries",
        "Set up Docker, docker-compose, Makefile, and deploy.sh for repeatable builds and deployments",
        "Maintained environment-driven configuration and operational scripts for production rollout"
      ],
      technologies: {
        languages: ["Go", "PLpgSQL", "Shell", "Python"],
        frameworks: ["Go modules", "REST API"],
        databases: ["PostgreSQL"],
        infrastructure: ["Docker", "Docker Compose", "Makefile", "Air"],
        architectures: ["Layered Monolith", "Migration-First DB", "Container-First Deployment"]
      },
      achievements: [
        "Architected conventional Go backend layout with cmd/, api/, services/, internal/, and pkg/",
        "Built admin and verification workflow support with dedicated test artifacts",
        "Established container-first deployment with Docker Compose and scripted rollout",
        "Contributed 113+ commits across auth, services, and infrastructure domains",
        "Maintained active development with multi-contributor collaboration on main branch"
      ]
    },
    frontendRole: {
      role: "Frontend Engineer",
      responsibilities: [
        "Built guest, host, and admin experiences on Next.js App Router with TypeScript",
        "Implemented server actions for auth mutations, session transitions, and KYC flows",
        "Designed typed API client with Result<T> envelope parsing and centralized error handling",
        "Developed listings pages with geo search, filters, and pagination for rent and services",
        "Integrated AI agent chat with SSE streaming and session/approval management",
        "Set up middleware-based route protection, i18n, and CI/CD deployment pipeline"
      ],
      technologies: {
        languages: ["TypeScript", "JavaScript"],
        frameworks: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        libraries: ["i18next", "Leaflet", "Recharts", "Radix UI", "date-fns"],
        infrastructure: ["GitHub Actions", "PM2", "systemd"],
        architectures: ["App Router", "Server Actions", "BFF Routes", "SSE Streaming"]
      },
      achievements: [
        "Architected feature-rich App Router tree with centralized lib/ domain layer",
        "Implemented middleware cookie checks and redirect rules for protected routes",
        "Built provider-heavy client composition for auth, notifications, and status modals",
        "Established CI quality gates: lint, typecheck, locale parity, and build verification",
        "Automated production deployment with health checks on push to main"
      ]
    }
  },
   {
    id: 5,
    title: "ShopAlly - AI-Powered Shopping Assistant",
    description: "Distributed microservices architecture with Golang backend, LLM integration, MongoDB, and visual search capabilities",
    image: "/projects/shopally-shopping-assistant.png",
    tech: [
      "Golang", "Gin Framework", "LLM", "Distributed Systems", "Microservices", 
      "MongoDB", "Docker","Redis", "Next.js", "Flutter", "WebSocket", "REST API"
    ],
    github: "https://github.com/A2SV/g6-shopally",
    demo: "https://shop-ally-ai.vercel.app",
    likes: 0,
    views: 0,
    date: "2025",
    details: {
      overview: "As Backend Team Lead, architected and implemented a distributed microservices system using Golang, Gin framework, and MongoDB. Leveraged MongoDB's flexible document model for product catalogs and user data while integrating LLM capabilities for intelligent features.",
      features: [
        "Microservices architecture with Golang and Gin framework",
        "MongoDB document database for product catalog and user profiles",
        "LLM-powered product recommendations and search",
        "MongoDB aggregation framework for complex analytics",
        "Distributed image processing for visual search",
        "gRPC for high-performance service communication",
        "Change streams for real-time data updates",
        "Database sharding for horizontal scalability",
        "JWT authentication and authorization middleware",
        "Distributed tracing and monitoring integration"
      ],
      impact: "Improved system performance by 40% with Golang microservices, reduced complex query times by 60% using MongoDB aggregation pipelines, successfully scaled to handle 1M+ requests daily, and accelerated feature development by 35% with MongoDB's flexible schema design."
    },
    backendRole: {
      role: "Backend Team Lead & Golang Engineer",
      teamSize: 14,
      responsibilities: [
        "Architected distributed microservices system using Golang and MongoDB",
        "Designed MongoDB schema and aggregation pipelines for complex queries",
        "Led backend team in implementing Gin framework APIs with MongoDB",
        "Integrated LLM models for intelligent product features",
        "Implemented MongoDB change streams for real-time updates",
        "Optimized database performance with indexing and query optimization",
        "Designed and implemented distributed systems patterns",
        "Established MongoDB best practices and data modeling standards"
      ],
      technologies: {
        languages: ["Golang", "MongoDB Query Language", "Python"],
        frameworks: ["Gin", "gRPC", "MongoDB Go Driver", "Viper"],
        databases: ["MongoDB", "Redis"],
        infrastructure: ["Docker", "GitHub Actions"],
        architectures: ["Microservices", "Distributed Systems", "Event-Driven", "Document Database"]
      },
      achievements: [
        "Reduced API latency from 500ms to 120ms using Golang optimization",
        "Improved query performance by 60% with MongoDB aggregation pipelines",
        "Implemented LLM integration that improved recommendation accuracy by 35%",
        "Designed MongoDB sharding strategy that supported 10M+ product records",
        "Reduced development time by 35% with MongoDB's flexible schema",
        "Implemented real-time features using MongoDB change streams",
        "Achieved 99.9% database availability with replica sets",
        "Reduced infrastructure costs by 30% through efficient MongoDB scaling"
      ]
    }
  },
  {
    id: 1,
    title: "Telegram Health Data Analytics Pipeline",
    description: "Data engineering pipeline extracting and analyzing health product data from Ethiopian medical Telegram channels",
    image: "/projects/telegram-pipeline.png",
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
    image: "/projects/oil-analysis-dashboard.jpg",
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
    image: "/projects/credit-trust-camplaint-assistant.webp",
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
    image: "/projects/fraud-detection-project.webp",
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

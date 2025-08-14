"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AnimatedSection } from "@/components/animated-section"

type Certificate = {
  id: number
  title: string
  description: string
  image: string
  issuer: string
  date: string
  credentialUrl: string
  skills: string[]
  details: {
    overview: string
    highlights: string[]
    impact: string
  }
}

type Achievement = {
  id: number
  title: string
  description: string
  image: string
  issuer: string
  date: string
  category: string
  skills: string[]
  details: {
    overview: string
    highlights: string[]
    impact: string
  }
}

const certificates: Certificate[] = [
{
  id: 1,
  title: "Data Fundamentals with Capstone Project",
  description: "Credential demonstrating foundational knowledge of data analytics, data science methodologies, and visualization tools.",
  image: "/data-fundamentals-with-capstone-project.png", // Replace with actual image path
  issuer: "IBM SkillsBuild",
  date: "Aug 2025",
  credentialUrl: "https://www.credly.com/badges/c21b9e03-c2c0-4c81-8036-2aa5bde697ea/public_url", // Insert actual credential verification link
  skills: [
    "Clean Data",
    "Data Analysis",
    "Data Analysis Process",
    "Databases",
    "Data Science",
    "Data Science Methodology",
    "Data Tools",
    "Data Visualizations",
    "Refine Data",
    "Watson Studio"
  ],
  details: {
    overview:
      "Earned after completing IBM SkillsBuild's Data Fundamentals program with a capstone project, covering concepts, methodologies, and applications of data analytics and data science.",
    highlights: [
      "Applied data analysis skills using a visualization tool to build interactive dashboards",
      "Connected to datasets, refined data, and generated insights",
      "Explored job outlook and skill requirements for data analytics roles"
    ],
    impact:
      "Strengthened ability to analyze and present data effectively, enabling data-driven decision-making in future projects.",
  }
},
{
  id: 4,
  title: "Applied Data Science Lab",
  description:
    "Completed eight end-to-end applied data science projects, demonstrating proficiency in accessing, cleaning, and preparing data, building machine learning models, and communicating results effectively.",
  image: "/applied-data-science-lab.2.png", // Replace with actual image path
  issuer: "WorldQuant University",
  date: "Oct 2024",
  credentialUrl: "https://your-badge-link-here", // Insert actual credential verification link
  skills: [
    "API Design",
    "Data Science",
    "Data Visualization",
    "Machine Learning",
    "MongoDB",
    "Python",
    "SQL",
    "Statistics"
  ],
  details: {
    overview:
      "Earners completed eight applied data science projects involving data access from files, SQL and NoSQL databases, and APIs. Demonstrated skills in data exploration, cleaning, and preparation through ETL pipelines, as well as in building and evaluating supervised and unsupervised machine learning models.",
    highlights: [
      "Accessed data from diverse sources including APIs, SQL, and MongoDB",
      "Developed reusable functions and ETL pipelines for dataset preparation",
      "Built and evaluated machine learning models for various tasks",
      "Created clear visualizations to explain insights and model predictions to non-technical audiences"
    ],
    impact:
      "Gained practical, project-based experience in the full data science workflow, preparing for real-world analytics and machine learning challenges."
  }
},
{
  id: 3,
  title: "Data Fundamentals",
  description:
    "Intermediate-level credential demonstrating proficiency in data analytics concepts, methodologies, and applications of data science, including cleaning, refining, and visualizing data with IBM Watson Studio.",
  image: "data-fundamentals.png", // Replace with actual image path
  issuer: "IBM SkillsBuild",
  date: "Aug 2025",
  credentialUrl: "https://www.credly.com/badges/81c0cbd3-e0ed-4a89-b1b1-92dc60561296/public_url", // Insert actual credential verification link
  skills: [
    "Clean Data",
    "Data Analysis",
    "Data Analysis Process",
    "Databases",
    "Data Science",
    "Data Science Methodology",
    "Data Tools",
    "Data Visualization"
  ],
  details: {
    overview:
      "Earned after completing IBM SkillsBuild's Data Fundamentals program, which covers data analytics concepts, methodologies, applications of data science, and tools within the data ecosystem. Includes conceptual understanding of cleaning, refining, and visualizing data using IBM Watson Studio.",
    highlights: [
      "Applied data analysis skills to connect to datasets, refine data, and create interactive dashboards",
      "Explored job outlook and skill requirements for data analytics roles",
      "Developed familiarity with programming languages and tools in the data ecosystem"
    ],
    impact:
      "Enhanced ability to perform data analysis and visualization, enabling more effective insights and decision-making in data-driven environments."
  }
},
{
  id: 5,
  title: "Python For Data Science In 2025 A-Z: EDA With Real Exercises",
  description:
    "Completed a 16-hour Udemy course covering Python programming for data science, with a focus on exploratory data analysis (EDA) using real-world exercises.",
  image: "/python-for-data-science.jpg", // Replace with actual image path
  issuer: "Udemy",
  date: "Apr 2025",
  credentialUrl: "https://www.udemy.com/certificate/UC-e5db9b13-f7b7-4734-8aab-eed41001513e/",
  skills: [
    "Python",
    "Data Science",
    "Exploratory Data Analysis (EDA)",
    "Data Visualization",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn"
  ],
  details: {
    overview:
      "This course provided in-depth training in Python for data science, covering data manipulation, visualization, and statistical analysis techniques, with a practical emphasis on real-world datasets.",
    highlights: [
      "Performed EDA on multiple real-world datasets",
      "Developed skills in Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn",
      "Applied statistical techniques to extract insights",
      "Built clear, reproducible data analysis workflows"
    ],
    impact:
      "Strengthened ability to analyze and visualize data in Python, enabling more effective decision-making in data-driven projects."
  }
},

]

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Eighth Place – 2024 ICPC Ethiopian Collegiate Programming Contest",
    description: "Awarded for competitive programming skills at the collegiate level",
    image: "/icpc-ethiopia-2024.png", // Replace with actual image path
    issuer: "International Collegiate Programming Contest (ICPC)",
    date: "Oct 28-29, 2024",
    category: "Competitive Programming",
    skills: ["Algorithms", "Data Structures", "Problem Solving", "Team Collaboration"],
    details: {
        overview:
        "Competed in the 2024 ICPC Ethiopian Collegiate Programming Contest representing Adama Science and Technology University. Secured eighth place among collegiate teams.",
        highlights: [
        "Solved complex algorithmic challenges under timed conditions",
        "Collaborated effectively with teammates in a competitive environment",
        "Demonstrated strong proficiency in programming languages and computational thinking"
        ],
        impact:
        "Achievement recognized at the national level, enhancing credibility in competitive programming and technical problem-solving."
    }
  },
  {
    id: 3,
    title: "African Credit Scoring Challenge",
    description: "Ranked 19th out of 900 participants in a financial data prediction competition",
    image: "/african-credit-scoring-challenge.png", // replace with actual path
    issuer: "Zindi",
    date: "Jan 13, 2025",
    category: "Data Science Competition",
    skills: ["Data Analysis", "Machine Learning", "Financial Modeling", "Python"],
    details: {
        overview:
        "Predicted the likelihood of customers defaulting on loans based on financial data. Ranked 19th out of 900 participants, placing in the top 50.",
        highlights: [
        "Analyzed and cleaned financial datasets",
        "Built predictive models for loan default probability",
        "Optimized models to achieve high ranking among international participants"
        ],
        impact:
        "Demonstrated strong applied machine learning skills in a competitive environment and gained recognition in the data science community."
    }
  },
     {
   id: 4,
   title: "21st Place – International Women's Day Challenge 2025",
   description: "Predicted women-headed households living below an income threshold in a data science competition",
   image: "/valid-International Women's Day Challenge.png",
   issuer: "Zindi Africa",
   date: "Mar 7–31, 2025",
   category: "Data Science & Predictive Modeling",
   skills: ["Data Analysis", "Machine Learning", "Predictive Modeling", "Python", "Feature Engineering"],
   details: {
     overview: "Competed in a data science challenge focused on predicting households headed by women living below a specific income threshold.",
     highlights: [
       "Ranked 21st out of 101 participants",
       "Developed predictive models using structured datasets",
       "Performed feature engineering and model evaluation to optimize predictions"
     ],
     impact: "Enhanced practical machine learning skills and gained experience in social-impact predictive analytics."
   },
 },
]

export function CertificateAchievementSection() {
  const [activeTab, setActiveTab] = useState<"certificates" | "achievements">("certificates")

  const data: (Certificate | Achievement)[] =
    activeTab === "certificates" ? certificates : achievements

  function isCertificate(item: Certificate | Achievement): item is Certificate {
    return (item as Certificate).credentialUrl !== undefined
  }

  return (
    <AnimatedSection id="certificates-achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeTab === "certificates" ? "default" : "outline"}
            onClick={() => setActiveTab("certificates")}
          >
            Certificates
          </Button>
          <Button
            variant={activeTab === "achievements" ? "default" : "outline"}
            onClick={() => setActiveTab("achievements")}
          >
            Achievements
          </Button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500 bg-muted/20"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {item.date}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{item.issuer}</p>
                {activeTab === "achievements" && (
                  <p className="text-xs text-primary font-medium mb-2">
                    {(item as Achievement).category}
                  </p>
                )}

                <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  {activeTab === "certificates" && isCertificate(item) && item.credentialUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={item.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Credential
                      </a>
                    </Button>
                  )}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="animate-scale-hover">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-heading">{item.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-64 object-contain rounded-lg bg-muted/20"
                        />
                        <div>
                          <h4 className="font-semibold mb-2">Overview</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.details.overview}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Highlights</h4>
                          <ul className="space-y-1">
                            {item.details.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-muted-foreground flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Impact</h4>
                          <p className="text-muted-foreground">{item.details.impact}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

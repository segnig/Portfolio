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
  profileUrl?: string
  skills: string[]
  details: {
    overview: string
    highlights: string[]
    impact: string
  }
}

const certificates: Certificate[] = [
{
  id: 8,
  title: "First Best A2SVian of the Year (2025)",
  description:
    "Triple award recognition at A2SV G6 — overall excellence, most consistent problem solver, and outstanding attendance at Adama Science and Technology University.",
  image: "/certificates/a2sv-best-a2svian-of-the-year-2025.jpg",
  issuer: "A2SV | Africa to Silicon Valley",
  date: "2025",
  credentialUrl: "https://www.linkedin.com/posts/validresults_a2sv-softwareengineering-backenddevelopment-activity-7411377741888962560-0VLz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFcTFmoBU0wkr3HV9KaJL328t2zrMVcFR6Y",
  skills: [
    "Backend Leadership",
    "Competitive Programming",
    "Problem Solving",
    "Team Leadership",
    "DSA"
  ],
  details: {
    overview:
      "Named First Best A2SVian of the Year (2025) at ASTU after leading the ShopAlly backend team and demonstrating consistent excellence throughout the A2SV G6 program.",
    highlights: [
      "First Best A2SVian of the Year (2025)",
      "Most Consistent Problem Solver",
      "Outstanding Attendance & Commitment",
      "First Best A2SVian for the Bootcamp",
      "Backend Team Lead for ShopAlly"
    ],
    impact:
      "Recognized with A2SV's highest honors for technical leadership, algorithmic discipline, and commitment across the G6 program."
  }
},
{
  id: 7,
  title: "Applied AI Lab: Deep Learning for Computer Vision",
  description:
    "Completed six end-to-end PyTorch computer vision projects covering image classification, object detection, generative AI, and deep learning model development.",
  image: "/certificates/applied-ai-lab-deep-learning-computer-vision.png",
  issuer: "WorldQuant University",
  date: "Nov 2025",
  credentialUrl: "https://www.credly.com/badges/56d9f63b-12ab-4f47-a345-4d99cca8b710/public_url", 
  skills: [
    "Artificial Intelligence (AI)",
    "Data Science",
    "Deep Learning",
    "Neural Networks",
    "PyTorch",
    "Machine Learning",
    "Image Classification",
    "Object Detection",
    "Image Generation",
    "Transformers",
    "Generative Adversarial Networks (GANs)",
    "Stable Diffusion",
    "YOLOv8",
    "OpenCV",
    "HuggingFace Transformers",
    "HuggingFace Diffusers",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",
    "Flask",
    "Streamlit",
    "Facial Recognition"
  ],
  details: {
    overview:
      "Earners of this badge completed six end-to-end PyTorch computer vision projects involving data preparation, cleaning, and transformation pipelines, and mastering deep learning models such as MLPs, CNNs, and transformers. Projects included image classification, object detection, generative AI, and ethical considerations in AI.",
    highlights: [
      "Built image classification models for wildlife conservation using neural networks",
      "Developed crop disease detection models using CNNs with transfer learning and callbacks",
      "Implemented real-time object detection systems for traffic monitoring using YOLOv8",
      "Performed face detection and recognition using MTCNN and Inception-ResNet, deployed via Flask",
      "Created synthetic medical images using GAN architectures and built Streamlit apps",
      "Developed and deployed a Stable Diffusion–powered meme generator for marketing"
    ],
    impact:
      "Gained advanced practical experience in computer vision, deep learning, and deployment. Strengthened ability to build, debug, optimize, and ethically evaluate AI systems for real-world applications."
  }
},
{
  id: 1,
  title: "Data Fundamentals with Capstone Project",
  description: "Credential demonstrating foundational knowledge of data analytics, data science methodologies, and visualization tools.",
  image: "/certificates/data-fundamentals-with-capstone-project.png",
  issuer: "IBM SkillsBuild",
  date: "Aug 2025",
  credentialUrl: "https://www.credly.com/badges/c21b9e03-c2c0-4c81-8036-2aa5bde697ea/public_url", 
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
  image: "/certificates/applied-data-science-lab.2.png",
  issuer: "WorldQuant University",
  date: "Oct 2024",
  credentialUrl: "https://www.credly.com/badges/f592fd5d-9a21-4bf8-8033-909f82f62850/public_url", 
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
  image: "/certificates/data-fundamentals.png",
  issuer: "IBM SkillsBuild",
  date: "Aug 2025",
  credentialUrl: "https://www.credly.com/badges/81c0cbd3-e0ed-4a89-b1b1-92dc60561296/public_url",
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
  image: "/certificates/python-for-data-science.jpg",
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
{
  id: 6,
  title: "10 Academy AI and Data Engineering Training Program",
  description: "A comprehensive 3-month project-based training in data engineering, machine learning, generative AI, and deployment technologies",
  image: "/certificates/10academy-training.png",
  issuer: "10 Academy & Kifiya Financial Technology",
  date: "sept 2025", 
  credentialUrl: "https://10academy.org/verify-certificate",
  skills: [
    // Data Engineering
    "Data Cleaning", "ETL Frameworks", "ELT Frameworks", "Big Data Manipulation", 
    "DBT Transformation", "Infrastructure Automation",
    "Data Warehousing",
    
    // Programming
    "Advanced Python", "Advanced SQL", "JavaScript",
    
    // Generative AI
    "Chatbot Development", "Context Engineering", 
    "Retrieval-Augmented Generation (RAG)", "LLM Fine-tuning", "LLM Evaluation",
    
    // Deployment
    "Docker", "GitHub", "CI/CD", "Unit Testing", "Model Deployment", 
    "Application Deployment", "Dashboard Building",
    
    // Machine Learning
    "Exploratory Data Analysis", "Statistical Modeling", "Predictive Modeling",
    "Time Series Analysis", "Deep Learning", "MLOps", "DVC", "MLFlow",
    
  ],
  details: {
    overview: "An intensive 12-week project-based training program focused on practical skills in data engineering, machine learning, generative AI, and modern deployment technologies. The program emphasizes hands-on experience with real-world projects and professional development.",
    
    highlights: [
      "Comprehensive 3-month (12-week) project-based training curriculum",
      "Covered cutting-edge technologies including Generative AI and RAG systems",
      "Practical experience with Docker, CI/CD, and cloud deployment",
      "Professional development in enterprise work culture and communication",
      "Direct mentorship from industry experts and founders",
      "Focus on both technical excellence and career readiness",
      "End-to-end project experience from data processing to deployment"
    ],
    
    impact: "This program provides comprehensive preparation for roles in data engineering, machine learning, and AI development. Graduates gain practical skills in modern data stacks, AI deployment, and professional workplace competencies, making them job-ready for high-demand positions in the tech industry."
  }
}

]

const achievements: Achievement[] = [
  {
    id: 6,
    title: "First Best A2SVian of the Year (2025)",
    description: "Triple award winner at A2SV G6 — overall excellence, most consistent problem solver, and outstanding attendance at ASTU",
    image: "/certificates/a2sv-best-a2svian-of-the-year-2025.jpg",
    issuer: "A2SV | Africa to Silicon Valley",
    date: "2025",
    category: "Leadership & Excellence",
    profileUrl: "https://www.linkedin.com/posts/validresults_a2sv-softwareengineering-backenddevelopment-activity-7411377741888962560-0VLz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFcTFmoBU0wkr3HV9KaJL328t2zrMVcFR6Y",
    skills: [
      "Backend Leadership",
      "Competitive Programming",
      "Problem Solving",
      "Team Leadership",
      "DSA"
    ],
    details: {
      overview:
        "Named First Best A2SVian of the Year (2025) at Adama Science and Technology University after a year defined by technical growth, leadership, and consistency. Previously recognized as First Best A2SVian for the Bootcamp and led the Backend Team for the ShopAlly development project during A2SV G6.",
      highlights: [
        "First Best A2SVian of the Year (2025) — overall excellence",
        "Most Consistent Problem Solver — discipline in DSA across LeetCode and Codeforces",
        "Outstanding Attendance & Commitment throughout the G6 program",
        "Led ShopAlly backend team, turning complex architectural challenges into a working product",
        "Ranked in Top 10% on Zindi competitive data science challenges"
      ],
      impact:
        "Validated a year of resilience and results in backend engineering, algorithmic problem-solving, and team leadership — earning recognition across A2SV's highest honors at ASTU."
    }
  },
  {
    id: 5,
    title: "WQU Global Alumni Ambassador for Ethiopia",
    description: "Official WorldQuant University alumni ambassador representing Ethiopia on the global ambassadors network",
    image: "/certificates/applied-data-science-lab.2.png",
    issuer: "WorldQuant University",
    date: "2025",
    category: "Alumni Leadership",
    profileUrl: "https://www.wqu.edu/alumni/ambassadors/ethiopia",
    skills: [
      "Alumni Engagement",
      "Data Science Education",
      "Quantitative Finance",
      "Community Building",
      "Mentorship"
    ],
    details: {
      overview:
        "Selected as a Global Alumni Ambassador for Ethiopia by WorldQuant University. Listed on the official WQU alumni ambassadors page, representing Adama alongside fellow ambassadors in Addis Ababa. Builds on completion of the Applied Data Science Lab (2024) and Computer Vision Lab (2025).",
      highlights: [
        "Featured on WQU's Ethiopia ambassadors directory at wqu.edu",
        "Supports prospective students and strengthens the local WQU alumni community",
        "Promotes tuition-free programs in data science, AI, and quantitative finance"
      ],
      impact:
        "Extended WQU education impact beyond coursework by serving as a community leader and ambassador for quantitative and data science learning in Ethiopia."
    }
  },
  {
    id: 1,
    title: "Eighth Place – 2024 ICPC Ethiopian Collegiate Programming Contest",
    description: "Awarded for competitive programming skills at the collegiate level",
    image: "/Achievements/icpc-ethiopia-2024.png", 
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
    image: "/Achievements/african-credit-scoring-challenge.png",
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
   image: "/Achievements/valid-international-womens-day-challenge.png",
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
                  {activeTab === "achievements" && !isCertificate(item) && (item as Achievement).profileUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={(item as Achievement).profileUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Profile
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

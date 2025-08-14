"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { AnimatedSection } from "@/components/animated-section"
import { EmailService, type ContactFormData } from "@/lib/email-service"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "segnigirma11@gmail.com",
    href: "mailto:segnigirma11@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251930070644",
    href: "tel:+251930070644",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Adama, Ethiopia",
    href: "#",
  },
]

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
    name: "Telegram",
    href: "https://t.me/valid_result",
    icon: Twitter
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success' | 'failed' | 'fallback'>('idle')
  const [statusMessage, setStatusMessage] = useState("")
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      // Trigger shake animation on form
      const form = e.target as HTMLFormElement
      form.classList.add("animate-shake")
      setTimeout(() => form.classList.remove("animate-shake"), 500)
      return
    }

    console.log('Contact form submitted!')
    console.log('Form Data:', formData)
    
    // Reset status and set to sending
    setEmailStatus('sending')
    setStatusMessage("Sending your message...")
    setIsSubmitting(true)

    try {
      // Use the email service to send the email
      console.log('Calling EmailService.sendEmail...')
      const result = await EmailService.sendEmail(formData as ContactFormData)
      console.log('EmailService result:', result)

      if (result.success) {
        console.log('Email sent successfully!')
        
        // Check if it was sent via API or fallback
        if (result.message.includes("Email sent successfully")) {
          setEmailStatus('success')
          setStatusMessage("Email sent successfully! I'll get back to you soon.")
        } else {
          setEmailStatus('fallback')
          setStatusMessage("Opened your email client. Please send the message manually.")
        }
        
        toast({
          title: "Message sent!",
          description: result.message,
        })
        
        // Clear form on success
        setFormData({ name: "", email: "", subject: "", message: "" })
        console.log('Form cleared successfully')
        
        // Auto-reset status after 5 seconds for success
        if (result.message.includes("Email sent successfully")) {
          setTimeout(() => {
            setEmailStatus('idle')
            setStatusMessage("")
          }, 5000)
        }
      } else {
        console.error('Email sending failed:', result.message)
        setEmailStatus('failed')
        setStatusMessage("Failed to send email. Please try again or contact me directly.")
        
        toast({
          title: "Failed to send message",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Email submission error:", error)
      setEmailStatus('failed')
      setStatusMessage("An unexpected error occurred. Please try again or contact me directly.")
      
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again or contact me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
      console.log('Form submission process completed')
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
    
    // Reset email status when user starts typing again
    if (emailStatus !== 'idle' && emailStatus !== 'sending') {
      setEmailStatus('idle')
      setStatusMessage("")
    }
  }

  return (
    <AnimatedSection id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to
            life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, innovative projects, and collaborations.
                Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach
                out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 group animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">{info.label}</p>
                      {info.href === "#" ? (
                        <p className="text-muted-foreground">{info.value}</p>
                      ) : (
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <Button
                      key={link.name}
                      variant="outline"
                      size="icon"
                      asChild
                      className="animate-scale-hover hover:border-primary hover:text-primary bg-transparent hover:bg-primary hover:text-primary-foreground animate-fade-up"
                      style={{ animationDelay: `${400 + index * 100}ms` }}
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

          {/* Contact Form */}
          <Card
            className="p-6 hover:shadow-xl transition-all duration-500 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            {/* Email Status Display */}
            {emailStatus !== 'idle' && (
              <div className={`mb-6 p-4 rounded-lg border-2 transition-all duration-300 ${
                emailStatus === 'sending' 
                  ? 'border-blue-200 bg-blue-50 text-blue-800'
                  : emailStatus === 'success'
                  ? 'border-green-200 bg-green-50 text-green-800'
                  : emailStatus === 'fallback'
                  ? 'border-yellow-200 bg-yellow-50 text-yellow-800'
                  : 'border-red-200 bg-red-50 text-red-800'
              }`}>
                <div className="flex items-center gap-3">
                  {emailStatus === 'sending' && (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  )}
                  {emailStatus === 'success' && (
                    <div className="text-green-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {emailStatus === 'fallback' && (
                    <div className="text-yellow-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  )}
                  {emailStatus === 'failed' && (
                    <div className="text-red-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  <div className="font-medium">
                    {statusMessage}
                  </div>
                </div>
                
                {/* Additional info for fallback */}
                {emailStatus === 'fallback' && (
                  <div className="mt-2 text-sm opacity-80">
                    This happens when the email service is temporarily unavailable. Your email client should have opened with a pre-filled message.
                  </div>
                )}
                
                {/* Retry button for failed attempts */}
                {emailStatus === 'failed' && (
                  <button
                    type="button"
                    onClick={() => {
                      setEmailStatus('idle')
                      setStatusMessage("")
                    }}
                    className="mt-2 text-sm underline hover:no-underline"
                  >
                    Try again
                  </button>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`transition-all duration-300 hover:border-primary focus:border-primary ${errors.name ? "border-destructive animate-shake" : ""}`}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1 animate-fade-up">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`transition-all duration-300 hover:border-primary focus:border-primary ${errors.email ? "border-destructive animate-shake" : ""}`}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1 animate-fade-up">{errors.email}</p>}
                </div>
              </div>

              <div>
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className={`transition-all duration-300 hover:border-primary focus:border-primary ${errors.subject ? "border-destructive animate-shake" : ""}`}
                />
                {errors.subject && <p className="text-destructive text-sm mt-1 animate-fade-up">{errors.subject}</p>}
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`transition-all duration-300 hover:border-primary focus:border-primary resize-none ${errors.message ? "border-destructive animate-shake" : ""}`}
                />
                {errors.message && <p className="text-destructive text-sm mt-1 animate-fade-up">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full animate-scale-hover hover:shadow-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                    Sending...
                  </>
                ) : emailStatus === 'success' ? (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Message Sent! Send Another
                  </>
                ) : emailStatus === 'fallback' ? (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Try Sending Again
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  )
}

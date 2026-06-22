import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})



const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Segni Girma- Software Engineer & Data Scientist",
  description: "I'm Segni Girma, a passionate Software Engineer and Data Scientist dedicated to crafting innovative solutions through code and data analysis. Explore my projects, blog, and connect with me to learn more about my work in technology and data science.",
  
  // make icon rounded
  icons: {
    icon: "/my-logo.png",
    shortcut: "/my-logo.png",
    apple: "/my-logo.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <style suppressHydrationWarning dangerouslySetInnerHTML={{
          __html: `:root{--font-sans:var(--font-inter);--font-heading:var(--font-space-grotesk);--font-body:var(--font-inter);}html{font-family:var(--font-inter),sans-serif;}`
        }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
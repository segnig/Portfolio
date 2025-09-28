import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
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
  description: "Minimalist portfolio showcasing software engineering and Data Science expertise",
  generator: "v0.app",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
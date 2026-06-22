"use client"

import { ExternalLink, Trophy, Target, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"

const profiles = [
  {
    platform: "LeetCode",
    handle: "valid_result",
    href: "https://leetcode.com/u/valid_result/",
    accent: "text-orange-500",
    border: "hover:border-orange-500/50",
    stats: [
      { label: "Problems Solved", value: "892" },
      { label: "Global Ranking", value: "#44,988" },
      { label: "Contest Rating", value: "3 ★" },
    ],
    breakdown: [
      { label: "Easy", value: 380, color: "bg-green-500" },
      { label: "Medium", value: 449, color: "bg-yellow-500" },
      { label: "Hard", value: 63, color: "bg-red-500" },
    ],
    highlight: "Most Consistent Problem Solver — A2SV G6",
  },
  {
    platform: "Codeforces",
    handle: "valid_result",
    href: "https://codeforces.com/profile/valid_result",
    accent: "text-blue-500",
    border: "hover:border-blue-500/50",
    stats: [
      { label: "Current Rating", value: "940" },
      { label: "Max Rating", value: "940" },
      { label: "Rank", value: "Newbie" },
    ],
    breakdown: [],
    highlight: "Adama Science and Technology University · Ethiopia",
  },
]

export function CompetitiveProgrammingSection() {
  return (
    <AnimatedSection id="competitive-programming" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Competitive Programming</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Daily problem-solving practice on LeetCode and Codeforces — building algorithmic thinking for
            interviews and contests
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <Card
              key={profile.platform}
              className={`p-6 hover:shadow-xl transition-all duration-500 animate-fade-up hover:-translate-y-1 ${profile.border}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className={`h-5 w-5 ${profile.accent}`} />
                    <h3 className="font-heading text-xl font-semibold">{profile.platform}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-mono">@{profile.handle}</p>
                </div>
                <Badge variant="outline" className="font-mono text-xs">
                  {profile.handle}
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-lg bg-muted/50">
                    <p className={`text-lg font-bold ${profile.accent}`}>{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {profile.breakdown.length > 0 && (
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    Difficulty Breakdown
                  </div>
                  {profile.breakdown.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-xs w-14 text-muted-foreground">{item.label}</span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.color}`}
                          style={{ width: `${(item.value / 892) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono w-8 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Zap className="h-4 w-4 text-primary" />
                {profile.highlight}
              </div>

              <Button variant="outline" asChild className="w-full hover:bg-primary hover:text-primary-foreground">
                <a href={profile.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View {profile.platform} Profile
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

"use client"

import { useState } from "react"
import { Globe, Lock } from "lucide-react"
import AnalyticsDashboard from "@/components/analytics-dashboard"
import PublicDashboard from "@/components/public-dashboard"
import { Switch } from "@/components/ui/switch"

export default function Home() {
  const [isPrivate, setIsPrivate] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="flex justify-end">
          <div className="flex items-center gap-2 bg-muted/50 p-1.5 rounded-full border border-border/50">
            <button
              onClick={() => setIsPrivate(false)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${!isPrivate
                ? "bg-background text-foreground shadow-sm ring-1 ring-border/20"
                : "text-muted-foreground hover:text-foreground/80"
                }`}
            >
              <Globe className="w-3.5 h-3.5" />
              Public
            </button>
            <Switch
              checked={isPrivate}
              onCheckedChange={setIsPrivate}
              className="scale-90"
            />
            <button
              onClick={() => setIsPrivate(true)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${isPrivate
                ? "bg-background text-foreground shadow-sm ring-1 ring-border/20"
                : "text-muted-foreground hover:text-foreground/80"
                }`}
            >
              <Lock className="w-3.5 h-3.5" />
              Private
            </button>
          </div>
        </div>

        {isPrivate ? (
          <AnalyticsDashboard />
        ) : (
          <PublicDashboard />
        )}
      </main>
    </div>
  )
}

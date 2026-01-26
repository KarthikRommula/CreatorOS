"use client"

import {
  Activity,
  Users,
  DollarSign,
  MousePointerClick,
  Eye,
  Smartphone,
  Monitor,
  Search,
  Bell,
  TrendingUp,
  Clock,
  ArrowUpRight,
  PlayCircle,
  Lightbulb,
  MoreHorizontal,
  Sparkles,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-8">
      <Tabs defaultValue="reach" className="space-y-8">
        <div className="flex items-center justify-center pb-4">
          <TabsList className="bg-muted/30 p-1.5 gap-1.5 rounded-full border border-border/40 inline-flex h-auto shadow-sm">
            <TabsTrigger
              value="reach"
              className="px-6 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-black/5 dark:data-[state=active]:bg-background dark:data-[state=active]:text-foreground transition-all duration-200 gap-2 flex items-center"
            >
              <ArrowUpRight className="w-4 h-4" />
              Reach
            </TabsTrigger>
            <TabsTrigger
              value="engagement"
              className="px-6 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-black/5 dark:data-[state=active]:bg-background dark:data-[state=active]:text-foreground transition-all duration-200 gap-2 flex items-center"
            >
              <Activity className="w-4 h-4" />
              Engagement
            </TabsTrigger>
            <TabsTrigger
              value="audience"
              className="px-6 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-black/5 dark:data-[state=active]:bg-background dark:data-[state=active]:text-foreground transition-all duration-200 gap-2 flex items-center"
            >
              <Users className="w-4 h-4" />
              Audience
            </TabsTrigger>
            <TabsTrigger
              value="revenue"
              className="px-6 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-black/5 dark:data-[state=active]:bg-background dark:data-[state=active]:text-foreground transition-all duration-200 gap-2 flex items-center"
            >
              <DollarSign className="w-4 h-4" />
              Revenue
            </TabsTrigger>
          </TabsList>
        </div>

        {/* REACH METRICS */}
        <TabsContent value="reach" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* CTR Card - Main Highlight */}
            <div className="md:col-span-4 flex flex-col">
              <Card className="flex-1 overflow-hidden border-none shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)] transition-all duration-300 bg-white dark:bg-card">
                <CardHeader className="pb-2 pt-6 px-6">
                  <CardTitle className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-950/40 rounded-lg text-emerald-600">
                      <MousePointerClick className="w-5 h-5" />
                    </div>
                    Click-Through Rate
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-black tracking-tighter text-foreground">14.2%</span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold uppercase">Viral Level</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-muted/40 hover:bg-muted/60 transition-colors">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-foreground">Thumbnail Performance</span>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded">Good</span>
                      </div>
                      <Progress value={85} className="h-1.5" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground uppercase font-medium">Target</span>
                        <span className="text-xl font-bold text-foreground">12%+</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground uppercase font-medium">Relation to Reach</span>
                        <span className="text-sm font-semibold text-blue-500">Inverse</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Traffic Sources */}
            <div className="md:col-span-8 flex flex-col">
              <Card className="flex-1 border-none shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)] transition-all duration-300 bg-white dark:bg-card">
                <CardHeader className="pb-2 pt-6 px-6">
                  <CardTitle className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground">
                    <div className="p-2 bg-blue-100 dark:bg-blue-950/40 rounded-lg text-blue-600 dark:text-blue-400">
                      <Search className="w-5 h-5" />
                    </div>
                    Traffic Sources
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: Monitor, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-950/40", label: "Browse Features (78%)", desc: "Homepage domination" },
                      { icon: PlayCircle, color: "text-red-600 dark:text-red-400", bg: "bg-red-100 dark:bg-red-950/40", label: "Suggested Videos (15%)", desc: "Up Next recommendation" },
                      { icon: Search, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-950/40", label: "YouTube Search (2%)", desc: "Targeted queries" },
                      { icon: Bell, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-950/40", label: "Notifications (5%)", desc: "Loyal core audience" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-border/50 hover:bg-muted/30 transition-all duration-200">
                        <div className={`p-2.5 rounded-lg shrink-0 ${item.bg}`}>
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{item.label}</p>
                          <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impressions Insight */}
            <div className="md:col-span-12">
              <Card className="border-none shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)] transition-all duration-300 bg-white dark:bg-card">
                <CardHeader className="pb-2 pt-6 px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                        Unlock More Impressions
                        <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30 tracking-normal">Pro Tip</span>
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Impressions are a lagging indicator. To naturally increase your reach, prioritize optimizing your <span className="font-semibold text-foreground">Click-Through Rate</span> and <span className="font-semibold text-foreground">Watch Time</span>. The algorithm will follow the audience's engagement.
                  </p>
                </CardContent>
              </Card>
            </div>


          </div>
        </TabsContent>

        {/* ENGAGEMENT METRICS */}
        <TabsContent value="engagement" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-none shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)] transition-all duration-300">
              <CardHeader className="pb-2 pt-6 px-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-950/40 rounded-lg text-purple-600">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold tracking-tight text-foreground">Audience Retention</CardTitle>
                    <p className="text-sm text-muted-foreground mt-0.5 font-medium">Key moments in your video</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Hooks", sub: "First 30s", color: "text-emerald-600", note: "Critical momentum" },
                    { label: "Spikes", sub: "Re-watches", color: "text-blue-600", note: "High interest" },
                    { label: "Dips", sub: "Drop-offs", color: "text-red-500", note: "Losing attention" },
                    { label: "Outros", sub: "Endings", color: "text-amber-600", note: "Save retention" },
                  ].map((item, i) => (
                    <div key={i} className="group p-4 rounded-2xl bg-muted/30 hover:bg-muted/60 transition-colors border border-transparent hover:border-border/50">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-bold text-lg text-foreground">{item.sub}</p>
                      <p className={`text-xs font-medium mt-1 group-hover:underline ${item.color}`}>{item.note}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)] transition-all duration-300">
              <CardHeader className="pb-2 pt-6 px-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-950/40 rounded-lg text-emerald-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold tracking-tight text-foreground">Avg. Percentage Viewed</CardTitle>
                    <p className="text-sm text-muted-foreground mt-0.5 font-medium">Viewer satisfaction score</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-2 space-y-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="font-medium">Shorts Target</span>
                    <span className="text-2xl font-bold">110%</span>
                  </div>
                  <Progress value={95} className="h-3 rounded-full" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="font-medium">Long Form Target</span>
                    <span className="text-2xl font-bold">65%</span>
                  </div>
                  <Progress value={65} className="h-3 rounded-full" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* AUDIENCE INSIGHTS */}
        <TabsContent value="audience" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)] flex flex-col justify-between">
              <CardHeader className="pb-2 pt-6 px-6">
                <CardTitle className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground">
                  <div className="p-2 bg-amber-100 dark:bg-amber-950/40 rounded-lg text-amber-600">
                    <Users className="w-5 h-5" />
                  </div>
                  Viewer Types
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-6 pt-2">
                <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-100 dark:border-amber-900/40">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-amber-600/80">Loyalty</p>
                    <span className="text-xs font-bold px-2 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 rounded-full">32%</span>
                  </div>
                  <p className="text-3xl font-black text-amber-700 dark:text-amber-500">14.2M</p>
                  <p className="text-sm text-amber-600/80 mt-1 font-medium">Returning Viewers</p>
                </div>
                <div className="p-5 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900/40">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-blue-600/80">Growth</p>
                    <span className="text-xs font-bold px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 rounded-full">68%</span>
                  </div>
                  <p className="text-3xl font-black text-blue-700 dark:text-blue-500">28.5M</p>
                  <p className="text-sm text-blue-600/80 mt-1 font-medium">New Unique Viewers</p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 border-none shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)]">
              <CardHeader className="pb-2 pt-6 px-6">
                <CardTitle className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  Demographics
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <div className="flex flex-col sm:flex-row gap-6 h-full">
                  <div className="flex-1 flex flex-col justify-center space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-muted-foreground" />
                        <span className="font-semibold">Mobile</span>
                      </div>
                      <span className="text-xl font-bold">65%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                      <div className="flex items-center gap-3">
                        <Monitor className="w-5 h-5 text-muted-foreground" />
                        <span className="font-semibold">Desktop/TV</span>
                      </div>
                      <span className="text-xl font-bold">35%</span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-950/30 dark:to-indigo-900/10 rounded-2xl border border-indigo-100/50 dark:border-none">
                    <p className="text-sm uppercase tracking-widest text-indigo-400 font-bold mb-2">Total Subscribers</p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <p className="text-4xl font-black text-indigo-900 dark:text-indigo-100">320M</p>
                    </div>
                    <div className="flex items-center gap-2 mb-3 bg-white/50 dark:bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-bold text-indigo-800 dark:text-indigo-200">+5.2M <span className="text-xs font-normal opacity-80">last 28d</span></span>
                    </div>
                    <p className="text-indigo-700/80 dark:text-indigo-300 text-xs font-medium max-w-[180px]">
                      Top 0.01% of Creator Growth. Converting 1 in 8 unique viewers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* REVENUE */}
        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <Card className="border-none shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)] transition-all">
              <CardHeader className="pb-2 pt-6 px-6">
                <CardTitle className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-950/40 rounded-lg text-emerald-600">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  Monetization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "RPM", sub: "$9.12 (High Value)", icon: DollarSign },
                  { title: "Ad Revenue", sub: "$4.8M / month", icon: TrendingUp },
                  { title: "Merch / Feastables", sub: "$15M+ (Estimated)", icon: MousePointerClick }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div>
                      <p className="font-bold text-lg">{item.title}</p>
                      <p className="text-xs text-muted-foreground font-medium">{item.sub}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                      <item.icon className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

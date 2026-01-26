"use client"

import { useState } from "react"
import { TrendingUp, MessageSquare, ArrowUpRight, BarChart3, Users, AlertCircle, Lightbulb, ThumbsUp, Youtube, User, ChevronDown, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TrendWatch() {
    const [selectedRequest, setSelectedRequest] = useState<any>(null)
    const [openSourceId, setOpenSourceId] = useState<number | null>(null)

    return (
        <div className="space-y-6 animate-in fade-in-50 duration-500">
            <div className="grid gap-6 md:grid-cols-2">
                {/* SECTION 1: TRENDING TOPICS */}
                <Card className="flex flex-col h-full rounded-xl overflow-hidden bg-card border shadow-sm relative group">
                    {/* Subtle Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                    <CardHeader className="pb-4 border-b border-border/40">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Trending Topics</CardTitle>
                                <CardDescription className="mt-1">Viral opportunities for your niche</CardDescription>
                            </div>
                            <div className="p-2 bg-indigo-100 dark:bg-indigo-950/50 rounded-md text-indigo-600">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col pt-6">
                        <div className="flex-1 grid grid-rows-3 gap-4 pb-6">
                            {[
                                {
                                    topic: "AI Agents & AutoGPT",
                                    growth: "+240%",
                                    volume: "High",
                                    difficulty: "Medium",
                                    reason: "Massive spike in search volume this week due to new Devin AI release.",
                                    sources: ["TechCrunch", "X.com"]
                                },
                                {
                                    topic: "Next.js 15 Server Actions",
                                    growth: "+185%",
                                    volume: "Med",
                                    difficulty: "High",
                                    reason: "Controversial update causing community debate. Great for opinion pieces.",
                                    sources: ["Reddit", "GitHub"]
                                },
                                {
                                    topic: "Rust for Web Dev",
                                    growth: "+85%",
                                    volume: "Low",
                                    difficulty: "Hard",
                                    reason: "Emerging interest in high-performance backend alternatives.",
                                    sources: ["Dev.to", "HackerNews"]
                                }
                            ].map((trend, i) => (
                                <div key={i} className="p-4 rounded-xl border bg-white/50 dark:bg-zinc-900/50 relative overflow-hidden backdrop-blur-sm h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-2 pl-2">
                                        <h3 className="font-bold text-foreground transition-colors">{trend.topic}</h3>
                                        <Badge variant="outline" className={`bg-emerald-50/50 text-emerald-700 border-emerald-200/50 dark:bg-emerald-950/30 dark:text-emerald-400 font-mono text-[10px]`}>
                                            <ArrowUpRight className="w-3 h-3 mr-1" />
                                            {trend.growth}
                                        </Badge>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2 pl-2 leading-relaxed">{trend.reason}</p>



                                    <div className="mt-auto flex items-end justify-between text-xs text-muted-foreground pl-2 gap-2">
                                        <div className="flex items-center gap-3">
                                            <span className="flex items-center gap-1.5 bg-muted/50 px-2 py-1 rounded-md border border-border/50">
                                                <BarChart3 className="w-3.5 h-3.5" /> Vol: <span className="font-semibold text-foreground">{trend.volume}</span>
                                            </span>
                                            <span className="flex items-center gap-1.5 bg-muted/50 px-2 py-1 rounded-md border border-border/50">
                                                <AlertCircle className="w-3.5 h-3.5" /> Diff: <span className="font-semibold text-foreground">{trend.difficulty}</span>
                                            </span>
                                        </div>
                                        <div className="relative">
                                            <div
                                                className="flex items-center gap-2 cursor-pointer group/sources hover:opacity-80 transition-opacity"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setOpenSourceId(openSourceId === i ? null : i);
                                                }}
                                            >
                                                <div className="flex -space-x-1.5">
                                                    {trend.sources.slice(0, 3).map((source, j) => (
                                                        <div key={j} className="w-4 h-4 rounded-full border border-background bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 flex items-center justify-center text-[6px] font-bold text-indigo-700 dark:text-indigo-300 ring-1 ring-background" style={{ zIndex: 3 - j }}>
                                                            {source.charAt(0)}
                                                        </div>
                                                    ))}
                                                </div>
                                                <span className="text-[10px] font-medium text-muted-foreground group-hover/sources:text-foreground transition-colors flex items-center gap-0.5">
                                                    Sources • {trend.sources.length} <ChevronDown className={`w-3 h-3 opacity-50 transition-transform duration-200 ${openSourceId === i ? 'rotate-180' : ''}`} />
                                                </span>
                                            </div>

                                            {openSourceId === i && (
                                                <div className="absolute bottom-full right-0 mb-2 w-48 p-1 bg-card/95 backdrop-blur-md text-card-foreground rounded-lg border shadow-xl z-20 animate-in fade-in zoom-in-95 duration-200 ring-1 ring-black/5">
                                                    <div className="text-[10px] font-semibold px-2 py-1.5 text-muted-foreground bg-muted/30 rounded-t-md mb-1">
                                                        Citations
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        {trend.sources.map((source, k) => (
                                                            <div key={k} className="flex items-center gap-2 text-[10px] px-2 py-1.5 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-md cursor-pointer transition-colors group/item">
                                                                <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-[8px] font-bold text-indigo-600 dark:text-indigo-400">
                                                                    {source.charAt(0)}
                                                                </div>
                                                                <span className="font-medium truncate flex-1">{source}</span>
                                                                <ExternalLink className="w-3 h-3 opacity-30 group-hover/item:opacity-70 group-hover/item:text-indigo-500" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-6 border-t border-border/40">
                            <Button variant="ghost" className="w-full text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-950/30">
                                See More Trends <ArrowUpRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* SECTION 2: AUDIENCE REQUESTS */}
                <Card className="flex flex-col h-full rounded-xl overflow-hidden bg-card border shadow-sm relative group">
                    {/* Subtle Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/50 dark:bg-amber-900/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                    <CardHeader className="pb-4 border-b border-border/40">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Audience Requests</CardTitle>
                                <CardDescription className="mt-1">Top requests from comments</CardDescription>
                            </div>
                            <div className="p-2 bg-amber-100 dark:bg-amber-950/50 rounded-md text-amber-600">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col pt-6">
                        <div className="flex-1 grid grid-rows-3 gap-4 pb-6">
                            {[
                                {
                                    request: "Full Course on Supabase",
                                    mentions: 42,
                                    priority: "High",
                                    topComment: "@dev_alex: 'Please can you make a full Supabase auth tutorial? The docs are confusing.'",
                                    user: "User123"
                                },
                                {
                                    request: "Portfolio Review 2024",
                                    mentions: 28,
                                    priority: "Med",
                                    topComment: "@design_guru: 'Would love to see you review subscriber portfolios again!'",
                                    user: "CreativeMind"
                                },
                                {
                                    request: "VS Code Extensions Setup",
                                    mentions: 15,
                                    priority: "Low",
                                    topComment: "@newbie_coder: 'What theme and icons are you using? Make a video pls.'",
                                    user: "HelloWorld"
                                }
                            ].map((req, i) => (
                                <div key={i} className="p-4 rounded-xl border bg-white/50 dark:bg-zinc-900/50 relative overflow-hidden backdrop-blur-sm h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-2">
                                            <Badge className={`${req.priority === 'High' ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-200' : req.priority === 'Med' ? 'bg-amber-400/80 hover:bg-amber-500/80 text-amber-900' : 'bg-muted text-muted-foreground hover:bg-muted/80'} text-[10px] px-2 h-5 uppercase tracking-wide border-0 shadow-sm`}>
                                                {req.priority} Priority
                                            </Badge>
                                            <div
                                                className="group/requests cursor-pointer hover:bg-amber-50 dark:hover:bg-amber-950/30 px-1.5 py-0.5 rounded-md transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setSelectedRequest(req)
                                                }}
                                            >
                                                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover/requests:underline">
                                                    <Users className="w-3 h-3" /> {req.mentions} requests
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="font-bold text-foreground mb-3 leading-snug">{req.request}</h3>

                                    <div className="bg-amber-50/50 dark:bg-amber-950/20 p-3 rounded-lg relative border border-amber-100/50 dark:border-amber-900/30">
                                        <MessageSquare className="w-3 h-3 absolute top-3.5 left-3 text-amber-400/50" />
                                        <p className="text-xs text-muted-foreground italic pl-5 border-l-2 border-amber-500/30 leading-relaxed">
                                            "{req.topComment.split("'")[1]}"
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-4 flex gap-2">
                                        <Button size="sm" className="h-8 text-xs w-full bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 shadow-sm dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-400 dark:hover:bg-amber-900/50 font-medium">
                                            <Youtube className="w-3.5 h-3.5 mr-1.5" /> Create this Video
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-6 border-t border-border/40">
                            <Button variant="ghost" className="w-full text-amber-600 hover:text-amber-700 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950/30">
                                Scan More Comments <ArrowUpRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Idea Generator Banner */}
            <div className="rounded-xl p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="bg-background rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-lg shadow-indigo-500/20 text-white">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Running out of ideas?</h3>
                            <p className="text-muted-foreground text-sm max-w-md">
                                Our AI analyzes your niche, current trends, and audience sentiment to generate 50+ viral video concepts tailored just for you.
                            </p>
                        </div>
                    </div>
                    <Button size="lg" className="shrink-0 bg-foreground text-background hover:bg-foreground/90">
                        Generate Concepts <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>

            <Dialog open={!!selectedRequest} onOpenChange={(open) => !open && setSelectedRequest(null)}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>{selectedRequest?.request}</DialogTitle>
                        <DialogDescription>
                            Top user comments requesting this topic
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground pb-2 border-b">
                            <span>Total Requests: <span className="font-semibold text-foreground">{selectedRequest?.mentions}</span></span>
                            <span>Priority: <span className="font-semibold text-amber-600">{selectedRequest?.priority}</span></span>
                        </div>
                        <ScrollArea className="h-[300px] pr-4">
                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <div key={i} className="flex gap-3">
                                        <Avatar className="w-8 h-8 border">
                                            <AvatarFallback><User className="w-4 h-4" /></AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-semibold">
                                                    {i === 0 ? selectedRequest?.user || "User123" : `User${Math.floor(Math.random() * 1000)}`}
                                                </span>
                                                <span className="text-xs text-muted-foreground">{i === 0 ? "2 days ago" : `${i + 2} days ago`}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground bg-muted/30 p-2 rounded-lg">
                                                {i === 0
                                                    ? selectedRequest?.topComment.split("'")[1]
                                                    : "I've been waiting for a video on this topic! highlighting the importance would be great."}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <Button className="w-full">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Draft Video Outline from Comments
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

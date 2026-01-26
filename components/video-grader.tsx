"use client"

import {
    Play,
    Pause,
    Volume2,
    Settings,
    Maximize,
    ChevronRight,
    CheckCircle2,
    AlertTriangle,
    XCircle,
    Wand2,
    Copy,
    RefreshCw,
    LayoutTemplate,
    Type,
    Image as ImageIcon,
    Hash,
    MessageSquare,
    Sparkles,
    Search,
    MoreHorizontal
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export default function VideoGrader() {
    return (
        <div className="flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-140px)] animate-in fade-in-50 duration-500 pb-8">

            {/* LEFT COLUMN: THE "STUDIO" CANVAS */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">
                {/* Video Player Container */}
                <div className="relative group rounded-xl overflow-hidden bg-black shadow-2xl ring-1 ring-border/20 aspect-video w-full">
                    {/* Main Video */}
                    <div className="absolute inset-0 pb-12">
                        <img
                            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover opacity-90"
                        />
                        {/* Play Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                            </div>
                        </div>
                    </div>

                    {/* Editor Controls Overlay - Top */}
                    <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-black/60 to-transparent">
                        <div className="flex gap-2">
                            <Badge variant="outline" className="bg-black/40 text-white border-white/20 backdrop-blur-sm">
                                Source: 4K.mp4
                            </Badge>
                        </div>
                        <div className="flex gap-2">
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 h-8 w-8">
                                <Settings className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Timeline / Player Controls - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-zinc-900/90 backdrop-blur-md border-t border-white/10 flex items-center px-4 gap-4 z-20">
                        <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 h-8 w-8 shrink-0">
                            <Play className="w-4 h-4 fill-white" />
                        </Button>
                        <div className="text-xs font-mono text-zinc-400 shrink-0">00:00 / 12:45</div>

                        {/* Fake Waveform Timeline */}
                        <div className="flex-1 h-8 flex items-center gap-[2px] opacity-50 overflow-hidden mask-linear-fade">
                            {Array.from({ length: 120 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-1 rounded-full bg-indigo-500/80 ${i > 30 && i < 60 ? 'bg-indigo-400' : 'bg-zinc-600'}`}
                                    style={{ height: `${(Math.max(20, Math.abs(Math.sin(i * 123)) * 80 + 20)).toFixed(1)}%` }}
                                />
                            ))}
                        </div>

                        <div className="flex gap-2 shrink-0">
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 h-8 w-8">
                                <Volume2 className="w-4 h-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 h-8 w-8">
                                <Maximize className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Metadata Editor Area */}
                <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col gap-6 relative">
                    {/* Subtle Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 dark:bg-indigo-900/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                    <div className="flex items-center justify-between relative z-10">
                        <Tabs defaultValue="details" className="w-full h-full flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <TabsList className="bg-muted/40 p-1 rounded-lg border border-border/50">
                                    <TabsTrigger value="details" className="text-xs font-medium px-4 py-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm transition-all">Metadata</TabsTrigger>
                                    <TabsTrigger value="transcript" className="text-xs font-medium px-4 py-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm transition-all">Transcript</TabsTrigger>
                                    <TabsTrigger value="chapters" className="text-xs font-medium px-4 py-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-800 data-[state=active]:shadow-sm transition-all">Chapters</TabsTrigger>
                                </TabsList>

                            </div>

                            <TabsContent value="details" className="mt-0 flex-1">
                                <div className="flex flex-col md:flex-row gap-8 h-full">
                                    {/* Main Form Inputs */}
                                    <div className="flex-1 space-y-6">
                                        <div className="space-y-3 group">
                                            <div className="flex justify-between items-end">
                                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                                    Video Title

                                                </label>
                                                <span className="text-xs text-muted-foreground font-mono">60/100 chars</span>
                                            </div>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    defaultValue="How to Build a SaaS in 2024 (Step-by-Step Guide)"
                                                    className="w-full text-lg font-semibold bg-transparent border-b-2 border-muted focus:border-indigo-500 py-2 px-1 transition-all outline-none placeholder:text-muted-foreground/50"
                                                />
                                                <div className="absolute right-0 top-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                                                    <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-indigo-600">
                                                        <Wand2 className="w-3.5 h-3.5" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3 group">
                                            <div className="flex justify-between items-end">
                                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                                    Description Preview

                                                </label>
                                            </div>
                                            <div className="relative">
                                                <div className="w-full text-sm leading-relaxed text-muted-foreground bg-muted/20 hover:bg-muted/30 border border-transparent hover:border-border rounded-xl p-4 transition-all min-h-[100px]">
                                                    <p>In this video, I break down the entire process of building a software company. We cover ideation, validation, coding...</p>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    className="absolute bottom-3 right-3 h-7 text-xs bg-white shadow-sm border opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <Maximize className="w-3 h-3 mr-1.5" /> Expand
                                                </Button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </TabsContent>

                            <TabsContent value="transcript" className="mt-0 flex-1">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2 relative">
                                        <Search className="w-4 h-4 absolute left-3 text-muted-foreground" />
                                        <input
                                            placeholder="Search transcript..."
                                            className="w-full bg-muted/30 border border-transparent hover:border-border focus:border-indigo-500 rounded-lg py-2 pl-9 pr-3 text-sm transition-all outline-none"
                                        />
                                        <Badge variant="outline" className="shrink-0">English (Auto)</Badge>
                                    </div>
                                    <ScrollArea className="flex-1 pr-4 -mr-4 h-[300px]">
                                        <div className="space-y-4">
                                            {[
                                                { time: "00:00", text: "In this video, I'm going to show you exactly how to build a SaaS product from scratch.", active: false },
                                                { time: "00:15", text: "We're going to cover everything from the initial idea validation...", active: true },
                                                { time: "00:42", text: "...to choosing the right tech stack for 2024. It's not what you think.", active: false },
                                                { time: "01:15", text: "First, let's talk about the problem. You need to solve a real pain point.", active: false },
                                                { time: "02:30", text: "I see so many developers starting with the code. That's a mistake.", active: false },
                                                { time: "03:45", text: "Validation comes first. Create a landing page, run some ads.", active: false },
                                                { time: "05:10", text: "Once you have emails, then you write the first line of code.", active: false },
                                            ].map((line, i) => (
                                                <div key={i} className={`group flex gap-4 p-3 rounded-lg transition-colors ${line.active ? 'bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30' : 'hover:bg-muted/50 cursor-pointer'}`}>
                                                    <span className={`text-xs font-mono shrink-0 pt-0.5 ${line.active ? 'text-indigo-600 font-bold' : 'text-muted-foreground'}`}>
                                                        {line.time}
                                                    </span>
                                                    <p className={`text-sm leading-relaxed ${line.active ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground'}`}>
                                                        {line.text}
                                                    </p>
                                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
                                                        <Button size="icon" variant="ghost" className="h-6 w-6">
                                                            <Copy className="w-3 h-3" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            <TabsContent value="chapters" className="mt-0 flex-1">
                                <div className="flex flex-col gap-4">


                                    <ScrollArea className="flex-1 pr-4 -mr-4 h-[300px]">
                                        <div className="space-y-2">
                                            {[
                                                { time: "00:00", title: "Introduction" },
                                                { time: "01:20", title: "Finding a Problem to Solve" },
                                                { time: "04:15", title: "Validating Your Idea" },
                                                { time: "08:45", title: "Choosing the Tech Stack" },
                                                { time: "11:30", title: "Building the MVP" },
                                            ].map((chapter, i) => (
                                                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 group border border-transparent hover:border-border/50 transition-all">
                                                    <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-[10px] font-mono text-muted-foreground group-hover:bg-background group-hover:text-foreground border border-transparent group-hover:border-border">
                                                        {i + 1}
                                                    </div>
                                                    <Badge variant="secondary" className="font-mono text-[10px] h-5 bg-muted/50 text-muted-foreground group-hover:text-foreground">
                                                        {chapter.time}
                                                    </Badge>
                                                    <input
                                                        defaultValue={chapter.title}
                                                        className="flex-1 bg-transparent text-sm font-medium text-foreground outline-none border-b border-transparent focus:border-indigo-500 py-0.5"
                                                    />

                                                </div>
                                            ))}

                                        </div>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: THE "COPILOT" INSPECTOR */}
            <div className="w-full lg:w-[380px] bg-card border rounded-xl shadow-lg h-fit sticky top-4 self-start animate-in slide-in-from-right-10 duration-500 overflow-hidden">
                {/* Inspector Header */}
                <div className="p-5 border-b bg-gradient-to-b from-muted/50 to-transparent">


                    {/* Score Card - Integrated */}
                    <div className="bg-background rounded-xl p-4 border shadow-sm flex items-center justify-between relative overflow-hidden">
                        <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Optimization Score</p>
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-3xl font-black text-foreground">78</span>
                                <span className="text-sm text-muted-foreground">/ 100</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">3 Issues Found</p>
                            <p className="text-[10px] text-muted-foreground mt-0.5">Last check: Just now</p>
                        </div>
                    </div>
                </div>

                {/* Analysis Action List */}
                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1">
                            <span>High Priority (2)</span>
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs text-indigo-500">Fix All</Button>
                        </div>

                        {/* Critical Issue */}
                        <div className="bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-900/30 rounded-xl p-4 space-y-3 relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
                            <div className="flex justify-between items-start">
                                <div className="flex gap-3">
                                    <div className="mt-0.5 bg-white dark:bg-red-950 rounded-full p-1 border border-red-100 dark:border-red-900 shadow-sm">
                                        <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-foreground">Missing Keywords</h4>
                                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                            Description lacks primary keywords in the first 200 characters.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pl-9">
                                <Button size="sm" className="w-full h-8 text-xs bg-red-600 hover:bg-red-700 text-white border-0 shadow-sm shadow-red-200 dark:shadow-none">
                                    <Wand2 className="w-3 h-3 mr-2" /> Generate SEO Description
                                </Button>
                            </div>
                        </div>

                        {/* Warning Issue */}
                        <div className="bg-amber-50/50 dark:bg-amber-950/10 border border-amber-200 dark:border-amber-900/30 rounded-xl p-4 space-y-3 relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
                            <div className="flex justify-between items-start">
                                <div className="flex gap-3">
                                    <div className="mt-0.5 bg-white dark:bg-amber-950 rounded-full p-1 border border-amber-100 dark:border-amber-900 shadow-sm">
                                        <ImageIcon className="w-3.5 h-3.5 text-amber-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-foreground">Thumbnail Contrast</h4>
                                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                            Text overlay blends with background.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pl-9 flex gap-2">
                                <Button size="sm" className="flex-1 h-8 text-xs bg-amber-500 hover:bg-amber-600 text-white border-0">
                                    Enhance
                                </Button>
                            </div>
                        </div>

                        <Separator className="my-2" />
                        <div className="px-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            <span>Passed Checks (2)</span>
                        </div>

                        {/* Success Item */}
                        <div className="flex items-start justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border cursor-pointer group">
                            <div className="flex items-start gap-3">
                                <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 mt-0.5">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-medium">Title Optimization</span>
                                    <p className="text-xs text-muted-foreground leading-snug">
                                        <span className="font-semibold text-emerald-600">Passed:</span> Length (60 chars) is optimal & keywords are relevant.
                                    </p>
                                </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                        </div>

                        {/* Success Item */}
                        <div className="flex items-start justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border cursor-pointer group">
                            <div className="flex items-start gap-3">
                                <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-600 mt-0.5">
                                    <MessageSquare className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-medium">Caption Sync</span>
                                    <p className="text-xs text-muted-foreground leading-snug">
                                        <span className="font-semibold text-blue-600">Passed:</span> Captions are 99% accurate and perfectly synchronized.
                                    </p>
                                </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                        </div>
                    </div>
                </ScrollArea>
            </div>

        </div>
    )
}

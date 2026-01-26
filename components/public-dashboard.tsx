"use client"

import { Play, BarChart3, Lightbulb, TrendingUp, Swords } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VideoGrader from "@/components/video-grader"
import ChannelStats from "@/components/channel-stats"
import TrendWatch from "@/components/trend-watch"
import CompetitorIntel from "@/components/competitor-intel"

export default function PublicDashboard() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Creator Studio</h2>
                    <p className="text-muted-foreground mt-1">Optimize your content before you publish.</p>
                </div>
            </div>

            <Tabs defaultValue="home" className="space-y-6">
                <TabsList className="bg-muted/30 p-1.5 gap-1.5 rounded-full border border-border/40 inline-flex h-auto w-full md:w-auto overflow-x-auto">
                    <TabsTrigger
                        value="home"
                        className="px-6 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-black/5 dark:data-[state=active]:bg-background dark:data-[state=active]:text-foreground transition-all duration-200 gap-2 flex items-center"
                    >
                        <BarChart3 className="w-4 h-4" />
                        Home
                    </TabsTrigger>
                    <TabsTrigger
                        value="latest"
                        className="px-6 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-black/5 dark:data-[state=active]:bg-background dark:data-[state=active]:text-foreground transition-all duration-200 gap-2 flex items-center"
                    >
                        <Play className="w-4 h-4" />
                        Latest Video
                    </TabsTrigger>
                    <TabsTrigger
                        value="trends"
                        className="px-6 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-black/5 dark:data-[state=active]:bg-background dark:data-[state=active]:text-foreground transition-all duration-200 gap-2 flex items-center"
                    >
                        <TrendingUp className="w-4 h-4" />
                        Trend Watch
                    </TabsTrigger>
                    <TabsTrigger
                        value="intel"
                        className="px-6 py-2.5 rounded-full text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-black/5 dark:data-[state=active]:bg-background dark:data-[state=active]:text-foreground transition-all duration-200 gap-2 flex items-center"
                    >
                        <Swords className="w-4 h-4" />
                        Intel
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="home" className="space-y-6 animate-in fade-in-50 duration-300 slide-in-from-bottom-2">
                    <ChannelStats />
                </TabsContent>

                <TabsContent value="latest" className="space-y-6 animate-in fade-in-50 duration-300 slide-in-from-bottom-2">
                    <VideoGrader />
                </TabsContent>

                <TabsContent value="trends" className="space-y-6 animate-in fade-in-50 duration-300 slide-in-from-bottom-2">
                    <TrendWatch />
                </TabsContent>

                <TabsContent value="intel" className="space-y-6 animate-in fade-in-50 duration-300 slide-in-from-bottom-2">
                    <CompetitorIntel />
                </TabsContent>
            </Tabs>
        </div>
    )
}

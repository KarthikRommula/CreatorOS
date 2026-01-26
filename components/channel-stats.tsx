"use client"

import { ArrowUpRight, ArrowDownRight, Users, Eye, Clock, TrendingUp, Filter, MoreHorizontal, FileVideo, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ChannelStats() {
    return (
        <div className="space-y-6 animate-in fade-in-50 duration-500">
            {/* Realtime Pulse Section */}
            <div className="grid gap-6 md:grid-cols-3">
                {/* Active Subscribers Card */}
                <Card className="rounded-xl overflow-hidden bg-card border shadow-sm relative group">
                    {/* Subtle Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Active Subscribers</CardTitle>
                        <div className="p-1.5 bg-indigo-100 dark:bg-indigo-950/50 rounded-md text-indigo-600">
                            <Users className="h-4 w-4" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-3xl font-black text-foreground">12,482</span>
                            <Badge variant="outline" className="h-5 bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800 text-[10px] px-1.5">
                                <ArrowUpRight className="h-3 w-3 mr-1" /> 1.2%
                            </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">+182 today</p>

                        {/* Mini Sparkline Visualization */}
                        <div className="h-8 flex items-end gap-[3px] opacity-60">
                            {Array.from({ length: 24 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-full rounded-t-sm ${i > 18 ? 'bg-indigo-500' : 'bg-indigo-200 dark:bg-indigo-900'}`}
                                    style={{ height: `${(20 + Math.abs(Math.sin(i * 12.34)) * 60).toFixed(1)}%` }}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Realtime Views Card */}
                <Card className="rounded-xl overflow-hidden bg-card border shadow-sm relative group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Realtime Views (48h)</CardTitle>
                        <div className="p-1.5 bg-blue-100 dark:bg-blue-950/50 rounded-md text-blue-600">
                            <Eye className="h-4 w-4" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-3xl font-black text-foreground">45.2K</span>
                            <Badge variant="outline" className="h-5 bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800 text-[10px] px-1.5">
                                <ArrowUpRight className="h-3 w-3 mr-1" /> 8.4%
                            </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">Vs last 48 hours</p>

                        {/* Mini Sparkline Visualization */}
                        <div className="h-8 flex items-end gap-[3px] opacity-60">
                            {Array.from({ length: 24 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-full rounded-t-sm ${i > 15 ? 'bg-blue-500' : 'bg-blue-200 dark:bg-blue-900'}`}
                                    style={{ height: `${(30 + Math.abs(Math.cos(i * 5.67)) * 50).toFixed(1)}%` }}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Watch Time Card */}
                <Card className="rounded-xl overflow-hidden bg-card border shadow-sm relative group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50/50 dark:bg-amber-900/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Watch Time</CardTitle>
                        <div className="p-1.5 bg-amber-100 dark:bg-amber-950/50 rounded-md text-amber-600">
                            <Clock className="h-4 w-4" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-3xl font-black text-foreground">4,203</span>
                            <span className="text-sm font-medium text-muted-foreground">hrs</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4 flex items-center">
                            <ArrowUpRight className="w-3 h-3 text-emerald-500 mr-1" />
                            <span className="text-emerald-600 font-medium">+12%</span>
                            <span className="ml-1">vs previous period</span>
                        </p>

                        {/* Mini Sparkline Visualization */}
                        <div className="h-8 flex items-end gap-[3px] opacity-60">
                            {Array.from({ length: 24 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-full rounded-t-sm ${i > 20 ? 'bg-amber-500' : 'bg-amber-200 dark:bg-amber-900'}`}
                                    style={{ height: `${(20 + Math.abs(Math.sin(i * 10)) * 70).toFixed(1)}%` }}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6">
                {/* Top Content List */}
                <Card className="rounded-xl overflow-hidden bg-card border shadow-sm w-full">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="space-y-1">
                            <CardTitle className="text-lg font-bold">Top Performing Content</CardTitle>
                            <CardDescription>Performance metrics for your last 10 published videos</CardDescription>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8 text-xs">
                                <Filter className="w-3.5 h-3.5 mr-2" /> Filter
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 text-xs">
                                Last 28 Days
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <ScrollArea className="h-[400px]">
                            <div className="flex flex-col">
                                {[
                                    { title: "10 AI Tools You Need in 2024", views: "125K", reason: "High retention (65%) & viral Twitter share", date: "2 days ago", duration: "12:40" },
                                    { title: "Building a SaaS in 1 Hour", views: "98.2K", reason: "Trending topic + Clickbait thumbnail", date: "5 days ago", duration: "45:10" },
                                    { title: "Day in the Life of a Dev", views: "45.1K", reason: "Strong search traffic for 'Dev Life'", date: "1 week ago", duration: "08:15" },
                                    { title: "Stop Using React.useMemo()", views: "32.8K", reason: "Controversial styling in title", date: "2 weeks ago", duration: "10:20" },
                                    { title: "Vercel Ship 2024 Review", views: "28.4K", reason: "Timely news coverage", date: "3 weeks ago", duration: "15:45" },
                                    { title: "Next.js 14 Tutorial for Beginners", views: "22.1K", reason: "High evergreen search volume", date: "1 month ago", duration: "1:20:00" },
                                    { title: "CSS Grid vs Flexbox", views: "18.5K", reason: "Popular comparison query", date: "1 month ago", duration: "06:30" }
                                ].map((video, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors border-b last:border-0 cursor-pointer group">
                                        <div className="w-16 h-10 rounded-md bg-muted flex-shrink-0 relative overflow-hidden ring-1 ring-border/50">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-900" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <FileVideo className="w-4 h-4 text-muted-foreground/40" />
                                            </div>
                                            <div className="absolute bottom-0.5 right-0.5 bg-black/80 text-white text-[8px] px-1 rounded-sm font-mono">
                                                {video.duration}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0 grid grid-cols-12 gap-4 items-center">
                                            <div className="col-span-5">
                                                <p className="text-sm font-medium truncate group-hover:text-indigo-600 transition-colors">{video.title}</p>
                                                <p className="text-[11px] text-muted-foreground mt-0.5">{video.date}</p>
                                            </div>

                                            <div className="col-span-2 flex flex-col items-start pl-2">
                                                <span className="text-xs font-medium">{video.views}</span>
                                                <span className="text-[10px] text-muted-foreground">Views</span>
                                            </div>

                                            <div className="col-span-5 flex flex-col items-start px-2">
                                                <div className="flex items-center gap-1.5 w-full">
                                                    <Badge variant="secondary" className="w-full justify-start h-auto py-1.5 px-3 text-[11px] font-medium bg-gradient-to-r from-indigo-50/80 to-transparent dark:from-indigo-950/30 dark:to-transparent text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/30 shadow-sm hover:border-indigo-200 transition-colors">
                                                        <span className="truncate">{video.reason}</span>
                                                    </Badge>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

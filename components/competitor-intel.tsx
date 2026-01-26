"use client"

import { useState } from "react"
import { Users, Swords, Handshake, Briefcase, ArrowUpRight, Youtube, TrendingUp, Search, ExternalLink, ShieldAlert, Sparkles, Send, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CompetitorIntel() {
    const [selectedCollab, setSelectedCollab] = useState<any>(null)

    return (
        <div className="space-y-6 animate-in fade-in-50 duration-500">
            {/* Market Pulse Banner */}
            <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 rounded-xl border bg-card shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                    <div className="p-3 bg-red-100/50 dark:bg-red-900/20 rounded-xl text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">
                        <Swords className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Competitor Activity</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-2xl font-bold tracking-tight">High</p>
                            <span className="text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                                <TrendingUp className="w-3 h-3" /> +12%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="p-4 rounded-xl border bg-card shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                    <div className="p-3 bg-indigo-100/50 dark:bg-indigo-900/20 rounded-xl text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                        <Handshake className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Collab Opportunities</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-2xl font-bold tracking-tight">5 New</p>
                            <span className="text-xs text-muted-foreground">in your niche</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 rounded-xl border bg-card shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                    <div className="p-3 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-xl text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Sponsor Interest</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-2xl font-bold tracking-tight">Active</p>
                            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded-full">
                                2 Offers
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* SECTION 1: COMPETITOR TRACKER */}
                <Card className="flex flex-col h-full rounded-xl overflow-hidden bg-card border shadow-sm relative group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-red-50/50 dark:bg-red-900/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                    <CardHeader className="pb-4 border-b border-border/40 bg-muted/5">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                                    Competitor Watch
                                    <Badge variant="outline" className="text-[10px] font-normal text-muted-foreground h-5">3 Active</Badge>
                                </CardTitle>
                                <CardDescription className="mt-1">Monitoring channels with 80%+ audience overlap</CardDescription>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                                <Search className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 pt-6 bg-gradient-to-b from-card to-muted/10">
                        <ScrollArea className="h-[450px] pr-4 -mr-2">
                            <div className="space-y-4 pr-2">
                                {[
                                    {
                                        name: "TechFlow",
                                        status: "Trending",
                                        action: "Released 'AI Agents Explained'",
                                        impact: "150K views in 24h",
                                        insight: "Pivoting heavily to Agentic AI content.",
                                        recommendation: "Create a reaction or 'Deep Dive' follow-up.",
                                        avatar: "TF",
                                        color: "red"
                                    },
                                    {
                                        name: "CodeMastery",
                                        status: "Growing",
                                        action: "Daily Shorts Series",
                                        impact: "+5K Subs this week",
                                        insight: "Short-form strategy capturing beginners.",
                                        recommendation: "Repurpose your top highlights as Shorts.",
                                        avatar: "CM",
                                        color: "orange"
                                    },
                                    {
                                        name: "DevDaily",
                                        status: "Inactive",
                                        action: "No uploads for 2 weeks",
                                        impact: "Audience searching for alternatives",
                                        insight: "Gap in 'Weekly News' summaries.",
                                        recommendation: "Cover this week's news to capture their traffic.",
                                        avatar: "DD",
                                        color: "gray"
                                    }
                                ].map((comp, i) => (
                                    <div key={i} className="group p-4 rounded-xl border bg-card hover:bg-accent/5 transition-all duration-300 hover:shadow-md hover:border-red-200/50 dark:hover:border-red-800/50 relative overflow-hidden">
                                        <div className="flex items-start justify-between mb-3 relative z-10">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="w-10 h-10 ring-2 ring-background border shadow-sm">
                                                    <AvatarFallback className={`bg-gradient-to-br ${comp.color === 'red' ? 'from-red-100 to-orange-100 text-red-700' : comp.color === 'orange' ? 'from-orange-100 to-amber-100 text-orange-700' : 'from-gray-100 to-gray-200 text-gray-700'} text-xs font-bold`}>{comp.avatar}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h3 className="font-bold text-sm flex items-center gap-2">
                                                        {comp.name}
                                                        {comp.status === 'Trending' && <Badge variant="destructive" className="h-4 px-1 text-[9px] uppercase">Hot</Badge>}
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                                                        <span className={`w-1.5 h-1.5 rounded-full ${comp.status === 'Inactive' ? 'bg-gray-300' : 'bg-green-500 animate-pulse'}`} />
                                                        {comp.status}
                                                    </p>
                                                </div>
                                            </div>
                                            <Button size="icon" variant="ghost" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </Button>
                                        </div>

                                        <div className="space-y-3 relative z-10">
                                            <div className="bg-muted/30 p-2.5 rounded-lg border border-border/50 text-xs text-muted-foreground flex items-start gap-2.5">
                                                <Youtube className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                                <span className="font-medium text-foreground leading-snug">{comp.action}</span>
                                            </div>

                                            <div className="flex flex-col gap-1.5 pl-1">
                                                <div className="flex items-center gap-2 text-xs">
                                                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                                                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">{comp.impact}</span>
                                                </div>
                                                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                                                    <ShieldAlert className="w-3.5 h-3.5 text-amber-500 mt-0.5" />
                                                    <span className="italic">{comp.insight}</span>
                                                </div>
                                            </div>

                                            <div className="mt-2 pt-3 border-t border-border/40 flex items-center justify-between">
                                                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wide">AI Recommendation</p>
                                                <Button size="sm" variant="link" className="h-auto p-0 text-xs text-red-600 dark:text-red-400">
                                                    Take Action <ArrowUpRight className="w-3 h-3 ml-1" />
                                                </Button>
                                            </div>
                                            <p className="text-xs font-medium text-foreground bg-red-50/50 dark:bg-red-900/10 p-2 rounded-md border border-red-100 dark:border-red-900/30">
                                                {comp.recommendation}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>

                {/* SECTION 2: OPPORTUNITIES (COLLABS & SPONSORS) */}
                <div className="flex flex-col gap-6">
                    {/* Collborations */}
                    <Card className="rounded-xl overflow-hidden bg-card border shadow-sm relative group hover:shadow-md transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                        <CardHeader className="pb-4 border-b border-border/40 bg-muted/5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                                        Collaboration Match
                                        <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 pointer-events-none border-indigo-200 dark:border-indigo-800 text-[10px] h-5">90%+ Match</Badge>
                                    </CardTitle>
                                    <CardDescription className="mt-1">Creators with complementary audiences</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                {[
                                    { name: "DesignSense", subs: "85K", match: "92%", avatar: "DS", tags: ["UI/UX", "Figma"] },
                                    { name: "FrontendFray", subs: "120K", match: "88%", avatar: "FF", tags: ["React", "CSS"] }
                                ].map((collab, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border bg-card hover:bg-indigo-50/30 dark:hover:bg-indigo-950/10 transition-colors group/item relative overflow-hidden">
                                        <div className="absolute inset-y-0 left-0 w-1 bg-indigo-500 rounded-l-xl opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                        <div className="flex items-center gap-4">
                                            <Avatar className="w-12 h-12 border-2 border-background ring-2 ring-indigo-50 dark:ring-indigo-900/30">
                                                <AvatarFallback className="bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-bold">{collab.avatar}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h4 className="font-bold text-sm text-foreground">{collab.name}</h4>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                                                    <span>{collab.subs} Subs</span>
                                                    <span>•</span>
                                                    <span className="font-medium text-indigo-600 dark:text-indigo-400">{collab.match} Match</span>
                                                </div>
                                                <div className="flex gap-1 mt-1.5">
                                                    {collab.tags.map(tag => (
                                                        <span key={tag} className="text-[9px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground border">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            size="sm"
                                            className="h-8 text-xs bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 dark:bg-indigo-950/30 dark:border-indigo-800 dark:text-indigo-400 dark:hover:bg-indigo-900/50 shadow-sm"
                                            onClick={() => setSelectedCollab(collab)}
                                        >
                                            Connect
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Sponsors */}
                    <Card className="rounded-xl overflow-hidden bg-card border shadow-sm relative group hover:shadow-md transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                        <CardHeader className="pb-4 border-b border-border/40 bg-muted/5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                                        High-Value Sponsors
                                        <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                    </CardTitle>
                                    <CardDescription className="mt-1">Brands actively hiring in your niche</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                {[
                                    { name: "Supabase", category: "Database Infrastructure", offers: "$2k - $5k", icon: "S" },
                                    { name: "Clerk", category: "Auth & User Management", offers: "$1.5k - $3k", icon: "C" }
                                ].map((sponsor, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border bg-card hover:bg-emerald-50/30 dark:hover:bg-emerald-950/10 transition-colors group/item relative overflow-hidden">
                                        <div className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-l-xl opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 flex items-center justify-center text-emerald-700 dark:text-emerald-300 font-bold text-lg shadow-sm border border-emerald-200/50 dark:border-emerald-800/50">
                                                {sponsor.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-foreground">{sponsor.name}</h4>
                                                <p className="text-xs text-muted-foreground mt-0.5">{sponsor.category}</p>
                                                <div className="mt-1.5 inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
                                                    {sponsor.offers}
                                                </div>
                                            </div>
                                        </div>
                                        <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-emerald-600">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Dialog open={!!selectedCollab} onOpenChange={(open) => !open && setSelectedCollab(null)}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <div className="p-2 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                                <Mail className="w-5 h-5" />
                            </div>
                            Draft Collaboration Request
                        </DialogTitle>
                        <DialogDescription>
                            Review and customize your message to <span className="font-semibold text-foreground">{selectedCollab?.name}</span> before sending.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="subject" className="text-xs font-semibold uppercase text-muted-foreground">Subject</Label>
                            <Input id="subject" defaultValue={`Collaboration Opportunity: ${selectedCollab?.name} x YourChannel`} className="font-medium" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-xs font-semibold uppercase text-muted-foreground">Message Preview</Label>
                            <div className="relative">
                                <Textarea
                                    id="message"
                                    className="min-h-[200px] leading-relaxed resize-none p-4 font-normal"
                                    defaultValue={`Hi ${selectedCollab?.name},\n\nI've been following your channel for a while and love your recent videos on ${selectedCollab?.tags?.[0] || 'tech'}. Your audience engagement is incredible!\n\nI think there's a great opportunity for us to collaborate on a video about "The Future of AI Development". Our audiences have about a 90% overlap, so it would be highly mutually beneficial.\n\nLet me know if you're open to chatting about this!\n\nBest,\n[Your Name]`}
                                />
                            </div>
                        </div>
                    </div>

                    <DialogFooter className="flex-col sm:flex-row gap-2">
                        <Button variant="outline" onClick={() => setSelectedCollab(null)}>Cancel</Button>
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2">
                            <Send className="w-4 h-4" /> Send Request
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

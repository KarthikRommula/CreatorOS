"use client"

import {
    LayoutDashboard,
    Video,
    BarChart2,
    MessageSquare,
    FileText,
    ShieldCheck,
    DollarSign,
    Wand2,
    Music,
    Settings,
    HelpCircle,
    Plus
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <div className="flex items-center gap-2 p-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                        Y
                    </div>
                    <span className="font-bold text-lg tracking-tight group-data-[collapsible=icon]:hidden">
                        Studio
                    </span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <div className="px-2 mb-4 group-data-[collapsible=icon]:hidden">
                        <Button className="w-full justify-start gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                            <Plus className="w-4 h-4" />
                            <span>Create</span>
                        </Button>
                    </div>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" tooltip="Dashboard">
                                    <LayoutDashboard className="w-5 h-5" />
                                    <span>Dashboard</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" tooltip="Content">
                                    <Video className="w-5 h-5" />
                                    <span>Content</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" isActive tooltip="Analytics">
                                    <BarChart2 className="w-5 h-5" />
                                    <span>Analytics</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" tooltip="Comments">
                                    <MessageSquare className="w-5 h-5" />
                                    <span>Comments</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" tooltip="Subtitles">
                                    <FileText className="w-5 h-5" />
                                    <span>Subtitles</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" tooltip="Copyright">
                                    <ShieldCheck className="w-5 h-5" />
                                    <span>Copyright</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" tooltip="Earn">
                                    <DollarSign className="w-5 h-5" />
                                    <span>Earn</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" tooltip="Customization">
                                    <Wand2 className="w-5 h-5" />
                                    <span>Customization</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" tooltip="Audio Library">
                                    <Music className="w-5 h-5" />
                                    <span>Audio Library</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" tooltip="Settings">
                            <Settings className="w-5 h-5" />
                            <span>Settings</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" tooltip="Send Feedback">
                            <HelpCircle className="w-5 h-5" />
                            <span>Send feedback</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

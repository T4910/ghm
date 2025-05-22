"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutDashboard, User, Calendar, Users, FileText, Settings, LogOut, Menu, X } from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: "John Doe",
    role: "admin", // or "member"
  }

  const isAdmin = user.role === "admin"

  const routes = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      title: "Dashboard",
      variant: "default",
    },
    {
      href: "/dashboard/profile",
      icon: User,
      title: "My Profile",
      variant: "ghost",
    },
    {
      href: "/dashboard/attendance",
      icon: Calendar,
      title: "Attendance",
      variant: "ghost",
    },
  ]

  const adminRoutes = [
    {
      href: "/dashboard/members",
      icon: Users,
      title: "Members",
      variant: "ghost",
    },
    {
      href: "/dashboard/applications",
      icon: FileText,
      title: "Applications",
      variant: "ghost",
    },
    {
      href: "/dashboard/settings",
      icon: Settings,
      title: "Settings",
      variant: "ghost",
    },
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={toggleSidebar}>
              {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">Organization Portal</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm hidden md:inline-block">Welcome, {user.name}</span>
            <Link href="/">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 transform border-r bg-background transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:z-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex h-16 items-center border-b px-6 md:h-[65px]">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">Organization Portal</span>
            </Link>
          </div>
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="space-y-1">
                <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide">Navigation</h2>
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      pathname === route.href ? "bg-accent text-accent-foreground" : "transparent",
                    )}
                  >
                    <route.icon className="h-4 w-4" />
                    {route.title}
                  </Link>
                ))}
              </div>
            </div>
            {isAdmin && (
              <div className="px-3 py-2">
                <div className="space-y-1">
                  <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide">Admin</h2>
                  {adminRoutes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                        pathname === route.href ? "bg-accent text-accent-foreground" : "transparent",
                      )}
                    >
                      <route.icon className="h-4 w-4" />
                      {route.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}


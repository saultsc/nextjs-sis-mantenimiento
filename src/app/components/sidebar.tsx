'use client'
import Link from 'next/link'
import { Home, Wind, FireExtinguisher, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from 'react'

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  return (
    <div className={cn(
      "bg-gray-900 text-white transition-all duration-300 ease-in-out",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h2 className="text-xl font-bold">Menu</h2>}
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <nav className="space-y-2 p-2">
        <SidebarItem href="/" icon={Home} text="Dashboard" isCollapsed={isCollapsed} />
        <SidebarItem href="/aires" icon={Wind} text="Aires Acondicionados" isCollapsed={isCollapsed} />
        <SidebarItem href="/extintores" icon={FireExtinguisher} text="Extintores" isCollapsed={isCollapsed} />
      </nav>
    </div>
  )
}

function SidebarItem({ href, icon: Icon, text, isCollapsed }: { href: string, icon: any, text: string, isCollapsed: boolean }) {
  return (
    <Link href={href} className={cn(
      "flex items-center space-x-2 rounded-lg px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-all",
      isCollapsed && "justify-center"
    )}>
      <Icon className="h-5 w-5" />
      {!isCollapsed && <span>{text}</span>}
    </Link>
  )
}


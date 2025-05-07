"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sidebar as ShadcnSidebar,
  SidebarMenu,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarContent
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Book, Home } from "lucide-react";

interface SidebarProps {
  wikiSections?: { title: string; slug: string }[];
}

export function Sidebar({ wikiSections = [] }: SidebarProps) {
  const pathname = usePathname();

  return (
    <ShadcnSidebar>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Book className="h-5 w-5" />
            <span>r/Weightlifting</span>
          </Link>
          <ThemeToggle />
        </div>
        
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarMenu>
              
              {wikiSections.map((section) => (
                <SidebarMenuButton
                  key={section.slug}
                  asChild
                  isActive={pathname === `/wiki/${section.slug}`}
                  tooltip={section.title}
                >
                  <Link href={`/wiki/${section.slug}`} className="flex items-center gap-2">
                    <span>{section.title}</span>
                  </Link>
                </SidebarMenuButton>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        
        <div className="mt-auto p-4">
          <Button asChild variant="outline" className="w-full">
            <Link href="https://www.reddit.com/r/weightlifting/" target="_blank">
              Visit Reddit
            </Link>
          </Button>
        </div>
      </div>
    </ShadcnSidebar>
  );
} 
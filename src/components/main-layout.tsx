"use client";

import type { ReactNode } from "react";
import {
  SidebarTrigger,
  SidebarInset,
  useSidebar,
} from "@/components/ui/sidebar";
import { Sidebar } from "@/components/sidebar";
import { PanelLeftIcon } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { toggleSidebar } = useSidebar();

  // Mock data for wiki sections - you would fetch this from Reddit's API
  const wikiSections = [
    { title: "Getting Started", slug: "getting-started" },
    { title: "Rules", slug: "rules" },
    { title: "FAQ", slug: "faq" },
    { title: "Resources", slug: "resources" },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar wikiSections={wikiSections} />
      
      <div className="flex flex-1 flex-col">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
          <SidebarTrigger>
            <PanelLeftIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Sidebar</span>
          </SidebarTrigger>
        </div>
        
        <SidebarInset className="flex-1 overflow-auto p-4 md:p-6">
          <div className="mx-auto w-full max-w-4xl">
            {children}
          </div>
        </SidebarInset>
      </div>
    </div>
  );
} 
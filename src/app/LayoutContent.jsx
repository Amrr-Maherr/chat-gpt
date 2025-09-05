"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/AppSidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function LayoutContent({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/";

  if (isLoginPage) {
    return children;
  }

  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />
        <main className="flex-1 bg-[#212121]">{children}</main>
      </div>
    </SidebarProvider>
  );
}

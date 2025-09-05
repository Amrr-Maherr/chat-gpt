"use client";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";

const items = [
  { title: "Home", url: "/Home", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "/Settings", icon: Settings },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="!bg-black !border-0 !outline-0 text-white hover:text-white"
    >
      <div
        className={`flex w-full !bg-[#181818] text-white ${
          open ? "justify-end pr-2" : "justify-center cursor-pointer"
        }`}
      >
        <SidebarTrigger className="cursor-pointer hover:bg-[#242424] hover:text-white " />
      </div>
      <SidebarContent className="!bg-[#181818]">
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu className="!bg-[#181818]">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="hover:bg-[#242424] hover:text-white !px-[12.5px] !py-[7.50px] active:bg-[#242424] active:text-white"
                    asChild
                  >
                    <Link href={item.url}>
                      <item.icon className="h-5 w-5" />
                      <span className="!text-[18px] font-normal truncate">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="!bg-[#181818] border-solid border-t border-[#242424]">
        <div
          className={`flex items-center ${
            open ? "justify-start gap-2" : "justify-center"
          }`}
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {open && <h3>Amr Maher</h3>}
          {open && (
            <Button
              variant="outline"
              className="bg-[#242424] rounded-full px-4 text-[15px] hover:bg-[#242424] hover:text-white cursor-pointer"
            >
              Upgrade now
            </Button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

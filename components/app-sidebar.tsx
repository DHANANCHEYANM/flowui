"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";

import {
  CommandDialog,
  CommandInput,
} from "@/components/ui/command";

import {
  LayoutDashboard,
  ShoppingBag,
  User,
  Wrench,
  Tag,
  Hash,
  Package,
  PanelLeftClose,
  Search,
} from "lucide-react";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  teams: [
    {
      logo: (
        <Image
          src="/flows.png"
          alt="Flow Logo"
          width={140}
          height={50}
          priority
        />
      ),
    },
  ],

  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: <LayoutDashboard />,
    },
    {
      title: "Orders",
      url: "/admin/orders",
      icon: <ShoppingBag />,
    },
    {
      title: "Customers",
      url: "/admin/customers",
      icon: <User />,
    },
    {
      title: "Warehouse",
      icon: <Wrench />,
      items: [
        {
          title: "Brands",
          url: "/admin/warehouse/brands",
          icon: <Tag/>,
        },
        {
          title: "Categories",
          url: "/admin/warehouse/categories",
          icon: <Hash/>,
        },
        {
          title: "Products",
          url: "/admin/warehouse/products",
          icon: <Package/>,
        },
      ],
    },
  ],
};

function CollapseButton() {
  const { toggleSidebar } = useSidebar();

  return (
    <SidebarMenuButton onClick={toggleSidebar}>
      <PanelLeftClose className="h-4 w-4" />
      <span className="group-data-[collapsible=icon]:hidden">
        Collapse
      </span>
    </SidebarMenuButton>
  );
}

export function AppSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>

        <hr className="mx-2 border-gray-200" />

        <SidebarContent>
          <NavUser />

          <hr className="my-2 border-gray-200" />

          <NavMain items={data.navMain} />

          <hr className="my-2 border-gray-200" />

          <Button
            variant="ghost"
            className="justify-start group-data-[collapsible=icon]:justify-center"
            onClick={() => setOpen(true)}
          >
            <Search className="h-4 w-4" />
            <span className="ml-2 group-data-[collapsible=icon]:hidden">
              Search
            </span>
          </Button>
        </SidebarContent>

        <SidebarFooter>
          <hr className="my-2 border-gray-200" />

          <SidebarMenu>
            <SidebarMenuItem>
              <CollapseButton />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Order number, customer, products or any action..." />
      </CommandDialog>
    </>
  );
}
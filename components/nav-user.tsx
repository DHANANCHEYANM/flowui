"use client";

import { useEffect, useState } from "react";
import {
  LogOut,
  Settings,
  Moon,
  Sun,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  useSession,
  signOut,
} from "@/lib/auth-client";

export function NavUser() {
  const { isMobile } = useSidebar();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const { data: session } = useSession();

  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    if (session?.user) {
      setUser({
        name: session.user.name || "Admin",
        email: session.user.email || "",
        avatar: session.user.image || "/profile.jpg",
      });
    }
  }, [session]);

  const handleLogout = async () => {
    await signOut();
    router.replace("/login");
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="h-auto min-h-[72px] px-3 py-3"
            >
              <Avatar className="h-10 w-10 rounded-full">
                <AvatarImage
                  src={user.avatar}
                  alt={user.name}
                />
                <AvatarFallback>
                  {user.name?.charAt(0) || "A"}
                </AvatarFallback>
              </Avatar>

              <div className="ml-3 flex-1 overflow-hidden group-data-[collapsible=icon]:hidden">
                <p className="truncate text-sm font-semibold">
                  {user.name}
                </p>

                <p className="truncate text-xs text-muted-foreground">
                  {user.email}
                </p>
              </div>

              <div className="rounded-md p-2 hover:bg-muted group-data-[collapsible=icon]:hidden">
                <Settings className="h-5 w-5" />
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem
              onClick={() =>
                setTheme(
                  theme === "dark"
                    ? "light"
                    : "dark"
                )
              }
            >
              {theme === "dark" ? (
                <Sun className="mr-2 h-4 w-4" />
              ) : (
                <Moon className="mr-2 h-4 w-4" />
              )}

              Toggle Theme
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
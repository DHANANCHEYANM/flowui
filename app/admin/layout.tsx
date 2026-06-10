import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />

          {/* <Separator
            orientation="vertical"
            className="h-4"
          /> */}
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
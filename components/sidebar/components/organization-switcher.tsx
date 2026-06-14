"use client";

import { ChevronsUpDown, Plus } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { getInitials } from "@/lib/utils";
import { sidebarData } from "../data";

export function OrganizationSwitcher() {
  const { isMobile } = useSidebar();
  const [activeOrganization, setActiveOrganization] = useState(
    sidebarData.organizations[0],
  );

  if (!activeOrganization) return null;

  const OrgAvatar = ({
    logo,
    name,
    className,
  }: {
    logo?: string | null;
    name: string;
    className?: string;
  }) => (
    <Avatar className={className}>
      <AvatarImage src={logo ?? undefined} alt={name} className="rounded-md" />
      <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </Avatar>
  );

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            render={<DropdownMenuTrigger />}
          >
            <OrgAvatar
              logo={activeOrganization.logo}
              name={activeOrganization.name}
              className="size-8 rounded-md after:rounded-md"
            />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">
                {activeOrganization.name}
              </span>
              <span className="truncate text-xs">
                {activeOrganization.slug}
              </span>
            </div>
            <ChevronsUpDown className="ml-auto" />
          </SidebarMenuButton>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-muted-foreground text-xs">
                Organizations
              </DropdownMenuLabel>
              {sidebarData.organizations.map((organization, index) => (
                <DropdownMenuItem
                  key={organization.name}
                  onClick={() => setActiveOrganization(organization)}
                  className="gap-2 p-2"
                >
                  <OrgAvatar
                    logo={organization.logo}
                    name={organization.name}
                    className="size-6 rounded-md after:rounded-md"
                  />
                  {organization.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">
                Add Organization
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

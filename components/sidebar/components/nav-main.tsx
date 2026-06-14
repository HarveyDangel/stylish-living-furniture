"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { sidebarData } from "../data";
import type { NavCollapsible, NavItem, NavLink } from "../types";

function isNavCollapsible(item: NavItem): item is NavCollapsible {
  return Array.isArray(item.items);
}

function isNavLink(item: NavItem): item is NavLink {
  return !Array.isArray(item.items);
}

function checkIsActive(pathname: string, url: string): boolean {
  return pathname === url || pathname.split("?")[0] === url;
}

function NavLinkItem({ item }: { item: NavLink }) {
  const pathname = usePathname();
  const isActive = checkIsActive(pathname, item.url);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={item.title}
        isActive={isActive}
        render={<Link href={item.url} />}
      >
        {item.icon && <item.icon />}
        <span>{item.title}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function NavCollapsibleItem({ item }: { item: NavCollapsible }) {
  const pathname = usePathname();
  const { isMobile, state } = useSidebar();
  const hasActiveChild = item.items.some((i) => checkIsActive(pathname, i.url));
  const isIconMode = state === "collapsed" && !isMobile;

  return (
    <Collapsible
      defaultOpen={item.isActive ?? hasActiveChild}
      className="group/collapsible"
      render={<SidebarMenuItem />}
    >
      <CollapsibleTrigger
        render={
          <SidebarMenuButton
            tooltip={item.title}
            isActive={isIconMode && hasActiveChild}
          />
        }
      >
        {item.icon && <item.icon />}
        <span>{item.title}</span>
        <ChevronRight className="ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          {item.items.map((subItem) => {
            const isSubActive = checkIsActive(pathname, subItem.url);
            return (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton
                  isActive={isSubActive}
                  className={isSubActive ? "font-medium" : ""}
                  render={<Link href={subItem.url} />}
                >
                  {subItem.icon && <subItem.icon />}
                  <span>{subItem.title}</span>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            );
          })}
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function NavMain() {
  return (
    <>
      {sidebarData.navGroups.map((group) => (
        <SidebarGroup key={group.title}>
          <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
          <SidebarMenu>
            {group.items.map((item) => {
              if (isNavCollapsible(item)) {
                return <NavCollapsibleItem key={item.title} item={item} />;
              }
              if (isNavLink(item)) {
                return <NavLinkItem key={item.title} item={item} />;
              }
              return null;
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}

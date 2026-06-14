import type { LucideIcon } from "lucide-react";

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface Organization {
  name: string;
  slug: string;
  logo?: string | null;
}

interface BaseNavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
}

export interface NavChildItem extends BaseNavItem {}

export type NavCollapsible = NavItem & {
  items: NavChildItem[];
};

export interface NavItem extends BaseNavItem {
  isActive?: boolean;
  items?: NavChildItem[];
}

export type NavLink = NavItem & {
  items?: never;
};

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface SidebarData {
  user: User;
  organizations: Organization[];
  navGroups: NavGroup[];
}

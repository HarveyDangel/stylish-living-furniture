import { LayoutDashboard, Users } from "lucide-react";
import type { SidebarData } from "./types";

export const sidebarData: SidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },

  organizations: [
    {
      name: "Acme Inc",
      slug: "acme-inc",
      logo: "https://github.com/shadcn.png",
    },
    {
      name: "Acme Corp.",
      slug: "acme-corp",
      logo: "https://github.com/shadcn.png",
    },
    {
      name: "Evil Corp.",
      slug: "evil-corp",
      logo: "https://github.com/shadcn.png",
    },
  ],

  navGroups: [
    {
      title: "Stylish Living Furniture",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Users",
          url: "/users",
          icon: Users,
        },
      ],
    },
  ],
};

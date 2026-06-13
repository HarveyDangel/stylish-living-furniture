export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Branches", href: "/branches" },
  { label: "Clients", href: "/clients" },
];

export const footerLinks: NavLink[] = [
  { label: "Collections", href: "/collections" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinkVariants } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-primary">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-16">
        <Link href="/" className="relative block h-10 w-44 brightness-0 invert">
          <Image
            src="/Images/Contact/navbar-logo.webp"
            alt="Stylish Living Furniture"
            fill
            sizes="176px"
            className="object-contain object-left"
          />
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={navLinkVariants({ active: isActive })}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

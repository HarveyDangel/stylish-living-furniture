"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-primary">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-16">
        <Link
          href="/"
          className="relative block h-10 w-44 brightness-0 invert"
        >
          <Image
            src="/Images/Contact/navbar-logo.webp"
            alt="Stylish Living Furniture"
            fill
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
                  className={`label-md relative text-on-primary no-underline after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-on-primary after:transition-transform after:duration-300 ${
                    isActive
                      ? "after:scale-x-100"
                      : "after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100"
                  }`}
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

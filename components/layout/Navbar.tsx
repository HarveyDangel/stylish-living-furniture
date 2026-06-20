"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinkVariants } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <header className="relative z-30 bg-primary">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-16">
          <Link
            href="/"
            className="relative block h-10 w-44 brightness-0 invert"
          >
            <Image
              src="/Images/Contact/navbar-logo.webp"
              alt="Stylish Living Furniture"
              fill
              sizes="176px"
              className="object-contain object-left"
            />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
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

          <button
            type="button"
            className="touch-manipulation text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="fixed top-0 right-0 z-50 flex h-full w-72 translate-x-0 flex-col bg-primary pt-4 shadow-xl transition-transform duration-300 md:hidden">
          <div className="flex justify-end px-5 pb-4">
            <button
              type="button"
              className="text-white"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col gap-2 px-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-md px-4 py-3 font-semibold text-lg text-white no-underline transition-colors hover:bg-white/10 ${
                      isActive ? "bg-white/10" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

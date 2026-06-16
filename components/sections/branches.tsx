"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { branches } from "@/data/branches";
import { cn } from "@/lib/utils";

export function Branches() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-sans text-4xl text-primary">Our Branches</h2>
          <p className="mt-2">Find a branch near you.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {branches.slice(0, 3).map((branch) => (
            <div
              key={branch.name}
              className="group overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low shadow-(--shadow-floating)"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to- from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h2 className="font-sans text-2xl text-primary-foreground">
                    {branch.name}
                  </h2>
                  <span className="font-medium text-primary-foreground/80 text-xs">
                    {branch.days}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start gap-3">
                  {/*<svg className="mt-0.5 h-5 w-5 shrink-0 text-on-surface-variant/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>*/}
                  <p className="text-lg">{branch.address}</p>
                </div>

                <div className="my-4 border-outline-variant/40 border-t pt-4">
                  <p className="mb-1 font-medium text-primary text-xs uppercase tracking-widest">
                    Call us
                  </p>
                  <p className="font-bold text-lg text-primary tracking-tight">
                    {branch.contact}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/*<svg className="h-5 w-5 shrink-0 text-on-surface-variant/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>*/}
                  <p className="font-light text-sm">{branch.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/branches"
            className={cn(
              buttonVariants({ variant: "ghost", size: "xl" }),
              "border-primary px-12 dark:hover:bg-primary dark:hover:text-primary-foreground",
            )}
          >
            View All Branches
          </Link>
        </div>
      </div>
    </section>
  );
}

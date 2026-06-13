"use client";

import Image from "next/image";
import Link from "next/link";
import { branches } from "@/data/branches";

export default function BranchesSection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="headline-md text-primary">Our Branches</h2>
          <p className="body-md text-on-surface-variant mt-2">
            Find a branch near you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.slice(0, 3).map((branch) => (
            <div
              key={branch.name}
              className="group overflow-hidden rounded-lg bg-surface-container-low shadow-[var(--shadow-floating)]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <h3 className="headline-sm absolute bottom-3 left-4 text-white">
                  {branch.name}
                </h3>
              </div>
              <div className="space-y-2 p-4">
                <p className="body-md text-on-surface-variant">
                  {branch.address}
                </p>
                <p className="label-md text-primary">{branch.contact}</p>
                <p className="body-md text-on-surface-variant">
                  {branch.hours}
                </p>
                <p className="label-sm text-on-surface-variant">
                  {branch.days}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/branches"
            className="inline-block rounded border border-primary px-10 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-primary no-underline transition-colors hover:bg-primary hover:text-white"
          >
            View All Branches
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { branches } from "@/data/branches";

export default function BranchesPage() {
  return (
    <>
      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h1 className="display-lg-mobile md:display-lg text-primary mb-4">
              Our Branches
            </h1>
            <p className="body-lg text-on-surface-variant">
              With ten branches across the Visayas and Bicol, we are always
              within reach. Visit the branch nearest you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="group overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low shadow-[var(--shadow-floating)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={branch.image}
                    alt={branch.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h2 className="headline-sm text-white">{branch.name}</h2>
                    <span className="label-sm text-white/70">
                      {branch.days}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-on-surface-variant/50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p className="body-sm text-on-surface-variant">
                      {branch.address}
                    </p>
                  </div>

                  <div className="my-4 border-t border-outline-variant/40 pt-4">
                    <p className="text-[11px] font-medium uppercase tracking-widest text-on-surface-variant/50 mb-1">
                      Call us
                    </p>
                    <p className="text-lg font-bold text-primary tracking-tight">
                      {branch.contact}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-on-surface-variant/50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <p className="body-sm font-light text-on-surface-variant/60">
                      {branch.hours}
                    </p>
                  </div>

                  <Link
                    href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                    target="_blank"
                    className="label-sm mt-4 inline-flex items-center gap-1 text-primary no-underline transition-colors hover:text-primary-container"
                  >
                    Get Directions
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Visit Our Showroom"
        description="Can&apos;t make it to a branch? Get in touch with us online and we will help you find the perfect furniture from the comfort of your home."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}

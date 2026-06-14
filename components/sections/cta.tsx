import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-16">
        <h2 className="mb-4 font-medium font-sans text-3xl text-primary-foreground">
          Ready to Start Your Project?
        </h2>
        <p className="body-lg mx-auto mb-8 max-w-xl text-white/80">
          Whether you are furnishing a home or outfitting an office, we are here
          to help you find the perfect pieces for your space.
        </p>
        <Link
          href="/products"
          className={cn(
            buttonVariants({ variant: "secondary", size: "xl" }),
            "px-12",
          )}
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

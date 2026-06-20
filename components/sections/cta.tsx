import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTA({
  title = "Let Us Help You Find the Perfect Piece",
  description = "Whether you are furnishing a home or outfitting an office, our team is ready to assist. Reach out today for a free consultation.",
  buttonText = "Get in Touch",
  buttonHref = "/contact",
}: CTAProps) {
  return (
    <section className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-16">
        <h2 className="mb-4 font-medium font-sans text-3xl text-primary-foreground tracking-wide">
          {title}
        </h2>
        <p className="body-lg mx-auto mb-8 max-w-xl text-white/80">
          {description}
        </p>
        <Link
          href={buttonHref}
          className={cn(
            buttonVariants({ variant: "secondary", size: "xl" }),
            "px-12 uppercase tracking-wide",
          )}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

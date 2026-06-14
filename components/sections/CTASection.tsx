import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "Let Us Help You Find the Perfect Piece",
  description = "Whether you are furnishing a home or outfitting an office, our team is ready to assist. Reach out today for a free consultation.",
  buttonText = "Get in Touch",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 text-center md:px-16">
        <h2 className="headline-md mb-4 text-white">{title}</h2>
        <p className="body-lg mx-auto mb-8 max-w-xl text-white/80">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="inline-block rounded bg-secondary-container px-10 py-3 font-semibold text-black text-sm uppercase tracking-[0.05em] no-underline transition-all hover:brightness-110"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

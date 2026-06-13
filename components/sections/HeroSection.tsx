import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/Images/hero.webp)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 text-center md:px-16">
        <h1 className="display-lg text-white mb-4">
          Timeless Craft for
          <br />
          Modern Living
        </h1>
        <p className="body-lg mx-auto mb-10 max-w-xl text-white/80">
          Handcrafted furniture that brings warmth and character to every space.
          Discover pieces built to last a lifetime.
        </p>
        <Link
          href="/products"
          className="inline-block rounded bg-secondary-container px-10 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-black no-underline transition-all hover:brightness-110"
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
}

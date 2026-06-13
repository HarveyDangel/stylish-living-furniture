export default function ContactSection() {
  return (
    <section className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 text-center md:px-16">
        <h2 className="headline-md text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="body-lg text-white/80 mx-auto mb-8 max-w-xl">
          Whether you are furnishing a home or outfitting an office, we are here
          to help you find the perfect pieces for your space.
        </p>
        <a
          href="/contact"
          className="inline-block rounded bg-secondary-container px-10 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-black no-underline transition-all hover:brightness-110"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

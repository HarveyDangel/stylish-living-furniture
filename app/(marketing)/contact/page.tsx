import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/Images/hero.webp)" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-5 text-center md:px-16">
          <h1 className="display-lg-mobile md:display-lg text-white">
            Contact Us
          </h1>
          <p className="body-lg mx-auto mt-4 max-w-2xl text-white/70">
            We would love to hear from you. Reach out to us for inquiries,
            custom orders, or just to say hello.
          </p>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="headline-md text-primary mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="label-md mb-1 block text-on-surface">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded border border-outline-variant bg-surface px-4 py-3 text-on-surface outline-none transition-colors placeholder:text-outline focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label-md mb-1 block text-on-surface">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded border border-outline-variant bg-surface px-4 py-3 text-on-surface outline-none transition-colors placeholder:text-outline focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="label-md mb-1 block text-on-surface">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full resize-none rounded border border-outline-variant bg-surface px-4 py-3 text-on-surface outline-none transition-colors placeholder:text-outline focus:border-primary"
                    placeholder="Tell us what you need..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded bg-secondary-container px-10 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-black transition-all hover:brightness-110"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="label-md mb-2 text-primary">Visit Us</h3>
                <p className="body-md text-on-surface-variant">
                  Brgy. 95 Caibaan, Maharlika Highway
                  <br />
                  Tacloban City, Philippines
                </p>
              </div>
              <div>
                <h3 className="label-md mb-2 text-primary">Call Us</h3>
                <p className="body-md text-on-surface-variant">
                  (+63) 917 145 3352
                </p>
              </div>
              <div>
                <h3 className="label-md mb-2 text-primary">Email Us</h3>
                <p className="body-md text-on-surface-variant">
                  hello@stylishlivingfurniture.com
                </p>
              </div>
              <div>
                <h3 className="label-md mb-2 text-primary">Store Hours</h3>
                <p className="body-md text-on-surface-variant">
                  Monday - Saturday
                  <br />
                  8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="mb-8 text-center">
            <h2 className="headline-md text-primary">Find Us</h2>
          </div>
          <div className="overflow-hidden rounded-lg border border-outline-variant shadow-[var(--shadow-floating)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d124.9935731!3d11.2162609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330876e21e31dd59%3A0xbe4ad3d13fe599d7!2sSTYLISH%20LIVING%20FURNITURE!5e0!3m2!1sen!2sph!4v1"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tacloban Main Branch Location"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

    </>
  );
}

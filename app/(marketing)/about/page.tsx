import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/Images/about.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-5 text-center md:px-16">
          <h1 className="display-lg-mobile md:display-lg text-white">
            Our Story
          </h1>
          <p className="body-lg mx-auto mt-4 max-w-2xl text-white/70">
            A decade of dedication to craftsmanship, community, and timeless design.
          </p>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="headline-md text-primary mb-8 text-center">
              Our History
            </h2>
            <div className="space-y-6 text-on-surface-variant">
              <p className="body-md">
                Stylish Living Furniture began as a small family workshop in
                Tacloban City with a simple belief: furniture should be built to
                last, designed with care, and accessible to every Filipino home.
                What started as a handful of handcrafted pieces has grown into a
                trusted name across the Visayas and beyond.
              </p>
              <p className="body-md">
                Over the past decade, we have expanded from that single workshop
                to ten branches spanning from Cebu to Surigao, Legazpi to
                Borongan. Along the way, we have partnered with local
                craftsmen, sourced sustainable materials, and stayed true to the
                principles that define us — quality, integrity, and warmth.
              </p>
              <p className="body-md">
                Today, Stylish Living Furniture serves thousands of families,
                offices, and institutions. Yet we remain, at heart, the same
                workshop — driven by a passion for craftsmanship and a
                commitment to making every space feel like home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="rounded-lg bg-surface p-8 shadow-[var(--shadow-floating)]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-primary-container">
                <span className="headline-sm text-on-primary-container">01</span>
              </div>
              <h3 className="headline-sm text-primary mb-3">Our Mission</h3>
              <p className="body-md text-on-surface-variant">
                To craft and curate furniture that enriches everyday life —
                blending timeless design with enduring quality, while
                supporting local artisans and sustainable practices.
              </p>
            </div>

            <div className="rounded-lg bg-surface p-8 shadow-[var(--shadow-floating)]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-primary-container">
                <span className="headline-sm text-on-primary-container">02</span>
              </div>
              <h3 className="headline-sm text-primary mb-3">Our Vision</h3>
              <p className="body-md text-on-surface-variant">
                To be the most trusted furniture brand in the Philippines —
                known not only for the beauty of our products, but for the
                integrity of our craft and the warmth of our service.
              </p>
            </div>

            <div className="rounded-lg bg-surface p-8 shadow-[var(--shadow-floating)]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-primary-container">
                <span className="headline-sm text-on-primary-container">03</span>
              </div>
              <h3 className="headline-sm text-primary mb-3">Our Goals</h3>
              <p className="body-md text-on-surface-variant">
                Expand our reach to every province in the region, deepen our
                commitment to eco-friendly materials, and continue building
                a legacy of Filipino craftsmanship for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <h2 className="headline-md text-primary mb-12 text-center">
            Our Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-primary-container bg-surface p-8 text-center shadow-[var(--shadow-floating)]">
                <div className="mb-4 flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                <h3 className="label-md text-primary mb-2">{value.title}</h3>
                <p className="body-md text-on-surface-variant">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const values = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3L3 7.5L12 12L21 7.5L12 3Z" />
        <path d="M3 12L12 16.5L21 12" />
        <path d="M3 16.5L12 21L21 16.5" />
      </svg>
    ),
    title: "Craftsmanship",
    description:
      "Every joint, finish, and detail reflects the skill and pride of master artisans.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 6V12L15 15" />
      </svg>
    ),
    title: "Sustainability",
    description:
      "We source responsibly and build for longevity, reducing waste at every step.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3L21 9.5" />
        <path d="M5 8V19H19V8" />
        <path d="M10 19V13H14V19" />
      </svg>
    ),
    title: "Community",
    description:
      "We partner with local workshops and give back to the communities that support us.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Integrity",
    description:
      "Honest materials, fair pricing, and unwavering quality in every piece we deliver.",
  },
];

import { CTA } from "@/components/sections/cta";

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url(/Images/about.webp)" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-5 text-center md:px-16">
          <h1 className="display-lg-mobile md:display-lg text-white font-sans text-6xl">
            Our Story
          </h1>
          <p className="body-lg mx-auto mt-4 max-w-2xl text-white/70 text-xl">
            Decades of dedication to craftsmanship, community, and timeless
            design.
          </p>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="headline-md mb-8 text-center text-primary font-sans text-4xl">
              Our History
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p className="">
                Our story begins in 1990. Founded as SL Ruiz Marketing in
                Tacloban City, we started as a general merchandise shop, a
                modest venture driven by a simple desire to serve our community.
                But even then, we saw something others didn&apos;t: furniture
                had the power to transform not just rooms, but the way people
                lived and worked.
              </p>
              <p className="body-md">
                That vision led us to specialize. Transitioning from general
                merchandise to a dedicated furniture retailer and wholesaler, we
                began curating a thoughtful blend of imported and locally
                manufactured pieces, ensuring every taste and budget found a
                home. As word spread, homeowners, private offices, and
                government agencies alike turned to us for stylish, ergonomic
                solutions that elevated their spaces.
              </p>
              <p className="body-md">
                The trust we earned fueled our growth. Branch by branch, we
                expanded into neighboring cities and provinces across the
                region, from Cebu to Surigao, Legazpi to Borongan, bringing
                quality furniture closer to more Filipino families. Each new
                location carried the same promise: exceptional products,
                unparalleled service, and a deep respect for the communities we
                entered.
              </p>
              <p className="body-md">
                Today, Stylish Living Furniture stands as one of the most
                trusted furniture destinations in the Visayas and Bicol, serving
                thousands of homes, offices, and institutions through ten
                branches. We understand the unique needs of every client,
                whether furnishing a cozy home, outfitting a government office,
                or revamping an entire corporate space, and our team of experts
                is here to guide you every step of the way.
              </p>
              <p className="body-md">
                Now on the path to nationwide expansion, we remain rooted in the
                same principles that started it all: quality, integrity, and a
                belief that every space deserves to feel like home. Thank you
                for being part of our story. Welcome to Stylish Living.
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
                <span className="headline-sm text-on-primary-container">
                  01
                </span>
              </div>
              <h3 className="headline-sm mb-3 text-primary">Our Mission</h3>
              <p className="body-md text-on-surface-variant">
                To craft and curate furniture that enriches everyday life,
                blending timeless design with enduring quality, while supporting
                local artisans and sustainable practices.
              </p>
            </div>

            <div className="rounded-lg bg-surface p-8 shadow-[var(--shadow-floating)]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-primary-container">
                <span className="headline-sm text-on-primary-container">
                  02
                </span>
              </div>
              <h3 className="headline-sm mb-3 text-primary">Our Vision</h3>
              <p className="body-md text-on-surface-variant">
                To be the most trusted furniture brand in the Philippines, known
                not only for the beauty of our products, but for the integrity
                of our craft and the warmth of our service.
              </p>
            </div>

            <div className="rounded-lg bg-surface p-8 shadow-[var(--shadow-floating)]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-primary-container">
                <span className="headline-sm text-on-primary-container">
                  03
                </span>
              </div>
              <h3 className="headline-sm mb-3 text-primary">Our Goals</h3>
              <p className="body-md text-on-surface-variant">
                Expand our reach to every province in the region, deepen our
                commitment to eco-friendly materials, and continue building a
                legacy of Filipino craftsmanship for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <h2 className="headline-md mb-12 text-center text-primary">
            Our Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-primary-container bg-surface p-8 text-center shadow-[var(--shadow-floating)]"
              >
                <div className="mb-4 flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                <h3 className="label-md mb-2 text-primary">{value.title}</h3>
                <p className="body-md text-on-surface-variant">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Be Part of Our Story"
        description="For over three decades, we have been furnishing homes and offices across the Visayas. Let us help write the next chapter is yours."
        buttonText="Start Your Journey"
      />
    </>
  );
}

const values = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Integrity",
    description:
      "Honest materials, fair pricing, and unwavering quality in every piece we deliver.",
  },
];

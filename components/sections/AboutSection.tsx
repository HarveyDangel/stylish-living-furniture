import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/Images/about.jpg"
              alt="About Stylish Living Furniture"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="headline-md text-primary mb-6">
              Rooted in Craftsmanship
            </h2>
            <div className="space-y-4 text-on-surface-variant">
              <p className="body-md">
                At Stylish Living Furniture, we believe every piece tells a story.
                For over a decade, we have been curating and creating furniture
                that bridges timeless design with modern comfort.
              </p>
              <p className="body-md">
                Sourced from master artisans across the Philippines, each item
                reflects a dedication to quality materials, honest construction,
                and the kind of warmth that turns a house into a home.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-outline-variant pt-10 text-center">
              <div>
                <p className="headline-sm text-primary">10+</p>
                <p className="label-md text-on-surface-variant mt-1">Years</p>
              </div>
              <div>
                <p className="headline-sm text-primary">10</p>
                <p className="label-md text-on-surface-variant mt-1">Branches</p>
              </div>
              <div>
                <p className="headline-sm text-primary">10K+</p>
                <p className="label-md text-on-surface-variant mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import { categories } from "@/data/collections";
import { services } from "@/data/services";

export default function ProductsPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/Images/outdoor_furniture/outdoor1.webp)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 text-center md:px-16">
          <h1 className="display-lg-mobile md:display-lg text-white">
            Our Products
          </h1>
          <p className="body-lg mx-auto mt-4 max-w-2xl text-white/70">
            Thoughtfully curated collections designed to bring comfort and
            character to every space.
          </p>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="headline-md text-primary mb-4">
              Explore Our Collections
            </h2>
            <p className="body-md text-on-surface-variant">
              From cozy patio setups to elegant alfresco dining, find the
              collection that speaks to your style.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="relative h-80">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="headline-sm text-white">{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="headline-md text-primary mb-4">Beyond Furniture</h2>
            <p className="body-md text-on-surface-variant">
              We do more than sell furniture. From first sketch to final
              placement, we partner with you every step of the way.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg bg-surface p-8 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-primary-container text-white">
                  {service.icon}
                </div>
                <h3 className="headline-sm text-primary mb-3">
                  {service.title}
                </h3>
                <p className="body-md text-on-surface-variant">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Space?"
        description="Whether you are furnishing one room or an entire building, our team is here to help. Reach out today for a free consultation."
        buttonText="Get in Touch"
      />
    </>
  );
}

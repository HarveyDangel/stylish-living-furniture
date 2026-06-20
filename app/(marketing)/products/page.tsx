import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/sections/cta";
import { categories, getCategoryImages } from "@/data/collections";
import { services } from "@/data/services";

export default function ProductsPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url(/Images/Products/outdoor_furniture/outdoor1.webp)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 text-center md:px-16">
          <h1 className="display-lg-mobile md:display-lg font-sans text-6xl text-white">
            Our Products
          </h1>
          <p className="body-lg mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Thoughtfully curated collections designed to bring comfort and
            character to every space.
          </p>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="mb-4 font-sans text-4xl text-primary">
              Explore Our Collections
            </h2>
            <p className="body-md text-on-surface-variant">
              From cozy living spaces to functional offices, find the collection
              that speaks to your style.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const firstImage = getCategoryImages(category)[0];
              return (
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="relative h-80">
                    <Image
                      src={firstImage}
                      alt={category.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="headline-sm text-white">
                        {category.name}
                      </h3>
                      <span className="mt-2 flex items-center gap-1 font-semibold text-sm text-white/80 group-hover:text-white">
                        View Collection
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h2 className="mb-4 font-sans text-4xl text-primary">
              Beyond Furniture
            </h2>
            <p className="body-md text-on-surface-variant">
              We do more than sell furniture. From first sketch to final
              placement, we partner with you every step of the way.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border border-outline-variant bg-surface p-8 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-primary bg-primary-container text-white">
                  {service.icon}
                </div>
                <h3 className="mb-3 font-semibold text-md text-primary">
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

      <CTA
        title="Ready to Transform Your Space?"
        description="Whether you are furnishing one room or an entire building, our team is here to help. Reach out today for a free consultation."
        buttonText="Get in Touch"
      />
    </>
  );
}

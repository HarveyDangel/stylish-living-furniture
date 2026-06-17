import Image from "next/image";
import { categories } from "@/data/collections";

export function ProductCarousel() {
  return (
    <section className="bg-tertiary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-sans text-4xl text-primary">
              Our Collections
            </h2>
            <p className="mt-2">
              Explore our range of thoughtfully designed furniture.
            </p>
          </div>
        </div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {categories.map((item) => (
            <div key={item.name} className="group relative shrink-0 snap-start">
              <div className="relative h-80 w-72 overflow-hidden rounded-lg md:w-80">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to- from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="font-medium text-2xl text-white">
                    {item.name}
                  </h3>
                  <span className="font-semibold text-sm text-white">
                    View Collection &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

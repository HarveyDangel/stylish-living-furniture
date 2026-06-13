import Image from "next/image";
import { categories } from "@/data/collections";

export default function ProductCarousel() {
  return (
    <section className="bg-surface-container py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="headline-md text-primary">Our Collections</h2>
            <p className="body-md text-on-surface-variant mt-2">
              Explore our range of thoughtfully designed furniture.
            </p>
          </div>
        </div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {categories.map((item) => (
            <div
              key={item.name}
              className="group relative flex-shrink-0 snap-start"
            >
              <div className="relative h-80 w-72 overflow-hidden rounded-lg md:w-80">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="headline-sm text-white">{item.name}</h3>
                  <span className="label-md mt-1 inline-block text-white/70">
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

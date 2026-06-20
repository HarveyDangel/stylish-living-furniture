"use client";

import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { CTA } from "@/components/sections/cta";
import { ImageLightbox } from "@/components/sections/image-lightbox";
import { getCategoryBySlug } from "@/data/collections";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = getCategoryBySlug(slug);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!category) notFound();

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${category.images[0]})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 text-center md:px-16">
          <h1 className="display-lg-mobile md:display-lg font-sans text-6xl text-white">
            {category.name}
          </h1>
          <p className="body-lg mx-auto mt-4 max-w-2xl text-lg text-white/70">
            {category.description}
          </p>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-16">
          <Link
            href="/products"
            className="mb-8 flex items-center gap-2 text-on-surface-variant text-sm hover:text-primary"
          >
            <ChevronLeft size={16} />
            Back to All Products
          </Link>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`${category.name} ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Transform Your Space?"
        description="Whether you are furnishing one room or an entire building, our team is here to help. Reach out today for a free consultation."
        buttonText="Get in Touch"
      />

      {lightboxIndex !== null && (
        <ImageLightbox
          images={category.images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

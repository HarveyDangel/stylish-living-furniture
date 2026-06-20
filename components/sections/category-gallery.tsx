"use client";

import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImageLightbox } from "@/components/sections/image-lightbox";

interface CategoryGalleryProps {
  images: string[];
  categoryName: string;
}

export function CategoryGallery({
  images,
  categoryName,
}: CategoryGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
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
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`${categoryName} ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

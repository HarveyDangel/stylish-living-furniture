"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export function ImageLightbox({
  images,
  initialIndex,
  onClose,
}: ImageLightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-black/90"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white/70 hover:text-white"
          aria-label="Close lightbox"
        >
          <X size={32} />
        </button>

        <span className="absolute top-4 left-4 z-20 text-sm text-white/60">
          {index + 1} / {images.length}
        </span>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 z-20 text-white/70 hover:text-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 z-20 text-white/70 hover:text-white"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
          </>
        )}

        <button
          type="button"
          className="relative h-[80vh] w-[90vw] cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[index]}
            alt={`Product image ${index + 1}`}
            fill
            className="object-contain"
            priority
            sizes="90vw"
          />
        </button>
      </div>
    </div>
  );
}

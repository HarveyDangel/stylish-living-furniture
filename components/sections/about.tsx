import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src="/Images/about.webp"
              alt="About Stylish Living Furniture"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="mb-6 font-medium font-sans text-3xl text-primary">
              Rooted in Craftsmanship
            </h2>
            <div className="space-y-4">
              <p>
                At Stylish Living Furniture, we believe every piece tells a
                story. For over a decade, we have been curating and creating
                furniture that bridges timeless design with modern comfort.
              </p>
              <p>
                Sourced from master artisans across the Philippines, each item
                reflects a dedication to quality materials, honest construction,
                and the kind of warmth that turns a house into a home.
              </p>
            </div>

            <Link
              href="/products"
              className={cn(
                buttonVariants({
                  variant: "secondary",
                  size: "xl",
                  className: "mt-6",
                }),
                "px-8",
              )}
            >
              Read More
            </Link>

            <div className="mt-10 grid grid-cols-3 gap-6 border-primary border-t pt-8 text-center">
              <div>
                <p className="font-medium font-sans text-2xl">30+</p>
                <p className="mt-1 font-semibold text-sm">Years</p>
              </div>
              <div>
                <p className="font-medium font-sans text-2xl">10</p>
                <p className="label-md mt-1 font-semibold text-sm">Branches</p>
              </div>
              <div>
                <p className="font-medium font-sans text-2xl">100+</p>
                <p className="label-md mt-1 font-semibold text-sm">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

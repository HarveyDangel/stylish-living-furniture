import { About } from "@/components/sections/about";
import { Branches } from "@/components/sections/branches";
import { CTA } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { ProductCarousel } from "@/components/sections/product-carousel";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductCarousel />
      <Branches />
      <CTA />
    </>
  );
}

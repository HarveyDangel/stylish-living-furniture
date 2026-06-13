import AboutSection from "@/components/sections/AboutSection";
import BranchesSection from "@/components/sections/BranchesSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProductCarousel from "@/components/sections/ProductCarousel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductCarousel />
      <BranchesSection />
      <ContactSection />
    </>
  );
}

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductCarousel from "@/components/sections/ProductCarousel";
import BranchesSection from "@/components/sections/BranchesSection";
import ContactSection from "@/components/sections/ContactSection";

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

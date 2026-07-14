import AboutSection from "@/components/sections/AboutSection";
import Aboutus from "@/components/sections/Aboutus";
import BranchSection from "@/components/sections/BranchSection";
import Contact from "@/components/sections/Contact";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BranchSection />
      <Aboutus />
      <Contact />
    </>
  );
}

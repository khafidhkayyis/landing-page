import Link from "next/link";

import { Container, Navbar } from "@/components/layout";
import { contactInfo } from "@/config/contact";

export default function HeroSection() {
  return (
    <section className="bg-black text-white">
      <Navbar variant="default" />

      <div className="flex flex-col">
        {/* Video — always on top */}
        <div className="relative min-h-[280px] w-full sm:min-h-[400px] md:min-h-[480px] lg:min-h-[560px] xl:min-h-[65vh]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            aria-label="Skyfy Enterprise banner video"
          >
            <source src="/videos/banner.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Text — always below video */}
        <Container className="flex flex-col justify-center py-10 sm:py-12 lg:py-16">
          <h1 className="w-full text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Empowering Growth Through Innovation
          </h1>
          <p className="mt-6 w-full max-w-2xl text-base text-white/80 sm:text-lg lg:text-xl">
            One ecosystem to help your business build smarter, operate better,
            and create meaningful experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
            <Link
              href={contactInfo.href}
              className="rounded-lg border border-white/30 bg-cyan-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-400"
            >
              Contact Us
            </Link>
            <Link
              href="#brands"
              className="rounded-lg border border-white/30 bg-[#EC530C] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d94a0a]"
            >
              Learn More
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}

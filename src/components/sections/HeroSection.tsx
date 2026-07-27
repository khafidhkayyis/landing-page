import Link from "next/link";

import { Container, Navbar } from "@/components/layout";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 z-[1] bg-black/60"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[70vh] flex-col">
        <Navbar variant="transparent" />
        <Container className="flex w-full flex-1 flex-col items-start justify-center text-left">
          <h2 className="w-full max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Empowering Growth Through Innovation
          </h2>
          <p className="mt-6 w-full max-w-2xl text-lg text-white/80 sm:text-xl">
            One ecosystem to help your business build smarter, operate better, and create meaningful experiences.
          </p>
          <div className="mt-10 flex w-full flex-row flex-wrap gap-4 lg:flex-col lg:items-start">
            <Link
              href="#contact"
              className="rounded-lg bg-cyan-500 border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
            <Link
              href="#brands"
              className="rounded-lg bg-[#EC530C] border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}

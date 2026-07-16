import Image from "next/image";
import Link from "next/link";

import { Container, Navbar } from "@/components/layout";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] w-full">
      <Image
        src="/images/hero-background.png"
        alt="Global digital network connectivity"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 z-[1] bg-black/60"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[70vh] flex-col">
        <Navbar variant="transparent" />
        <Container className="flex flex-1 flex-col items-center lg:items-start justify-center text-center">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Unleash Your
          </h1>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hidden Potential
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            Transform Ideas into Impactful Tech Solutions
          </p>
          <div className="mt-10 flex flex-row gap-4 lg:flex-col">
            <Link
              href="/get-started"
              className="rounded-lg bg-cyan-500 border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
            <Link
              href="#features"
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

import Image from "next/image";

import { Container } from "@/components/layout";
import { ClientMarquee } from "@/components/ui/ClientMarquee";
import { RotatingText } from "@/components/ui/RotatingText";

export default function AboutSection() {
  return (
    <section id="about" className="bg-black py-16 text-white  lg:py-24">
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — images */}
          <div className="relative mx-auto h-[400px] w-full max-w-[340px] sm:h-[480px] sm:max-w-[400px] md:h-[560px] md:max-w-[460px] lg:mx-0 lg:h-[650px] lg:max-w-none">
            <RotatingText className="absolute left-2 top-0 z-20 size-28 sm:left-4 sm:size-36 lg:left-5 lg:size-44" />

            {/* Image besar */}
            <div className="absolute left-16 top-8 sm:left-24 sm:top-10 lg:left-32 lg:top-10">
              <Image
                src="/images/about-large.png"
                alt="City skyline at dusk"
                width={420}
                height={520}
                className="h-[240px] w-[200px] rounded-[24px] object-cover sm:h-[300px] sm:w-[260px] md:h-[380px] md:w-[340px] lg:h-[520px] lg:w-[420px] lg:rounded-[32px]"
              />
            </div>

            {/* Image kecil */}
            <div className="absolute bottom-0 left-0 z-20">
              <Image
                src="/images/about-small.png"
                alt="Jakarta city skyline at night"
                width={320}
                height={360}
                className="h-[180px] w-[160px] rounded-[20px] object-cover sm:h-[240px] sm:w-[220px] md:h-[300px] md:w-[280px] lg:h-[360px] lg:w-[320px] lg:rounded-[28px]"
              />
            </div>
          </div>

          {/* RIGHT — content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              About Skyfy Enterprise
            </h2>
            <p className="mb-8 text-base font-bold leading-8 text-gray-300 sm:text-lg">
              Technology. Infrastructure. Creativity.
            </p>
            <p className="leading-8 text-gray-400">
              Since 2022, Skyfy Enterprise has been helping organizations unlock new opportunities through technology and creativity. We believe every business deserves solutions that are practical, scalable, and built around real challenges. Through our three business units, we deliver integrated capabilities in software development, IT infrastructure and automation, and creative production—working together to help businesses build smarter, operate better, and grow with confidence.
            </p>

            {/* Divider */}
            <div className="mb-10 mt-16 flex items-center">
              <div className="h-px flex-1 bg-gray-700" />
              <span className="ml-6 text-sm font-bold uppercase tracking-[3px] text-white">
                Our Clients
              </span>
            </div>

            {/* Clients */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
              <ClientMarquee />
            </div>

          </div>
        </div>
      </Container >
    </section >
  );
}

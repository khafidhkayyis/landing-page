import Image from "next/image";

import { sponsors } from "@/config/sponsors";

export function ClientMarquee() {
  const items = [...sponsors, ...sponsors];

  return (
    <div className="group relative overflow-hidden py-2 sm:py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-black via-black/80 to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-black via-black/80 to-transparent sm:w-24" />

      <div className="flex w-max animate-marquee-horizontal items-center gap-8 motion-reduce:animate-none group-hover:[animation-play-state:paused] sm:gap-12 lg:gap-16">
        {items.map((sponsor, index) => (
          <div
            key={`${sponsor.name}-${index}`}
            className="flex shrink-0 items-center px-2 sm:px-4"
          >
            <Image
              src={sponsor.src}
              alt={sponsor.name}
              width={400}
              height={120}
              className="h-8 w-auto object-contain opacity-45 grayscale transition-opacity duration-300 hover:opacity-80 sm:h-9 lg:h-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

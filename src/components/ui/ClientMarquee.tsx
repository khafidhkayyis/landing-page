import Image from "next/image";

import { sponsors } from "@/config/sponsors";

export function ClientMarquee() {
  const items = [...sponsors, ...sponsors];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-black to-transparent" />

      <div className="flex w-max animate-marquee-horizontal items-center gap-12 sm:gap-16">
        {items.map((sponsor, index) => (
          <div
            key={`${sponsor.name}-${index}`}
            className="flex h-12 w-28 shrink-0 items-center justify-center sm:h-14 sm:w-36"
          >
            <Image
              src={sponsor.src}
              alt={sponsor.name}
              width={160}
              height={56}
              className="h-auto max-h-12 w-auto max-w-full object-contain opacity-50 grayscale sm:max-h-14"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

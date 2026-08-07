"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Brand } from "@/config/brands";

export function BrandCard({
  image,
  title,
  tagline,
  description,
  href,
}: Brand) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group mx-auto w-full max-w-sm lg:max-w-none">
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px]">
        <div className="relative aspect-4/5 w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="relative z-10 -mt-10 rounded-t-[28px] bg-black px-6 pt-10 pb-8 sm:-mt-12 sm:rounded-t-[32px] sm:px-8 sm:pt-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            {title}
          </h3>
          <p className="mt-2 text-sm font-semibold text-gray-300 sm:text-base italic">
            {tagline}
          </p>

          <div className="mt-4">
            <p
              className={`text-sm leading-7 text-gray-400 ${expanded ? "" : "line-clamp-4"
                }`}
            >
              {description}
            </p>
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          </div>

          <div className="relative mt-8 flex items-center justify-center sm:mt-10">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gray-600" />
            <Link
              href={href}
              className="relative z-10 rounded-full bg-[#F26522] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#ff7a33] sm:px-6 sm:text-xs"
            >
              Visit Page
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

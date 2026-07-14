"use client";

import { useId } from "react";

type RotatingTextProps = {
  className?: string;
  text?: string;
  duration?: number;
};

export function RotatingText({
  className = "",
  text = "SKYFY ENTERPRISE • SKYFY ENTERPRISE • ",
  duration = 22,
}: RotatingTextProps) {
  const pathId = useId().replace(/:/g, "");

  return (
    <div className={`relative ${className}`}>
      <span className="sr-only">Skyfy Enterprise</span>

      <svg viewBox="0 0 200 200" className="size-full" aria-hidden="true">
        <circle cx="100" cy="100" r="72" className="fill-black" />
        <circle
          cx="100"
          cy="100"
          r="88"
          fill="none"
          stroke="white"
          strokeWidth="16"
        />
      </svg>

      <div
        className="absolute inset-0"
        style={{ animation: `spin ${duration}s linear infinite` }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="size-full">
          <defs>
            <path
              id={pathId}
              d="M 100, 100 m -80, 0 a 80, 80 0 1, 1 160, 0 a 80, 80 0 1, 1 -160, 0"
            />
          </defs>
          <text
            fill="white"
            fontSize="10.5"
            fontWeight="700"
            letterSpacing="2.5"
          >
            <textPath href={`#${pathId}`} startOffset="0">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

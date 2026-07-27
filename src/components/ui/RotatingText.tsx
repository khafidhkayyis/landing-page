"use client";

import { useId } from "react";

type RotatingTextProps = {
  className?: string;
  text?: string;
  duration?: number;
};

const defaultLabel =
  "SKYFY ENTERPRISE • SKYFY ENTERPRISE • SKYFY ENTERPRISE • ";

export function RotatingText({
  className = "",
  text = defaultLabel,
  duration = 20,
}: RotatingTextProps) {
  const pathId = useId().replace(/:/g, "");

  return (
    <div className={`relative ${className}`}>
      <span className="sr-only">Skyfy Enterprise</span>

      <svg
        viewBox="0 0 200 200"
        className="size-full"
        aria-hidden="true"
      >
        <g
          style={{
            transformOrigin: "100px 100px",
            animation: `spin ${duration}s linear infinite`,
          }}
        >
          <defs>
            <path
              id={pathId}
              d="M 100, 28 a 72, 72 0 1, 1 0, 144 a 72, 72 0 1, 1 0,-144"
            />
          </defs>
          <text
            fill="white"
            fontSize="12.5"
            fontWeight="600"
            letterSpacing="4"
          >
            <textPath href={`#${pathId}`} startOffset="0">
              {text.toUpperCase()}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
}

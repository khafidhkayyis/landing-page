"use client";

import { useId } from "react";

type RotatingTextProps = {
  className?: string;
  text?: string;
  duration?: number;
};

const defaultLabel =
  "SKYFY ENTERPRISE • SKYFY ENTERPRISE • SKYFY ENTERPRISE • ";

const RING_RADIUS = 78;
const RING_STROKE = 38;

export function RotatingText({
  className = "",
  text = defaultLabel,
  duration = 20,
}: RotatingTextProps) {
  const pathId = useId().replace(/:/g, "");
  const pathD = `M 100, ${100 - RING_RADIUS} a ${RING_RADIUS}, ${RING_RADIUS} 0 1, 1 0, ${RING_RADIUS * 2} a ${RING_RADIUS}, ${RING_RADIUS} 0 1, 1 0,-${RING_RADIUS * 2}`;

  return (
    <div className={`relative ${className}`}>
      <span className="sr-only">Skyfy Enterprise</span>

      <svg viewBox="0 0 200 200" className="size-full" aria-hidden="true">
        {/* Black ring — hollow center */}
        <circle
          cx="100"
          cy="100"
          r={RING_RADIUS}
          fill="none"
          stroke="black"
          strokeWidth={RING_STROKE}
        />

        {/* Text on the ring band */}
        <g
          style={{
            transformOrigin: "100px 100px",
            animation: `spin ${duration}s linear infinite`,
          }}
        >
          <defs>
            <path id={pathId} d={pathD} fill="none" />
          </defs>
          <text
            fill="white"
            fontSize="10"
            fontWeight="600"
            letterSpacing="3.5"
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

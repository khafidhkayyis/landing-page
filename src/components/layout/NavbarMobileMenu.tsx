"use client";

import Link from "next/link";
import { useState } from "react";

import type { NavLink } from "@/types/navigation";

type NavbarMobileMenuProps = {
  links: NavLink[];
  variant?: "default" | "transparent";
};

export function NavbarMobileMenu({
  links,
  variant = "default",
}: NavbarMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isTransparent = variant === "transparent";

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`inline-flex items-center justify-center rounded-md p-2 transition-colors ${
          isTransparent
            ? "text-white hover:bg-white/10"
            : "text-foreground hover:bg-foreground/5"
        }`}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6"
            aria-hidden="true"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-16 px-4 py-4 shadow-lg ${
            isTransparent
              ? "border-b border-white/10 bg-black/80 backdrop-blur-sm"
              : "border-b border-foreground/10 bg-background"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium transition-colors ${
                    isTransparent
                      ? "text-white/80 hover:text-white"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/get-started"
                onClick={() => setIsOpen(false)}
                className={`inline-block rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${
                  isTransparent
                    ? "bg-cyan-500 text-white"
                    : "bg-foreground text-background"
                }`}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

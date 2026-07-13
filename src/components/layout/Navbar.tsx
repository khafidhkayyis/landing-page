import Link from "next/link";

import { navLinks, siteConfig } from "@/config/site";

import { NavbarMobileMenu } from "./NavbarMobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-sm">
      <nav
        className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/get-started"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-block"
          >
            Get Started
          </Link>
          <NavbarMobileMenu links={navLinks} />
        </div>
      </nav>
    </header>
  );
}

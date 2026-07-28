import Image from "next/image";
import Link from "next/link";

import { navLinks, siteConfig } from "@/config/site";
import { contactInfo } from "@/config/contact";

import { Container } from "./Container";
import { NavbarMobileMenu } from "./NavbarMobileMenu";

type NavbarProps = {
  variant?: "default" | "transparent";
};

const variantStyles = {
  default:
    "sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-sm",
  transparent: "relative z-20 border-b border-white/30 bg-transparent",
} as const;

export function Navbar({ variant = "default" }: NavbarProps) {
  const isTransparent = variant === "transparent";

  return (
    <header className={`w-full ${variantStyles[variant]}`}>
      <Container className="relative">
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={`flex items-center gap-2 transition-opacity hover:opacity-80 ${isTransparent ? "text-white" : "text-foreground"
              }`}
          >
            <Image
              src="/images/skyfy-logo.png"
              alt=""
              width={36}
              height={36}
              className="size-9"
              priority
            />
            <span className="text-lg font-semibold tracking-tight uppercase">
              {siteConfig.name}
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium uppercase transition-colors ${isTransparent
                      ? "text-white/80 hover:text-white"
                      : "text-foreground/80 hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Link
                href={contactInfo.href}
                className={`hidden rounded-lg px-4 py-2 text-sm font-medium uppercase transition-opacity hover:opacity-90 md:inline-block ${isTransparent
                  ? "bg-cyan-500 text-white hover:bg-cyan-400"
                  : "bg-foreground text-background"
                  }`}
              >
                Contact Us
              </Link>
              <NavbarMobileMenu links={navLinks} variant={variant} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

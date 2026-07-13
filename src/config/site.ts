import type { FooterLinkGroup, NavLink } from "@/types/navigation";

export const siteConfig = {
  name: "Skyfy",
  description: "Build beautiful landing pages with Next.js and Tailwind CSS.",
  url: "https://skyfy.com",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

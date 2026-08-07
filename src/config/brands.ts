export type Brand = {
  image: string;
  title: string;
  tagline: string;
  description: string;
  slug: string;
  href: string;
};

export const businessContact = {
  email: "business@skyfyenterprise.com",
  whatsapp: [
    { label: "+62 819-0881-6893", href: "https://wa.me/6281908816893" },
    { label: "+62 812-2922-2060", href: "https://wa.me/6281229222060" },
  ],
} as const;

export const brands: Brand[] = [
  {
    image: "/images/brands/skyfystudio.png",
    title: "Skyfy Studio",
    tagline: "Build What's Next.",
    description:
      "Technology should adapt to your business—not the other way around. At Skyfy Studio, we create custom software and digital solutions that simplify complex workflows and empower better decision-making. Whether it's for Human Resources, Marketing, or Operations, our team develops applications and systems tailored to your business goals. Serving organizations across various industries, we focus on building solutions that are intuitive, scalable, and ready for the future.",
    slug: "studio",
    href: "/business/studio",
  },
  {
    image: "/images/brands/skyfytech.png",
    title: "Skyfy Technology",
    tagline: "Powering Modern IT Infrastructure.",
    description:
      "A strong business starts with a strong technology foundation. Skyfy Technology delivers infrastructure and automation solutions that keep organizations connected, secure, and efficient. From enterprise networking and cloud infrastructure to intelligent automation and system integration, we help businesses optimize operations while building resilient IT environments that can grow with changing demands.",
    slug: "technology",
    href: "/business/technology",
  },
  {
    image: "/images/brands/skyfyproduction.png",
    title: "Skyfy Production",
    tagline: "Creating Experiences That Matter.",
    description:
      "Great ideas deserve unforgettable execution. Skyfy Production partners with businesses to create impactful events and compelling visual content that inspire audiences and strengthen brands. From corporate events and exhibitions to video production and creative activations, we combine strategic planning, creativity, and flawless execution to turn every moment into a meaningful experience. (pending)",
    slug: "production",
    href: "/business/production",
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}

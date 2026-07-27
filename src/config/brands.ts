export type Brand = {
  image: string;
  title: string;
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
    slug: "studio",
    href: "/business/studio",
  },
  {
    image: "/images/brands/skyfytech.png",
    title: "Skyfy Technology",
    slug: "technology",
    href: "/business/technology",
  },
  {
    image: "/images/brands/skyfyproduction.png",
    title: "Skyfy Production",
    slug: "production",
    href: "/business/production",
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}

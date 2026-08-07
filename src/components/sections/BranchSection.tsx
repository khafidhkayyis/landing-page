import { Container } from "@/components/layout";
import { brands } from "@/config/brands";

import { BrandCard } from "./BrandCard";

export default function BranchSection() {
  return (
    <section id="brands" className="bg-black py-16 text-white lg:py-24">
      <Container>
        <h2 className="mb-10 text-3xl font-bold sm:mb-12 sm:text-4xl lg:mb-16 lg:text-5xl">
          Our Business Unit
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {brands.map((brand) => (
            <BrandCard key={brand.title} {...brand} />
          ))}
        </div>
      </Container>
    </section>
  );
}

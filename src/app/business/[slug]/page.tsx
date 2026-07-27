import Link from "next/link";
import { notFound } from "next/navigation";

import { Container, Navbar } from "@/components/layout";
import { businessContact, getBrandBySlug, brands } from "@/config/brands";

type BusinessUnitPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: BusinessUnitPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) {
    return { title: "Business Unit" };
  }
  return { title: brand.title };
}

export default async function BusinessUnitPage({ params }: BusinessUnitPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-black py-16 text-white lg:py-24">
        <Container className="max-w-2xl">
          <Link
            href="/#brands"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            ← Back to Our Business Unit
          </Link>

          <h1 className="mt-8 text-3xl font-bold sm:text-4xl">{brand.title}</h1>

          <p className="mt-8 text-lg leading-8 text-gray-300">
            Updated version of this page would be released soon!
          </p>

          <div className="mt-10 space-y-8 text-base leading-8 text-gray-300">
            <p>
              You can contact us here to get more info about Our Business Unit:{" "}
              <a
                href={`mailto:${businessContact.email}`}
                className="font-medium text-cyan-400 transition-colors hover:text-cyan-300"
              >
                {businessContact.email}
              </a>
            </p>

            <div>
              <p>You can also connect with our team via Whatsapp, here:</p>
              <ul className="mt-3 space-y-2">
                {businessContact.whatsapp.map((number) => (
                  <li key={number.href}>
                    <a
                      href={number.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#25D366] transition-colors hover:text-[#20bd5a]"
                    >
                      {number.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

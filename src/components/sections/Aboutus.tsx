import { Container } from "@/components/layout";
import { testimonials, type Testimonial } from "@/config/testimonials";

function TestimonialCard({ name, position, company, quote, initials }: Testimonial) {
  return (
    <article className="w-[300px] shrink-0 rounded-2xl bg-[#333333] p-6 sm:w-[340px] sm:p-7 lg:w-[380px]">
      <div className="mb-5 flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#555555] text-sm font-semibold text-white">
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-bold text-white sm:text-lg">{name}</h3>
          <p className="text-sm text-gray-400">{position}</p>
          <p className="text-xs text-gray-500">{company}</p>
        </div>
      </div>
      <p className="text-sm leading-7 text-gray-400">&ldquo;{quote}&rdquo;</p>
    </article>
  );
}

function TestimonialMarquee() {
  const items = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex w-max items-stretch gap-5 sm:gap-6"
        style={{
          animation: "marquee-horizontal 40s linear infinite",
        }}
      >
        {items.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export default function Aboutus() {
  return (
    <section className="overflow-hidden bg-black py-16 text-white lg:py-24">
      <Container>
        <h2 className="mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl lg:mb-16 lg:text-5xl">
          What They Say About Us
        </h2>
      </Container>

      <TestimonialMarquee />
    </section>
  );
}

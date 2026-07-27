export type Testimonial = {
  name: string;
  position: string;
  company: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Mego",
    position: "Staff",
    company: "Honda Jakarta Center",
    initials: "M",
    quote: "Good response and responsive to client requests.",
  },
  {
    name: "Eko Ralesiya",
    position: "IT Section Head",
    company: "Akebono Brake Astra Indonesia",
    initials: "ER",
    quote:
      "Our experience has been very positive. Their team is professional and their services have significantly improved our outcomes",
  },
  {
    name: "Gregory Kurnia",
    position: "CEO",
    company: "DEUS Human Capital Services",
    initials: "GK",
    quote:
      "I had a good experience working with Skyfy on my gamification project. The team was communicative and understood our expectations. Wishing all the best for Skyfy",
  },
  {
    name: "Ridho Renata Rizkyafrian Triyanto",
    position: "Supervisor",
    company: "PT. Astra Otoparts Divisi Nusametal",
    initials: "RR",
    quote: "Flexibility and commitment.",
  },
  {
    name: "Andri",
    position: "Corp IT Manager",
    company: "PT. Parador Management International",
    initials: "A",
    quote: "Good partner.",
  },
  {
    name: "Emir Nizar",
    position: "IT Solution Head",
    company: "PT Infosys Solusi Terpadu",
    initials: "EN",
    quote: "Good quality and post marketing.",
  },
];

import Link from "next/link";
import { CardGrid, CtaBand, PageHero, SectionHead } from "@/components/Sections";
import { cta, whyExhibit } from "@/lib/site";

export const metadata = { title: "Exhibit with Us" };

const steps = [
  { title: "Enquire", desc: "Submit the Book a Stand form with your segment and goals." },
  { title: "Discuss", desc: "Our team recommends stand size, location and packages." },
  { title: "Confirm", desc: "Sign the contract and secure your space on the floor plan." },
  { title: "Prepare", desc: "Use the exhibitor manual, matching tools and marketing kit." },
];

export default function ExhibitWithUs() {
  return (
    <>
      <PageHero eyebrow="Exhibit" title="Put your solution in front of the people who buy restaurant tech" intro="Restech is the only event in the region focused entirely on restaurant technology and operations.">
        <Link href={cta.bookStand.href} className="btn-primary uppercase">I&apos;m ready to exhibit!</Link>
        <Link href={cta.brochure.href} className="btn-ghost uppercase">{cta.brochure.label}</Link>
      </PageHero>
      <section className="section-y">
        <div className="container-x">
          <SectionHead eyebrow="Why Restech" title="Why Leading Brands Choose Restech" />
          <CardGrid items={whyExhibit} />
        </div>
      </section>
      <section className="bg-ink py-16 text-white">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow !text-brand">Sponsorship</p>
            <h2 className="h2 mt-2">Want more than a stand?</h2>
            <p className="mt-2 text-white/70">Stage, registration, lanyard, networking and digital packages.</p>
          </div>
          <Link href={cta.sponsor.href} className="btn-blue uppercase">Let&apos;s talk sponsorship</Link>
        </div>
      </section>
      <section className="section-y">
        <div className="container-x">
          <SectionHead eyebrow="How it works" title="How to Register as an Exhibitor" />
          <ol className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-ink/10 p-4 md:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-semibold text-white">{i + 1}</span>
                <h3 className="mt-4 font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand title="Secure your stand before your competitors do" mode="exhibit" />
    </>
  );
}

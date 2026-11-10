import Link from "next/link";
import { CardGrid, CtaBand, PageHero, SectionHead } from "@/components/Sections";
import { cta, event, stats, whyVisit } from "@/lib/site";

export const metadata = { title: "Why Visit" };

const tips = [
  { title: "Plan your meetings", desc: "Shortlist the exhibitors and segments that match your priorities." },
  { title: "Pre-arrange appointments", desc: "Use business matching to book supplier meetings before the show." },
  { title: "Build your agenda", desc: "Add conference sessions and demos to your plan in the event app." },
  { title: "Explore beyond your category", desc: "Visit adjacent segments — integrations are where the value is." },
  { title: "Use the floor map", desc: "Navigate zones efficiently with the venue map." },
];

export default function WhyVisit() {
  const [visitors, exhibitors] = stats;
  return (
    <>
      <PageHero eyebrow="Visitor" title="Step into Asia's Restaurant Technology Marketplace" intro={`${event.dateLabel} · ${event.venue}`}>
        <Link href="/join-mailing-list" className="btn-ghost uppercase">Register Your Interest</Link>
        <Link href={cta.register.href} className="btn-primary uppercase">{cta.register.label}</Link>
        <Link href={cta.exhibitorList.href} className="btn-lime uppercase">View Exhibitor List</Link>
      </PageHero>
      <section className="py-16">
        <div className="container-x">
          <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex aspect-square items-center justify-center rounded-2xl bg-ink/5 text-xs text-ink/40">Photo</div>
            ))}
          </div>
          <p className="mx-auto max-w-3xl text-center text-lg text-ink/70">
            From {event.dateLabel} in {event.city}, {event.edition} brings together an expected {visitors.value} {visitors.label.toLowerCase()} and {exhibitors.value} {exhibitors.label.toLowerCase()} from across the region — every system a restaurant runs on, under one roof.
          </p>
        </div>
      </section>
      <section className="bg-mist py-20">
        <div className="container-x">
          <SectionHead center title="Why Restech Is the Definitive Platform for Growth" />
          <CardGrid items={whyVisit} />
        </div>
      </section>
      <section className="py-20">
        <div className="container-x">
          <SectionHead center title="How to Maximise Your Visit" />
          <ol className="grid gap-4 md:grid-cols-5">
            {tips.map((t, i) => (
              <li key={t.title} className="rounded-2xl border border-ink/10 p-5 text-sm">
                <span className="text-2xl font-black text-brand">{i + 1}</span>
                <h3 className="mt-2 font-bold">{t.title}</h3>
                <p className="mt-1 text-ink/70">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-ink py-16 text-center text-white">
        <h2 className="h2">Claim Your Spot Today</h2>
        <Link href={cta.register.href} className="btn-primary mt-6 uppercase">{cta.register.label}</Link>
      </section>
      <section className="py-8">
        <p className="container-x text-center text-xs text-ink/50">Endorsement and incentive programme details (e.g. government trade support) — TBC.</p>
      </section>
      <CtaBand title="Get your free trade pass" mode="register" />
    </>
  );
}

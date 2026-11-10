import Link from "next/link";
import { CardGrid, CtaBand, PageHero, SectionHead, StatsBar } from "@/components/Sections";
import { cta, event, whyVisit } from "@/lib/site";

export const metadata = { title: "Why Visit" };

const tips = [
  "Register early and complete your profile to get matched with relevant exhibitors.",
  "Pre-book meetings with shortlisted suppliers before the show.",
  "Build your agenda around conference sessions that match your challenges.",
  "Visit the Tech Demo Kitchen to see integrated systems in action.",
  "Bring your operations and IT leads — decide faster as a team.",
];

export default function WhyVisit() {
  return (
    <>
      <PageHero eyebrow="Visit" title="Find the technology that grows your restaurant business" intro={`${event.dateLabel} · ${event.venue}. Free for qualified trade visitors.`}>
        <Link href={cta.register.href} className="btn-primary">{cta.register.label}</Link>
        <Link href="/exhibitor-list" className="btn-ghost">View Exhibitor List</Link>
      </PageHero>
      <StatsBar />
      <section className="py-20">
        <div className="container-x">
          <SectionHead eyebrow="Why Visit" title="Why operators come to Restech" />
          <CardGrid items={whyVisit} />
        </div>
      </section>
      <section className="bg-mist py-20">
        <div className="container-x">
          <SectionHead eyebrow="Make it count" title="How to maximise your visit" />
          <ol className="grid gap-4 md:grid-cols-5">
            {tips.map((t, i) => (
              <li key={i} className="rounded-2xl bg-white p-5 text-sm shadow-sm">
                <span className="text-2xl font-black text-brand">{i + 1}</span>
                <p className="mt-2 text-ink/70">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand title="Claim your free trade pass" mode="register" />
    </>
  );
}

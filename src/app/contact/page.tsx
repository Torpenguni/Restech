import Link from "next/link";
import { PageHero } from "@/components/Sections";
import { cta, event } from "@/lib/site";

export const metadata = { title: "Contact Us" };

const teams = [
  { title: "Exhibiting & Sponsorship", desc: "Stands, packages and pricing.", link: cta.exhibit },
  { title: "Visiting", desc: "Registration, badges and hosted buyers.", link: cta.register },
  { title: "Media & Partnerships", desc: "Press accreditation and media partners.", link: { label: "Press", href: "/press" } },
];

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Have a question?" title="Contact Us" intro={`Email ${event.email} · Tel ${event.phone}`} />
      <section className="py-16">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {teams.map((t) => (
            <div key={t.title} className="rounded-2xl border border-ink/10 p-6">
              <h2 className="text-lg font-bold">{t.title}</h2>
              <p className="mt-2 text-sm text-ink/70">{t.desc}</p>
              <Link href={t.link.href} className="mt-4 inline-block text-sm font-semibold text-brand">{t.link.label} →</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

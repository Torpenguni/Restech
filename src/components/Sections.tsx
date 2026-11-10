import Link from "next/link";
import Countdown from "./Countdown";
import NewsletterForm from "./forms/NewsletterForm";
import { cta, event, faqs, quickLinks, segmentGroups, sponsorTiers, stats, testimonials } from "@/lib/site";

export function SectionHead({ eyebrow, title, intro, center }: { eyebrow?: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h2 mt-2">{title}</h2>
      {intro && <p className="mt-3 text-ink/70">{intro}</p>}
    </div>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-xs text-white/60">
      <Link href="/" className="hover:text-white">Home</Link>
      {items.map((it) => (
        <span key={it.label}>
          {" / "}
          {it.href ? <Link href={it.href} className="hover:text-white">{it.label}</Link> : <span className="text-white">{it.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children?: React.ReactNode }) {
  return (
    <section className="bg-gradient-to-br from-ink via-navy to-ink text-white">
      <div className="container-x py-14 md:py-20">
        <Breadcrumb items={[{ label: eyebrow }, { label: title }]} />
        <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-white/70">{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

/** Three primary CTAs used in hero and "Be part of" blocks. */
export function TripleCta({ dark = true }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={cta.exhibit.href} className="btn-primary uppercase">{cta.exhibit.label}</Link>
      <Link href={cta.register.href} className="btn-lime uppercase">{cta.register.label}</Link>
      <Link href={cta.brochure.href} className={`${dark ? "btn-ghost" : "btn-outline"} uppercase`}>{cta.brochure.label}</Link>
    </div>
  );
}

/** Countdown banner linking to registration (FHA hero slide 2, repeated mid-page). */
export function CountdownBanner() {
  return (
    <Link href={cta.register.href} className="block bg-brand text-white transition hover:brightness-105">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">{event.dateLabel} · {event.venue}</p>
          <p className="mt-2 text-3xl font-black md:text-4xl">The countdown to {event.edition} has begun</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Countdown date={event.startDate} />
          <span className="text-sm font-bold uppercase underline underline-offset-4">Register now →</span>
        </div>
      </div>
    </Link>
  );
}

export function StatsBar({ title = `${event.edition} by the Numbers` }: { title?: string }) {
  return (
    <section className="bg-navy py-14 text-white">
      <div className="container-x">
        <h2 className="mb-8 text-center text-2xl font-black md:text-3xl">{title}</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-black text-lime md:text-5xl">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] text-white/50">*Projected Stats</p>
      </div>
    </section>
  );
}

export function CardGrid({ items, numbered = true }: { items: { title: string; desc: string; href?: string }[]; numbered?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => {
        const inner = (
          <>
            {numbered && <span className="text-sm font-black text-brand">{String(i + 1).padStart(2, "0")}</span>}
            <h3 className="mt-2 text-lg font-bold">{it.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{it.desc}</p>
            {it.href && <span className="mt-4 inline-block text-sm font-bold uppercase text-brand">Find out more →</span>}
          </>
        );
        return it.href ? (
          <Link key={it.title} href={it.href} className="rounded-2xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">{inner}</Link>
        ) : (
          <div key={it.title} className="rounded-2xl border border-ink/10 bg-white p-6">{inner}</div>
        );
      })}
    </div>
  );
}

/** Spotlight cards with image placeholder (FHA "What's New" / "New at"). */
export function SpotlightCards({ items }: { items: { title: string; desc: string; href: string }[] }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${items.length > 3 ? "lg:grid-cols-5" : "lg:grid-cols-3"}`}>
      {items.map((it) => (
        <Link key={it.title} href={it.href} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-lg">
          <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-navy to-ink text-xs text-white/40">Image</div>
          <div className="p-5">
            <h3 className="font-bold group-hover:text-brand">{it.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{it.desc}</p>
            <span className="mt-3 inline-block text-xs font-bold uppercase text-brand">Find out more →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function SegmentGrid() {
  return (
    <div className="space-y-10">
      {segmentGroups.map((g) => (
        <div key={g.key}>
          <h3 className="mb-4 text-lg font-black uppercase tracking-wide text-brand">{g.title}</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {g.items.map((s) => (
              <Link key={s.slug} href={`/segments/${s.slug}`} className="group flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-ink/5 transition hover:ring-brand">
                <div className="text-4xl">{s.icon}</div>
                <h4 className="mt-3 text-sm font-bold group-hover:text-brand">{s.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Exhibitor testimonial image strip (FHA links these to Instagram). */
export function SocialStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <a key={i} href="#" className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-brand/80 to-navy text-xs text-white/70">
          Exhibitor story #{i} (Instagram)
        </a>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <figure key={i} className="rounded-2xl bg-navy p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-lime">{t.type}</p>
          <div className="my-4 flex aspect-video items-center justify-center rounded-xl bg-white/5 text-xs text-white/40">▶ Video</div>
          <blockquote className="text-sm leading-relaxed text-white/85">“{t.quote}”</blockquote>
          <figcaption className="mt-4 text-sm">
            <span className="font-bold">{t.name}</span>
            <span className="block text-white/50">{t.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function SponsorTiers() {
  return (
    <div className="space-y-8">
      {sponsorTiers.map((t) => (
        <div key={t.tier}>
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-ink/50">{t.tier}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from({ length: t.count }).map((_, i) => (
              <div key={i} className="flex h-20 w-40 items-center justify-center rounded-xl border border-dashed border-ink/20 text-xs text-ink/40">
                Your logo here
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function PhotoGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className={`flex items-center justify-center rounded-xl bg-ink/5 text-xs text-ink/40 ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
          Photo
        </div>
      ))}
    </div>
  );
}

export function Faq() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
      {faqs.map((f) => (
        <details key={f.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
            {f.q}
            <span className="text-brand transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm text-ink/70">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function QuickLinksRow() {
  return (
    <section className="border-y border-ink/10 bg-white py-10">
      <div className="container-x">
        <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-ink/50">Quick Links</p>
        <div className="flex flex-wrap justify-center gap-3">
          {quickLinks.map((l) => (
            <Link key={l.href} href={l.href} className="btn-outline">{l.label}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RegisterBanner() {
  return (
    <Link href={cta.register.href} className="block bg-lime py-8 text-center text-2xl font-black uppercase tracking-wide text-ink hover:brightness-95 md:text-3xl">
      Register Now for {event.edition} →
    </Link>
  );
}

export function NewsletterBlock() {
  return (
    <section className="bg-navy py-14 text-white">
      <div className="container-x flex flex-col items-center gap-6 text-center">
        <h2 className="text-2xl font-black md:text-3xl">Join Our Newsletter</h2>
        <p className="max-w-xl text-white/70">Be first to hear about exhibitors, speakers and early-bird offers.</p>
        <div className="w-full max-w-md"><NewsletterForm /></div>
      </div>
    </section>
  );
}

export function CtaBand({ title, text, mode = "both" }: { title: string; text?: string; mode?: "register" | "exhibit" | "both" }) {
  return (
    <section className="bg-lime">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-black md:text-3xl">{title}</h2>
          {text && <p className="mt-2 text-ink/70">{text}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          {mode !== "register" && <Link href={cta.bookStand.href} className="btn bg-ink uppercase text-white hover:bg-navy">{cta.bookStand.label}</Link>}
          {mode !== "exhibit" && <Link href={cta.register.href} className="btn-primary uppercase">{cta.register.label}</Link>}
          <Link href={cta.brochure.href} className="btn-outline uppercase">{cta.brochure.label}</Link>
        </div>
      </div>
    </section>
  );
}

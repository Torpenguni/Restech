import Link from "next/link";
import Countdown from "./Countdown";
import NewsletterForm from "./forms/NewsletterForm";
import { cta, event, faqs, photos, quickLinks, segmentGroups, sponsorTiers, stats, testimonials, ticker } from "@/lib/site";

/* eslint-disable @next/next/no-img-element */

export function SectionHead({ eyebrow, title, intro, center, light }: { eyebrow?: string; title: string; intro?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`mb-10 max-w-3xl md:mb-14 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`h2 ${eyebrow ? "mt-3" : ""}`}>{title}</h2>
      {intro && <p className={`mt-4 text-base md:text-lg ${light ? "text-white/70" : "text-ink/65"}`}>{intro}</p>}
    </div>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-xs uppercase tracking-[0.18em] text-white/60">
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

/** Inner-page hero: dark photographic band with editorial serif title. */
export function PageHero({ eyebrow, title, intro, image = photos.expo, children }: { eyebrow: string; title: string; intro?: string; image?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <img src={image} alt="" className="photo absolute inset-0 h-full w-full opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="container-x relative py-16 md:py-24">
        <Breadcrumb items={[{ label: eyebrow }, { label: title }]} />
        <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">{intro}</p>}
        {children && <div className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">{children}</div>}
      </div>
    </section>
  );
}

/** Three primary CTAs used in hero and "Be part of" blocks. */
export function TripleCta({ dark = true, center = true }: { dark?: boolean; center?: boolean }) {
  return (
    <div className={`grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:flex-wrap ${center ? "sm:justify-center" : ""}`}>
      <Link href={cta.register.href} className="btn-primary px-3 uppercase">{cta.register.label}</Link>
      <Link href={cta.exhibit.href} className={`${dark ? "btn-light" : "btn bg-ink text-white hover:bg-navy"} px-3 uppercase`}>{cta.exhibit.label}</Link>
      <Link href={cta.brochure.href} className={`${dark ? "btn-ghost" : "btn-outline"} col-span-2 uppercase`}>{cta.brochure.label} ↓</Link>
    </div>
  );
}

/** Infinite ticker of show sectors. */
export function SectorTicker() {
  const row = [...ticker, ...ticker];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-saffron py-3.5 text-ink" aria-label="Show sectors">
      <div className="marquee flex w-max gap-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.18em]">
            {t} <span className="text-brand">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Countdown banner linking to registration. */
export function CountdownBanner() {
  return (
    <Link href={cta.register.href} className="block bg-brand text-white transition hover:brightness-105">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">{event.dateLabel} · {event.city}, Thailand</p>
          <p className="font-display mt-2 text-3xl font-semibold md:text-4xl">The countdown to {event.edition} has begun</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Countdown date={event.startDate} />
          <span className="text-sm font-bold uppercase underline underline-offset-4">Register now →</span>
        </div>
      </div>
    </Link>
  );
}

export function StatsBar({ title = `${event.edition} by the numbers`, dark = false }: { title?: string; dark?: boolean }) {
  return (
    <section className={dark ? "bg-ink py-14 text-white" : "border-y border-line bg-paper py-14"}>
      <div className="container-x">
        <p className="eyebrow mb-8 text-center">{title}</p>
        <div className={`grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x ${dark ? "md:divide-white/10" : "md:divide-ink/10"}`}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl font-semibold md:text-6xl">{s.value}</div>
              <div className={`mt-2 text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-white/60" : "text-ink/55"}`}>{s.label}</div>
            </div>
          ))}
        </div>
        <p className={`mt-8 text-center text-[11px] ${dark ? "text-white/40" : "text-ink/40"}`}>*Projected figures</p>
      </div>
    </section>
  );
}

export function CardGrid({ items, numbered = true, dark = false }: { items: { title: string; desc: string; href?: string }[]; numbered?: boolean; dark?: boolean }) {
  const base = dark ? "border-white/10 bg-white/[0.04] text-white" : "border-line bg-white";
  return (
    <div className="scroller md:grid-cols-2 md:gap-5 lg:grid-cols-3">
      {items.map((it, i) => {
        const inner = (
          <>
            {numbered && <span className="font-display text-3xl text-brand">{String(i + 1).padStart(2, "0")}</span>}
            <h3 className="mt-3 text-lg font-semibold">{it.title}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/65" : "text-ink/65"}`}>{it.desc}</p>
            {it.href && <span className="mt-5 inline-block text-xs font-bold uppercase tracking-widest text-brand">Find out more →</span>}
          </>
        );
        return it.href ? (
          <Link key={it.title} href={it.href} className={`rounded-2xl border p-7 transition hover:-translate-y-1 hover:shadow-xl ${base}`}>{inner}</Link>
        ) : (
          <div key={it.title} className={`rounded-2xl border p-7 ${base}`}>{inner}</div>
        );
      })}
    </div>
  );
}

/** Photographic spotlight cards — image fills the card, text over a gradient. */
export function SpotlightCards({ items }: { items: { title: string; desc: string; href: string; image?: string }[] }) {
  return (
    <div className={`scroller md:grid-cols-2 md:gap-5 ${items.length === 4 ? "lg:grid-cols-4" : items.length > 4 ? "lg:grid-cols-5" : "lg:grid-cols-3"}`}>
      {items.map((it) => (
        <Link key={it.title} href={it.href} className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl bg-navy p-6 text-white">
          {it.image ? (
            <img src={it.image} alt="" className="photo absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105" loading="lazy" />
          ) : (
            <div className="bg-hero absolute inset-0" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="relative">
            <h3 className="font-display text-2xl font-semibold leading-tight">{it.title}</h3>
            <p className="mt-2 text-sm text-white/75">{it.desc}</p>
            <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-saffron">Find out more →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/** Show sectors as photo tiles, grouped. */
export function SegmentGrid() {
  return (
    <div className="space-y-12">
      {segmentGroups.map((g) => (
        <div key={g.key}>
          <div className="mb-5 flex items-center gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-brand">{g.title}</h3>
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className={`grid grid-cols-2 gap-4 ${g.items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
            {g.items.map((s) => (
              <Link key={s.slug} href={`/segments/${s.slug}`} className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl bg-navy p-5 text-white">
                {s.image && <img src={s.image} alt="" className="photo absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105" loading="lazy" />}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />
                <div className="relative">
                  <h4 className="text-base font-semibold leading-snug md:text-lg">{s.name}</h4>
                  <p className="mt-1 text-xs text-white/75 md:text-sm">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Exhibitor testimonial image strip (kept for inner pages). */
export function SocialStrip() {
  return (
    <div className="scroller md:grid-cols-3 md:gap-4">
      {[photos.booth, photos.expo, photos.matching].map((src, i) => (
        <a key={i} href="#" className="relative flex aspect-square items-end overflow-hidden rounded-2xl bg-navy p-5 text-sm text-white">
          <img src={src} alt="" className="photo absolute inset-0 h-full w-full" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
          <span className="relative">Exhibitor story #{i + 1}</span>
        </a>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="scroller md:grid-cols-3 md:gap-5">
      {testimonials.map((t, i) => (
        <figure key={i} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-saffron">{t.type}</p>
          <span className="font-display mt-4 text-6xl leading-none text-brand">“</span>
          <blockquote className="font-display -mt-4 flex-1 text-lg leading-relaxed text-white/90">{t.quote}</blockquote>
          <figcaption className="mt-6 border-t border-white/10 pt-4 text-sm">
            <span className="font-semibold">{t.name}</span>
            <span className="block text-white/50">{t.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function SupportedBy() {
  return (
    <div className="mb-16 text-center">
      <p className="eyebrow mb-6">Official supporters</p>
      <img src="/images/supported-by.png" alt="Official supporters of Restech 2027" className="mx-auto w-full max-w-3xl" loading="lazy" />
    </div>
  );
}

export function SponsorTiers() {
  return (
    <div className="space-y-6 md:space-y-8">
      {sponsorTiers.map((t) => (
        <div key={t.tier}>
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-ink/45">{t.tier}</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {Array.from({ length: t.count }).map((_, i) => (
              <div key={i} className="flex h-14 w-[30%] items-center justify-center rounded-xl border border-dashed border-ink/20 bg-white/60 text-[10px] text-ink/40 md:h-20 md:w-40 md:text-xs">
                Your logo here
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Editorial mosaic of real event photography. */
export function PhotoGrid() {
  const shots = [
    { src: photos.crowd, cls: "col-span-2 row-span-2" },
    { src: photos.stage, cls: "" },
    { src: photos.networking, cls: "" },
    { src: "/images/atmosphere-2024.webp", cls: "" },
    { src: photos.speaker, cls: "" },
    { src: photos.booth, cls: "col-span-2" },
    { src: photos.hall, cls: "col-span-2" },
  ];
  return (
    <div className="grid auto-rows-[9rem] grid-cols-2 gap-3 md:auto-rows-[12rem] md:grid-cols-4">
      {shots.map(({ src, cls }) => (
        <img key={src} src={src} alt="" loading="lazy" className={`photo h-full w-full rounded-xl ${cls}`} />
      ))}
    </div>
  );
}

export function Faq() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-lg font-medium">
            {f.q}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 text-brand transition group-open:rotate-45">+</span>
          </summary>
          <p className="-mt-2 pb-6 pr-12 text-ink/65">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function QuickLinksRow() {
  return (
    <section className="border-y border-line bg-paper py-10">
      <div className="container-x">
        <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-ink/50">Quick Links</p>
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center">
          {quickLinks.map((l) => (
            <Link key={l.href} href={l.href} className="btn-outline px-3 text-center last:col-span-2">{l.label}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RegisterBanner() {
  return (
    <Link href={cta.register.href} className="font-display block bg-brand py-8 text-center text-2xl font-semibold text-white hover:brightness-110 md:text-4xl">
      Register now for {event.edition} →
    </Link>
  );
}

export function NewsletterBlock() {
  return (
    <section className="bg-mist py-16">
      <div className="container-x grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="eyebrow">Stay in the loop</p>
          <h2 className="h2 mt-3">Show news, speakers and early-bird offers.</h2>
        </div>
        <div className="w-full md:justify-self-end md:max-w-md"><NewsletterForm /></div>
      </div>
    </section>
  );
}

export function CtaBand({ title, text, mode = "both" }: { title: string; text?: string; mode?: "register" | "exhibit" | "both" }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <img src={photos.spread} alt="" className="photo absolute inset-0 h-full w-full opacity-25" loading="lazy" />
      <div className="container-x relative flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">{title}</h2>
          {text && <p className="mt-2 text-white/75">{text}</p>}
        </div>
        <div className="grid w-full grid-cols-1 gap-3 sm:flex sm:w-auto sm:flex-wrap">
          {mode !== "exhibit" && <Link href={cta.register.href} className="btn-primary uppercase">{cta.register.label}</Link>}
          {mode !== "register" && <Link href={cta.bookStand.href} className="btn-light uppercase">{cta.bookStand.label}</Link>}
          <Link href={cta.brochure.href} className="btn-ghost uppercase">{cta.brochure.label}</Link>
        </div>
      </div>
    </section>
  );
}

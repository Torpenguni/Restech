import Link from "next/link";
import { cta, faqs, segments, sponsorTiers, stats, testimonials } from "@/lib/site";

export function SectionHead({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2 mt-2">{title}</h2>
      {intro && <p className="mt-3 text-ink/70">{intro}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children?: React.ReactNode }) {
  return (
    <section className="bg-gradient-to-br from-ink via-navy to-ink text-white">
      <div className="container-x py-16 md:py-20">
        <p className="eyebrow !text-lime">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-white/70">{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="bg-brand text-white">
      <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-black md:text-5xl">{s.value}</div>
            <div className="mt-1 text-sm font-medium text-white/85">{s.label}</div>
          </div>
        ))}
      </div>
      <p className="pb-3 text-center text-[11px] text-white/70">*Projected figures</p>
    </section>
  );
}

export function CardGrid({ items }: { items: { title: string; desc: string; href?: string }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => {
        const inner = (
          <>
            <span className="text-sm font-black text-brand">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 text-lg font-bold">{it.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{it.desc}</p>
            {it.href && <span className="mt-4 inline-block text-sm font-semibold text-brand">Find out more →</span>}
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

export function SegmentGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {segments.map((s) => (
        <Link key={s.slug} href={`/show-segments#${s.slug}`} className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5 transition hover:ring-brand">
          <div className="text-3xl">{s.icon}</div>
          <h3 className="mt-3 font-bold group-hover:text-brand">{s.name}</h3>
          <p className="mt-1 text-xs text-ink/60">{s.desc}</p>
        </Link>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <figure key={i} className="rounded-2xl bg-navy p-6 text-white">
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
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-ink/50">{t.tier} Sponsors</p>
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

export function CtaBand({ title, text, mode = "both" }: { title: string; text?: string; mode?: "register" | "exhibit" | "both" }) {
  return (
    <section className="bg-lime">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-black md:text-3xl">{title}</h2>
          {text && <p className="mt-2 text-ink/70">{text}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          {mode !== "register" && <Link href={cta.exhibit.href} className="btn bg-ink text-white hover:bg-navy">{cta.exhibit.label}</Link>}
          {mode !== "exhibit" && <Link href={cta.register.href} className="btn-primary">{cta.register.label}</Link>}
          <Link href={cta.brochure.href} className="btn-outline">{cta.brochure.label}</Link>
        </div>
      </div>
    </section>
  );
}

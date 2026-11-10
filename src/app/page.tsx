import Link from "next/link";
import Countdown from "@/components/Countdown";
import {
  Faq,
  SectionHead,
  SectorTicker,
  SegmentGrid,
  SpotlightCards,
  SponsorTiers,
  SupportedBy,
  Testimonials,
  TripleCta,
} from "@/components/Sections";
import { cta, event, newAt, photos, segments, stats, whatsNew, whyExhibit } from "@/lib/site";

/* eslint-disable @next/next/no-img-element */

// Who you'll meet — icon row (icon paths from Lucide, ISC licence)
const audience = [
  { t: "Restaurant & café owners", icon: <><path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><path d="M6 2v2M10 2v2M14 2v2" /></> },
  { t: "Chains, hotels & franchise groups", icon: <><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></> },
  { t: "Technology & innovation buyers", icon: <><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6M10 22h4" /></> },
  { t: "Business matching", icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></> },
];

// Homepage — 13 blocks. Detail lives on inner pages; quick links and newsletter live in the footer.
export default function Home() {
  return (
    <>
      {/* 1. Hero — full-bleed kitchen photography, editorial headline, event facts card */}
      <section className="grain relative overflow-hidden bg-ink text-white">
        <img src={photos.heroKitchen} alt="Chef cooking over an open flame in a commercial kitchen" className="photo absolute inset-0 h-full w-full" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <div className="container-x relative grid gap-8 pb-10 pt-8 md:gap-12 md:pb-20 md:pt-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow !text-saffron">International restaurant &amp; food-service trade expo</p>
            <img src="/images/logo-2027.webp" alt={event.fullName} className="mt-6 hidden w-72 md:block" />
            <h1 className="font-display mt-4 text-[2.1rem] font-semibold leading-[1.1] sm:text-5xl md:mt-8 md:text-6xl">
              The future of food service is served in <em className="text-saffron">Bangkok.</em>
            </h1>
            <p className="mt-4 max-w-xl text-[15px] text-white/75 md:mt-6 md:text-lg">
              Three days, one floor, every system a restaurant runs on — kitchen equipment, ingredients and supply, POS and payments, delivery, franchise and the restaurant concepts shaping what&apos;s next.
            </p>
            <div className="mt-6 md:mt-9"><TripleCta center={false} /></div>
          </div>

          <aside className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-md md:rounded-3xl md:p-8 lg:col-span-5 lg:max-w-md lg:justify-self-end">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:gap-y-5">
              <div className="col-span-2">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Dates</dt>
                <dd className="font-display mt-1 text-xl md:text-2xl">{event.dateLabel}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Venue</dt>
                <dd className="mt-1">{event.venue}, {event.city}, Thailand</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Opening hours</dt>
                <dd className="mt-1">{event.hours}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Admission</dt>
                <dd className="mt-1">Trade visitors only</dd>
              </div>
            </dl>
            <Link href={cta.register.href} className="btn-primary mt-5 hidden w-full uppercase md:mt-7 md:flex">Get your free trade pass</Link>
          </aside>
        </div>
      </section>

      {/* 2. Countdown bar — compact glass tiles on dark, continues the hero */}
      <section className="border-t border-white/10 bg-ink text-white">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-4 text-center md:flex-row md:gap-4 md:py-6 md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Countdown to {event.edition}</p>
          <Countdown date={event.startDate} />
          <p className="hidden text-sm text-white/60 md:block">Opening hours: {event.hours} (Bangkok time)</p>
        </div>
      </section>

      {/* 3. Sector ticker */}
      <SectorTicker />

      {/* 4. About + by the numbers + food mosaic */}
      <section className="section-y">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">About {event.edition}</p>
            <h2 className="h2 mt-3">One floor. <em className="text-brand">Every system</em> a restaurant runs on.</h2>
            <p className="mt-4 text-[15px] text-ink/65 md:mt-6 md:text-lg">
              {event.name} brings restaurant owners, chain and hotel F&amp;B operators, franchise groups and food-service buyers together with the suppliers behind the modern restaurant — from the kitchen pass to the cloud.
            </p>
            <dl className="mt-6 grid grid-cols-4 divide-x divide-line border-y border-line py-4 md:mt-8 md:py-5">
              {stats.map((s) => (
                <div key={s.label} className="px-2 text-center first:pl-0">
                  <dd className="text-lg font-semibold sm:text-2xl md:text-3xl">{s.value}</dd>
                  <dt className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/50 md:text-[11px] md:tracking-[0.15em]">{s.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-[11px] text-ink/40">*Projected figures</p>
            <div className="mt-5 flex flex-wrap gap-3 md:mt-6">
              <Link href="/about-restech" className="btn bg-ink text-white uppercase hover:bg-navy">About the show</Link>
              <Link href="/why-visit" className="btn-outline uppercase">Why visit</Link>
            </div>
          </div>
          <div className="grid h-[15rem] grid-cols-5 grid-rows-6 gap-2 sm:h-[22rem] md:h-[32rem] md:gap-3">
            <img src={photos.expo} alt="Crowded aisles between exhibitor stands" className="photo col-span-3 row-span-6 h-full w-full rounded-2xl" loading="lazy" />
            <img src={photos.hall} alt="Packed seminar hall during a keynote" className="photo col-span-2 row-span-3 h-full w-full rounded-2xl" loading="lazy" />
            <img src={photos.networking} alt="Restaurant owners networking over dinner" className="photo col-span-2 row-span-3 h-full w-full rounded-2xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 5. Who you'll meet */}
      <section className="bg-mist section-y">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead eyebrow="Who you'll meet" title={`Your customers are at ${event.edition}`} intro="Decision-makers looking for the equipment, systems and partners that move their business forward." />
            <div className="order-last flex shrink-0 flex-wrap gap-3 md:order-none md:mb-10">
              <Link href={cta.bookStand.href} className="btn-primary uppercase">I want to exhibit</Link>
              <Link href={cta.sponsor.href} className="btn-outline uppercase">Sponsorship</Link>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {audience.map(({ t, icon }) => (
              <li key={t} className="flex items-center gap-2.5 rounded-xl border border-line bg-white/70 px-3 py-3 md:gap-3 md:rounded-2xl md:px-4 md:py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand md:h-11 md:w-11">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icon}
                  </svg>
                </span>
                <span className="text-[13px] font-semibold leading-snug md:text-base">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Show sectors */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead eyebrow="Show sectors" title={`${segments.length} sectors, from the kitchen pass to the cloud`} />
            <Link href="/show-segments" className="btn-outline hidden shrink-0 uppercase md:mb-10 md:inline-flex">Explore all sectors</Link>
          </div>
          <SegmentGrid />
        </div>
      </section>

      {/* 7. Programme highlights + new for 2027 */}
      <section className="bg-ink section-y text-white">
        <div className="container-x">
          <SectionHead light eyebrow="On the show floor" title="Programme highlights" intro="Two stages, business matching and a working vision of the restaurant of the future." />
          <SpotlightCards items={whatsNew} />
          <div className="mt-6 grid gap-3 border-t border-white/10 pt-6 md:mt-10 md:grid-cols-[auto_1fr_1fr_1fr] md:items-start md:gap-8 md:pt-8">
            <p className="eyebrow !text-saffron md:pt-1">New for 2027</p>
            {newAt.map((c) => (
              <Link key={c.title} href={c.href} className="group">
                <h3 className="font-semibold group-hover:text-saffron">{c.title} →</h3>
                <p className="mt-1 hidden text-sm text-white/60 md:block">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Why exhibit + floor plan */}
      <section className="section-y">
        <div className="container-x grid gap-6 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <p className="eyebrow">For exhibitors</p>
            <h2 className="h2 mt-3">Why leading brands choose Restech</h2>
            <a href="/images/floor-plan.webp" target="_blank" rel="noopener" className="group mt-5 block md:mt-8">
              <img src="/images/floor-plan.webp" alt="Restech 2026 floor plan (reference), IMPACT Hall 5–6" className="w-full rounded-2xl border border-line bg-white shadow-lg" loading="lazy" />
              <span className="mt-2 block text-[11px] text-ink/50 group-hover:text-brand md:mt-3 md:text-xs">Floor plan reference from 2026 — 2027 layout coming soon. Tap to enlarge ↗</span>
            </a>
            <div className="mt-5 hidden flex-wrap gap-3 md:mt-6 lg:flex">
              <Link href={cta.bookStand.href} className="btn-primary uppercase">{cta.bookStand.label}</Link>
              <Link href="/exhibit-with-us" className="btn-outline uppercase">Exhibit with us</Link>
            </div>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {whyExhibit.map((w, i) => (
              <li key={w.title} className="grid grid-cols-[2.25rem_1fr] gap-3 py-4 md:grid-cols-[3rem_1fr] md:gap-4 md:py-6">
                <span className="text-lg font-semibold text-brand md:text-2xl">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-base font-semibold md:text-lg">{w.title}</h3>
                  <p className="mt-1 text-sm text-ink/65 md:text-base">{w.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 10. Voices from the show floor (exhibitor + visitor testimonials) */}
      <section className="bg-ink section-y text-white">
        <div className="container-x">
          <SectionHead light eyebrow="Testimonials" title="Voices from the show floor" />
          <Testimonials />
        </div>
      </section>

      {/* 11. Restech 2024 highlights + organiser */}
      <section className="bg-mist section-y">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead eyebrow="Past edition" title="Restech 2024 highlights" intro={`Organised by ${event.organiser.replace(" Co., Ltd.", "")} — building Thailand's F&B ecosystem through media, community, education and events.`} />
            <Link href="/media-gallery" className="btn-outline hidden shrink-0 uppercase md:mb-10 md:inline-flex">View snapshots</Link>
          </div>
          <div className="grid auto-rows-[6.5rem] grid-cols-2 gap-2 md:auto-rows-[12rem] md:grid-cols-4 md:gap-3">
            {[
              { src: "/images/atmosphere-2024.webp", cls: "col-span-2 row-span-2" },
              { src: "/images/visitor.webp", cls: "col-span-2" },
              { src: "/images/exhibitor.webp", cls: "" },
              { src: "/images/kv-about.webp", cls: "" },
            ].map(({ src, cls }) => (
              <img key={src} src={src} alt="" loading="lazy" className={`photo h-full w-full rounded-xl ${cls}`} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. Supporters & sponsors */}
      <section className="section-y">
        <div className="container-x">
          <SupportedBy />
          <SectionHead center eyebrow="Partners" title="Our partners & sponsors" />
          <SponsorTiers />
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="border-t border-line section-y">
        <div className="container-x">
          <SectionHead center eyebrow="Good to know" title="Frequently asked questions" />
          <Faq />
          <div className="mt-6 text-center md:mt-8"><Link href="/faqs" className="btn-outline uppercase">All FAQs</Link></div>
        </div>
      </section>

      {/* 14. Final call to action — footer (quick links, newsletter) follows */}
      <section className="relative overflow-hidden bg-ink text-white">
        <img src={photos.chef} alt="" className="photo absolute inset-0 h-full w-full opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="container-x relative flex flex-col items-center py-12 text-center md:py-20">
          <p className="eyebrow !text-saffron">{event.dateLabel} · {event.city}</p>
          <h2 className="font-display mt-3 text-3xl font-semibold md:mt-4 md:text-6xl">Be part of <em className="text-saffron">{event.edition}</em></h2>
          <p className="mt-5 max-w-xl text-white/75">{event.theme} — limited stands available in each zone.</p>
          <div className="mt-7 w-full md:mt-10 md:w-auto"><TripleCta /></div>
        </div>
      </section>
    </>
  );
}

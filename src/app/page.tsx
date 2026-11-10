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
import { cta, event, newAt, photos, segments, stats, travelCards, whatsNew, whyExhibit } from "@/lib/site";

/* eslint-disable @next/next/no-img-element */

// Homepage — 14 blocks. Detail lives on inner pages; quick links and newsletter live in the footer.
export default function Home() {
  return (
    <>
      {/* 1. Hero — full-bleed kitchen photography, editorial headline, event facts card */}
      <section className="grain relative overflow-hidden bg-ink text-white">
        <img src={photos.heroKitchen} alt="Chef cooking over an open flame in a commercial kitchen" className="photo absolute inset-0 h-full w-full" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <div className="container-x relative grid gap-12 pb-16 pt-14 md:pb-20 md:pt-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow !text-saffron">International restaurant &amp; food-service trade expo</p>
            <img src="/images/logo-2027.webp" alt={event.fullName} className="mt-6 w-56 md:w-72" />
            <h1 className="font-display mt-8 text-[2.4rem] font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
              The future of food service is served in <em className="text-saffron">Bangkok.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/75 md:text-lg">
              Three days, one floor, every system a restaurant runs on — kitchen equipment, ingredients and supply, POS and payments, delivery, franchise and the restaurant concepts shaping what&apos;s next.
            </p>
            <div className="mt-9"><TripleCta center={false} /></div>
          </div>

          <aside className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-md md:p-8 lg:col-span-5 lg:max-w-md lg:justify-self-end">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
              <div className="col-span-2">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Dates</dt>
                <dd className="font-display mt-1 text-2xl">{event.dateLabel}</dd>
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
            <Link href={cta.register.href} className="btn-primary mt-7 w-full uppercase">Get your free trade pass</Link>
          </aside>
        </div>
      </section>

      {/* 2. Countdown bar */}
      <section className="bg-paper py-6 md:py-8">
        <div className="container-x">
          <div className="grid items-center gap-5 rounded-3xl bg-mist px-6 py-6 text-center md:grid-cols-[1fr_auto_1fr] md:gap-8 md:px-10 md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/80">Countdown to {event.edition}</p>
            <Countdown date={event.startDate} size="lg" />
            <p className="text-sm text-ink/65 md:justify-self-end">Opening hours: {event.hours}<br className="hidden md:block" /> (Bangkok time)</p>
          </div>
        </div>
      </section>

      {/* 3. Sector ticker */}
      <SectorTicker />

      {/* 4. About + by the numbers + food mosaic */}
      <section className="section-y">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">About {event.edition}</p>
            <h2 className="h2 mt-3">One floor. <em className="text-brand">Every system</em> a restaurant runs on.</h2>
            <p className="mt-6 text-lg text-ink/65">
              {event.name} brings restaurant owners, chain and hotel F&amp;B operators, franchise groups and food-service buyers together with the suppliers behind the modern restaurant — from the kitchen pass to the cloud.
            </p>
            <dl className="mt-8 grid grid-cols-4 divide-x divide-line border-y border-line py-5">
              {stats.map((s) => (
                <div key={s.label} className="px-2 text-center first:pl-0">
                  <dd className="text-2xl font-semibold md:text-3xl">{s.value}</dd>
                  <dt className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/50 md:text-[11px]">{s.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-[11px] text-ink/40">*Projected figures</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/about-restech" className="btn bg-ink text-white uppercase hover:bg-navy">About the show</Link>
              <Link href="/why-visit" className="btn-outline uppercase">Why visit</Link>
            </div>
          </div>
          <div className="grid h-[24rem] grid-cols-5 grid-rows-6 gap-3 md:h-[32rem]">
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
            <SectionHead eyebrow="Who you'll meet" title={`Your customers are at ${event.edition}`} intro="Restaurant owners, chain and hotel operators, franchise investors and technology buyers — looking for the equipment, systems and partners that move their business forward." />
            <div className="flex shrink-0 flex-wrap gap-3 md:mb-14">
              <Link href={cta.bookStand.href} className="btn-primary uppercase">I want to exhibit</Link>
              <Link href={cta.sponsor.href} className="btn-outline uppercase">Sponsorship</Link>
            </div>
          </div>
          <div className="scroller md:grid-cols-4 md:gap-4">
            {[
              { t: "Restaurant & café owners", img: photos.dinner },
              { t: "Chains, hotels & franchise groups", img: photos.crowd },
              { t: "Technology & innovation buyers", img: photos.booth },
              { t: "Business matching", img: photos.matching },
            ].map(({ t, img }) => (
              <div key={t} className="relative flex aspect-[4/5] items-end overflow-hidden rounded-2xl bg-navy p-5 text-white">
                <img src={img} alt="" className="photo absolute inset-0 h-full w-full" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <span className="font-display relative text-xl font-semibold leading-tight">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Show sectors */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead eyebrow="Show sectors" title={`${segments.length} sectors, from the kitchen pass to the cloud`} />
            <Link href="/show-segments" className="btn-outline shrink-0 uppercase md:mb-14">Explore all sectors</Link>
          </div>
          <SegmentGrid />
        </div>
      </section>

      {/* 7. Programme highlights + new for 2027 */}
      <section className="bg-ink section-y text-white">
        <div className="container-x">
          <SectionHead light eyebrow="On the show floor" title="Programme highlights" intro="Two stages, business matching and a working vision of the restaurant of the future." />
          <SpotlightCards items={whatsNew} />
          <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-[auto_1fr_1fr_1fr] md:items-start md:gap-8">
            <p className="eyebrow !text-saffron md:pt-1">New for 2027</p>
            {newAt.map((c) => (
              <Link key={c.title} href={c.href} className="group">
                <h3 className="font-semibold group-hover:text-saffron">{c.title} →</h3>
                <p className="mt-1 text-sm text-white/60">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. International visitors */}
      <section className="bg-mist section-y">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Travelling from abroad</p>
            <h2 className="h2 mt-3">Your trip to Restech, <em className="text-brand">made simple.</em></h2>
            <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
              {[
                ["City", `${event.city}, Thailand`],
                ["Venue", event.venue],
                ["Airports", "Suvarnabhumi (BKK) · Don Mueang (DMK)"],
                ["Show information", "English · ไทย"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-3 gap-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/50">{k}</dt>
                  <dd className="col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {travelCards.map((c) => (
              <Link key={c.href} href={c.href} className="group rounded-2xl border border-line bg-paper p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-xl">
                <h3 className="text-lg font-semibold group-hover:text-brand">{c.title} →</h3>
                <p className="mt-2 text-sm text-ink/65">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Why exhibit + floor plan */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <p className="eyebrow">For exhibitors</p>
            <h2 className="h2 mt-3">Why leading brands choose Restech</h2>
            <a href="/images/floor-plan.webp" target="_blank" rel="noopener" className="group mt-8 block">
              <img src="/images/floor-plan.webp" alt="Restech 2026 floor plan (reference), IMPACT Hall 5–6" className="w-full rounded-2xl border border-line bg-white shadow-lg" loading="lazy" />
              <span className="mt-3 block text-xs text-ink/50 group-hover:text-brand">IMPACT Hall 5–6 floor plan — reference from 2026; the 2027 layout will be announced soon. Click to enlarge ↗</span>
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={cta.bookStand.href} className="btn-primary uppercase">{cta.bookStand.label}</Link>
              <Link href="/exhibit-with-us" className="btn-outline uppercase">Exhibit with us</Link>
            </div>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {whyExhibit.map((w, i) => (
              <li key={w.title} className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                <span className="text-2xl font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-semibold">{w.title}</h3>
                  <p className="mt-1 text-ink/65">{w.desc}</p>
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
            <Link href="/media-gallery" className="btn-outline shrink-0 uppercase md:mb-14">View snapshots</Link>
          </div>
          <div className="grid auto-rows-[9rem] grid-cols-2 gap-3 md:auto-rows-[12rem] md:grid-cols-4">
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
          <div className="mt-8 text-center"><Link href="/faqs" className="btn-outline uppercase">All FAQs</Link></div>
        </div>
      </section>

      {/* 14. Final call to action — footer (quick links, newsletter) follows */}
      <section className="relative overflow-hidden bg-ink text-white">
        <img src={photos.chef} alt="" className="photo absolute inset-0 h-full w-full opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="container-x relative flex flex-col items-center py-16 text-center md:py-24">
          <p className="eyebrow !text-saffron">{event.dateLabel} · {event.city}</p>
          <h2 className="font-display mt-4 text-4xl font-semibold md:text-6xl">Be part of <em className="text-saffron">{event.edition}</em></h2>
          <p className="mt-5 max-w-xl text-white/75">{event.theme} — limited stands available in each zone.</p>
          <div className="mt-8"><Countdown date={event.startDate} /></div>
          <div className="mt-10"><TripleCta /></div>
        </div>
      </section>
    </>
  );
}

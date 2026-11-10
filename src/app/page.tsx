import Link from "next/link";
import Countdown from "@/components/Countdown";
import {
  Faq,
  NewsletterBlock,
  PhotoGrid,
  SectionHead,
  SectorTicker,
  SegmentGrid,
  SpotlightCards,
  SponsorTiers,
  StatsBar,
  SupportedBy,
  TripleCta,
} from "@/components/Sections";
import { cta, event, newAt, photos, segments, travelCards, whatsNew, whyExhibit } from "@/lib/site";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <>
      {/* 1. Hero — full-bleed kitchen photography, editorial headline, event facts card */}
      <section className="grain relative overflow-hidden bg-ink text-white">
        <img src={photos.heroKitchen} alt="Chef cooking over an open flame in a commercial kitchen" className="photo absolute inset-0 h-full w-full" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        <div className="container-x relative grid gap-12 pb-16 pt-14 md:pb-24 md:pt-24 lg:grid-cols-12 lg:items-end">
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
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Doors open in</p>
              <Countdown date={event.startDate} />
            </div>
          </aside>
        </div>
      </section>

      {/* 2. Sector ticker */}
      <SectorTicker />

      {/* 3. Positioning statement + food mosaic */}
      <section className="section-y">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">About {event.edition}</p>
            <h2 className="h2 mt-3">One floor. <em className="text-brand">Every system</em> a restaurant runs on.</h2>
            <p className="mt-6 text-lg text-ink/65">
              {event.name} brings restaurant owners, chain and hotel F&amp;B operators, franchise groups and food-service buyers together with the suppliers behind the modern restaurant — from the kitchen pass to the cloud.
            </p>
            <p className="mt-4 text-ink/65">
              Walk the show floor, taste and test new equipment, sit in on the stages and leave with the partners that move your business forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about-restech" className="btn bg-ink text-white uppercase hover:bg-navy">About the show</Link>
              <Link href="/why-visit" className="btn-outline uppercase">Why visit</Link>
            </div>
          </div>
          <div className="grid h-[26rem] grid-cols-5 grid-rows-6 gap-3 md:h-[34rem]">
            <img src={photos.spread} alt="Plates of Asian dishes on a dark table" className="photo col-span-3 row-span-6 h-full w-full rounded-2xl" loading="lazy" />
            <img src={photos.dimSum} alt="Dim sum in bamboo steamers" className="photo col-span-2 row-span-3 h-full w-full rounded-2xl" loading="lazy" />
            <img src={photos.plating} alt="Chef plating dishes on the pass" className="photo col-span-2 row-span-3 h-full w-full rounded-2xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 4. By the numbers */}
      <StatsBar dark />

      {/* 5. Who you'll meet */}
      <section className="bg-mist section-y">
        <div className="container-x">
          <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <SectionHead eyebrow="Who you'll meet" title={`Your customers are at ${event.edition}`} intro="Restaurant owners, chain and hotel operators, franchise investors and technology buyers come to Restech to find the equipment, systems and partners that move their business forward." />
            <div className="flex shrink-0 flex-wrap gap-3 md:mb-14">
              <Link href={cta.bookStand.href} className="btn-primary uppercase">I want to exhibit</Link>
              <Link href={cta.sponsor.href} className="btn-outline uppercase">Sponsorship</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { t: "Restaurant & café owners", img: photos.dinner },
              { t: "Chains, hotels & franchise groups", img: photos.hall },
              { t: "Technology & innovation buyers", img: photos.expo },
              { t: "Business matching", img: photos.matching },
            ].map(({ t, img }) => (
              <div key={t} className="relative flex aspect-[3/4] items-end overflow-hidden rounded-2xl bg-navy p-5 text-white">
                <img src={img} alt="" className="photo absolute inset-0 h-full w-full" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <span className="font-display relative text-xl leading-tight md:text-2xl">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Show sectors */}
      <section className="section-y">
        <div className="container-x">
          <SectionHead eyebrow="Show sectors" title={`${segments.length} sectors, from the kitchen pass to the cloud`} intro="Restaurant technology and restaurant operations side by side — compare suppliers zone by zone." />
          <SegmentGrid />
          <div className="mt-10"><Link href="/show-segments" className="btn-outline uppercase">Explore all sectors</Link></div>
        </div>
      </section>

      {/* 7. Food band */}
      <section className="relative overflow-hidden bg-ink">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {[photos.curry, photos.bowl, photos.steak, photos.fineDining, photos.prep, photos.produce].map((src, i) => (
            <img key={src} src={src} alt="" className={`photo aspect-[3/4] h-full w-full md:aspect-[2/3] ${i > 2 ? "hidden md:block" : ""}`} loading="lazy" />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-ink/55 px-5 text-center">
          <div>
            <p className="font-display text-5xl font-semibold text-white md:text-7xl">Taste. Test. <em className="text-saffron">Trade.</em></p>
            <p className="mx-auto mt-4 max-w-lg text-sm text-white/80 md:text-base">See equipment and systems working live, and meet the suppliers behind them.</p>
          </div>
        </div>
      </section>

      {/* 8. Programme highlights */}
      <section className="bg-ink section-y text-white">
        <div className="container-x">
          <SectionHead light eyebrow="On the show floor" title="Programme highlights" intro="Two stages, business matching and a working vision of the restaurant of the future." />
          <SpotlightCards items={whatsNew} />
        </div>
      </section>

      {/* 9. International visitors */}
      <section className="bg-mist section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Travelling from abroad</p>
            <h2 className="h2 mt-3">Your trip to Restech, <em className="text-brand">made simple.</em></h2>
            <p className="mt-5 text-ink/65">
              {event.name} takes place at IMPACT Muang Thong Thani in northern Bangkok, with the city served by Suvarnabhumi (BKK) and Don Mueang (DMK) international airports.
            </p>
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
            {travelCards.map((c, i) => (
              <Link key={c.href} href={c.href} className="group flex flex-col justify-between rounded-2xl border border-line bg-paper p-7 transition hover:-translate-y-1 hover:border-brand hover:shadow-xl">
                <span className="font-display text-3xl text-brand">{String(i + 1).padStart(2, "0")}</span>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold group-hover:text-brand">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink/65">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Why exhibit — photo + numbered list */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <p className="eyebrow">For exhibitors</p>
            <h2 className="h2 mt-3">Why leading brands choose Restech</h2>
            <img src={photos.booth} alt="Visitors at an exhibitor stand" className="photo mt-8 aspect-[4/3] w-full rounded-2xl" loading="lazy" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={cta.bookStand.href} className="btn-primary uppercase">{cta.bookStand.label}</Link>
              <Link href="/exhibit-with-us" className="btn-outline uppercase">Exhibit with us</Link>
            </div>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {whyExhibit.map((w, i) => (
              <li key={w.title} className="grid grid-cols-[3.5rem_1fr] gap-4 py-7">
                <span className="font-display text-3xl text-brand">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-semibold">{w.title}</h3>
                  <p className="mt-2 text-ink/65">{w.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 11. Floor plan */}
      <section className="bg-mist section-y">
        <div className="container-x">
          <SectionHead eyebrow="Venue" title="IMPACT Hall 5–6 floor plan" intro="Reference floor plan from Restech 2026 — the 2027 layout will be announced soon." />
          <img src="/images/floor-plan.webp" alt="Restech 2026 floor plan (reference), IMPACT Hall 5–6" className="w-full rounded-3xl shadow-xl" loading="lazy" />
        </div>
      </section>

      {/* 12. New at Restech */}
      <section className="section-y">
        <div className="container-x">
          <SectionHead eyebrow="New for 2027" title={`New at ${event.edition}`} />
          <div className="grid gap-5 md:grid-cols-3">
            {newAt.map((c, i) => (
              <Link key={c.title} href={c.href} className="group overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <img src={[photos.franchise, photos.produce, photos.meetup][i] ?? photos.spread} alt="" className="photo aspect-[16/10] w-full" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold group-hover:text-brand">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink/65">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Organiser credibility — real Penguin X event photography */}
      <section className="bg-ink section-y text-white">
        <div className="container-x">
          <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow !text-saffron">Organised by {event.organiser.replace(" Co., Ltd.", "")}</p>
              <h2 className="h2 mt-3">From the team that brings Thailand&apos;s restaurant industry together</h2>
            </div>
            <p className="text-white/70 md:text-lg">
              Penguin X builds the F&amp;B ecosystem through media, community, education and events — and brings that network to the Restech show floor.
              <a href="https://www.penguinx.co" target="_blank" rel="noopener" className="mt-3 block text-sm font-semibold uppercase tracking-widest text-saffron hover:underline">About Penguin X ↗</a>
            </p>
          </div>
          <PhotoGrid />
        </div>
      </section>

      {/* 14. Supporters & sponsors */}
      <section className="section-y">
        <div className="container-x">
          <SupportedBy />
          <SectionHead center eyebrow="Partners" title="Our partners & sponsors" />
          <SponsorTiers />
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="border-t border-line section-y">
        <div className="container-x">
          <SectionHead center eyebrow="Good to know" title="Frequently asked questions" />
          <Faq />
          <div className="mt-10 text-center"><Link href="/faqs" className="btn-outline uppercase">All FAQs</Link></div>
        </div>
      </section>

      {/* 16. Final call to action */}
      <section className="relative overflow-hidden bg-ink text-white">
        <img src={photos.chef} alt="" className="photo absolute inset-0 h-full w-full opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="container-x relative flex flex-col items-center py-20 text-center md:py-28">
          <p className="eyebrow !text-saffron">{event.dateLabel} · {event.city}</p>
          <h2 className="font-display mt-4 text-5xl font-semibold md:text-7xl">Be part of <em className="text-saffron">{event.edition}</em></h2>
          <p className="mt-5 max-w-xl text-white/75">{event.theme} — limited stands available in each zone.</p>
          <div className="mt-8"><Countdown date={event.startDate} /></div>
          <div className="mt-10"><TripleCta /></div>
        </div>
      </section>

      {/* 17. Newsletter — footer follows */}
      <NewsletterBlock />
    </>
  );
}

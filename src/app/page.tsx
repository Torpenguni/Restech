import Link from "next/link";
import Countdown from "@/components/Countdown";
import { CardGrid, CtaBand, Faq, SectionHead, SegmentGrid, SponsorTiers, StatsBar, Testimonials } from "@/components/Sections";
import { cta, event, highlights, whyExhibit } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* 1. Hero + countdown */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-lime/10 blur-3xl" />
        <div className="container-x relative grid gap-10 py-20 md:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow !text-lime">{event.dateLabel} · {event.venue}</p>
            <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              The future of restaurants runs on <span className="text-brand">tech</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">{event.tagline} — where operators meet the systems that grow margin and scale.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={cta.exhibit.href} className="btn-primary">Be an Exhibitor</Link>
              <Link href={cta.register.href} className="btn-lime">{cta.register.label}</Link>
              <Link href={cta.brochure.href} className="btn-ghost">{cta.brochure.label}</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="mb-4 text-sm font-semibold text-white/70">Show opens in</p>
            <Countdown date={event.startDate} />
            <Link href={cta.register.href} className="mt-6 block text-sm font-semibold text-lime">Free trade registration →</Link>
          </div>
        </div>
      </section>

      {/* 2. Stats */}
      <StatsBar />

      {/* 3. Exhibitor pitch */}
      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">For Exhibitors</p>
            <h2 className="h2 mt-2">Your next 100 restaurant clients are in one hall.</h2>
            <p className="mt-4 text-ink/70">
              Restech brings owners and decision-makers of restaurant chains, cafés, hotels and franchise brands together — actively looking for technology to fix margin, labour and growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={cta.exhibit.href} className="btn-primary">I want to exhibit</Link>
              <Link href={cta.sponsor.href} className="btn-outline">{cta.sponsor.label}</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Owners & C-level", "Operations heads", "IT & digital", "Finance & procurement"].map((t, i) => (
              <div key={t} className={`flex aspect-[4/3] items-end rounded-2xl p-5 font-bold text-white ${["bg-navy", "bg-brand", "bg-ink", "bg-navy"][i]}`}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Segments */}
      <section className="bg-mist py-20">
        <div className="container-x">
          <SectionHead eyebrow="Show Segments" title="Everything a modern restaurant runs on" intro="Eight focused segments, from the front counter to the back office." />
          <SegmentGrid />
        </div>
      </section>

      {/* 5. What's new */}
      <section className="py-20">
        <div className="container-x">
          <SectionHead eyebrow="What's New" title="Highlights of Restech 2027" />
          <CardGrid items={highlights} />
        </div>
      </section>

      {/* 6. Why exhibit */}
      <section className="bg-mist py-20">
        <div className="container-x">
          <SectionHead eyebrow="Why Restech" title="Why leading tech brands choose Restech" />
          <CardGrid items={whyExhibit} />
        </div>
      </section>

      {/* 7. Floor plan teaser */}
      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex aspect-video items-center justify-center rounded-3xl border-2 border-dashed border-ink/15 text-sm text-ink/40">Floor plan image (TBC)</div>
          <div>
            <p className="eyebrow">Show Floor</p>
            <h2 className="h2 mt-2">A show floor built around the restaurant journey</h2>
            <p className="mt-4 text-ink/70">Zones follow the flow of a restaurant — order, kitchen, delivery, customer and back office — so visitors can find what they need fast.</p>
            <Link href="/venue" className="btn-outline mt-6">View floor plan</Link>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-ink py-20 text-white">
        <div className="container-x">
          <div className="mb-10">
            <p className="eyebrow !text-lime">Voices</p>
            <h2 className="h2 mt-2">What the industry says</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* 9. Sponsors */}
      <section className="py-20">
        <div className="container-x">
          <SectionHead center eyebrow="Partners" title="Our Sponsors" intro="Sponsorship opportunities are open." />
          <SponsorTiers />
        </div>
      </section>

      {/* 10. CTA band */}
      <CtaBand title="Be part of the first Restech" text="Limited stands available in each segment." />

      {/* 11. FAQ */}
      <section className="py-20">
        <div className="container-x">
          <SectionHead center eyebrow="FAQ" title="Frequently asked questions" />
          <Faq />
        </div>
      </section>
    </>
  );
}

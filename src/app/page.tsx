import Link from "next/link";
import {
  CardGrid,
  CountdownBanner,
  Faq,
  NewsletterBlock,
  PhotoGrid,
  QuickLinksRow,
  RegisterBanner,
  SectionHead,
  SegmentGrid,
  SocialStrip,
  SpotlightCards,
  SponsorTiers,
  SupportedBy,
  StatsBar,
  Testimonials,
  TripleCta,
} from "@/components/Sections";
import { cta, event, newAt, whatsNew, whyExhibit } from "@/lib/site";

// Homepage section order mirrors the FHA homepage structure.
export default function Home() {
  return (
    <>
      {/* 1. Hero banner — key visual, dates, venue, 3 CTAs */}
      <section className="bg-hero relative overflow-hidden text-white">
        <div className="container-x relative flex flex-col items-center py-20 text-center md:py-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-2027.webp" alt={event.fullName} className="w-full max-w-xl" />
          <p className="mt-6 text-lg md:text-xl">
            {event.dateLabel} <span className="text-brand">|</span> {event.venue}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/60">{event.theme}</p>
          <div className="mt-10"><TripleCta /></div>
        </div>
      </section>

      {/* 2. Countdown banner → registration */}
      <CountdownBanner />

      {/* 3. By the Numbers */}
      <StatsBar />

      {/* 4. Photo strip + "Your customers are at Restech" */}
      <section className="py-20">
        <div className="container-x">
          <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { t: "Restaurant & café owners", img: "/images/atmosphere-2024.webp" },
              { t: "Restaurant chains & hotels", img: "/images/visitor.webp" },
              { t: "Technology & innovation enthusiasts", img: "/images/exhibitor.webp" },
              { t: "Business matching", img: "/images/business-matching.webp" },
            ].map(({ t, img }) => (
              <div key={t} className="relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl bg-navy p-5 text-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <span className="relative font-medium">{t}</span>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="h2">Your Customers Are at {event.edition}</h2>
            <p className="mt-4 text-ink/70">
              More than 10,000 restaurant owners, chain and hotel operators and technology enthusiasts come to Restech to find the equipment, systems and partners that move their business forward.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href={cta.bookStand.href} className="btn-primary uppercase">I want to exhibit!</Link>
              <Link href={cta.sponsor.href} className="btn-outline uppercase">Let&apos;s talk sponsorship</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Segments — two groups */}
      <section className="bg-mist py-20">
        <div className="container-x">
          <SectionHead center title="Key Segments" intro="Restaurant technology and restaurant operations — every zone of the show." />
          <SegmentGrid />
        </div>
      </section>

      {/* 6. What's New — spotlight cards */}
      <section className="py-20">
        <div className="container-x">
          <SectionHead center title="What's New" />
          <SpotlightCards items={whatsNew} />
        </div>
      </section>

      {/* 7. Show floor / floor plan */}
      <section className="bg-mist py-20">
        <div className="container-x">
          <SectionHead center title="IMPACT Hall 5–6 Floor Plan" intro="Reference floor plan from Restech 2026 — the 2027 layout will be announced soon." />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/floor-plan.webp" alt="Restech 2026 floor plan (reference), IMPACT Hall 5–6" className="w-full rounded-3xl shadow-lg" loading="lazy" />
        </div>
      </section>

      {/* 8. Why Leading Brands Choose Restech — 6 cards */}
      <section className="py-20">
        <div className="container-x">
          <SectionHead center title="Why Leading Brands Choose Restech" />
          <CardGrid items={whyExhibit} />
        </div>
      </section>

      {/* 9. Exhibitor testimonial strip */}
      <section className="bg-mist py-20">
        <div className="container-x">
          <SectionHead center title="Hear From Our Exhibitors" />
          <SocialStrip />
        </div>
      </section>

      {/* 10. Voices from the Show Floor */}
      <section className="bg-ink py-20 text-white">
        <div className="container-x">
          <div className="mb-10 text-center"><h2 className="h2">Voices from the Show Floor</h2></div>
          <Testimonials />
        </div>
      </section>

      {/* 11. Sponsors by tier */}
      <section className="py-20">
        <div className="container-x">
          <SupportedBy />
          <SectionHead center title="Our Partners & Sponsors" />
          <SponsorTiers />
        </div>
      </section>

      {/* 12. Countdown banner (repeat) */}
      <CountdownBanner />

      {/* 13. Be Part of ... — 3 CTAs */}
      <section className="bg-hero py-20 text-white">
        <div className="container-x flex flex-col items-center text-center">
          <h2 className="text-4xl font-semibold md:text-5xl">Be Part of <span className="text-brand">Restech 2027</span></h2>
          <p className="mt-4 max-w-xl text-white/70">Step Into The Future — limited stands available in each zone.</p>
          <div className="mt-8"><TripleCta /></div>
        </div>
      </section>

      {/* 14. New at Restech */}
      <section className="py-20">
        <div className="container-x">
          <SectionHead center title={`New at ${event.edition}`} />
          <SpotlightCards items={newAt} />
        </div>
      </section>

      {/* 15. Event Highlights photo grid */}
      <section className="bg-mist py-20">
        <div className="container-x">
          <SectionHead center title="Restech 2024 Highlights" />
          <PhotoGrid />
          <div className="mt-8 text-center"><Link href="/media-gallery" className="btn-outline uppercase">View Snapshots</Link></div>
        </div>
      </section>

      {/* 16. FAQ */}
      <section className="py-20">
        <div className="container-x">
          <SectionHead center title="Frequently Asked Questions" />
          <Faq />
        </div>
      </section>

      {/* 17. Quick Links row */}
      <QuickLinksRow />

      {/* 18. Register Now banner */}
      <RegisterBanner />

      {/* 19. Newsletter */}
      <NewsletterBlock />

      {/* 20–21. Footer + credibility strip (Held In / Endorsed By / Supported By) live in <Footer /> */}
    </>
  );
}

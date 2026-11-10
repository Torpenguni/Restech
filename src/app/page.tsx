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
  StatsBar,
  Testimonials,
  TripleCta,
} from "@/components/Sections";
import { cta, event, newAt, whatsNew, whyExhibit } from "@/lib/site";

// Homepage section order mirrors the FHA homepage structure.
export default function Home() {
  return (
    <>
      {/* 1. Hero banner — tagline, dates, venue, 3 CTAs */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-lime/10 blur-3xl" />
        <div className="container-x relative py-24 md:py-32">
          <p className="eyebrow !text-lime">{event.tagline}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            {event.dateLabel}
            <span className="block text-brand">{event.venue}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">Where restaurant operators meet the technology that grows margin and scales their business.</p>
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
            {["Owners & C-level", "Operations heads", "IT & digital", "Finance & procurement"].map((t, i) => (
              <div key={t} className={`flex aspect-[4/3] items-end rounded-2xl p-5 font-bold text-white ${["bg-navy", "bg-brand", "bg-ink", "bg-navy"][i]}`}>{t}</div>
            ))}
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="h2">Your Customers Are at {event.edition}</h2>
            <p className="mt-4 text-ink/70">
              Restaurant owners, chain operators, franchise groups and hotel F&amp;B leaders come to Restech with one goal: to find technology that fixes margin, labour and growth.
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
          <SectionHead center title="Key Segments" intro="Twelve segments across front of house and back of house." />
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
          <SectionHead center title="A Show Floor Built for 2027" intro="Zones follow the restaurant journey — order, kitchen, delivery, guest and back office." />
          <div className="flex aspect-[21/9] items-center justify-center rounded-3xl border-2 border-dashed border-ink/15 bg-white text-sm text-ink/40">Floor plan image (TBC)</div>
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
          <SectionHead center title="Thank You To Our Sponsors" />
          <SponsorTiers />
        </div>
      </section>

      {/* 12. Countdown banner (repeat) */}
      <CountdownBanner />

      {/* 13. Be Part of ... — 3 CTAs */}
      <section className="bg-gradient-to-br from-ink via-navy to-ink py-20 text-white">
        <div className="container-x flex flex-col items-center text-center">
          <h2 className="text-4xl font-black md:text-5xl">Be Part of the <span className="text-brand">First Restech</span></h2>
          <p className="mt-4 max-w-xl text-white/70">Limited stands available in each segment.</p>
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
          <SectionHead center title="Event Highlights" />
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

import Link from "next/link";
import { credibility, cta, event, quickLinks, social } from "@/lib/site";
import NewsletterForm from "./forms/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-hero text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Follow Us */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-2027.webp" alt="Restech 2027" className="h-16 w-auto" />
          <p className="mt-3 text-xs text-white/60">Organised by {event.organiser}</p>
          <p className="mb-3 mt-5 text-xs font-bold uppercase tracking-widest text-white/50">Follow Us</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {social.map((s) => (
              <li key={s.label}><a href={s.href} className="hover:text-brand">{s.label}</a></li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-brand">{event.hashtags.join(" ")}</p>
        </div>
        {/* Quick Links */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-brand">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        {/* Register Now */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">{event.edition}</p>
          <p className="text-sm text-white/70">{event.dateLabel} · {event.hours}<br />{event.venue}</p>
          <Link href={cta.register.href} className="btn-primary mt-5 uppercase">{cta.register.label}</Link>
        </div>
        {/* Newsletter */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">Join Our Newsletter</p>
          <p className="mb-3 text-sm text-white/60">Show updates, speaker news and early-bird offers.</p>
          <NewsletterForm />
        </div>
      </div>
      {/* Held In / Endorsed By / Supported By / certification */}
      <div className="border-t border-white/10">
        <div className="container-x grid gap-6 py-8 md:grid-cols-3">
          {credibility.map((c) => (
            <div key={c.label}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{c.label}</p>
              <div className="mt-2 flex h-12 items-center justify-center rounded-lg border border-dashed border-white/20 text-xs text-white/40">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 md:flex-row">
          <span>© {new Date().getFullYear()} {event.organiser} All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/sitemap" className="hover:text-white">Site Map</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

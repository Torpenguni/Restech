import Link from "next/link";
import { cta, event, footerLinks, social } from "@/lib/site";
import NewsletterForm from "./forms/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="text-2xl font-black">RES<span className="text-brand">TECH</span></p>
          <p className="mt-3 text-sm text-white/60">{event.tagline}</p>
          <p className="mt-1 text-sm text-white/60">{event.dateLabel} · {event.venue}</p>
          <Link href={cta.register.href} className="btn-primary mt-5">{cta.register.label}</Link>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-lime">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">Follow Us</p>
          <ul className="space-y-2 text-sm">
            {social.map((s) => (
              <li key={s.label}><a href={s.href} className="hover:text-lime">{s.label}</a></li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-lime">{event.hashtag}</p>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">Join Our Newsletter</p>
          <p className="mb-3 text-sm text-white/60">Show updates, speaker news and early-bird offers.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
          <span>© {new Date().getFullYear()} Restech. All rights reserved.</span>
          <span>Held in · Supported by · Endorsed by — partner logos TBC</span>
        </div>
      </div>
    </footer>
  );
}

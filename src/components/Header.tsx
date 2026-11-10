"use client";

import Link from "next/link";
import { useState } from "react";
import { cta, event, nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const close = () => {
    setOpen(null);
    setMobile(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
      {/* Utility bar */}
      <div className="hidden bg-navy text-xs md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <span className="text-white/70">
            {event.dateLabel} · {event.venue}
          </span>
          <div className="flex items-center gap-5">
            <Link href={cta.exhibit.href} className="hover:text-lime">Be an Exhibitor</Link>
            <Link href={cta.brochure.href} className="hover:text-lime">Brochure</Link>
          </div>
        </div>
      </div>

      <div className="container-x flex h-16 items-center justify-between gap-6" onMouseLeave={() => setOpen(null)}>
        <Link href="/" className="text-xl font-black tracking-tight" onClick={close}>
          RES<span className="text-brand">TECH</span>
          <span className="ml-1 text-xs font-semibold text-lime">2027</span>
        </Link>

        <nav className="hidden h-full items-center lg:flex">
          {nav.map((item, i) => (
            <div key={item.label} className="h-full" onMouseEnter={() => setOpen(i)}>
              <button
                className={`flex h-full items-center px-4 text-sm font-semibold ${open === i ? "text-lime" : ""}`}
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.label} <span className="ml-1 text-[10px]">▾</span>
              </button>
              {open === i && (
                <div className="absolute inset-x-0 top-full border-t border-white/10 bg-ink shadow-2xl">
                  <div className="container-x grid grid-cols-4 gap-8 py-8">
                    {item.groups.map((g) => (
                      <div key={g.title}>
                        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">{g.title}</p>
                        <ul className="space-y-2">
                          {g.links.map((l) => (
                            <li key={l.href + l.label}>
                              <Link href={l.href} onClick={close} className="text-sm hover:text-lime">
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-start-4 flex flex-col gap-3 rounded-2xl bg-navy p-5">
                      {item.actions.map((a, j) => (
                        <Link key={a.label} href={a.href} onClick={close} className={j === 0 ? "btn-primary" : "btn-ghost"}>
                          {a.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={cta.exhibit.href} className="btn-ghost !py-2">{cta.exhibit.label}</Link>
          <Link href={cta.register.href} className="btn-primary !py-2">{cta.register.label}</Link>
        </div>

        <button className="lg:hidden" aria-label="Menu" onClick={() => setMobile(!mobile)}>
          <span className="text-2xl">{mobile ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobile && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-white/10 lg:hidden">
          <div className="container-x space-y-2 py-4">
            {nav.map((item) => (
              <details key={item.label} className="border-b border-white/10 py-2">
                <summary className="cursor-pointer font-semibold">{item.label}</summary>
                {item.groups.map((g) => (
                  <div key={g.title} className="mt-3 pl-3">
                    <p className="text-xs uppercase tracking-widest text-white/50">{g.title}</p>
                    {g.links.map((l) => (
                      <Link key={l.href + l.label} href={l.href} onClick={close} className="block py-1.5 text-sm">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </details>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <Link href={cta.exhibit.href} onClick={close} className="btn-ghost">{cta.exhibit.label}</Link>
              <Link href={cta.register.href} onClick={close} className="btn-primary">{cta.register.label}</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

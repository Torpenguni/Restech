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
    <header className="sticky top-0 z-50 bg-ink/95 text-white shadow-lg backdrop-blur">
      {/* Utility bar — international context: date, city, trade-only, travel help, language */}
      <div className="hidden border-b border-white/10 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <p>
            <span className="text-saffron">●</span>&nbsp; {event.dateLabel} &nbsp;·&nbsp; {event.city}, Thailand &nbsp;·&nbsp; International trade event
          </p>
          <div className="flex items-center gap-5">
            <Link href="/plan-your-visit" className="hover:text-white">Plan your trip</Link>
            <Link href="/visa-support" className="hover:text-white">Visa support</Link>
            <span className="flex items-center gap-2">
              <span className="text-white">EN</span>
              <span className="text-white/30">|</span>
              <Link href="/th" className="hover:text-white">ไทย</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="container-x flex h-16 items-center md:h-20 justify-between gap-6" onMouseLeave={() => setOpen(null)}>
        <Link href="/" className="shrink-0" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-2027.webp" alt="Restech 2027 — Restaurant Technology Expo" className="h-10 w-auto md:h-12" />
        </Link>

        {/* Mega menu — 5 top-level items */}
        <nav className="hidden h-full items-center xl:flex">
          {nav.map((item, i) => (
            <div key={item.label} className="h-full" onMouseEnter={() => setOpen(i)}>
              <button
                className={`flex h-full items-center px-3 text-[13px] font-semibold uppercase tracking-[0.12em] transition ${open === i ? "text-saffron" : "text-white/85 hover:text-white"}`}
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.label} <span className="ml-1 text-[10px]">▾</span>
              </button>
              {open === i && (
                <div className="absolute inset-x-0 top-full border-t-2 border-brand bg-paper text-ink shadow-2xl">
                  <div className="container-x grid grid-cols-4 gap-8 py-8">
                    {item.groups.map((g) => (
                      <div key={g.title}>
                        {g.href ? (
                          <Link href={g.href} onClick={close} className="mb-3 block border-b border-ink/10 pb-2 text-sm font-semibold uppercase tracking-wide text-brand hover:underline">
                            {g.title}
                          </Link>
                        ) : (
                          <p className="mb-3 border-b border-ink/10 pb-2 text-sm font-semibold uppercase tracking-wide text-brand">{g.title}</p>
                        )}
                        <ul className="space-y-2">
                          {g.links.map((l) => (
                            <li key={l.href + l.label}>
                              <Link href={l.href} onClick={close} className="text-sm text-ink/80 hover:text-brand">
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-start-4 flex flex-col gap-3 rounded-2xl bg-mist p-5">
                      {item.actions.map((a, j) => (
                        <Link key={a.label} href={a.href} onClick={close} className={j === 0 ? "btn-primary" : "btn-outline bg-white"}>
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

        {/* Utility buttons: Register Now · Be an Exhibitor · language */}
        <div className="hidden items-center gap-2 xl:flex">
          <Link href={cta.register.href} className="btn-primary !px-5 !py-2.5 uppercase">{cta.register.label}</Link>
          <Link href={cta.exhibit.href} className="btn-ghost !px-5 !py-2.5 uppercase">{cta.exhibit.label}</Link>
        </div>

        <button className="-mr-2 p-2 xl:hidden" aria-label="Menu" aria-expanded={mobile} onClick={() => setMobile(!mobile)}>
          <span className="text-2xl">{mobile ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobile && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-white/10 xl:hidden">
          <div className="container-x space-y-2 py-4">
            {nav.map((item) => (
              <details key={item.label} className="border-b border-white/10 py-2">
                <summary className="cursor-pointer py-1 font-bold uppercase">{item.label}</summary>
                {item.groups.map((g) => (
                  <div key={g.title} className="mt-3 pl-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-saffron">{g.title}</p>
                    {g.links.map((l) => (
                      <Link key={l.href + l.label} href={l.href} onClick={close} className="block py-2.5 text-[15px]">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </details>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-3">
              <Link href={cta.register.href} onClick={close} className="btn-primary">{cta.register.label}</Link>
              <Link href={cta.exhibit.href} onClick={close} className="btn-ghost">{cta.exhibit.label}</Link>
            </div>
            <Link href="/th" onClick={close} className="block pt-2 text-center text-sm">ไทย</Link>
          </div>
        </div>
      )}
    </header>
  );
}

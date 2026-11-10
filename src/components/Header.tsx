"use client";

import Link from "next/link";
import { useState } from "react";
import { cta, nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const close = () => {
    setOpen(null);
    setMobile(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-ink text-white shadow-lg">
      <div className="container-x flex h-20 items-center justify-between gap-6" onMouseLeave={() => setOpen(null)}>
        <Link href="/" className="shrink-0" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.webp" alt="Restech 2026 — Restaurant Technology Expo" className="h-12 w-auto" />
        </Link>

        {/* Mega menu — 5 top-level items */}
        <nav className="hidden h-full items-center xl:flex">
          {nav.map((item, i) => (
            <div key={item.label} className="h-full" onMouseEnter={() => setOpen(i)}>
              <button
                className={`flex h-full items-center px-3 text-sm font-bold uppercase tracking-wide ${open === i ? "text-brand" : ""}`}
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.label} <span className="ml-1 text-[10px]">▾</span>
              </button>
              {open === i && (
                <div className="absolute inset-x-0 top-full border-t-4 border-brand bg-white text-ink shadow-2xl">
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
          <Link href={cta.exhibit.href} className="btn-blue !px-5 !py-2.5 uppercase">{cta.exhibit.label}</Link>
          <Link href="/th" className="px-2 text-sm font-bold hover:text-brand">ไทย</Link>
        </div>

        <button className="xl:hidden" aria-label="Menu" onClick={() => setMobile(!mobile)}>
          <span className="text-2xl">{mobile ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobile && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-white/10 xl:hidden">
          <div className="container-x space-y-2 py-4">
            {nav.map((item) => (
              <details key={item.label} className="border-b border-white/10 py-2">
                <summary className="cursor-pointer font-bold uppercase">{item.label}</summary>
                {item.groups.map((g) => (
                  <div key={g.title} className="mt-3 pl-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand">{g.title}</p>
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
              <Link href={cta.register.href} onClick={close} className="btn-primary">{cta.register.label}</Link>
              <Link href={cta.exhibit.href} onClick={close} className="btn-blue">{cta.exhibit.label}</Link>
            </div>
            <Link href="/th" onClick={close} className="block pt-2 text-center text-sm">ไทย</Link>
          </div>
        </div>
      )}
    </header>
  );
}

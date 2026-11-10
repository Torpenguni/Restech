"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cta, event } from "@/lib/site";

/** Registration popup (shown once per session after a short delay), as on FHA. */
export default function RegisterPopup() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("restech-popup")) return;
    const t = setTimeout(() => setShow(true), 6000);
    return () => clearTimeout(t);
  }, []);
  const dismiss = () => {
    sessionStorage.setItem("restech-popup", "1");
    setShow(false);
  };
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-5" onClick={dismiss}>
      <div className="relative w-full max-w-md rounded-3xl bg-ink p-8 text-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={dismiss} aria-label="Close" className="absolute right-4 top-3 text-2xl text-white/60 hover:text-white">×</button>
        <p className="eyebrow !text-lime">{event.dateLabel}</p>
        <h2 className="mt-2 text-3xl font-black">Get your free trade pass to {event.edition}</h2>
        <p className="mt-3 text-white/70">{event.venue}</p>
        <Link href={cta.register.href} onClick={dismiss} className="btn-primary mt-6 w-full uppercase">{cta.register.label}</Link>
      </div>
    </div>
  );
}

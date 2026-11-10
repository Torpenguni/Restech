"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cta } from "@/lib/site";

const HIDE_ON = ["/visitor-registration", "/book-a-stand", "/join-mailing-list"];

/** Sticky bottom CTA bar on phones — keeps the two conversion actions one tap away. */
export default function MobileCtaBar() {
  const path = usePathname();
  if (HIDE_ON.includes(path)) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-ink/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <Link href={cta.register.href} className="btn-primary px-2 uppercase">{cta.register.label}</Link>
      <Link href={cta.bookStand.href} className="btn-blue px-2 uppercase">{cta.bookStand.label}</Link>
    </div>
  );
}

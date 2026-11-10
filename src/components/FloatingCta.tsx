import Link from "next/link";
import { cta } from "@/lib/site";

/** Floating CTA pill — fixed at the bottom of every page, on every screen size. */
export default function FloatingCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:pb-6">
      <div className="pointer-events-auto grid w-full max-w-xl grid-cols-2 gap-2 rounded-[1.75rem] border border-ink/10 bg-white/95 p-2 shadow-[0_12px_40px_-8px_rgb(11_15_36/0.35)] backdrop-blur md:gap-3 md:p-2.5">
        <Link href={cta.register.href} className="flex items-center justify-center rounded-[1.25rem] bg-brand px-3 py-3 text-center text-sm font-semibold leading-tight text-white transition hover:bg-brand-dark md:py-4 md:text-base">
          Register as Visitor
        </Link>
        <Link href={cta.businessMatching.href} className="flex items-center justify-center rounded-[1.25rem] border border-brand/25 bg-white px-3 py-3 text-center text-sm font-semibold leading-tight text-brand transition hover:border-brand hover:bg-brand/5 md:py-4 md:text-base">
          Apply for Business Matching
        </Link>
      </div>
    </div>
  );
}

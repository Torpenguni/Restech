import Link from "next/link";
import { segmentGroups } from "@/lib/site";

// Line icons per show sector (paths from Lucide, ISC licence)
const paths: Record<string, React.ReactNode> = {
  "management-technology": <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  marketing: <><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></>,
  "financial-systems": <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></>,
  "kitchen-equipment": <><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" /><path d="M6 17h12" /></>,
  suppliers: <><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></>,
  franchise: <><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" /></>,
  "future-restaurant-models": <><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4M22 5h-4M4 17v2M5 18H3" /></>,
};

/** THAIFEX-style sector icons: coloured tile + short label; blue = technology, orange = operations. */
export default function SegmentIcons() {
  return (
    <div className="space-y-5 md:space-y-6">
      {segmentGroups.map((g, gi) => (
        <div key={g.key}>
          <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.2em] ${gi === 0 ? "text-electric" : "text-brand"}`}>{g.title}</p>
          <ul className="grid grid-cols-4 gap-x-2 gap-y-4 sm:gap-x-4">
            {g.items.map((s) => (
              <li key={s.slug}>
                <Link href={`/segments/${s.slug}`} className="group flex flex-col items-center text-center">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md transition group-hover:-translate-y-1 md:h-20 md:w-20 ${gi === 0 ? "bg-electric" : "bg-brand"}`}>
                    <svg viewBox="0 0 24 24" className="h-7 w-7 md:h-9 md:w-9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {paths[s.slug]}
                    </svg>
                  </span>
                  <span className="mt-2 text-[11px] font-semibold leading-tight text-ink/80 group-hover:text-brand md:text-sm">{s.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

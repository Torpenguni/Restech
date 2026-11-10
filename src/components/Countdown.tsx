"use client";

import { useEffect, useState } from "react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    Days: Math.floor(ms / 86_400_000),
    Hours: Math.floor((ms / 3_600_000) % 24),
    Minutes: Math.floor((ms / 60_000) % 60),
    Seconds: Math.floor((ms / 1000) % 60),
  };
}

/**
 * size="sm": compact glass tiles (on dark backgrounds).
 * size="lg": trade-show style numerals with colon separators (on light backgrounds).
 */
export default function Countdown({ date, size = "sm" }: { date: string; size?: "sm" | "lg" }) {
  const target = new Date(date).getTime();
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);
  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (t && Date.now() > target)
    return <p className="rounded-xl bg-white/10 px-5 py-3 text-sm font-medium">This edition has ended — see you at the next Restech!</p>;

  const units = Object.entries(t ?? { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 });

  if (size === "lg")
    return (
      <div className="flex items-start justify-center" role="timer" aria-live="off">
        {units.map(([k, v], i) => (
          <div key={k} className="flex items-start">
            {i > 0 && <span className="px-2 pt-1 text-2xl font-light text-ink/25 sm:px-5 md:text-3xl">:</span>}
            <div className="min-w-[3.5rem] text-center md:min-w-[5rem]">
              <div className="text-4xl font-semibold leading-none tabular-nums text-brand md:text-5xl">{t ? String(v).padStart(2, "0") : "--"}</div>
              <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink/60 md:text-xs">{k}</div>
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <div className="flex gap-2 sm:gap-3">
      {units.map(([k, v]) => (
        <div key={k} className="min-w-[4.25rem] rounded-xl bg-white/10 px-2 py-2 text-center backdrop-blur sm:min-w-16 sm:px-3">
          <div className="text-2xl font-semibold tabular-nums">{t ? String(v).padStart(2, "0") : "--"}</div>
          <div className="text-[10px] uppercase tracking-widest text-white/60">{k}</div>
        </div>
      ))}
    </div>
  );
}

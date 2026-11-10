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

export default function Countdown({ date }: { date: string }) {
  const target = new Date(date).getTime();
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);
  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="flex gap-3">
      {Object.entries(t ?? { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 }).map(([k, v]) => (
        <div key={k} className="min-w-16 rounded-xl bg-white/10 px-3 py-2 text-center backdrop-blur">
          <div className="text-2xl font-extrabold tabular-nums">{t ? String(v).padStart(2, "0") : "--"}</div>
          <div className="text-[10px] uppercase tracking-widest text-white/60">{k}</div>
        </div>
      ))}
    </div>
  );
}

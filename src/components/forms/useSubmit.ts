"use client";

import { useState } from "react";

type Status = { state: "idle" | "loading" | "success" | "error"; message?: string };

/** Converts a form into JSON (multi-value fields -> arrays, "consent_marketing" -> boolean, + UTM params) and POSTs it. */
export function useSubmit(endpoint: string, arrayFields: string[] = []) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body: Record<string, unknown> = {};
    for (const key of new Set(fd.keys())) {
      body[key] = arrayFields.includes(key) ? fd.getAll(key) : fd.get(key);
    }
    body.consent_marketing = fd.get("consent_marketing") === "on";
    const params = new URLSearchParams(window.location.search);
    for (const k of ["utm_source", "utm_medium", "utm_campaign"]) {
      const v = params.get(k);
      if (v) body[k] = v;
    }

    setStatus({ state: "loading" });
    try {
      const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) setStatus({ state: "success" });
      else setStatus({ state: "error", message: json.error ?? "Something went wrong." });
    } catch {
      setStatus({ state: "error", message: "Network error. Please try again." });
    }
  }

  return { status, onSubmit };
}

import "server-only";
import { NextResponse } from "next/server";
import { getSupabase } from "./supabase";
import { validate, type Spec } from "./validate";

/** Shared handler: parse JSON, honeypot check, validate, insert into a Supabase table. */
export async function handleInsert(req: Request, table: string, spec: Spec, extra?: (body: Record<string, unknown>) => Record<string, unknown>, opts: { duplicateOk?: boolean } = {}) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  // Honeypot: bots fill hidden fields. Pretend success.
  if (typeof body.website_url === "string" && body.website_url) return NextResponse.json({ ok: true });

  const { values, errors } = validate(body, spec);
  if (errors.length) return NextResponse.json({ ok: false, error: errors.join(", ") }, { status: 422 });

  const supabase = getSupabase();
  if (!supabase) {
    console.warn(`[${table}] Supabase not configured — submission not stored`, values);
    return NextResponse.json({ ok: false, error: "Registration is not available yet. Please try again later." }, { status: 503 });
  }

  const row = { ...values, ...(extra?.(body) ?? {}) };
  const { error } = await supabase.from(table).insert(row);
  if (error) {
    // 23505 = unique violation (e.g. already registered)
    if (error.code === "23505" && opts.duplicateOk) return NextResponse.json({ ok: true });
    if (error.code === "23505") return NextResponse.json({ ok: false, error: "This email is already registered." }, { status: 409 });
    console.error(`[${table}] insert failed`, error);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}

export function consentFields(body: Record<string, unknown>) {
  const marketing = body.consent_marketing === true;
  return { consent_marketing: marketing, consent_at: marketing ? new Date().toISOString() : null };
}

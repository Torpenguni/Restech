export type Spec = Record<string, { required?: boolean; max?: number; email?: boolean; oneOf?: readonly string[] }>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Minimal server-side validation. Returns cleaned values or a list of errors. */
export function validate(input: Record<string, unknown>, spec: Spec) {
  const out: Record<string, string | null> = {};
  const errors: string[] = [];
  for (const [key, rule] of Object.entries(spec)) {
    const raw = input[key];
    const v = typeof raw === "string" ? raw.trim() : "";
    if (!v) {
      if (rule.required) errors.push(`${key} is required`);
      out[key] = null;
      continue;
    }
    if (v.length > (rule.max ?? 500)) errors.push(`${key} is too long`);
    if (rule.email && !EMAIL.test(v)) errors.push(`${key} is not a valid email`);
    if (rule.oneOf && !rule.oneOf.includes(v)) errors.push(`${key} is invalid`);
    out[key] = v;
  }
  return { values: out, errors };
}

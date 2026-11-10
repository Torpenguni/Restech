export function Input({ name, label, type = "text", required = true, placeholder }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="label">{label}{required && <span className="text-brand"> *</span>}</span>
      <input className="field" name={name} type={type} required={required} placeholder={placeholder} />
    </label>
  );
}

export function Select({ name, label, options, required = true }: { name: string; label: string; options: readonly string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="label">{label}{required && <span className="text-brand"> *</span>}</span>
      <select className="field" name={name} required={required} defaultValue="">
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

/** Hidden honeypot field — real users never see or fill it. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px]">
      <input name="website_url" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function Consent() {
  return (
    <div className="space-y-3 text-sm">
      <label className="flex items-start gap-3">
        <input type="checkbox" name="consent_marketing" className="mt-1 accent-brand" />
        <span>I agree to receive event news and offers from Restech and its partners. I can unsubscribe at any time.</span>
      </label>
      <p className="text-xs text-ink/60">
        By submitting, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a>. Your data is processed in line with Thailand&apos;s PDPA.
      </p>
    </div>
  );
}

export function Submit({ loading, label }: { loading: boolean; label: string }) {
  return (
    <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60 md:w-auto">
      {loading ? "Submitting…" : label}
    </button>
  );
}

export function ErrorNote({ message }: { message?: string }) {
  return message ? <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{message}</p> : null;
}

export function Success({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-electric/10 p-8 text-center">
      <div className="text-4xl">✓</div>
      <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
      <div className="mt-2 text-ink/70">{children}</div>
    </div>
  );
}

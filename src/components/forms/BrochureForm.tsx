"use client";

import { ErrorNote, Honeypot, Input, Submit, Success } from "./Fields";
import { useSubmit } from "./useSubmit";

// TODO: upload the real brochure to /public/restech-brochure.pdf
const BROCHURE_URL = "/restech-brochure.pdf";

export default function BrochureForm() {
  const { status, onSubmit } = useSubmit("/api/subscribe");
  if (status.state === "success")
    return (
      <Success title="Your brochure is ready">
        <a href={BROCHURE_URL} className="btn-primary mt-4" download>Download PDF</a>
      </Success>
    );

  return (
    <form onSubmit={onSubmit} className="relative space-y-5">
      <Honeypot />
      <input type="hidden" name="source" value="brochure" />
      <Input name="name" label="Full name" />
      <Input name="email" label="Business email" type="email" />
      <Input name="company" label="Company" />
      <p className="text-xs text-ink/60">
        By downloading, you agree to receive Restech updates. See our <a href="/privacy" className="underline">Privacy Policy</a>.
      </p>
      <ErrorNote message={status.state === "error" ? status.message : undefined} />
      <Submit loading={status.state === "loading"} label="Get the brochure" />
    </form>
  );
}

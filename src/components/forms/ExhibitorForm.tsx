"use client";

import { participation, segmentNames, standSizes } from "@/lib/options";
import { Consent, ErrorNote, Honeypot, Input, Select, Submit, Success } from "./Fields";
import { useSubmit } from "./useSubmit";

export default function ExhibitorForm() {
  const { status, onSubmit } = useSubmit("/api/exhibitor-lead");
  if (status.state === "success")
    return (
      <Success title="Thank you!">
        Our sales team will contact you within 2 working days with floor plan, packages and pricing.
      </Success>
    );

  return (
    <form onSubmit={onSubmit} className="relative space-y-5">
      <Honeypot />
      <div className="grid gap-5 md:grid-cols-2">
        <Input name="first_name" label="First name" />
        <Input name="last_name" label="Last name" />
        <Input name="email" label="Business email" type="email" />
        <Input name="email_confirm" label="Confirm business email" type="email" />
        <Input name="phone" label="Phone" type="tel" />
        <Input name="company" label="Company" />
        <Input name="job_title" label="Job title" />
        <Input name="website" label="Company website" type="url" required={false} placeholder="https://" />
        <Input name="country" label="Country" />
        <Select name="segment" label="Main product segment" options={segmentNames} />
        <Select name="stand_size" label="Preferred stand size" options={standSizes} required={false} />
      </div>
      <fieldset>
        <legend className="label">Interested in <span className="text-brand">*</span></legend>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {participation.map((p, i) => (
            <label key={p} className="flex items-center gap-3 py-1.5 text-sm">
              <input type="radio" name="participation" value={p} required={i === 0} className="h-5 w-5 shrink-0 accent-brand" /> {p}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block">
        <span className="label">Products / solutions you want to showcase <span className="text-brand">*</span></span>
        <textarea name="products" required rows={4} className="field" />
      </label>
      <Consent />
      <ErrorNote message={status.state === "error" ? status.message : undefined} />
      <Submit loading={status.state === "loading"} label="Submit enquiry" />
    </form>
  );
}

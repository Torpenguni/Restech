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
        <Input name="phone" label="Phone" type="tel" />
        <Input name="company" label="Company" />
        <Input name="job_title" label="Job title" />
        <Input name="website" label="Company website" type="url" required={false} placeholder="https://" />
        <Input name="country" label="Country" />
        <Select name="segment" label="Main product segment" options={segmentNames} />
        <Select name="participation" label="Interested in" options={participation} />
        <Select name="stand_size" label="Preferred stand size" options={standSizes} required={false} />
      </div>
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

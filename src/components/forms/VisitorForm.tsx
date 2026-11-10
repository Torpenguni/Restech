"use client";

import { businessTypes, jobFunctions, outletCounts, segmentNames } from "@/lib/options";
import { Consent, ErrorNote, Honeypot, Input, Select, Submit, Success } from "./Fields";
import { useSubmit } from "./useSubmit";

export default function VisitorForm() {
  const { status, onSubmit } = useSubmit("/api/register", ["interests"]);
  if (status.state === "success")
    return (
      <Success title="You're registered!">
        Your registration is confirmed. Your QR badge will be emailed to you before the show.
      </Success>
    );

  return (
    <form onSubmit={onSubmit} className="relative space-y-5">
      <Honeypot />
      <div className="grid gap-5 md:grid-cols-2">
        <Input name="first_name" label="First name" />
        <Input name="last_name" label="Last name" />
        <Input name="email" label="Business email" type="email" />
        <Input name="phone" label="Mobile phone" type="tel" />
        <Input name="company" label="Company / Restaurant" />
        <Input name="job_title" label="Job title" />
        <Select name="job_function" label="Job function" options={jobFunctions} />
        <Select name="business_type" label="Business type" options={businessTypes} />
        <Select name="outlet_count" label="Number of outlets" options={outletCounts} required={false} />
        <Input name="country" label="Country" />
      </div>
      <fieldset>
        <legend className="label">What are you looking for? (select all that apply)</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {segmentNames.map((s) => (
            <label key={s} className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="interests" value={s} className="accent-brand" /> {s}
            </label>
          ))}
        </div>
      </fieldset>
      <Consent />
      <ErrorNote message={status.state === "error" ? status.message : undefined} />
      <Submit loading={status.state === "loading"} label="Register for free" />
    </form>
  );
}

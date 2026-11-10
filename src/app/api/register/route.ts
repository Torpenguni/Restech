import { consentFields, handleInsert } from "@/lib/api";
import { businessTypes, jobFunctions, outletCounts } from "@/lib/options";

export async function POST(req: Request) {
  return handleInsert(
    req,
    "visitors",
    {
      first_name: { required: true, max: 100 },
      last_name: { required: true, max: 100 },
      email: { required: true, email: true, max: 200 },
      phone: { required: true, max: 40 },
      company: { required: true, max: 200 },
      job_title: { required: true, max: 120 },
      job_function: { required: true, oneOf: jobFunctions },
      business_type: { required: true, oneOf: businessTypes },
      outlet_count: { oneOf: outletCounts },
      country: { required: true, max: 80 },
      utm_source: { max: 120 },
      utm_medium: { max: 120 },
      utm_campaign: { max: 120 },
    },
    (body) => ({
      interests: Array.isArray(body.interests) ? body.interests.filter((x): x is string => typeof x === "string").slice(0, 20) : [],
      ...consentFields(body),
    }),
  );
}

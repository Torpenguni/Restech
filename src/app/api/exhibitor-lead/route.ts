import { consentFields, handleInsert } from "@/lib/api";
import { participation, segmentNames, standSizes } from "@/lib/options";

export async function POST(req: Request) {
  return handleInsert(
    req,
    "exhibitor_leads",
    {
      first_name: { required: true, max: 100 },
      last_name: { required: true, max: 100 },
      email: { required: true, email: true, max: 200 },
      phone: { required: true, max: 40 },
      company: { required: true, max: 200 },
      job_title: { required: true, max: 120 },
      website: { max: 200 },
      country: { required: true, max: 80 },
      segment: { required: true, oneOf: segmentNames },
      participation: { required: true, oneOf: participation },
      stand_size: { oneOf: standSizes },
      products: { required: true, max: 2000 },
      utm_source: { max: 120 },
      utm_medium: { max: 120 },
      utm_campaign: { max: 120 },
    },
    consentFields,
  );
}

import { handleInsert } from "@/lib/api";

export async function POST(req: Request) {
  return handleInsert(
    req,
    "subscribers",
    {
      email: { required: true, email: true, max: 200 },
      name: { max: 200 },
      company: { max: 200 },
      source: { required: true, oneOf: ["newsletter", "brochure"] as const },
    },
    () => ({ consent_marketing: true, consent_at: new Date().toISOString() }),
    { duplicateOk: true },
  );
}

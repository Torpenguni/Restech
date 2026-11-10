# Restech — Event Website

Next.js (App Router) + Tailwind CSS v4 + Supabase.

The information architecture follows a standard trade-show pattern (5-section mega menu,
dual Register / Book-a-Stand CTAs, gated brochure). All copy, branding and design are original.

## Quick start
```bash
npm install
cp .env.example .env.local   # fill in Supabase URL + service role key
npm run dev
```

## Where to edit
| What | File |
|---|---|
| Event name, dates, venue, stats, menu, segments, FAQ | `src/lib/site.ts` |
| Secondary info pages (about, sponsorship, visa…) | `src/lib/pages.ts` |
| Form dropdown options | `src/lib/options.ts` |
| Homepage | `src/app/page.tsx` |
| Brand colours | `src/app/globals.css` (`@theme`) |

Search the code for `TODO` to find placeholders (dates, venue, stats, testimonials, sponsors, brochure PDF).

## Registration → Supabase
| Form | Route | API | Table |
|---|---|---|---|
| Visitor registration | `/register` | `POST /api/register` | `visitors` |
| Exhibitor enquiry | `/book-a-stand` | `POST /api/exhibitor-lead` | `exhibitor_leads` |
| Brochure download / newsletter | `/brochure`, footer | `POST /api/subscribe` | `subscribers` |

1. Run `supabase/migrations/0001_registrations.sql` in the Supabase SQL editor (or `supabase db push`).
2. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (server-side only).

Security: inserts happen only on the server with the service-role key. RLS is enabled with no
public policies, so the public anon key cannot read or write any registration data.
Spam: a honeypot field is included; add Cloudflare Turnstile before launch.

## Roadmap
- [ ] Confirmation email + QR badge (Resend) for visitors
- [ ] Sales notification on new exhibitor lead (DB webhook → email/LINE)
- [ ] Staff admin: lists, CSV export, check-in scanner (Supabase Auth)
- [ ] Thai language version
- [ ] Paid tickets (Omise) if required

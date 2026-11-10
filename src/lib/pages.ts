// Content for secondary pages, rendered by app/[slug]/page.tsx.
// Slugs mirror the FHA URL pattern. Key conversion pages have their own routes.

export type InfoPage = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body: string }[];
  /** Optional child cards (e.g. a "Conferences" landing listing each conference). */
  children?: { title: string; desc: string; href: string }[];
  cta?: "register" | "exhibit" | "both";
};

const p = (eyebrow: string, title: string, intro: string, sections: InfoPage["sections"], extra: Partial<InfoPage> = {}): InfoPage => ({
  eyebrow,
  title,
  intro,
  sections,
  ...extra,
});

export const infoPages: Record<string, InfoPage> = {
  // The Event — Overview
  "about-restech": p("The Event", "About Restech", "Restech – Restaurant Technology Expo 2027: Step Into The Future. A technology and management exhibition for restaurant businesses.", [
    { heading: "Date & venue", body: "27–29 August 2027, 09:30–19:00, IMPACT Muang Thong Thani, Exhibition Hall 5–6." },
    { heading: "Who exhibits", body: "Restaurant technology · Kitchen equipment · IT marketing technology · Services and suppliers for restaurants · Finance and financial technology · Franchise businesses." },
    { heading: "Who visits", body: "More than 10,000 visitors: restaurant and café owners, restaurant chains and hotel businesses, technology and innovation enthusiasts, and general attendees." },
    { heading: "Organiser", body: "Penguin X Co., Ltd. — 8/299, 8/300 Room 205, L1 (Tops side), The Lighthouse Building, Charoen Nakhon Rd, Khlong Ton Sai, Khlong San, Bangkok 10600." },
  ], { cta: "both" }),
  "safe-events": p("The Event", "Safe Events", "Our commitment to a safe and secure show for every participant.", [
    { heading: "Health & safety", body: "TODO: venue safety, first aid and emergency procedures." },
    { heading: "Code of conduct", body: "TODO: participant code of conduct." },
  ]),
  sustainability: p("The Event", "Sustainability", "Running a responsible event — and showcasing technology that reduces food waste and energy use.", [
    { heading: "On the show floor", body: "TODO: waste, materials and energy commitments." },
    { heading: "Featured solutions", body: "Food-waste tracking, energy monitoring and sustainable packaging technologies." },
  ]),

  // The Event — Show Information
  "exhibitor-list": p("Show Information", "Exhibitor List", "The exhibitor directory will be published as stands are confirmed.", [
    { heading: "Coming soon", body: "Want to be on this list? Book a stand today." },
  ], { cta: "exhibit" }),
  sponsors: p("Show Information", "Sponsors", "The partners making Restech possible.", [
    { heading: "Sponsor line-up", body: "Sponsors will be announced soon. Packages are available now." },
  ], { cta: "exhibit" }),
  "supporting-organisations": p("Show Information", "Supporting Organisations", "Associations and government bodies supporting Restech.", [
    { heading: "Partners", body: "TODO: list associations and agencies." },
  ]),
  "media-and-knowledge-partners": p("Show Information", "Media & Knowledge Partners", "Media and knowledge partners amplifying Restech across the region.", [
    { heading: "Become a partner", body: "Contact our marketing team to discuss media or knowledge partnership." },
  ]),

  // Event Highlights — Spotlight
  "restaurant-of-the-future": p("Spotlight", "Restaurant of the Future", "Future restaurant concepts that show where the industry is heading.", [
    { heading: "What you'll see", body: "Launch of future restaurant concepts integrating the latest kitchen equipment, management technology and customer experience." },
  ], { cta: "both" }),
  "business-matching": p("Spotlight", "Business Matching", "Pre-arranged meetings between restaurant owners and the right suppliers.", [
    { heading: "How it works", body: "Register as a visitor, tell us what you are looking for, and we match you with relevant exhibitors before the show." },
  ], { cta: "both" }),
  "franchise-zone": p("Spotlight", "Franchise Zone", "Franchise brands and expansion opportunities for investors and operators.", [
    { heading: "Who should visit", body: "Investors and entrepreneurs looking for a restaurant franchise, and brands looking for franchisees." },
  ], { cta: "both" }),
  "event-highlight": p("Spotlight", "Restech 2027 Event Highlight", "Returning with the biggest event for restaurant owners — Restech – Restaurant Technology Expo 2027: Step Into The Future.", [
    { heading: "Key milestones", body: "Launch of Future Restaurant Concepts · Spotlight on Industry Leaders · Introduction of Innovative Technologies · Business Matching Opportunities · Focus on Sustainability · Community Engagement Activities." },
  ], { cta: "both" }),

  // Event Highlights — Conferences
  conferences: p("Event Highlights", "Conferences", "Two stages of sessions on restaurant technology, marketing and management.", [], {
    children: [
      { title: "Main Stage Sessions", desc: "Keynotes and panels from restaurant industry leaders.", href: "/main-stage" },
      { title: "Talk Stage Sessions", desc: "Practical talks on technology, marketing and management.", href: "/talk-stage" },
    ],
    cta: "register",
  }),
  "main-stage": p("Conferences", "Main Stage Sessions", "Keynotes and panels from restaurant industry leaders.", [
    { heading: "Programme", body: "TODO: main stage agenda and speakers." },
  ], { cta: "register" }),
  "talk-stage": p("Conferences", "Talk Stage Sessions", "Practical talks on technology, marketing and management.", [
    { heading: "Programme", body: "TODO: talk stage agenda and speakers." },
  ], { cta: "register" }),
  "be-a-speaker": p("Event Highlights", "Be a Speaker", "Share your experience with thousands of restaurant owners.", [
    { heading: "Call for speakers", body: "We prioritise practical case studies from operators and technology providers. Email info@penguinx.co with your proposed topic." },
  ]),

  // Event Highlights — Competitions (FHA structure slot — TODO: confirm whether Restech will run these)
  competitions: p("Event Highlights", "Competitions", "Recognising the best ideas in restaurant technology.", [], {
    children: [
      { title: "Restech Startup Pitch", desc: "Restaurant tech startups pitch to investors and restaurant groups.", href: "/startup-pitch" },
      { title: "Restech Innovation Awards", desc: "Awards for operators and suppliers creating measurable impact.", href: "/innovation-awards" },
    ],
  }),
  "startup-pitch": p("Competitions", "Restech Startup Pitch", "Restaurant tech startups pitch to investors and restaurant groups.", [
    { heading: "How to apply", body: "TODO: application details." },
  ], { cta: "exhibit" }),
  "innovation-awards": p("Competitions", "Restech Innovation Awards", "Recognising operators and suppliers creating measurable impact with technology.", [
    { heading: "Categories", body: "TODO: award categories and judging criteria." },
  ]),

  // Visitor
  "admission-policy": p("Become a Visitor", "Admission Policy", "Restech is a trade-only event.", [
    { heading: "Who may enter", body: "Industry professionals aged 18 and above. Proof of business may be requested." },
    { heading: "Badges", body: "Your QR badge is personal and non-transferable." },
  ], { cta: "register" }),
  "hosted-buyer-programme": p("Become a Visitor", "Hosted Buyer Programme", "For senior decision-makers with active purchasing plans.", [
    { heading: "Benefits", body: "Pre-arranged meetings, VIP lounge access and selected travel support." },
    { heading: "Eligibility", body: "Owners and senior managers of multi-branch operations with a confirmed technology budget." },
  ], { cta: "register" }),
  "venue-map": p("Event Essentials", "Venue Map", "Find your way around Restech.", [
    { heading: "Floor plan", body: "The floor plan will be published once zones are confirmed." },
  ]),
  "visiting-bangkok": p("Event Essentials", "Visiting Bangkok", "Make the most of your trip to Bangkok.", [
    { heading: "Getting around", body: "TODO: airport transfer, BTS/MRT, taxis and ride-hailing." },
    { heading: "Where to stay", body: "TODO: partner hotels and rates." },
  ]),
  "plan-your-visit": p("Travel", "Plan Your Visit", "Everything you need to get the most out of the show.", [
    { heading: "Opening hours", body: "TODO: daily opening hours." },
    { heading: "Getting there", body: "TODO: transport, parking and accommodation." },
  ], { cta: "register" }),
  "visa-support": p("Travel", "Visa Support", "International visitors and exhibitors can request an invitation letter.", [
    { heading: "How to request", body: "Register first, then contact us with your registration email to request a letter." },
  ]),

  // Exhibitor
  "advertising-sponsorship": p("For our Exhibitors", "Advertising & Sponsorship", "Stand out before, during and after the show.", [
    { heading: "Packages", body: "Headline, stage, lanyard, registration, networking and digital packages." },
    { heading: "Get the rate card", body: "Submit the Book a Stand form and select 'Sponsorship' to receive the full rate card." },
  ], { cta: "exhibit" }),
  "exhibitor-manual": p("For our Exhibitors", "Online Exhibitor Manual", "Deadlines, rules and forms for confirmed exhibitors.", [
    { heading: "Access", body: "The online manual will be shared with confirmed exhibitors." },
  ]),

  // Media Centre
  "restech-insider": p("Editorials", "Restech Insider", "Industry news and analysis on restaurant technology.", [
    { heading: "Coming soon", body: "Join the mailing list to get new articles first." },
  ]),
  blog: p("Editorials", "Blog", "Stories, guides and case studies from the restaurant tech community.", [
    { heading: "Coming soon", body: "Join the mailing list to get new posts first." },
  ]),
  glossary: p("Editorials", "Glossary", "Restaurant technology terms, explained.", [
    { heading: "KDS", body: "Kitchen Display System — screens that replace paper tickets in the kitchen." },
    { heading: "CDP", body: "Customer Data Platform — unifies customer data across channels for marketing." },
  ]),
  "media-gallery": p("Resources", "Media Gallery", "Photos and videos from Restech.", [
    { heading: "Coming soon", body: "Gallery will be published after the show." },
  ]),
  "press-release": p("Resources", "Press Releases", "Latest announcements from Restech.", [
    { heading: "Media enquiries", body: "Contact our press team for accreditation and interviews." },
  ]),

  // Legal
  "privacy-policy": p("Legal", "Privacy Policy", "How Penguin X Co., Ltd. collects and uses personal data in line with Thailand's PDPA.", [
    { heading: "Data we collect", body: "Registration and enquiry details you submit through our forms." },
    { heading: "How we use it", body: "To process your registration or enquiry and, only with your consent, to send event updates." },
    { heading: "Your rights", body: "You may request access, correction or deletion of your data at any time. TODO: legal review." },
  ]),
};

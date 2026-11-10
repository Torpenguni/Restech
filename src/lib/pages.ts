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
  "about-restech": p("The Event", "About Restech", "Restech is the dedicated meeting place for restaurant technology and the operators who buy it.", [
    { heading: "Our mission", body: "Help restaurant businesses grow margin and scale through technology by connecting them with the right solutions and peers." },
    { heading: "Who we bring together", body: "Technology suppliers, multi-branch operators, franchise groups, hotel F&B leaders, investors and industry associations." },
    { heading: "Organiser", body: "TODO: organiser profile and credentials." },
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
  "tech-demo-kitchen": p("Spotlight", "Tech Demo Kitchen", "A working restaurant on the show floor powered end-to-end by exhibitor technology.", [
    { heading: "What you'll see", body: "Order capture, kitchen display, robotics, delivery hand-off and live dashboards — integrated." },
    { heading: "Join as a technology partner", body: "Limited integration slots are available for exhibitors." },
  ], { cta: "both" }),
  "robotics-automation": p("Spotlight", "Robotics & Automation", "Cooking robots, automated beverage stations and service robots in action.", [
    { heading: "Why it matters", body: "Automation addresses labour shortages and consistency across branches." },
  ], { cta: "both" }),
  "delivery-cloud-kitchen": p("Spotlight", "Delivery & Cloud Kitchen", "Solutions for delivery-first brands and virtual kitchens.", [
    { heading: "Focus", body: "Aggregator integration, own-channel ordering, packaging and kitchen layout for delivery." },
  ], { cta: "both" }),
  "franchise-chain-zone": p("Spotlight", "Franchise & Chain Zone", "Tools and services for brands scaling to multiple branches and franchising.", [
    { heading: "Focus", body: "Franchise management, central kitchen, multi-branch reporting and expansion services." },
  ], { cta: "both" }),
  "hotel-fnb-tech": p("Spotlight", "Hotel F&B Tech", "Technology for hotel restaurants, banqueting and in-room dining.", [
    { heading: "Focus", body: "PMS–POS integration, banquet management, in-room ordering and F&B analytics." },
  ], { cta: "both" }),
  "startup-alley": p("Spotlight", "Startup Alley", "A dedicated zone for early-stage restaurant tech companies.", [
    { heading: "Turnkey booths", body: "Compact, ready-built booths priced for startups." },
    { heading: "Pitch on stage", body: "Selected startups compete in the Startup Pitch Challenge." },
  ], { cta: "exhibit" }),

  // Event Highlights — Conferences
  conferences: p("Event Highlights", "Conferences", "Operator-led sessions on margin, data, automation and AI.", [], {
    children: [
      { title: "Restech Main Stage", desc: "Keynotes and panels from leaders of the region's biggest restaurant groups.", href: "/restech-main-stage" },
      { title: "Restech Webinar", desc: "Pre-show online sessions on restaurant technology trends.", href: "/webinar" },
      { title: "Future of Restaurants Conference", desc: "A deep-dive programme on the next decade of restaurant operations.", href: "/future-of-restaurants-conference" },
      { title: "Sustainability Summit", desc: "Cutting food waste and energy cost with technology.", href: "/sustainability-summit" },
    ],
    cta: "register",
  }),
  "restech-main-stage": p("Conferences", "Restech Main Stage", "Keynotes and panels from leaders of the region's biggest restaurant groups.", [
    { heading: "Speakers", body: "Speaker line-up to be announced." },
  ], { cta: "register" }),
  webinar: p("Conferences", "Restech Webinar", "Pre-show online sessions on restaurant technology trends.", [
    { heading: "Upcoming sessions", body: "Join the mailing list to be notified when registration opens." },
  ], { cta: "register" }),
  "future-of-restaurants-conference": p("Conferences", "Future of Restaurants Conference", "A deep-dive programme on the next decade of restaurant operations.", [
    { heading: "Tracks", body: "Unit economics · Digital ordering · Kitchen automation · Data & AI · People & productivity." },
  ], { cta: "register" }),
  "sustainability-summit": p("Conferences", "Sustainability Summit", "Cutting food waste and energy cost with technology.", [
    { heading: "Programme", body: "TODO: summit agenda." },
  ], { cta: "register" }),
  "be-a-speaker": p("Event Highlights", "Be a Speaker", "Share your case study with the region's restaurant operators.", [
    { heading: "Call for speakers", body: "We prioritise operator case studies with real numbers. Contact us with your proposed topic." },
  ]),

  // Event Highlights — Competitions
  competitions: p("Event Highlights", "Competitions", "Recognising the best ideas and implementations in restaurant technology.", [], {
    children: [
      { title: "Restech Startup Pitch Challenge", desc: "Startups pitch live to investors and restaurant groups.", href: "/startup-pitch-challenge" },
      { title: "Restech Innovation Awards", desc: "Awards for operators and suppliers creating measurable impact.", href: "/innovation-awards" },
    ],
  }),
  "startup-pitch-challenge": p("Competitions", "Restech Startup Pitch Challenge", "Restaurant tech startups compete for investment, pilots and prizes.", [
    { heading: "How to apply", body: "Applications open soon. Startup Alley exhibitors receive priority." },
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
  "privacy-policy": p("Legal", "Privacy Policy", "How we collect and use personal data in line with Thailand's PDPA.", [
    { heading: "Data we collect", body: "Registration and enquiry details you submit through our forms." },
    { heading: "How we use it", body: "To process your registration or enquiry and, only with your consent, to send event updates." },
    { heading: "Your rights", body: "You may request access, correction or deletion of your data at any time. TODO: legal review." },
  ]),
};

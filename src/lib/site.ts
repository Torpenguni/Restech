// Central event configuration.
// Site structure (menus, page order, URL pattern) mirrors the foodnhotelasia.com (FHA) information
// architecture. All copy and branding are Restech's own. Items marked TODO are placeholders.

export const event = {
  name: "Restech",
  edition: "Restech 2027",
  fullName: "Restech – Restaurant Technology Expo 2027",
  theme: "Step Into The Future",
  tagline: "Restaurant Technology Expo — Technology and Management Exhibition for Restaurant Businesses",
  startDate: "2027-08-27T09:30:00+07:00", // TODO: confirm 2027 dates
  dateLabel: "27–29 August 2027",
  hours: "09:30–19:00", // TODO: site shows both 19:00 and 19:30 — confirm
  venue: "IMPACT Muang Thong Thani, Exhibition Hall 5–6", // TODO: confirm 2027 venue
  city: "Bangkok",
  organiser: "Penguin X Co., Ltd.",
  address: "8/299, 8/300 Room 205, L1 (Tops side), The Lighthouse Building, Charoen Nakhon Rd, Khlong Ton Sai, Khlong San, Bangkok 10600",
  hashtags: ["#Restech2027", "#Restech", "#StepIntoTheFuture"],
  email: "info@penguinx.co",
  phone: "", // TODO: not published on current site
};

// "Restech 2027 by the Numbers" — visitors from restechexpo.com; exhibitor count = sum of zone counts on
// the current homepage (35+40+20+25+20+10). TODO: confirm both with the sales team.
export const stats = [
  { value: "10,000+", label: "Visitors" },
  { value: "150+", label: "Exhibitors" },
  { value: "6", label: "Show Zones" },
  { value: "3", label: "Days" },
];

export type NavLink = { label: string; href: string };

export const cta = {
  register: { label: "Register Now", href: "/visitor-registration" },
  exhibit: { label: "Be an Exhibitor", href: "/book-a-stand" },
  bookStand: { label: "Book a Stand", href: "/book-a-stand" },
  brochure: { label: "Download Brochure", href: "/join-mailing-list" },
  mailingList: { label: "Join Mailing List", href: "/join-mailing-list" },
  sponsor: { label: "Advertising & Sponsorship", href: "/advertising-sponsorship" },
  speaker: { label: "Be a Speaker", href: "/be-a-speaker" },
  exhibitorList: { label: "Exhibitor List", href: "/exhibitor-list" },
} satisfies Record<string, NavLink>;

export type NavGroup = { title: string; href?: string; links: NavLink[] };
export type NavItem = { label: string; groups: NavGroup[]; actions: NavLink[] };

const travel: NavGroup = {
  title: "Travel",
  links: [
    { label: "Plan Your Visit", href: "/plan-your-visit" },
    { label: "Visa Support", href: "/visa-support" },
    { label: `Visiting ${event.city}`, href: "/visiting-bangkok" },
  ],
};

// Main navigation — same 5 menus / groups / action buttons as FHA.
export const nav: NavItem[] = [
  {
    label: "The Event",
    groups: [
      {
        title: "Overview",
        links: [
          { label: "About Restech", href: "/about-restech" },
          { label: "Safe Events", href: "/safe-events" },
          { label: "Sustainability", href: "/sustainability" },
        ],
      },
      {
        title: "Show Information",
        links: [
          { label: "Exhibitor List", href: "/exhibitor-list" },
          { label: "Show Segments", href: "/show-segments" },
          { label: "Sponsors", href: "/sponsors" },
          { label: "Supporting Organisations", href: "/supporting-organisations" },
          { label: "Media & Knowledge Partners", href: "/media-and-knowledge-partners" },
        ],
      },
      {
        title: "Have a question?",
        links: [
          { label: "FAQs", href: "/faqs" },
          { label: "Contact Us", href: "/contact-us" },
        ],
      },
    ],
    actions: [{ label: "Register for Restech", href: cta.register.href }, cta.bookStand, cta.mailingList],
  },
  {
    label: "Event Highlights",
    groups: [
      {
        title: "Spotlight",
        links: [
          { label: "Restaurant of the Future", href: "/restaurant-of-the-future" },
          { label: "Business Matching", href: "/business-matching" },
          { label: "Franchise Zone", href: "/franchise-zone" },
          { label: "Event Highlight", href: "/event-highlight" },
        ],
      },
      {
        title: "Conferences",
        href: "/conferences",
        links: [
          { label: "Main Stage Sessions", href: "/main-stage" },
          { label: "Talk Stage Sessions", href: "/talk-stage" },
        ],
      },
      {
        title: "Competitions",
        href: "/competitions",
        links: [
          { label: "Restech Startup Pitch", href: "/startup-pitch" },
          { label: "Restech Innovation Awards", href: "/innovation-awards" },
        ],
      },
    ],
    actions: [{ label: "Register for Restech", href: cta.register.href }, cta.speaker, cta.mailingList],
  },
  {
    label: "Visitor",
    groups: [
      {
        title: "Become a Visitor",
        links: [
          { label: "Admission Policy", href: "/admission-policy" },
          { label: "Hosted Buyer Programme", href: "/hosted-buyer-programme" },
          { label: "Why Visit", href: "/why-visit" },
          { label: "Visitor Registration", href: "/visitor-registration" },
        ],
      },
      {
        title: "Event Essentials",
        links: [
          { label: "Venue Map", href: "/venue-map" },
          { label: `Visiting ${event.city}`, href: "/visiting-bangkok" },
        ],
      },
      travel,
    ],
    actions: [{ label: "Register for Restech", href: cta.register.href }, cta.exhibitorList, cta.mailingList],
  },
  {
    label: "Exhibitor",
    groups: [
      {
        title: "Become an Exhibitor",
        links: [
          { label: "Exhibit with Us", href: "/exhibit-with-us" },
          { label: "Book a Stand", href: "/book-a-stand" },
        ],
      },
      {
        title: "For our Exhibitors",
        links: [
          { label: "Advertising & Sponsorship", href: "/advertising-sponsorship" },
          { label: "Online Exhibitor Manual", href: "/exhibitor-manual" },
        ],
      },
      travel,
    ],
    actions: [cta.bookStand, cta.sponsor, cta.brochure],
  },
  {
    label: "Media Centre",
    groups: [
      {
        title: "Editorials",
        links: [
          { label: "Restech Insider", href: "/restech-insider" },
          { label: "Blog", href: "/blog" },
          { label: "Glossary", href: "/glossary" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Download Brochure", href: "/join-mailing-list" },
          { label: "Media Gallery", href: "/media-gallery" },
          { label: "Press Releases", href: "/press-release" },
        ],
      },
    ],
    actions: [{ label: "Register for Restech", href: cta.register.href }, cta.bookStand, cta.mailingList],
  },
];

// Key Segments — two groups (FHA pattern), using Restech's real show zones.
export type Segment = { slug: string; name: string; icon: string; desc: string };
export const segmentGroups: { title: string; key: string; items: Segment[] }[] = [
  {
    title: "Restaurant Technology",
    key: "restaurant-technology",
    items: [
      { slug: "management-technology", name: "Management Technology", icon: "💻", desc: "POS, back-office, inventory, HR and multi-branch management systems." },
      { slug: "marketing", name: "Marketing & IT Marketing Technology", icon: "📣", desc: "CRM, loyalty, online ordering, social and digital marketing tools." },
      { slug: "financial-systems", name: "Finance & Financial Technology", icon: "💳", desc: "Payments, accounting, lending and financial services for restaurants." },
    ],
  },
  {
    title: "Restaurant Operations",
    key: "restaurant-operations",
    items: [
      { slug: "kitchen-equipment", name: "Kitchen Equipment", icon: "🍳", desc: "Commercial kitchen equipment, automation and smart appliances." },
      { slug: "suppliers", name: "Services & Suppliers", icon: "📦", desc: "Ingredients, packaging, services and suppliers for restaurants." },
      { slug: "franchise", name: "Franchise Businesses", icon: "🏪", desc: "Franchise brands and expansion opportunities." },
      { slug: "future-restaurant-models", name: "Future Restaurant Models", icon: "🚀", desc: "Concept restaurants showing where the industry is heading." },
    ],
  },
];
export const segments: Segment[] = segmentGroups.flatMap((g) => g.items);

export type Card = { title: string; desc: string; href: string; image?: string };

// "What's New" spotlight cards
export const whatsNew: Card[] = [
  { title: "Restaurant of the Future", desc: "Future restaurant concepts showing where the industry is heading.", href: "/restaurant-of-the-future", image: "/images/future-restaurant.webp" },
  { title: "Main Stage Sessions", desc: "Keynotes and panels from restaurant industry leaders.", href: "/main-stage", image: "/images/main-stage.webp" },
  { title: "Talk Stage Sessions", desc: "Practical talks on technology, marketing and management.", href: "/talk-stage", image: "/images/talk-stage.webp" },
  { title: "Business Matching", desc: "Pre-arranged meetings between restaurant owners and suppliers.", href: "/business-matching", image: "/images/business-matching.webp" },
];

// "New at Restech" feature cards
export const newAt: Card[] = [
  { title: "Franchise Zone", desc: "Franchise brands and expansion opportunities for investors and operators.", href: "/franchise-zone" },
  { title: "Focus on Sustainability", desc: "Solutions that cut food waste and energy cost.", href: "/sustainability" },
  { title: "Community Engagement", desc: "Activities that connect restaurant owners, suppliers and the wider community.", href: "/event-highlight" },
];

// "Why Leading Brands Choose Restech" — 6 value-prop cards
export const whyExhibit = [
  { title: "Unmatched Industry Reach", desc: "Owners, CFOs, COOs and IT heads of restaurant chains and groups — the people who sign tech budgets." },
  { title: "Gateway to Southeast Asia", desc: "Reach Thailand and the region's fastest-growing multi-branch operators." },
  { title: "Brand Exposure", desc: "Stages, demo kitchen and media coverage to launch products to the market." },
  { title: "AI Business Matching", desc: "Pre-scheduled buyer–supplier meetings so your calendar is full on day one." },
  { title: "Dedicated Segments", desc: "Dedicated zones put you in front of buyers looking for exactly what you sell." },
  { title: "Measurable Leads", desc: "Lead scanning and post-show reports to prove ROI to your board." },
];

export const whyVisit = [
  { title: "A Complete Ecosystem", desc: "Every system a restaurant runs on, from front counter to back office, under one roof." },
  { title: "Industry Leaders", desc: "Meet the region's leading POS, delivery, CRM and automation providers." },
  { title: "Innovation First", desc: "See robotics, AI and automation working live in the Tech Demo Kitchen." },
  { title: "Dedicated Segments", desc: "Front-of-house and back-of-house zones make it easy to compare vendors." },
  { title: "Partnerships", desc: "Hosted buyer programme and pre-booked meetings with suppliers." },
  { title: "Community", desc: "Network with fellow owners, operators and franchise groups." },
];

export const testimonials = [
  { quote: "Placeholder — replace with a real quote from a restaurant group buyer.", name: "Name Surname", role: "COO, Restaurant Group", type: "Buyer" },
  { quote: "Placeholder — replace with a real quote from a trade association or government body.", name: "Name Surname", role: "President, Association", type: "Trade Body" },
  { quote: "Placeholder — replace with a real quote from an exhibitor.", name: "Name Surname", role: "Head of Sales, Company", type: "Exhibitor" },
];

export const sponsorTiers = [
  { tier: "Headline", count: 1 },
  { tier: "Platinum", count: 2 },
  { tier: "Gold", count: 3 },
  { tier: "Silver", count: 4 },
  { tier: "Bronze", count: 6 },
];

// Credibility strip (FHA: Held In / Endorsed By / Supported By / certifications) — TODO real partners
export const credibility = [
  { label: "Organised By", name: "Penguin X Co., Ltd." },
  { label: "Held In", name: "IMPACT Muang Thong Thani" },
  { label: "Official Supported By", name: "see logo strip" },
];

export const faqs = [
  { q: "What is Restech 2027?", a: "Restech – Restaurant Technology Expo 2027 is a technology and management exhibition for restaurant businesses, held 27–29 August 2027 at IMPACT Muang Thong Thani, Hall 5–6." },
  { q: "Who attends Restech?", a: "Restaurant owners, chain operators, franchise groups, hotel F&B leaders, and heads of operations, IT, finance, marketing and procurement." },
  { q: "What types of suppliers can visitors meet?", a: "POS and payments, ordering and delivery, kitchen automation, CRM and loyalty, supply chain, AI and data, workforce and food-safety technology providers." },
  { q: "Can local technology companies and startups exhibit?", a: "Yes. Local and international companies can book a stand, and early-stage companies can apply for Startup Alley." },
  { q: "Is Restech relevant for distributors and system integrators?", a: "Yes. Many international vendors look for local distribution and integration partners at the show." },
  { q: "How can exhibitors increase their visibility?", a: "Through sponsorship, speaking slots, the Tech Demo Kitchen and pre-show business matching. See Advertising & Sponsorship." },
];

export const quickLinks: NavLink[] = [
  { label: "Book a Stand", href: "/book-a-stand" },
  { label: "Advertising & Sponsorship", href: "/advertising-sponsorship" },
  { label: "Download Brochure", href: "/join-mailing-list" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Site Map", href: "/sitemap" },
];

export const social: NavLink[] = [
  { label: "Facebook", href: "https://www.restechexpo.com/en/website/social/facebook" }, // TODO: direct page URL
  { label: "YouTube", href: "https://www.restechexpo.com/en/website/social/youtube" }, // TODO: direct channel URL
  { label: "LINE OA", href: "https://lin.ee/log48Df" },
  { label: "Email", href: "mailto:info@penguinx.co" },
];

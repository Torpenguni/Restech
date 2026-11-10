// Central event configuration.
// Site structure (menus, page order, URL pattern) mirrors the foodnhotelasia.com (FHA) information
// architecture. All copy and branding are Restech's own. Items marked TODO are placeholders.

export const event = {
  name: "Restech",
  edition: "Restech 2027",
  tagline: "Asia's Leading Restaurant Technology & Operations Event",
  // TODO: confirm dates & venue
  startDate: "2027-06-16T09:00:00+07:00",
  dateLabel: "16–18 June 2027",
  venue: "Bangkok, Thailand (venue TBC)",
  city: "Bangkok",
  hashtags: ["#Restech2027", "#Restech", "#RestaurantTech"],
  email: "hello@restech.events", // TODO
  phone: "+66 0 0000 0000", // TODO
};

// "Restech 2027 by the Numbers" — PROJECTED targets, replace with audited figures.
export const stats = [
  { value: "8,000+", label: "Attendees" },
  { value: "250+", label: "Exhibitors" },
  { value: "10,000", label: "sqm Exhibition Area" },
  { value: "15+", label: "Countries & Regions" },
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
          { label: "Tech Demo Kitchen", href: "/tech-demo-kitchen" },
          { label: "Robotics & Automation", href: "/robotics-automation" },
          { label: "Delivery & Cloud Kitchen", href: "/delivery-cloud-kitchen" },
          { label: "Franchise & Chain Zone", href: "/franchise-chain-zone" },
          { label: "Hotel F&B Tech", href: "/hotel-fnb-tech" },
          { label: "Startup Alley", href: "/startup-alley" },
        ],
      },
      {
        title: "Conferences",
        href: "/conferences",
        links: [
          { label: "Restech Main Stage", href: "/restech-main-stage" },
          { label: "Restech Webinar", href: "/webinar" },
          { label: "Future of Restaurants Conference", href: "/future-of-restaurants-conference" },
          { label: "Sustainability Summit", href: "/sustainability-summit" },
        ],
      },
      {
        title: "Competitions",
        href: "/competitions",
        links: [
          { label: "Restech Startup Pitch Challenge", href: "/startup-pitch-challenge" },
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

// Key Segments — two groups (FHA: Food & Beverage / HoReCa → Restech: Front of House / Back of House).
export type Segment = { slug: string; name: string; icon: string; desc: string };
export const segmentGroups: { title: string; key: string; items: Segment[] }[] = [
  {
    title: "Front of House",
    key: "front-of-house",
    items: [
      { slug: "pos-payments", name: "POS & Payments", icon: "💳", desc: "Point-of-sale, payment gateways, QR & cashless." },
      { slug: "ordering-kiosks", name: "Ordering & Kiosks", icon: "📱", desc: "Self-order kiosks, QR table ordering, online ordering." },
      { slug: "delivery", name: "Delivery & Aggregators", icon: "🛵", desc: "Aggregator integration, own-channel delivery, last-mile." },
      { slug: "crm-loyalty", name: "CRM & Loyalty", icon: "🎯", desc: "Membership, CDP, marketing automation." },
      { slug: "reservations", name: "Reservations & Guest Experience", icon: "📅", desc: "Booking, waitlist, reviews, guest feedback." },
      { slug: "digital-marketing", name: "Digital Marketing & Social", icon: "📣", desc: "Social commerce, ads, influencer and content tools." },
    ],
  },
  {
    title: "Back of House",
    key: "back-of-house",
    items: [
      { slug: "kitchen-automation", name: "Kitchen Automation & Robotics", icon: "🤖", desc: "KDS, robotics, smart cooking equipment." },
      { slug: "supply-chain", name: "Supply Chain & Procurement", icon: "📦", desc: "Inventory, purchasing, central kitchen, cold chain." },
      { slug: "ai-data", name: "AI, Data & BI", icon: "📊", desc: "Dashboards, forecasting, AI agents." },
      { slug: "workforce", name: "Workforce & HR Tech", icon: "👥", desc: "Scheduling, payroll, training." },
      { slug: "food-safety", name: "Food Safety & IoT", icon: "🌡️", desc: "Temperature monitoring, HACCP, compliance." },
      { slug: "energy-sustainability", name: "Energy & Sustainability", icon: "🌱", desc: "Energy monitoring, food-waste tracking, packaging." },
    ],
  },
];
export const segments: Segment[] = segmentGroups.flatMap((g) => g.items);

// "What's New" spotlight cards
export const whatsNew = [
  { title: "Tech Demo Kitchen", desc: "A working restaurant on the show floor running end-to-end on exhibitor technology.", href: "/tech-demo-kitchen" },
  { title: "Robotics & Automation", desc: "Cooking robots, automated beverage stations and service robots in action.", href: "/robotics-automation" },
  { title: "Delivery & Cloud Kitchen", desc: "Solutions for delivery-first brands and virtual kitchens.", href: "/delivery-cloud-kitchen" },
  { title: "Franchise & Chain Zone", desc: "Tools and services for brands scaling to multiple branches.", href: "/franchise-chain-zone" },
  { title: "Hotel F&B Tech", desc: "Technology for hotel restaurants, banqueting and room service.", href: "/hotel-fnb-tech" },
];

// "New at Restech" feature cards
export const newAt = [
  { title: "Startup Alley", desc: "Early-stage restaurant tech companies in one dedicated zone.", href: "/startup-alley" },
  { title: "Startup Pitch Challenge", desc: "Startups pitch live to investors and restaurant groups.", href: "/startup-pitch-challenge" },
  { title: "Future of Restaurants Conference", desc: "Operator-led sessions on margin, data and AI.", href: "/future-of-restaurants-conference" },
];

// "Why Leading Brands Choose Restech" — 6 value-prop cards
export const whyExhibit = [
  { title: "Unmatched Industry Reach", desc: "Owners, CFOs, COOs and IT heads of restaurant chains and groups — the people who sign tech budgets." },
  { title: "Gateway to Southeast Asia", desc: "Reach Thailand and the region's fastest-growing multi-branch operators." },
  { title: "Brand Exposure", desc: "Stages, demo kitchen and media coverage to launch products to the market." },
  { title: "AI Business Matching", desc: "Pre-scheduled buyer–supplier meetings so your calendar is full on day one." },
  { title: "Dedicated Segments", desc: "Twelve focused segments put you in front of buyers looking for exactly what you sell." },
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
  { label: "Held In", name: "Partner TBC" },
  { label: "Endorsed By", name: "Partner TBC" },
  { label: "Supported By", name: "Partner TBC" },
  { label: "Sustainability Certification", name: "TBC" },
];

export const faqs = [
  { q: "What is Restech 2027?", a: "Restech is a B2B trade event for restaurant technology and operations, bringing together technology suppliers and restaurant, café and hospitality operators." },
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
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LINE OA", href: "#" },
];

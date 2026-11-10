// Central event configuration. Everything marked TODO is a placeholder
// to be replaced with confirmed event facts before launch.

export const event = {
  name: "Restech",
  edition: "Restech 2027",
  tagline: "Asia's Restaurant Technology & Operations Event",
  // TODO: confirm dates & venue
  startDate: "2027-06-16T09:00:00+07:00",
  dateLabel: "16–18 June 2027",
  venue: "Bangkok, Thailand (venue TBC)",
  hashtag: "#Restech2027",
  email: "hello@restech.events", // TODO
  phone: "+66 0 0000 0000", // TODO
};

// Stats are PROJECTED targets — replace with audited figures.
export const stats = [
  { value: "8,000+", label: "Trade visitors" },
  { value: "250+", label: "Exhibitors" },
  { value: "15+", label: "Countries" },
  { value: "60+", label: "Speakers" },
];

export const cta = {
  register: { label: "Register Now", href: "/register" },
  exhibit: { label: "Book a Stand", href: "/book-a-stand" },
  brochure: { label: "Download Brochure", href: "/brochure" },
  sponsor: { label: "Talk Sponsorship", href: "/sponsorship" },
};

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; links: NavLink[] };
export type NavItem = { label: string; groups: NavGroup[]; actions: NavLink[] };

export const nav: NavItem[] = [
  {
    label: "The Event",
    groups: [
      {
        title: "Overview",
        links: [
          { label: "About Restech", href: "/about" },
          { label: "Show Segments", href: "/show-segments" },
          { label: "Sustainability", href: "/sustainability" },
        ],
      },
      {
        title: "Show Information",
        links: [
          { label: "Exhibitor List", href: "/exhibitor-list" },
          { label: "Sponsors", href: "/sponsors" },
          { label: "Supporting Organisations", href: "/supporting-organisations" },
          { label: "Media Partners", href: "/media-partners" },
        ],
      },
      {
        title: "Have a question?",
        links: [
          { label: "FAQs", href: "/faqs" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ],
    actions: [cta.register, cta.exhibit],
  },
  {
    label: "Highlights",
    groups: [
      {
        title: "Spotlight",
        links: [
          { label: "Tech Demo Kitchen", href: "/tech-demo-kitchen" },
          { label: "Startup Alley", href: "/startup-alley" },
          { label: "Franchise & Chain Zone", href: "/franchise-zone" },
        ],
      },
      {
        title: "Conference",
        links: [
          { label: "Conference Programme", href: "/conference" },
          { label: "Main Stage", href: "/main-stage" },
          { label: "Be a Speaker", href: "/be-a-speaker" },
        ],
      },
      {
        title: "Competitions",
        links: [
          { label: "Startup Pitch", href: "/startup-pitch" },
          { label: "Restech Awards", href: "/awards" },
        ],
      },
    ],
    actions: [cta.register, { label: "Be a Speaker", href: "/be-a-speaker" }],
  },
  {
    label: "Visit",
    groups: [
      {
        title: "Become a Visitor",
        links: [
          { label: "Why Visit", href: "/why-visit" },
          { label: "Visitor Registration", href: "/register" },
          { label: "Admission Policy", href: "/admission-policy" },
          { label: "Hosted Buyer Programme", href: "/hosted-buyer-programme" },
        ],
      },
      {
        title: "Event Essentials",
        links: [
          { label: "Plan Your Visit", href: "/plan-your-visit" },
          { label: "Venue & Floor Plan", href: "/venue" },
          { label: "Visa Support", href: "/visa-support" },
        ],
      },
    ],
    actions: [cta.register, { label: "Exhibitor List", href: "/exhibitor-list" }],
  },
  {
    label: "Exhibit",
    groups: [
      {
        title: "Become an Exhibitor",
        links: [
          { label: "Exhibit with Us", href: "/exhibit-with-us" },
          { label: "Book a Stand", href: "/book-a-stand" },
          { label: "Sponsorship & Advertising", href: "/sponsorship" },
        ],
      },
      {
        title: "For Exhibitors",
        links: [
          { label: "Exhibitor Manual", href: "/exhibitor-manual" },
          { label: "Plan Your Visit", href: "/plan-your-visit" },
          { label: "Visa Support", href: "/visa-support" },
        ],
      },
    ],
    actions: [cta.exhibit, cta.sponsor, cta.brochure],
  },
  {
    label: "Media",
    groups: [
      {
        title: "Editorial",
        links: [
          { label: "Restech Insights", href: "/insights" },
          { label: "Glossary", href: "/glossary" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Download Brochure", href: "/brochure" },
          { label: "Media Gallery", href: "/gallery" },
          { label: "Press Releases", href: "/press" },
        ],
      },
    ],
    actions: [cta.register, cta.exhibit],
  },
];

export const segments = [
  { slug: "pos-payments", name: "POS & Payments", icon: "💳", desc: "Point-of-sale, payment gateways, QR & cashless." },
  { slug: "kitchen-tech", name: "Kitchen Automation", icon: "🤖", desc: "KDS, robotics, smart equipment, food safety IoT." },
  { slug: "delivery-ordering", name: "Ordering & Delivery", icon: "🛵", desc: "Online ordering, aggregators, kiosks, last-mile." },
  { slug: "crm-loyalty", name: "CRM & Loyalty", icon: "🎯", desc: "Membership, CDP, marketing automation, reviews." },
  { slug: "supply-chain", name: "Supply Chain & Procurement", icon: "📦", desc: "Inventory, purchasing, central kitchen, cold chain." },
  { slug: "ai-data", name: "AI & Data", icon: "📊", desc: "BI dashboards, demand forecasting, AI agents." },
  { slug: "people-ops", name: "Workforce & HR Tech", icon: "👥", desc: "Scheduling, payroll, training, labour analytics." },
  { slug: "design-fitout", name: "Store Design & Equipment", icon: "🏗️", desc: "Fit-out, smart store formats, energy efficiency." },
];

export const whyExhibit = [
  { title: "Meet decision-makers", desc: "Owners, CFOs, COOs and IT heads of restaurant chains and groups — the people who sign tech budgets." },
  { title: "One focused category", desc: "Not a general food show: every visitor is here for restaurant technology and operations." },
  { title: "Pre-matched meetings", desc: "Buyer–supplier matching before the show so your calendar is full on day one." },
  { title: "Launch platform", desc: "Demo stages, startup pitch and media coverage to launch products to the region." },
  { title: "Gateway to SEA", desc: "Reach Thailand and Southeast Asia's fastest-growing multi-branch operators." },
  { title: "Measurable leads", desc: "Lead-scanning and post-show reports so you can prove ROI to your board." },
];

export const whyVisit = [
  { title: "See it working", desc: "Live demo kitchen showing systems integrated end-to-end — from order to plate to P&L." },
  { title: "Compare in one day", desc: "Shortlist POS, delivery, CRM and back-office vendors side by side." },
  { title: "Learn from operators", desc: "Case studies from chains that cut cost and grew margin with technology." },
  { title: "Hosted buyer perks", desc: "Qualified buyers get VIP lounge, pre-booked meetings and travel support." },
  { title: "Find what's next", desc: "AI, robotics and automation startups you won't see anywhere else." },
  { title: "Build your network", desc: "Peer roundtables and networking with fellow owners and operators." },
];

export const highlights = [
  { title: "Tech Demo Kitchen", desc: "A working restaurant on the show floor running on exhibitor tech.", href: "/tech-demo-kitchen" },
  { title: "Startup Alley & Pitch", desc: "Early-stage restaurant tech pitching to investors and chains.", href: "/startup-alley" },
  { title: "Restech Conference", desc: "Two stages of operator-led sessions on margin, data and AI.", href: "/conference" },
];

export const testimonials = [
  { quote: "Placeholder testimonial — replace with a real quote from an exhibitor after the first edition.", name: "Name Surname", role: "Head of Sales, Company" },
  { quote: "Placeholder testimonial — replace with a real quote from a restaurant group buyer.", name: "Name Surname", role: "COO, Restaurant Group" },
  { quote: "Placeholder testimonial — replace with a real quote from a partner association.", name: "Name Surname", role: "President, Association" },
];

export const sponsorTiers = [
  { tier: "Platinum", count: 2 },
  { tier: "Gold", count: 4 },
  { tier: "Silver", count: 6 },
];

export const faqs = [
  { q: "What is Restech?", a: "Restech is a B2B trade event for restaurant technology and operations, bringing together technology suppliers and multi-branch restaurant, café and hospitality operators." },
  { q: "Who attends?", a: "Restaurant owners, chain operators, franchise groups, hotel F&B leaders, and functional heads in operations, IT, finance, marketing and procurement." },
  { q: "Is registration free for trade visitors?", a: "Trade visitor registration is free for qualified industry professionals. Admission is restricted to trade visitors aged 18 and above." },
  { q: "What can I find at the show?", a: "POS and payments, ordering and delivery, kitchen automation, CRM and loyalty, supply chain, AI and data, workforce tools and store design." },
  { q: "How do I exhibit or sponsor?", a: "Submit the Book a Stand form and our sales team will reply within 2 working days with floor plan, packages and pricing." },
  { q: "Can startups participate?", a: "Yes — Startup Alley offers compact turnkey booths and a chance to pitch on stage. Apply via the Book a Stand form and choose 'Startup Alley'." },
];

export const footerLinks: NavLink[] = [
  { label: "Book a Stand", href: "/book-a-stand" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Download Brochure", href: "/brochure" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Site Map", href: "/sitemap" },
];

export const social: NavLink[] = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LINE OA", href: "#" },
];

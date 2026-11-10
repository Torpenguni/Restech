// Content for secondary information pages, rendered by app/[slug]/page.tsx.
// Key conversion pages (home, why-visit, exhibit-with-us, forms) have their own routes.

export type InfoPage = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body: string }[];
  cta?: "register" | "exhibit" | "both";
};

export const infoPages: Record<string, InfoPage> = {
  about: {
    eyebrow: "The Event",
    title: "About Restech",
    intro: "Restech is the dedicated meeting place for restaurant technology and the operators who buy it.",
    sections: [
      { heading: "Our mission", body: "Help restaurant businesses grow margin and scale through technology, by connecting them with the right solutions and peers." },
      { heading: "Who we bring together", body: "Technology suppliers, multi-branch operators, franchise groups, hotel F&B leaders, investors and industry associations." },
      { heading: "Organiser", body: "TODO: organiser profile and credentials." },
    ],
    cta: "both",
  },
  sustainability: {
    eyebrow: "The Event",
    title: "Sustainability",
    intro: "Our commitment to running a responsible event — and showcasing technology that reduces food waste and energy use.",
    sections: [
      { heading: "On the show floor", body: "TODO: waste, materials and energy commitments." },
      { heading: "Featured solutions", body: "Food-waste tracking, energy monitoring and sustainable packaging technologies." },
    ],
  },
  "exhibitor-list": {
    eyebrow: "Show Information",
    title: "Exhibitor List",
    intro: "The exhibitor directory will be published as stands are confirmed.",
    sections: [{ heading: "Coming soon", body: "Want to be on this list? Book a stand today." }],
    cta: "exhibit",
  },
  sponsors: {
    eyebrow: "Show Information",
    title: "Sponsors",
    intro: "The partners making Restech possible.",
    sections: [{ heading: "Sponsor line-up", body: "Sponsors will be announced soon. Packages are available now." }],
    cta: "exhibit",
  },
  "supporting-organisations": {
    eyebrow: "Show Information",
    title: "Supporting Organisations",
    intro: "Associations and government bodies supporting Restech.",
    sections: [{ heading: "Partners", body: "TODO: list associations and agencies." }],
  },
  "media-partners": {
    eyebrow: "Show Information",
    title: "Media & Knowledge Partners",
    intro: "Media and knowledge partners amplifying Restech across the region.",
    sections: [{ heading: "Become a media partner", body: "Contact our marketing team to discuss media partnership." }],
  },
  "tech-demo-kitchen": {
    eyebrow: "Highlights",
    title: "Tech Demo Kitchen",
    intro: "A working restaurant on the show floor powered end-to-end by exhibitor technology.",
    sections: [
      { heading: "What you'll see", body: "Order capture, kitchen display, robotics, delivery hand-off and live dashboards — integrated." },
      { heading: "Join as a technology partner", body: "Limited integration slots are available for exhibitors." },
    ],
    cta: "both",
  },
  "startup-alley": {
    eyebrow: "Highlights",
    title: "Startup Alley",
    intro: "A dedicated zone for early-stage restaurant tech companies.",
    sections: [
      { heading: "Turnkey booths", body: "Compact, ready-built booths priced for startups." },
      { heading: "Pitch on stage", body: "Selected startups pitch to investors and restaurant groups." },
    ],
    cta: "exhibit",
  },
  "franchise-zone": {
    eyebrow: "Highlights",
    title: "Franchise & Chain Zone",
    intro: "Tools and services for brands scaling to multiple branches and franchising.",
    sections: [{ heading: "Focus", body: "Franchise management, central kitchen, multi-branch reporting and expansion services." }],
    cta: "both",
  },
  conference: {
    eyebrow: "Highlights",
    title: "Conference Programme",
    intro: "Operator-led sessions on margin, data, automation and AI.",
    sections: [
      { heading: "Programme", body: "The full agenda will be released soon." },
      { heading: "Tracks", body: "Unit economics · Digital ordering · Kitchen automation · Data & AI · People & productivity." },
    ],
    cta: "register",
  },
  "main-stage": {
    eyebrow: "Highlights",
    title: "Main Stage",
    intro: "Keynotes and panels from leaders of the region's biggest restaurant groups.",
    sections: [{ heading: "Speakers", body: "Speaker line-up to be announced." }],
    cta: "register",
  },
  "be-a-speaker": {
    eyebrow: "Highlights",
    title: "Be a Speaker",
    intro: "Share your case study with the region's restaurant operators.",
    sections: [{ heading: "Call for speakers", body: "We prioritise operator case studies with real numbers. Contact us with your proposed topic." }],
  },
  "startup-pitch": {
    eyebrow: "Competitions",
    title: "Startup Pitch",
    intro: "Restaurant tech startups compete for investment, pilots and prizes.",
    sections: [{ heading: "How to apply", body: "Applications open soon. Startup Alley exhibitors receive priority." }],
    cta: "exhibit",
  },
  awards: {
    eyebrow: "Competitions",
    title: "Restech Awards",
    intro: "Recognising operators and suppliers creating measurable impact with technology.",
    sections: [{ heading: "Categories", body: "TODO: award categories and judging criteria." }],
  },
  "admission-policy": {
    eyebrow: "Visit",
    title: "Admission Policy",
    intro: "Restech is a trade-only event.",
    sections: [
      { heading: "Who may enter", body: "Industry professionals aged 18 and above. Proof of business may be requested." },
      { heading: "Badges", body: "Your QR badge is personal and non-transferable." },
    ],
    cta: "register",
  },
  "hosted-buyer-programme": {
    eyebrow: "Visit",
    title: "Hosted Buyer Programme",
    intro: "For senior decision-makers with active purchasing plans.",
    sections: [
      { heading: "Benefits", body: "Pre-arranged meetings, VIP lounge access and selected travel support." },
      { heading: "Eligibility", body: "Owners and senior managers of multi-branch operations with a confirmed technology budget." },
    ],
    cta: "register",
  },
  "plan-your-visit": {
    eyebrow: "Visit",
    title: "Plan Your Visit",
    intro: "Everything you need to get the most out of the show.",
    sections: [
      { heading: "Opening hours", body: "TODO: daily opening hours." },
      { heading: "Getting there", body: "TODO: transport, parking and accommodation." },
    ],
    cta: "register",
  },
  venue: {
    eyebrow: "Visit",
    title: "Venue & Floor Plan",
    intro: "Find your way around Restech.",
    sections: [{ heading: "Floor plan", body: "The floor plan will be published once zones are confirmed." }],
  },
  "visa-support": {
    eyebrow: "Visit",
    title: "Visa Support",
    intro: "International visitors and exhibitors can request an invitation letter.",
    sections: [{ heading: "How to request", body: "Register first, then contact us with your registration email to request a letter." }],
  },
  sponsorship: {
    eyebrow: "Exhibit",
    title: "Sponsorship & Advertising",
    intro: "Stand out before, during and after the show.",
    sections: [
      { heading: "Packages", body: "Headline, stage, lanyard, registration, networking and digital packages." },
      { heading: "Get the rate card", body: "Submit the Book a Stand form and select 'Sponsorship' to receive the full rate card." },
    ],
    cta: "exhibit",
  },
  "exhibitor-manual": {
    eyebrow: "Exhibit",
    title: "Exhibitor Manual",
    intro: "Deadlines, rules and forms for confirmed exhibitors.",
    sections: [{ heading: "Access", body: "The online manual will be shared with confirmed exhibitors." }],
  },
  insights: {
    eyebrow: "Media",
    title: "Restech Insights",
    intro: "Articles and analysis on restaurant technology and operations.",
    sections: [{ heading: "Coming soon", body: "Subscribe to our newsletter to get new articles first." }],
  },
  glossary: {
    eyebrow: "Media",
    title: "Glossary",
    intro: "Restaurant technology terms, explained.",
    sections: [
      { heading: "KDS", body: "Kitchen Display System — screens that replace paper tickets in the kitchen." },
      { heading: "CDP", body: "Customer Data Platform — unifies customer data across channels for marketing." },
    ],
  },
  gallery: {
    eyebrow: "Media",
    title: "Media Gallery",
    intro: "Photos and videos from Restech.",
    sections: [{ heading: "Coming soon", body: "Gallery will be published after the show." }],
  },
  press: {
    eyebrow: "Media",
    title: "Press Releases",
    intro: "Latest announcements from Restech.",
    sections: [{ heading: "Media enquiries", body: "Contact our press team for accreditation and interviews." }],
  },
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    intro: "How we collect and use personal data in line with Thailand's PDPA.",
    sections: [
      { heading: "Data we collect", body: "Registration and enquiry details you submit through our forms." },
      { heading: "How we use it", body: "To process your registration or enquiry and, only with your consent, to send event updates." },
      { heading: "Your rights", body: "You may request access, correction or deletion of your data at any time. TODO: legal review." },
    ],
  },
};

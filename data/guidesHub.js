// ─────────────────────────────────────────────────────────
// Briefing Hub editorial data
// All copy: straight quotes, hyphens only (no em/en-dashes)
// ─────────────────────────────────────────────────────────

export const editionMeta = {
  date: "August 8, 2026",
  edition: "Vol. 3, No. 32",
  tagline: "AI and automation intelligence for businesses who want to scale.",
};

export const briefingBand = [
  {
    id: "bb-1",
    kicker: "FIELD SERVICE",
    headline: "AI Dispatch Cuts Average Response Time by 47 Minutes in HVAC Fleets",
    blurb:
      "Route optimization engines are now standard in fleets with five or more trucks. The gap between adopters and holdouts is widening every quarter.",
    tag: "HVAC",
    date: "Aug 8, 2026",
    readTime: "4 min",
    url: "/guides/hvac",
    isLead: true,
  },
  {
    id: "bb-2",
    kicker: "WASTE OPS",
    headline: "IoT Bin Sensors Reduce Missed Pickups to Under 2% in Pilot Cities",
    blurb:
      "Smart containers paired with automated route dispatch are cutting complaints and fuel costs simultaneously.",
    tag: "Waste Management",
    date: "Aug 7, 2026",
    readTime: "3 min",
    url: "/guides/waste-management",
  },
  {
    id: "bb-3",
    kicker: "AUTOMATION",
    headline: "Small Business Owners Report 20+ Hours Saved Weekly With AI Agents",
    blurb:
      "Lead routing, onboarding, and invoicing workflows are the first to go fully autonomous.",
    tag: "AI Agents",
    date: "Aug 6, 2026",
    readTime: "5 min",
    url: "/blog/ai-agents-small-business-automation-2025",
  },
  {
    id: "bb-4",
    kicker: "CYBERSECURITY",
    headline: "60% of Breached Small Businesses Close Within Six Months",
    blurb:
      "MFA adoption remains below 40% in companies with fewer than 50 employees.",
    tag: "Security",
    date: "Aug 5, 2026",
    readTime: "3 min",
    url: "/blog/cybersecurity-guide-2025",
  },
];

export const oneMetric = {
  value: "72%",
  label: "of field service companies using AI dispatch report ROI within 90 days",
  source: "SPARKSPHEAR 2026 Field Service Automation Report",
  sourceUrl: "/guides/hvac",
};

// Tool Demand Meter per Business/Industry Vertical
export const toolDemandByVertical = {
  all: [
    { name: "ServiceTitan", pctMentions: 92, trend: "up", slug: "hvac" },
    { name: "AMCS Platform", pctMentions: 87, trend: "up", slug: "waste-management" },
    { name: "Procare Solutions", pctMentions: 84, trend: "up", slug: "daycare" },
    { name: "Vagaro", pctMentions: 78, trend: "up", slug: "salon" },
    { name: "Toast POS", pctMentions: 72, trend: "steady", slug: "restaurant" },
  ],
  hvac: [
    { name: "ServiceTitan", pctMentions: 96, trend: "up", slug: "hvac" },
    { name: "Jobber", pctMentions: 88, trend: "up", slug: "hvac" },
    { name: "Housecall Pro", pctMentions: 81, trend: "steady", slug: "hvac" },
    { name: "FieldEdge", pctMentions: 73, trend: "steady", slug: "hvac" },
    { name: "Kickserv", pctMentions: 64, trend: "down", slug: "hvac" },
  ],
  "waste-management": [
    { name: "AMCS Platform", pctMentions: 95, trend: "up", slug: "waste-management" },
    { name: "Curb Waste", pctMentions: 89, trend: "up", slug: "waste-management" },
    { name: "Routeware", pctMentions: 82, trend: "steady", slug: "waste-management" },
    { name: "Rubicon Connect", pctMentions: 76, trend: "up", slug: "waste-management" },
    { name: "Trash Flow", pctMentions: 67, trend: "down", slug: "waste-management" },
  ],
  daycare: [
    { name: "Procare Solutions", pctMentions: 94, trend: "up", slug: "daycare" },
    { name: "Brightwheel", pctMentions: 88, trend: "up", slug: "daycare" },
  ],
  barbershop: [
    { name: "Squire", pctMentions: 98, trend: "up", slug: "barbershop" },
    { name: "Booksy for Barbers", pctMentions: 91, trend: "up", slug: "barbershop" },
    { name: "Vagaro", pctMentions: 85, trend: "steady", slug: "barbershop" },
  ],
  salon: [
    { name: "Vagaro", pctMentions: 95, trend: "up", slug: "salon" },
    { name: "Mindbody", pctMentions: 87, trend: "steady", slug: "salon" },
  ],
  restaurant: [
    { name: "Toast POS", pctMentions: 97, trend: "up", slug: "restaurant" },
  ],
  "auto-repair": [
    { name: "Tekmetric", pctMentions: 96, trend: "up", slug: "auto-repair" },
  ],
};

export const toolDemandMeter = toolDemandByVertical.all;

export const curatedBriefings = [
  {
    id: "cb-1",
    kicker: "STACK GUIDE",
    headline: "The HVAC Automation Stack for 2026: Five Tools, One Workflow",
    blurb:
      "From dispatch to invoicing, this is the exact software stack we recommend for growing HVAC companies with 5-15 trucks.",
    tag: "HVAC",
    date: "Aug 4, 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    slug: "/guides/hvac",
  },
  {
    id: "cb-2",
    kicker: "OPERATIONS",
    headline: "Waste Fleet Automation: The $200/mo Stack That Saves 12 Hours a Week",
    blurb:
      "Independent haulers are switching from paper dispatch to cloud-native platforms. The ROI math is no longer debatable.",
    tag: "Waste Management",
    date: "Aug 2, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    slug: "/guides/waste-management",
  },
  {
    id: "cb-3",
    kicker: "AI STRATEGY",
    headline: "Why Custom AI Builds Are Replacing SaaS for Growth-Stage Companies",
    blurb:
      "Off-the-shelf software handles 80% of the job. The last 20% is where custom AI agents create a competitive moat.",
    tag: "Custom AI",
    date: "Jul 30, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
    slug: "/services/it-audits",
  },
];

export const stickyBanner = {
  text: "Get your personalized automation stack recommendation",
  ctaLabel: "Start Free Audit",
  ctaUrl: "/services/it-audits",
};

// Centralized affiliate product data — update links here and they update everywhere
export const verticals = {
  hvac: {
    name: "HVAC & Field Service",
    slug: "hvac",
    iconName: "Wrench",
    tagline: "AI dispatch, route optimization, CRM automation, and smart scheduling for field service teams.",
    heroImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
  },
  "waste-management": {
    name: "Waste Management & Sanitation",
    slug: "waste-management",
    iconName: "Trash2",
    tagline: "Smart fleet optimization, automated route dispatch, scale house integration, and IoT bin monitoring.",
    heroImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
  },
};

export const products = [
  // ──── HVAC ────
  {
    id: "servicetitan",
    vertical: "hvac",
    name: "ServiceTitan",
    category: "AI & Automation",
    description: "The #1 AI-powered platform for HVAC, plumbing, and electrical. Smart dispatching, automated follow-ups, AI-driven pricing, and real-time technician tracking.",
    price: "Custom pricing",
    affiliateUrl: "#", // TODO: Replace with your ServiceTitan affiliate link
    logo: "https://logo.clearbit.com/servicetitan.com",
    rating: 4.7,
    features: ["AI smart dispatch", "Automated customer follow-ups", "Dynamic pricing engine", "Real-time GPS tracking", "Integrated payments"],
    bestFor: "Mid to large HVAC companies ready to scale",
    isTopPick: true,
    socialProof: "The platform HVAC companies with 5+ trucks use to automate dispatch and double their booking rate.",
    stackRecommendations: {
      solo: { rank: 5, reason: "Too expensive and complex for a one-person shop. Start with Kickserv instead." },
      small: { rank: 2, reason: "Great if you're ready to invest in scaling — best-in-class AI dispatch." },
      growth: { rank: 1, reason: "Built for this exact stage. AI dispatch + dynamic pricing engine scales with every truck you add." },
      enterprise: { rank: 1, reason: "Industry standard. Every large HVAC operation runs on ServiceTitan." },
    },
  },
  {
    id: "jobber",
    vertical: "hvac",
    name: "Jobber",
    category: "Automation",
    description: "Automated quoting, scheduling, invoicing, and client communication for field service businesses. Clean UI, fast setup.",
    price: "From $39/mo",
    affiliateUrl: "#", // TODO: Replace with your Jobber affiliate link
    logo: "https://logo.clearbit.com/getjobber.com",
    rating: 4.6,
    features: ["Automated quoting & invoicing", "Client hub portal", "Route optimization", "Batch invoicing", "Zapier integrations"],
    bestFor: "Small HVAC shops wanting simple automation",
    isTopPick: false,
    socialProof: "The go-to for HVAC owners who want clean automation without the enterprise price tag.",
    stackRecommendations: {
      solo: { rank: 2, reason: "Almost as simple as Kickserv but with better quoting and client portal." },
      small: { rank: 1, reason: "Perfect fit — clean UI, fast setup, handles quoting + invoicing + scheduling in one place." },
      growth: { rank: 3, reason: "Great starter but you may outgrow it. Consider ServiceTitan at this stage." },
      enterprise: { rank: 5, reason: "Too lightweight for enterprise operations. Move to ServiceTitan." },
    },
  },
  {
    id: "housecallpro",
    vertical: "hvac",
    name: "Housecall Pro",
    category: "AI & Automation",
    description: "All-in-one field service automation with AI-powered dispatching, automated review requests, and real-time job tracking.",
    price: "From $49/mo",
    affiliateUrl: "#", // TODO: Replace with your Housecall Pro affiliate link
    logo: "https://logo.clearbit.com/housecallpro.com",
    rating: 4.5,
    features: ["AI dispatch", "Automated review requests", "Online booking", "GPS tracking", "QuickBooks sync"],
    bestFor: "Growing HVAC teams needing dispatch + marketing",
    isTopPick: false,
    socialProof: "The HVAC teams that care about Google reviews AND dispatch efficiency use Housecall Pro.",
    stackRecommendations: {
      solo: { rank: 3, reason: "Solid choice if you want automated review requests to build your reputation fast." },
      small: { rank: 2, reason: "Best dispatch + marketing combo at this price point. The review automation alone pays for itself." },
      growth: { rank: 2, reason: "Strong contender against ServiceTitan — especially if marketing automation matters to you." },
      enterprise: { rank: 4, reason: "Missing some enterprise features. ServiceTitan is the better choice at scale." },
    },
  },
  {
    id: "fieldedge",
    vertical: "hvac",
    name: "FieldEdge",
    category: "IT & Software",
    description: "Service management platform built specifically for HVAC/plumbing with real-time dispatching, flat-rate pricing, and service agreement tracking.",
    price: "Custom pricing",
    affiliateUrl: "#", // TODO: Replace with your FieldEdge affiliate link
    logo: "https://logo.clearbit.com/fieldedge.com",
    rating: 4.3,
    features: ["Flat-rate pricing book", "Service agreement automation", "Real-time dispatch board", "QuickBooks integration", "Performance dashboards"],
    bestFor: "Established HVAC businesses with service agreements",
    isTopPick: false,
    socialProof: "HVAC companies with heavy service agreement portfolios run FieldEdge to automate renewals and flat-rate pricing.",
    stackRecommendations: {
      solo: { rank: 4, reason: "Overkill if you don't have service agreements. Start simpler." },
      small: { rank: 3, reason: "Good if you're already managing recurring service agreements." },
      growth: { rank: 3, reason: "Strong for service-agreement-heavy businesses. The flat-rate pricing book saves hours." },
      enterprise: { rank: 2, reason: "Excellent for established shops with large agreement portfolios." },
    },
  },
  {
    id: "kickserv",
    vertical: "hvac",
    name: "Kickserv",
    category: "Automation",
    description: "Lightweight field service management with job scheduling, estimates, invoicing, and customer tracking at an affordable price.",
    price: "From $47/mo",
    affiliateUrl: "#", // TODO: Replace with your Kickserv affiliate link
    logo: "https://logo.clearbit.com/kickserv.com",
    rating: 4.2,
    features: ["Job scheduling", "Estimates & invoicing", "Customer database", "Google Calendar sync", "Payment processing"],
    bestFor: "Solo HVAC techs and small teams on a budget",
    isTopPick: false,
    socialProof: "The tool solo HVAC techs use when they want to stop using spreadsheets and start looking professional.",
    stackRecommendations: {
      solo: { rank: 1, reason: "This is your tool. Simple, affordable, gets you off spreadsheets immediately. All you need right now." },
      small: { rank: 4, reason: "May feel limited once you add a second tech. Consider Jobber for the client portal." },
      growth: { rank: 5, reason: "You've outgrown this. Move to Housecall Pro or ServiceTitan." },
      enterprise: { rank: 5, reason: "Not built for enterprise. Move up." },
    },
  },

  // ──── WASTE MANAGEMENT ────
  {
    id: "amcs-group",
    vertical: "waste-management",
    name: "AMCS Platform",
    category: "AI & Automation",
    description: "Enterprise waste and recycling management with AI route optimization, IoT bin monitoring, and automated scale house operations.",
    price: "Custom pricing",
    affiliateUrl: "#", // TODO: Replace with your AMCS affiliate link
    logo: "https://logo.clearbit.com/amcsgroup.com",
    rating: 4.8,
    features: ["AI Route Optimization", "IoT Smart Bin Sensors", "Automated Scale House", "Billing & Invoicing AI", "Compliance & ESG Reporting"],
    bestFor: "Commercial waste haulers and recycling operations",
    isTopPick: true,
    socialProof: "The platform commercial haulers with 10+ trucks use to cut fuel costs 20% with AI route optimization.",
    stackRecommendations: {
      solo: { rank: 5, reason: "Enterprise-grade and enterprise-priced. Way too much for a solo operation." },
      small: { rank: 4, reason: "Unless you have the budget, Curb Waste gives you 80% of this at 20% of the cost." },
      growth: { rank: 1, reason: "This is where AMCS shines. AI route optimization pays for itself with fuel savings alone." },
      enterprise: { rank: 1, reason: "The gold standard for large waste operations. IoT + AI + compliance in one platform." },
    },
  },
  {
    id: "routeware",
    vertical: "waste-management",
    name: "Routeware",
    category: "Automation",
    description: "Smart fleet management for waste haulers with automated route dispatch, driver tablet automation, and real-time missed pick-up alerts.",
    price: "Custom pricing",
    affiliateUrl: "#", // TODO: Replace with your Routeware affiliate link
    logo: "https://logo.clearbit.com/routeware.com",
    rating: 4.6,
    features: ["In-cab driver automation", "Real-time route tracking", "Customer notification automation", "Missed pickup resolution", "Fleet maintenance sync"],
    bestFor: "Municipal and private waste collection fleets",
    isTopPick: false,
    socialProof: "Municipal waste fleets that eliminated 90% of missed pickup complaints use Routeware's driver tablet system.",
    stackRecommendations: {
      solo: { rank: 4, reason: "Built for fleets, not solo operators. Look at Trash Flow instead." },
      small: { rank: 2, reason: "Great if your biggest problem is missed pickups and driver accountability." },
      growth: { rank: 2, reason: "The driver tablet automation and missed pickup resolution are game-changers at this scale." },
      enterprise: { rank: 2, reason: "Strong complement to AMCS — especially for municipal contracts." },
    },
  },
  {
    id: "curb-waste",
    vertical: "waste-management",
    name: "Curb Waste",
    category: "AI & Automation",
    description: "Modern cloud-native waste operating system for roll-off, commercial, and residential haulers with automated scheduling and digital dispatch.",
    price: "From $199/mo",
    affiliateUrl: "#", // TODO: Replace with your Curb Waste affiliate link
    logo: "https://logo.clearbit.com/curbwaste.com",
    rating: 4.7,
    features: ["Digital Dispatch Board", "Roll-off Container Tracking", "Automated Billing & Cards", "Driver Mobile App", "Real-Time Fleet Map"],
    bestFor: "Independent haulers wanting modern cloud automation",
    isTopPick: false,
    socialProof: "Independent haulers who switched from paper dispatch to Curb Waste saved 12+ hours per week on average.",
    stackRecommendations: {
      solo: { rank: 2, reason: "Best modern option for solo operators who want real automation, not just software." },
      small: { rank: 1, reason: "The sweet spot. Cloud-native, affordable, and the digital dispatch board is industry-leading." },
      growth: { rank: 2, reason: "Excellent choice — but evaluate AMCS if you're scaling past 15 trucks." },
      enterprise: { rank: 3, reason: "Great platform but may need AMCS-level features at enterprise scale." },
    },
  },
  {
    id: "trash-flow",
    vertical: "waste-management",
    name: "Trash Flow",
    category: "IT & Software",
    description: "Dedicated hauling management software for container tracking, route sheets, automated billing, and customer account management.",
    price: "From $45/mo",
    affiliateUrl: "#", // TODO: Replace with your Trash Flow affiliate link
    logo: "https://logo.clearbit.com/trashflow.com",
    rating: 4.4,
    features: ["Container tracking", "Automated route mapping", "Account billing & receipts", "Disposal site tracking", "Customer history log"],
    bestFor: "Local waste haulers looking for reliable core software",
    isTopPick: false,
    socialProof: "The software local haulers use when they need reliable billing and container tracking without the enterprise price.",
    stackRecommendations: {
      solo: { rank: 1, reason: "Simple, affordable, and built for exactly your situation. Start here." },
      small: { rank: 3, reason: "Solid foundation but you'll want more automation soon. Consider Curb Waste." },
      growth: { rank: 4, reason: "You've outgrown this. Time to move to Curb Waste or AMCS." },
      enterprise: { rank: 5, reason: "Not built for enterprise operations." },
    },
  },
  {
    id: "rubicon",
    vertical: "waste-management",
    name: "Rubicon Connect",
    category: "Automation",
    description: "AI and cloud-based technology platform for waste management, recycling logistics, and city municipal fleet optimization.",
    price: "Custom pricing",
    affiliateUrl: "#", // TODO: Replace with your Rubicon affiliate link
    logo: "https://logo.clearbit.com/rubicon.com",
    rating: 4.5,
    features: ["Smart city fleet optimization", "Recycling tracking & metrics", "Vendor portal automation", "Cost optimization dashboard", "Environmental reporting"],
    bestFor: "Municipalities and large enterprise waste accounts",
    isTopPick: false,
    socialProof: "The platform municipalities use to optimize city-wide waste operations and hit ESG reporting targets.",
    stackRecommendations: {
      solo: { rank: 5, reason: "Built for cities and enterprises, not solo haulers." },
      small: { rank: 5, reason: "Way too much platform for a small operation." },
      growth: { rank: 3, reason: "Consider this if you're bidding on municipal contracts." },
      enterprise: { rank: 2, reason: "Strong choice for municipal contracts and ESG-focused enterprise accounts." },
    },
  },
];

// Business size options for the stack switcher with clean Lucide icon names
export const businessSizes = [
  { id: "solo", label: "Solo Tech", iconName: "User", description: "Just me, 1 truck" },
  { id: "small", label: "Small Team", iconName: "Users", description: "2–5 employees" },
  { id: "growth", label: "Growth Stage", iconName: "TrendingUp", description: "5–15 employees" },
  { id: "enterprise", label: "Enterprise", iconName: "Building2", description: "15+ employees" },
];

export function getVertical(slug) {
  return verticals[slug] || null;
}

export function getProductsByVertical(slug) {
  return products.filter((p) => p.vertical === slug);
}

export function getAllVerticals() {
  return Object.values(verticals);
}

export function getStackForSize(verticalSlug, sizeId) {
  const verticalProducts = getProductsByVertical(verticalSlug);
  return [...verticalProducts].sort((a, b) => {
    const rankA = a.stackRecommendations?.[sizeId]?.rank ?? 99;
    const rankB = b.stackRecommendations?.[sizeId]?.rank ?? 99;
    return rankA - rankB;
  });
}

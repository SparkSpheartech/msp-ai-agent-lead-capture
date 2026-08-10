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
  daycare: {
    name: "Daycares & Childcare",
    slug: "daycare",
    iconName: "Baby",
    tagline: "Automated tuition billing, parent messaging apps, digital sign-in, and child attendance tracking.",
    heroImage: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
  },
  barbershop: {
    name: "Barbershops & Grooming",
    slug: "barbershop",
    iconName: "Scissors",
    tagline: "Walk-in queue kiosks, 24/7 chair booking, automated deposit holds, and chair rental payouts for barbershop owners.",
    heroImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
  },
  salon: {
    name: "Salons & Day Spas",
    slug: "salon",
    iconName: "Scissors",
    tagline: "24/7 online booking, deposit collection, automated SMS reminders, and chair rental software.",
    heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
  },
  restaurant: {
    name: "Restaurants & Hospitality",
    slug: "restaurant",
    iconName: "Utensils",
    tagline: "Cloud POS, QR order-at-table, kitchen display systems, and automated inventory forecasting.",
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
  },
  "auto-repair": {
    name: "Auto Repair & Mechanics",
    slug: "auto-repair",
    iconName: "Car",
    tagline: "Digital vehicle inspections (DVI), part ordering integrations, text-to-pay, and Bay scheduling.",
    heroImage: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
  },
};

export const products = [
  // HVAC
  {
    id: "servicetitan",
    name: "ServiceTitan",
    vertical: "hvac",
    rating: 4.8,
    reviewsCount: 1420,
    pricing: "Custom quote",
    affiliateUrl: "https://www.servicetitan.com",
    logo: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=120&q=80",
    tagline: "All-in-one software for commercial and residential field service operations.",
    bestFor: "Enterprise & Growth field service teams with 5+ techs",
    badge: "Best for Scale",
    pros: ["AI dispatch wizard", "Mobile pricebook", "Automated marketing automation"],
    cons: ["Premium pricing tier", "Requires dedicated setup onboarding"],
    stackRecommendations: {
      solo: { rank: 3, note: "Overkill for solo operators, consider Jobber first" },
      small: { rank: 2, note: "Great if planning rapid tech expansion" },
      growth: { rank: 1, note: "Industry gold standard for scaling commercial fleets" },
      enterprise: { rank: 1, note: "Undisputed leader for multi-location operations" }
    }
  },
  {
    id: "housecall-pro",
    name: "Housecall Pro",
    vertical: "hvac",
    rating: 4.7,
    reviewsCount: 2150,
    pricing: "From $49/mo",
    affiliateUrl: "https://www.housecallpro.com",
    logo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=120&q=80",
    tagline: "Simple dispatch, invoicing, and customer booking built for independent trades.",
    bestFor: "Solo operators and teams of 1 to 10 techs",
    badge: "Most Popular",
    pros: ["Quick 1-day setup", "Seamless Quickbooks integration", "Built-in online booking widget"],
    cons: ["Limited multi-tier pricebook options on lower plans"],
    stackRecommendations: {
      solo: { rank: 1, note: "Top pick for fast setup & low monthly overhead" },
      small: { rank: 1, note: "Perfect balance of features and affordable monthly pricing" },
      growth: { rank: 2, note: "Handles up to 15 techs seamlessly" },
      enterprise: { rank: 3, note: "May require enterprise ERP integrations at 20+ techs" }
    }
  },
  {
    id: "jobber",
    name: "Jobber",
    vertical: "hvac",
    rating: 4.6,
    reviewsCount: 1890,
    pricing: "From $39/mo",
    affiliateUrl: "https://go.getjobber.com/452pr6gjs8rz",
    logo: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=120&q=80",
    tagline: "Flexible job management, client hub, and automatic payment reminders.",
    bestFor: "Small service teams seeking flexible scheduling & client portals",
    badge: "Best Customer Portal",
    pros: ["Self-service client portal", "Automated SMS quote follow-ups", "Drag-and-drop route calendar"],
    cons: ["Advanced inventory tracking requires add-on apps"],
    stackRecommendations: {
      solo: { rank: 2, note: "Excellent job tracking and client communication tools" },
      small: { rank: 2, note: "High adoption rate among field technicians" },
      growth: { rank: 3, note: "Solid reporting and job costing metrics" },
      enterprise: { rank: 4, note: "Best paired with custom ERP connectors" }
    }
  },

  // WASTE MANAGEMENT
  {
    id: "routific",
    name: "Routific",
    vertical: "waste-management",
    rating: 4.8,
    reviewsCount: 640,
    pricing: "From $40/driver/mo",
    affiliateUrl: "https://www.routific.com",
    logo: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=120&q=80",
    tagline: "AI-powered route optimization and driver dispatch for waste & delivery fleets.",
    bestFor: "Commercial waste, roll-off, and recurring haul routes",
    badge: "Best Route Optimizer",
    pros: ["Cuts fuel costs by up to 22%", "Driver mobile app with offline mode", "Instant customer arrival notifications"],
    cons: ["Requires separate billing integration for scale houses"],
    stackRecommendations: {
      solo: { rank: 1, note: "Reduces weekly driving hours immediately" },
      small: { rank: 1, note: "Essential for 2-5 truck operations" },
      growth: { rank: 1, note: "Handles complex multi-stop residential & commercial routes" },
      enterprise: { rank: 2, note: "Pairs with enterprise telematics systems" }
    }
  },

  // BARBERSHOP
  {
    id: "squire",
    name: "SQUIRE",
    vertical: "barbershop",
    rating: 4.9,
    reviewsCount: 3100,
    pricing: "From $100/mo",
    affiliateUrl: "https://www.getsquire.com",
    logo: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=120&q=80",
    tagline: "All-in-one barbershop management, chair rental payouts, and booking kiosk software.",
    bestFor: "Modern barbershops, multi-chair shops, and booth rental operations",
    badge: "Industry Leader",
    pros: ["Automated booth rent collection", "Walk-in kiosk tablet app", "Apple Pay & contactless checkout"],
    cons: ["Slightly higher monthly subscription fee than generic tools"],
    stackRecommendations: {
      solo: { rank: 1, note: "Eliminates no-shows with card-on-file deposit holds" },
      small: { rank: 1, note: "Automates barber payout splits instantly" },
      growth: { rank: 1, note: "Multi-location franchise dashboard included" },
      enterprise: { rank: 1, note: "Dominates high-volume barbershop networks nationwide" }
    }
  },

  // SALON
  {
    id: "boulevard",
    name: "Boulevard",
    vertical: "salon",
    rating: 4.8,
    reviewsCount: 1280,
    pricing: "From $175/mo",
    affiliateUrl: "https://www.joinblvd.com",
    logo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=120&q=80",
    tagline: "Precision scheduling, automated client retention, and sleek salon checkout.",
    bestFor: "High-end salons, day spas, and med-spas",
    badge: "Best for Luxury Spas",
    pros: ["Self-booking algorithm optimizes chair utilization", "Integrated client formula notes", "Automated rebooking campaigns"],
    cons: ["Premium monthly price point"],
    stackRecommendations: {
      solo: { rank: 2, note: "Great for luxury solo estheticians & stylists" },
      small: { rank: 1, note: "Unmatched aesthetic and client experience" },
      growth: { rank: 1, note: "Maximizes chair revenue and reduces gaps" },
      enterprise: { rank: 1, note: "Enterprise reporting and commission tracking" }
    }
  },

  // RESTAURANT
  {
    id: "toast",
    name: "Toast POS",
    vertical: "restaurant",
    rating: 4.8,
    reviewsCount: 5200,
    pricing: "From $0/mo Pay-as-you-go",
    affiliateUrl: "https://pos.toasttab.com",
    logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=120&q=80",
    tagline: "Cloud restaurant POS, kitchen display system (KDS), and online ordering.",
    bestFor: "Independent taquerias, diners, bars, and full-service restaurants",
    badge: "Top Choice",
    pros: ["Handheld order & pay tableside hardware", "Direct online ordering (no 30% doorDash fees)", "Real-time kitchen display screens"],
    cons: ["Requires Toast processing hardware"],
    stackRecommendations: {
      solo: { rank: 1, note: "Starter pay-as-you-go tier lowers upfront costs" },
      small: { rank: 1, note: "Speeds up table turn times by 20%" },
      growth: { rank: 1, note: "Full inventory forecasting and labor scheduling" },
      enterprise: { rank: 1, note: "Multi-unit restaurant group management" }
    }
  },

  // AUTO REPAIR
  {
    id: "tekmetric",
    name: "Tekmetric",
    vertical: "auto-repair",
    rating: 4.9,
    reviewsCount: 1750,
    pricing: "From $199/mo",
    affiliateUrl: "https://www.tekmetric.com",
    logo: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=120&q=80",
    tagline: "Cloud auto repair shop management, digital vehicle inspections (DVI), and parts ordering.",
    bestFor: "Independent auto repair shops, brake centers, and transmission specialists",
    badge: "Best Cloud Shop Software",
    pros: ["Text inspection photos/videos directly to vehicle owners", "Integrated parts catalog search (WORLDPAC, NAPA)", "Text-to-pay checkout"],
    cons: ["Requires internet connectivity for shop floor tablets"],
    stackRecommendations: {
      solo: { rank: 1, note: "Boosts average repair order (ARO) with photo DVIs" },
      small: { rank: 1, note: "Keeps advisors and techs synced in real time" },
      growth: { rank: 1, note: "Multi-shop dashboard and gross profit tracking" },
      enterprise: { rank: 1, note: "Top recommended shop management system" }
    }
  },

  // DAYCARE
  {
    id: "brightwheel",
    name: "Brightwheel",
    vertical: "daycare",
    rating: 4.8,
    reviewsCount: 2900,
    pricing: "Custom quote",
    affiliateUrl: "https://mybrightwheel.com",
    logo: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
    tagline: "All-in-one childcare management, parent app, contactless check-in, and auto-tuition billing.",
    bestFor: "Daycares, preschools, and early learning centers",
    badge: "Parent Favorite",
    pros: ["Instant photo & video sharing with parents", "Automated recurring tuition billing", "State licensing compliance logs"],
    cons: ["Requires internet access for classroom staff"],
    stackRecommendations: {
      solo: { rank: 1, note: "Saves hours on weekly tuition invoicing" },
      small: { rank: 1, note: "Drastically improves parent satisfaction and retention" },
      growth: { rank: 1, note: "Centralized multi-room staff ratios and attendance" },
      enterprise: { rank: 1, note: "Multi-center childcare network management" }
    }
  },

  // WEBSITE BUILDER & HOSTING
  {
    id: "hostinger",
    name: "Hostinger Website Builder",
    vertical: "barbershop",
    rating: 4.9,
    reviewsCount: 3400,
    pricing: "From $2.99/mo",
    affiliateUrl: "https://www.hostinger.com/cart?product=hosting%3Ahostinger_premium&period=12&referral_type=cart_link&REFERRALCODE=I0QSPARKSXCF&referral_id=019febed-ca7e-705f-aba6-9e40df620af8&product_type=website-builder",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=120&q=80",
    tagline: "AI-powered website builder, free custom domain, business email, and lightning-fast web hosting for small business owners.",
    bestFor: "Small business owners needing a professional AI-generated website in minutes",
    badge: "Top Pick for Web",
    pros: ["AI site creator & logo generator", "Free custom domain & business email", "Unmatched speed & 99.9% uptime SLA"],
    cons: ["Advanced custom code requires developer access"],
    stackRecommendations: {
      solo: { rank: 1, note: "The single best solution for launching your small business website fast" },
      small: { rank: 1, note: "Includes free domain, email, and SSL out of the box" },
      growth: { rank: 1, note: "Handles heavy traffic with built-in CDN & security" },
      enterprise: { rank: 2, note: "Pairs with custom Next.js frontends" }
    }
  }
];

// Business size options for the stack switcher with clean Lucide icon names
export const businessSizes = [
  { id: "solo", label: "Solo Operator", iconName: "User", description: "Just me, 1 location/truck" },
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

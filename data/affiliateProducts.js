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

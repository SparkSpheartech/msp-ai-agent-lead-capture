export const industryBriefs = {
  hvac: {
    slug: "hvac",
    name: "HVAC & Field Service",
    problem: "Technicians losing 15+ hours weekly to manual dispatch, missed after-hours calls, and paper invoicing tag.",
    summary: "Field service operators face severe margin leakage when emergency calls are missed or dispatching depends on manual phone trees.",
    outcome: "Automated AI call routing, instant technician GPS dispatching, and mobile digital pricebook integration.",
    serviceRoute: "/services/ai-automation",
    blogUrl: "https://blog.sparkspheartechsolutions.com/p/ai-agents-small-business-automation-2025",
    heroImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "HVAC, plumbing, electrical, and field service teams operating 1 to 20 service vehicles.",
    whatToEvaluate: "Look for real-time CRM webhooks, offline mobile app access for field techs, and automated SMS customer notifications.",
    whatWeBuild: "Custom AI phone dispatchers, automated job card creation, and bi-directional sync with field service platforms."
  },
  "waste-management": {
    slug: "waste-management",
    name: "Waste Management & Sanitation",
    problem: "Route overlap, excessive fuel consumption, and disconnected scale house weight tickets.",
    summary: "Commercial waste haulers and roll-off operators waste fuel and time driving sub-optimal routes without live bin telemetry.",
    outcome: "AI route optimization, driver dispatch apps, and automated scale house billing integration.",
    serviceRoute: "/services/it-audits",
    blogUrl: "https://blog.sparkspheartechsolutions.com",
    heroImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "Independent waste haulers, septic service providers, and roll-off dumpster rentals.",
    whatToEvaluate: "Look for multi-stop vehicle routing algorithms, scale house weight ticket parsing, and driver mobile compliance.",
    whatWeBuild: "Automated route optimization pipelines, scale house data bridges, and customer arrival notification triggers."
  },
  daycare: {
    slug: "daycare",
    name: "Daycares & Childcare",
    problem: "Hours spent chasing paper tuition checks, manual attendance logging, and parent communication tag.",
    summary: "Childcare directors lose administrative focus to manual billing reconciliation and licensing attendance logs.",
    outcome: "Automated recurring tuition billing, digital sign-in kiosks, and instant parent messaging apps.",
    serviceRoute: "/services/ai-automation",
    blogUrl: "https://blog.sparkspheartechsolutions.com",
    heroImage: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "Daycares, preschools, and early childhood learning centers with 10 to 200 enrolled children.",
    whatToEvaluate: "Prioritize automated ACH tuition processing, contactless parent check-in, and digital state ratio logs.",
    whatWeBuild: "Auto-billing notification workflows, staff ratio tracking alerts, and parent intake automation."
  },
  barbershop: {
    slug: "barbershop",
    name: "Barbershops & Grooming",
    problem: "Post-graduation business literacy gap, empty chairs, and cash flow logging friction.",
    summary: "New shop owners hit a financial wall because vocational training focuses on cutting skills rather than business systems.",
    outcome: "24/7 self-service booking, card-on-file deposit holds, and automated booth rent collection.",
    serviceRoute: "/services/ai-automation",
    blogUrl: "https://blog.sparkspheartechsolutions.com/p/barbershop-owner-automation-guide",
    heroImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "Barbershop owners, booth renters, and multi-chair grooming studios.",
    whatToEvaluate: "Look for automated no-show deposit collection, walk-in queue kiosks, and barber payout splits.",
    whatWeBuild: "AI booking copilots, automated client re-engagement campaigns, and custom web portals."
  },
  salon: {
    slug: "salon",
    name: "Salons & Day Spas",
    problem: "High no-show rates, lost appointment gaps, and manual client formula tracking.",
    summary: "Spa and salon owners lose significant revenue when schedule gaps remain unfilled and clients forget appointments.",
    outcome: "Automated SMS waitlist fills, card-on-file deposit holds, and digital client history records.",
    serviceRoute: "/services/web-design",
    blogUrl: "https://blog.sparkspheartechsolutions.com",
    heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "Salons, day spas, med-spas, and aesthetic treatment centers.",
    whatToEvaluate: "Evaluate chair utilization algorithms, automated deposit processing, and client retention marketing.",
    whatWeBuild: "Custom luxury web booking engines, waitlist fill automatons, and client retention workflows."
  },
  restaurant: {
    slug: "restaurant",
    name: "Restaurants & Hospitality",
    problem: "High third-party delivery commissions, slow table turn times, and kitchen communication friction.",
    summary: "Independent restaurants lose margins to 30% third-party ordering fees and paper kitchen tickets.",
    outcome: "Cloud POS integration, QR code order-at-table, and zero-commission direct web ordering.",
    serviceRoute: "/services/web-design",
    blogUrl: "https://blog.sparkspheartechsolutions.com",
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "Independent restaurants, diners, bars, and food service groups.",
    whatToEvaluate: "Look for kitchen display system (KDS) integration, direct online ordering, and real-time inventory forecasting.",
    whatWeBuild: "Direct web ordering systems, Toast POS integrations, and automated inventory alerts."
  },
  "auto-repair": {
    slug: "auto-repair",
    name: "Auto Repair & Mechanics",
    problem: "Low average repair orders (ARO), manual parts catalog searches, and customer phone updates.",
    summary: "Auto repair shops lose billable hours when service advisors spend time calling customers for routine approvals.",
    outcome: "Digital vehicle inspections (DVI) with photo/video texting, text-to-pay checkout, and parts ordering integration.",
    serviceRoute: "/services/it-audits",
    blogUrl: "https://blog.sparkspheartechsolutions.com",
    heroImage: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "Independent auto repair shops, brake centers, and transmission specialists.",
    whatToEvaluate: "Prioritize digital inspection photo texting, electronic parts lookup, and text payment options.",
    whatWeBuild: "Automated inspection report workflows, customer SMS status updates, and shop management bridges."
  }
};

export function getIndustryBrief(slug) {
  return industryBriefs[slug] || null;
}

export function getAllIndustryBriefs() {
  return Object.values(industryBriefs);
}

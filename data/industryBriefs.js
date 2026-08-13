export const industryBriefs = {
  hvac: {
    slug: "hvac",
    name: "HVAC & Field Service",
    problem: "Technicians spend significant time on manual dispatch, missed after-hours calls, and paper invoicing instead of billable service work.",
    summary: "Field service operators face margin pressure when emergency calls go unanswered or dispatching depends on manual phone trees and spreadsheets.",
    whatToEvaluate: "Look for real-time CRM webhooks, offline mobile app access for field techs, automated SMS customer notifications, and whether existing dispatch software handles after-hours routing.",
    whatWeBuild: "Lead intake agents, quote follow-up agents, dispatch coordination agents, and customer-status notification workflows.",
    serviceRoute: "/services/ai-automation",
    blogUrl: "https://blog.sparkspheartechsolutions.com",
    blogLabel: "Explore Field Notes Research",
    heroImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "HVAC, plumbing, electrical, and field service teams operating 1 to 20 service vehicles."
  },
  "waste-management": {
    slug: "waste-management",
    name: "Waste Management & Sanitation",
    problem: "Route overlap, excessive fuel consumption, and disconnected scale house weight tickets create operational drag across commercial hauling operations.",
    summary: "Commercial waste haulers and roll-off operators waste fuel and time driving sub-optimal routes without live bin telemetry or automated exception handling.",
    whatToEvaluate: "Look for multi-stop vehicle routing algorithms, scale house weight ticket parsing, driver mobile compliance tools, and whether existing route software handles exceptions automatically.",
    whatWeBuild: "Route-exception agents, pickup notification agents, scale-ticket extraction workflows, and billing-data bridge automations.",
    serviceRoute: "/services/ai-automation",
    blogUrl: "https://blog.sparkspheartechsolutions.com",
    blogLabel: "Explore Field Notes Research",
    heroImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "Independent waste haulers, septic service providers, and roll-off dumpster rentals."
  },
  daycare: {
    slug: "daycare",
    name: "Daycares & Childcare",
    problem: "Hours spent chasing paper tuition checks, manual attendance logging, and parent communication create administrative drag for childcare directors.",
    summary: "Childcare directors lose administrative focus to manual billing reconciliation, licensing attendance logs, and parent communication overhead.",
    whatToEvaluate: "Prioritize automated ACH tuition processing, contactless parent check-in, digital state ratio tracking, and whether existing childcare management software covers enrollment intake.",
    whatWeBuild: "Enrollment intake agents, parent communication agents, document collection workflows, and attendance exception summaries.",
    serviceRoute: "/services/ai-automation",
    blogUrl: "https://blog.sparkspheartechsolutions.com",
    blogLabel: "Explore Field Notes Research",
    heroImage: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "Daycares, preschools, and early childhood learning centers with 10 to 200 enrolled children."
  },
  barbershop: {
    slug: "barbershop",
    name: "Barbershops & Grooming",
    problem: "Post-graduation business literacy gap, empty chairs from missed calls, and cash flow logging friction prevent shop growth.",
    summary: "New shop owners hit a financial wall because vocational training focuses on cutting skills rather than business systems, booking workflows, and client retention.",
    whatToEvaluate: "Look for automated no-show deposit collection, walk-in queue management, barber payout splits, and whether existing booking software handles missed-call follow-up.",
    whatWeBuild: "Missed-call and booking agents, rebooking and retention agents, client intake chatbots, and owner operations summaries.",
    serviceRoute: "/services/ai-automation",
    blogUrl: "https://blog.sparkspheartechsolutions.com/p/barbershop-owner-automation-guide",
    blogLabel: "Read Full Research on Field Notes",
    heroImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "Barbershop owners, booth renters, and multi-chair grooming studios."
  },
  salon: {
    slug: "salon",
    name: "Salons & Day Spas",
    problem: "High no-show rates, lost appointment gaps, and manual client formula tracking reduce revenue and stylist utilization.",
    summary: "Spa and salon owners lose significant revenue when schedule gaps remain unfilled and clients forget appointments without automated follow-up.",
    whatToEvaluate: "Evaluate chair utilization tracking, automated deposit processing, client retention marketing, and whether existing salon software handles waitlist fills and rebooking reminders.",
    whatWeBuild: "Missed-call follow-up agents, waitlist fill workflows, rebooking reminder agents, and client intake chatbots.",
    serviceRoute: "/services/ai-automation",
    blogUrl: "https://blog.sparkspheartechsolutions.com",
    blogLabel: "Explore Field Notes Research",
    heroImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "Salons, day spas, med-spas, and aesthetic treatment centers."
  },
  restaurant: {
    slug: "restaurant",
    name: "Restaurants & Hospitality",
    problem: "High third-party delivery commissions, slow table turn times, and kitchen communication friction reduce margins for independent restaurants.",
    summary: "Independent restaurants lose margins to third-party ordering fees, missed reservation inquiries, and manual catering coordination.",
    whatToEvaluate: "Look for kitchen display system (KDS) integration, direct online ordering, real-time inventory tracking, and whether existing POS software handles reservation and catering inquiries.",
    whatWeBuild: "Reservation and inquiry agents, catering intake agents, direct-ordering chatbots, and review-request workflows.",
    serviceRoute: "/services/ai-automation",
    blogUrl: "https://blog.sparkspheartechsolutions.com",
    blogLabel: "Explore Field Notes Research",
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "Independent restaurants, diners, bars, and food service groups."
  },
  "auto-repair": {
    slug: "auto-repair",
    name: "Auto Repair & Mechanics",
    problem: "Low average repair orders, manual parts catalog searches, and customer phone updates consume service advisor time that could be billable.",
    summary: "Auto repair shops lose billable hours when service advisors spend time calling customers for routine approvals and status updates.",
    whatToEvaluate: "Prioritize digital inspection photo texting, electronic parts lookup, text payment options, and whether existing shop management software handles customer approval workflows.",
    whatWeBuild: "Inspection approval agents, customer-status chatbots, estimate follow-up agents, and service reminder workflows.",
    serviceRoute: "/services/ai-automation",
    blogUrl: "https://blog.sparkspheartechsolutions.com",
    blogLabel: "Explore Field Notes Research",
    heroImage: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80",
    whoIsItFor: "Independent auto repair shops, brake centers, and transmission specialists."
  }
};

export function getIndustryBrief(slug) {
  return industryBriefs[slug] || null;
}

export function getAllIndustryBriefs() {
  return Object.values(industryBriefs);
}

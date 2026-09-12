"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Bot,
  Calculator,
  Check,
  Loader2,
  MessageSquareText,
  PhoneCall,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Workflow,
  Layers,
  Building2,
} from "lucide-react";

export default function Pricing() {
  const [loading, setLoading] = useState(null);
  const [inquiries, setInquiries] = useState(10);
  const [avgValue, setAvgValue] = useState(75);
  const [manualHours, setManualHours] = useState(12);
  const [automationFit, setAutomationFit] = useState(30);

  const monthlyInquiryValue = inquiries * 4 * avgValue;
  const monthlyHoursValue = manualHours * 4 * 35;
  const illustrativeOpportunity = Math.round(
    (monthlyInquiryValue + monthlyHoursValue) * (automationFit / 100)
  );
  const illustrativeHours = Math.round(manualHours * 4 * (automationFit / 100));

  let recommendedPlan = "SIGNAL START";
  if (inquiries + manualHours > 40) {
    recommendedPlan = "SCALE CONTROL";
  } else if (inquiries + manualHours > 25) {
    recommendedPlan = "SYSTEM LIFT";
  } else if (inquiries + manualHours > 12) {
    recommendedPlan = "FLOW CONTROL";
  }

  const plans = [
    {
      tier: "SIGNAL START",
      tagline: "Audit the System. See the First Opportunity.",
      price: "$297",
      period: "/month",
      implementation: "Implementation from $750",
      bestFor: "One narrow workflow, one primary channel, and one or two approved integrations.",
      features: [
        "One production AI agent workflow",
        "One primary channel",
        "One or two approved integrations after technical review",
        "Approved response or action rules",
        "One escalation path",
        "Basic activity logging",
        "Test scenarios before launch",
        "Monthly workflow health review",
        "Published support-hours language only",
        "Existing tools remain where they fit",
      ],
      examples: "Missed-call follow-up, booking-link routing, FAQ chatbot, lead-intake agent",
      cta: "Start With Signal Start",
      icon: <PhoneCall className="h-7 w-7 text-lime-600 dark:text-lime-400" />,
    },
    {
      tier: "FLOW CONTROL",
      tagline: "Audit the System. Control the Workflow.",
      price: "$697",
      period: "/month",
      implementation: "Implementation from $1,500",
      bestFor: "Several related workflows with routing, follow-up, reporting, and exception handling.",
      features: [
        "Everything in SIGNAL START",
        "Up to three related workflows",
        "Up to three approved integrations after technical review",
        "Missed-call or inquiry handling",
        "Intake and routing",
        "Rebooking, follow-up, or retention workflow",
        "Weekly operations summary",
        "Exception review",
        "Monthly optimization review",
        "Priority support within published boundaries",
      ],
      examples: "Barbershop booking + rebooking, HVAC intake + quote follow-up, waste pickup exception + notification",
      cta: "Start With Flow Control",
      icon: <Workflow className="h-7 w-7 text-lime-600 dark:text-lime-400" />,
      recommended: true,
    },
    {
      tier: "SYSTEM LIFT",
      tagline: "Audit the System. Lift the Operation.",
      price: "$1,497",
      period: "/month",
      implementation: "Implementation from $3,500",
      bestFor: "Multiple workflows, channels, custom rules, multiple integrations, or meaningful reporting requirements.",
      features: [
        "Everything in FLOW CONTROL",
        "Multiple approved channels",
        "Custom business rules and escalation paths",
        "Multiple system connections after technical review",
        "Custom reporting and exception summaries",
        "Workflow documentation",
        "Integration monitoring according to agreed scope",
        "Monthly optimization and review",
        "Priority implementation support",
      ],
      examples: "Multi-channel intake + routing + reporting, custom approval workflows",
      cta: "Start With System Lift",
      icon: <Layers className="h-7 w-7 text-lime-600 dark:text-lime-400" />,
      scopeNote: "Scope and usage limits apply.",
    },
    {
      tier: "SCALE CONTROL",
      tagline: "Audit the System. Scale the Business.",
      price: "Starting at $2,997",
      period: "/month",
      implementation: "Scoped after Workflow Audit",
      bestFor: "Multi-location businesses, operations-heavy companies, custom APIs, multiple approval levels, custom reporting, and ongoing optimization.",
      features: [
        "Custom agent system design",
        "Multiple workflows and channels, scoped by agreement",
        "Multi-location routing and escalation",
        "Custom API or data connections after technical review",
        "Role-based approval paths",
        "Custom dashboards and reporting",
        "Formal implementation acceptance criteria",
        "Ongoing optimization plan",
        "Architecture review cadence",
        "Support and monitoring level defined in agreement",
      ],
      examples: "Multi-location operations, custom architecture, enterprise-level workflow systems",
      cta: "Discuss Scale Control",
      icon: <Building2 className="h-7 w-7 text-lime-600 dark:text-lime-400" />,
      scopeNote: "Custom scope defined after audit.",
    },
  ];

  const handleCheckout = async (planName) => {
    setLoading(planName);
    try {
      const response = await fetch("/api/stripe-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planName, email: "" }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        window.location.href = `/contact?plan=${encodeURIComponent(planName)}`;
      }
    } catch {
      window.location.href = `/contact?plan=${encodeURIComponent(planName)}`;
    } finally {
      setLoading(null);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pb-20 pt-24 text-zinc-900 dark:bg-zinc-950 dark:text-white">
        <div className="container mx-auto max-w-6xl px-6 pt-6">

          <header className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-lime-700 dark:text-lime-300">
              <Sparkles className="h-4 w-4" /> AI Agent Packages
            </div>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Start With the Workflow. Scale What Works.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
              SPARKSPHEAR builds AI agents for repetitive business workflows across service, local, and operations-heavy industries. We audit the system, connect the tools that fit, and automate the work that should not require constant manual attention.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-500">
              Barbershops, HVAC teams, waste operators, auto-repair shops, childcare providers, restaurants, and other businesses can start with one painful workflow and expand only when the system proves useful.
            </p>
            <p className="mt-6 text-lg font-bold text-lime-600 dark:text-lime-400 tracking-wide">
              Audit the System. Scale the Business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://buy.stripe.com/5kQbJ25Jrb89c4Ba3D4AU0d" className="px-6 py-3 rounded-xl text-sm font-extrabold bg-zinc-900 text-white hover:bg-zinc-800 transition inline-flex items-center gap-2">
                Start With a $297 Workflow Audit <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/contact" className="px-6 py-3 rounded-xl text-sm font-extrabold bg-lime-500 text-zinc-950 hover:bg-lime-400 transition shadow-lg shadow-lime-500/20 inline-flex items-center gap-2">
                Book a Fit Call <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#agent-packages" className="px-6 py-3 rounded-xl text-sm font-bold border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/60 text-zinc-900 dark:text-white hover:border-lime-500 transition inline-flex items-center gap-2">
                Explore Agent Packages
              </a>
            </div>
          </header>

          {/* Workflow Audit Diagnostic Block */}
          <section className="mx-auto mb-16 max-w-4xl rounded-3xl border border-lime-500/20 bg-white p-8 shadow-xl dark:bg-zinc-900 md:p-10" aria-labelledby="workflow-audit">
            <div className="text-center">
              <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-lime-500" />
              <h2 id="workflow-audit" className="text-2xl font-black md:text-3xl">Workflow Audit</h2>
              <p className="mt-2 text-lg font-bold text-lime-600 dark:text-lime-400">Starting at $297 one-time</p>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We do not start by selling the biggest package. We start by auditing the workflow and identifying the smallest useful agent.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Current workflow map",
                "Bottleneck analysis",
                "Existing-tool review",
                "Data and access requirements",
                "Agent suitability assessment",
                "Three prioritized automation opportunities",
                "Recommended first agent",
                "Implementation scope",
                "Measurement and acceptance plan",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-lime-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-5">
              <div className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <div><span className="font-bold text-zinc-900 dark:text-white">Free Fit Call</span><br /><span className="text-zinc-500">Qualification only</span></div>
                <div><span className="font-bold text-zinc-900 dark:text-white">Workflow Audit</span><br /><span className="text-zinc-500">Paid diagnostic</span></div>
                <div><span className="font-bold text-zinc-900 dark:text-white">Implementation</span><br /><span className="text-zinc-500">One-time build fee</span></div>
                <div><span className="font-bold text-zinc-900 dark:text-white">Monthly Agent Operation</span><br /><span className="text-zinc-500">Recurring package fee</span></div>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="mx-auto mb-16 max-w-5xl rounded-3xl border border-lime-500/20 bg-white p-8 shadow-xl dark:bg-zinc-900 md:p-10" aria-labelledby="opportunity-calculator">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div className="space-y-7">
                <div>
                  <h2 id="opportunity-calculator" className="flex items-center gap-3 text-2xl font-bold">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-500/10">
                      <Calculator className="h-5 w-5 text-lime-600 dark:text-lime-400" />
                    </span>
                    Estimate the Workflow Opportunity
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Replace the defaults with numbers from your operation. This is a planning tool, not a revenue promise.
                  </p>
                </div>

                <SliderField label="Repeated inquiries or missed calls per week" value={inquiries} min={0} max={60} suffix=" per week" onChange={setInquiries} />
                <SliderField label="Average value of related transaction or job" value={avgValue} min={15} max={500} suffix="" prefix="$" onChange={setAvgValue} />
                <SliderField label="Repeated manual hours per week" value={manualHours} min={0} max={60} suffix=" hrs/week" onChange={setManualHours} />
                <SliderField label="Estimated percentage suitable for workflow assistance" value={automationFit} min={5} max={70} suffix="%" onChange={setAutomationFit} />
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 text-center text-white">
                <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-lime-500/10 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-400">Illustrative monthly opportunity</p>
                  <p className="mt-3 text-5xl font-black">${illustrativeOpportunity.toLocaleString()}</p>
                  <p className="mt-2 text-sm text-zinc-400">~{illustrativeHours} hours identified per month</p>
                  <div className="my-7 h-px bg-zinc-800" />
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-400">Suggested starting point</p>
                  <p className="mt-2 text-2xl font-black">{recommendedPlan}</p>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                    This is a planning estimate, not a revenue prediction. Actual results depend on volume, client behavior, workflow design, existing tools, access, approval rules, and implementation quality.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Package Cards */}
          <section className="mb-12" aria-labelledby="agent-packages">
            <div className="mb-8 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-600 dark:text-lime-400">Choose the workflow scope</p>
              <h2 id="agent-packages" className="mt-3 text-3xl font-black md:text-4xl">Four Agent Packages. Clear Operating Boundaries.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                Every package starts with a fit review. We connect approved tools, define escalation rules, and test the workflow before it handles live work.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {plans.map((plan) => {
                const isRecommended = plan.recommended;
                return (
                  <article key={plan.tier} className={`relative flex flex-col rounded-3xl border p-7 transition-all ${isRecommended ? "border-lime-500 bg-lime-500/5 shadow-2xl ring-2 ring-lime-500/20" : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"}`}>
                    {isRecommended && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-lime-500 px-4 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-zinc-950">
                        Recommended
                      </span>
                    )}
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        {plan.icon}
                        <h3 className="text-lg font-black">{plan.tier}</h3>
                      </div>
                      <p className="mb-2 text-xs font-semibold text-lime-600 dark:text-lime-400 italic">{plan.tagline}</p>
                      <p className="mb-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">Best for: {plan.bestFor}</p>
                      <div className="my-4 text-4xl font-black tracking-tight">
                        {plan.price} <span className="text-base font-normal text-zinc-500">{plan.period}</span>
                      </div>
                      <span className="inline-block rounded-md border border-lime-500/30 bg-lime-500/10 px-3 py-1 text-[11px] font-extrabold text-lime-700 dark:text-lime-300">{plan.implementation}</span>
                      {plan.scopeNote && (
                        <p className="mt-3 text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">{plan.scopeNote}</p>
                      )}
                      <ul className="mt-5 space-y-2 text-sm">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-lime-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCheckout(plan.tier)}
                      disabled={loading === plan.tier}
                      className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-center text-sm font-extrabold transition disabled:opacity-50 ${isRecommended ? "bg-lime-500 text-zinc-950 hover:bg-lime-400" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"}`}
                    >
                      {loading === plan.tier ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                      {loading === plan.tier ? "Preparing..." : plan.cta}
                    </button>
                  </article>
                );
              })}
            </div>

            <p className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
              Monthly agent fees are separate from implementation fees. Telephony, messaging, email, model/API usage, CRM/POS subscriptions, and other third-party software fees may be billed separately when applicable.
            </p>
          </section>

          {/* Workflow Highlight Cards */}
          <section className="mb-16 grid gap-6 md:grid-cols-3" aria-label="Agent workflow highlights">
            <WorkflowCard icon={<MessageSquareText />} title="Answer and route" text="The agent handles approved FAQs, captures the inquiry, and sends the right booking or contact path." />
            <WorkflowCard icon={<RefreshCw />} title="Bring clients back" text="Use service-specific return windows to flag overdue clients and prepare owner-approved follow-up." />
            <WorkflowCard icon={<ShieldCheck />} title="Keep control" text="Sensitive actions stay behind permissions, escalation rules, and human review. The agent assists; you remain responsible." />
          </section>

          {/* What We Do Not Promise */}
          <section className="mx-auto max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center text-white md:p-10">
            <ShieldCheck className="mx-auto mb-4 h-11 w-11 text-lime-400" />
            <h2 className="text-3xl font-black">What We Do Not Promise</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-300">
              AI cannot guarantee revenue, bookings, retention, or profitability. It does not replace your accountant, attorney, bookkeeper, financial adviser, manager, or professional judgment. We define the workflow, connect approved systems, test the guardrails, and show you what the agent is doing.
            </p>
            <p className="mt-5 text-sm text-zinc-400">
              We configure and test the agreed workflow against documented acceptance criteria before launch. If the workflow does not meet the approved scope, we correct the implementation before expanding the engagement.
            </p>
            <p className="mt-4 text-sm text-zinc-500">
              Telephony, messaging, email, model/API usage, CRM/POS subscriptions, and other third-party software fees may be billed separately when applicable.
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-lime-500 px-6 py-3.5 font-extrabold text-zinc-950 transition hover:bg-lime-400">
              Book a Fit Call <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SliderField({ label, value, min, max, suffix, prefix = "", onChange }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-4">
        <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{label}</label>
        <span className="whitespace-nowrap text-lg font-extrabold text-lime-600 dark:text-lime-400">{prefix}{value.toLocaleString()}{suffix}</span>
      </div>
      <input
        aria-label={label}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-lime-500 dark:bg-zinc-800"
      />
    </div>
  );
}

function WorkflowCard({ icon, title, text }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-500/10 text-lime-600 dark:text-lime-400">{React.cloneElement(icon, { className: "h-5 w-5" })}</div>
      <h3 className="mb-2 text-lg font-black">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{text}</p>
    </article>
  );
}

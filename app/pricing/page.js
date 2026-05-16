import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for SPARKSPHEAR AI automation services. Choose the plan that fits your business stage.',
};

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      subtitle: "For businesses ready to dip their toes in",
      price: "From $2,900",
      period: "one-time",
      popular: false,
      features: [
        "One core workflow automated (CRM, support, sales, etc.)",
        "Master Business Systems Audit",
        "30 days post-launch support",
        "Documentation + training",
        "ROI tracking dashboard"
      ],
      cta: "Get Starter Audit",
      ctaLink: "/contact"
    },
    {
      name: "Pro",
      subtitle: "Most popular — ideal for scaling teams",
      price: "$6,900",
      period: "per project",
      popular: true,
      features: [
        "Full Systems Roadmap",
        "AI chat integration (Chatbot + Calendly + CRM)",
        "2–4 automations across teams",
        "90 days support + optimization",
        "Team training + ongoing coaching"
      ],
      cta: "Book a Strategy Call",
      ctaLink: "/contact"
    },
    {
      name: "Enterprise",
      subtitle: "Full digital transformation",
      price: "Custom",
      period: "monthly retainer",
      popular: false,
      features: [
        "Unlimited automations & integrations",
        "Private AI agent development",
        "Dedicated account manager",
        "Ongoing AI consulting",
        "Emergency priority support",
        "Advanced analytics setup"
      ],
      cta: "Talk to Founding Team",
      ctaLink: "/contact"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <Navbar />

      <div className="container py-14 text-center">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">Simple, Transparent Pricing</h1>
        <p className="text-2xl text-gray-400 max-w-2xl mx-auto">No surprises. Every package is built for real ROI.</p>
      </div>

      <div className="container pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl overflow-hidden border flex flex-col transition-all hover:scale-[1.01] ${tier.popular ? 'border-primary shadow-xl relative scale-[1.025]' : 'border-zinc-800'}`}>
              {tier.popular && (
                <div className="absolute -top-3 right-6 px-4 py-0.5 text-xs tracking-[2px] bg-primary text-black font-bold rounded">MOST POPULAR</div>
              )}
              <div className="p-8 bg-zinc-950 border-b border-zinc-800 flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold">{tier.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{tier.subtitle}</p>
                </div>

                <div className="mb-8">
                  <div className="font-mono text-5xl tracking-tighter font-medium">{tier.price}</div>
                  <div className="text-sm text-gray-400 uppercase mt-1">{tier.period}</div>
                </div>

                <ul className="space-y-3.5 text-[15px]">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-primary mt-px">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 mt-auto bg-black border-t border-zinc-800">
                <Link 
                  href={tier.ctaLink} 
                  className={`block text-center py-3.5 rounded-xl font-bold text-lg transition-all ${tier.popular ? 'bg-primary text-black hover:bg-white' : 'hover:bg-zinc-900 border border-white/60'}`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400">Need something custom? We offer monthly retainers for ongoing transformation.</p>
          <Link href="/contact" className="inline-block text-primary hover:text-white underline underline-offset-4 mt-2">See Enterprise Options →</Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}

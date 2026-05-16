import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Process',
  description: 'How SPARKSPHEAR delivers AI automation projects. Our proven 5-step process from discovery to scaling your business.',
};

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Audit",
      description: "We deep-dive into your current systems, workflows, and bottlenecks. We call this the Master Audit — everything gets documented and measured.",
      deliverable: "Complete system audit report + prioritized opportunity list"
    },
    {
      number: "02",
      title: "Strategy Blueprint",
      description: "We build a custom roadmap tailored to your business goals. This includes ROI projections, tech stack recommendations, and timeline estimates.",
      deliverable: "Signed project plan + timeline + success metrics"
    },
    {
      number: "03",
      title: "AI Build & Automate",
      description: "We build your custom automations, chatbots, integrations, and workflows in 2–4 week sprints. Weekly demos keep you in the loop.",
      deliverable: "Working AI systems + dashboard access"
    },
    {
      number: "04",
      title: "Testing & Training",
      description: "We run full end-to-end validation and train your team so everyone is confident using the new systems on day one.",
      deliverable: "Team training + playbook documentation"
    },
    {
      number: "05",
      title: "Launch & Scale",
      description: "We deploy live, monitor performance, and optimize. We also identify the next 3–5 areas to expand automation even further.",
      deliverable: "Live production system + 90-day growth plan"
    }
  ];

  return (
    <main className="min-h-screen bg-black pt-20 text-white">
      <Navbar />

      <section className="container pt-12 pb-10 text-center">
        <h1 className="text-6xl font-bold tracking-tight">How We Deliver Results</h1>
        <p className="mt-4 text-2xl text-gray-400 max-w-2xl mx-auto">Our battle-tested 5-step AI automation lifecycle used by 50+ local businesses.</p>
      </section>

      <div className="container pb-20">
        <div className="space-y-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-8 border-l-4 border-primary pl-8 md:pl-10 py-8 bg-zinc-950/60 rounded-2xl group hover:border-primary/80 transition-all">
              <div className="font-mono text-7xl text-primary/70 font-bold tabular-nums group-hover:text-primary transition-colors w-28 flex-shrink-0">
                {step.number}
              </div>
              
              <div className="flex-1 pr-6">
                <h3 className="text-3xl font-semibold mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                
                <div className="inline-block px-5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-gray-400">
                  Deliverable: <span className="font-semibold text-white">{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="max-w-md mx-auto mt-16 text-center">
          <a href="#book-meeting" className="block px-12 py-4 bg-primary hover:bg-white transition text-black font-extrabold text-lg rounded-xl">
            Start with a Free Discovery Call →
          </a>
          <div className="mt-4 text-sm text-gray-500">Takes 15 minutes. No pressure. Concrete next steps for your business.</div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

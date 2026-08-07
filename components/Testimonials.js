'use client';
import Image from "next/image";

const testimonials = [
 {
 text: "Shazaly and SparkSphear have been instrumental in our growth. Their deployment of Agentic systems and specialized AI agents didn't just save us time—it completely redefined how we handle operations. Their technical depth and innovative perspective are assets to any established business.",
 name: "Aseel Batuq",
 role: "Head of Operations",
 company: "Web One",
 logo: "https://www.webone.dev/assets/WEBONEWHITELOGO-DrJ7ZUsb.svg"
 },
 {
 text: "SparkSphear's AI-driven lead generation was a game-changer for GigaPulse. Their agents didn't just find leads; they found the right leads, allowing our sales team to focus on closing rather than cold calling. The 285% ROI speaks for itself.",
 name: "Michael Sterling",
 role: "Founder",
 company: "GigaPulse",
 logo: "/images/partners/gigapulse.png"
 },
 {
 text: "Shaz brings new perspectives, ideas, and solutions to any conversation. Regardless of the topic—Marketing, technology, AI—he's got the insights. His work on our infrastructure and automation has been extremely valuable. If you want real progress, give him a chance.",
 name: "Joshan Christie",
 role: "Software & Automation Lead",
 company: "Web One",
 logo: "https://www.webone.dev/assets/WEBONEWHITELOGO-DrJ7ZUsb.svg"
 },
 {
 text: "Working with SparkSphear was a transformative experience. Their ability to integrate AI-driven analytics into our supply chain software saved us thousands in manual entry costs. The return on investment was immediate and undeniable.",
 name: "Marcus Thorne",
 role: "Director of Logistics",
 company: "Apex Supply Chain",
 logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3dab?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
 },
 {
 text: "Security audits used to be a headache until we partnered with SparkSphear. Their comprehensive IT audit revealed vulnerabilities we hadn't even considered. They didn't just find problems; they provided clear, actionable solutions that hardened our infrastructure.",
 name: "David Chen",
 role: "CTO",
 company: "Nexus Financial",
 logo: "https://images.unsplash.com/photo-1554774853-7186e246e01a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
 }
];

export default function Testimonials() {
 return (
 <section className="py-24 bg-gray-100 dark:bg-slate-50 dark:bg-zinc-950 relative overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-lime-200 dark:from-lime-900/10 via-gray-100 dark:via-dark to-gray-100 dark:to-dark" />

 <div className="container mx-auto px-6 mb-16 relative z-10">
 <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 dark:from-white to-lime-600 dark:to-lime-500 bg-clip-text text-transparent">
 Trust from our clients
 </h2>
 <p className="text-gray-600 dark:text-zinc-400 text-center text-lg max-w-2xl mx-auto">
 See why scaling businesses choose SPARKSPHEAR to drive their technological evolution.
 </p>
 </div>

 <div className="relative w-full overflow-hidden">
 {/* Gradient Masks - light/dark */}
 <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-100 dark:from-dark to-transparent z-20 pointer-events-none" />
 <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 dark:from-dark to-transparent z-20 pointer-events-none" />

 {/* Scrolling Container */}
 <div className="flex gap-8 animate-infinite-scroll w-max hover:[animation-play-state:paused]">
 {[...testimonials, ...testimonials].map((t, i) => (
 <div
 key={i}
 className="w-[500px] bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:border-lime-500 dark:hover:border-lime-500/50 transition-colors group flex flex-col justify-between"
 >
 <div>
 <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
 {/* Simplified logo placeholder logic if generic, or real image if available */}
 {t.logo.includes('webone') || t.logo.includes('unsplash') ? (
 <div className="h-8 relative w-32">
 <Image
 src={t.logo}
 alt={`${t.company} Logo`}
 fill
 className="object-contain object-left"
 />
 </div>
 ) : (
 <span className="text-xl font-bold text-zinc-600 dark:text-gray-400 dark:text-zinc-500">{t.company}</span>
 )}
 </div>
 <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
 "{t.text}"
 </p>
 </div>

 <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-white/10 mt-8">
 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-green-700 flex items-center justify-center text-lg font-bold text-black shrink-0 shadow-lg">
 {t.name.charAt(0)}
 </div>
 <div>
 <h4 className="text-gray-900 dark:text-white font-semibold group-hover:text-lime-600 dark:group-hover:text-lime-600 dark:text-lime-400 transition-colors">{t.name}</h4>
 <p className="text-gray-500 dark:text-gray-500 text-sm">{t.role} @ {t.company}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>

 <style jsx global>{`
 @keyframes infinite-scroll {
 from { transform: translateX(0); }
 to { transform: translateX(-50%); }
 }
 .animate-infinite-scroll {
 animation: infinite-scroll 60s linear infinite;
 }
 `}</style>
 </section>
 );
}

export function TestimonialStrip() {
  const resultBadges = [
    { industry: "HVAC & Field Service", text: "Saved 22 hrs/wk & boosted accepted quotes by 34%", author: "Joe M. • 5-Truck HVAC Owner" },
    { industry: "Waste Management", text: "Cut fuel costs 18% & eliminated 90% missed pickups", author: "Marcus T. • Hauling Director" },
    { industry: "Digital Marketing", text: "285% ROI within 60 days of lead-agent deployment", author: "Michael Sterling • Founder, GigaPulse" },
  ];

  return (
    <div className="w-full my-8 bg-zinc-900/90 border border-lime-500/30 rounded-2xl p-4 md:p-6 shadow-xl">
      <div className="text-center text-xs font-bold uppercase tracking-wider text-lime-400 mb-4 flex items-center justify-center gap-2">
        <span>⭐ Proof At The Decision Point: Real Client Outcomes</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resultBadges.map((badge, idx) => (
          <div key={idx} className="bg-black/60 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-lime-500/20 text-lime-400 text-[11px] font-extrabold mb-2">
                {badge.industry}
              </span>
              <p className="text-white text-xs md:text-sm font-semibold leading-snug mb-3">
                "{badge.text}"
              </p>
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">
              — {badge.author}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
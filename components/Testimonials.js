'use client';
import Image from "next/image";

const testimonials = [
  {
    text: "Shaz brings new perspectives, ideas, and solutions to any conversation we have here at Web One, regardless of the topic. Marketing, technology, AI; you name it, he's got the ideas. As the dedicated technological backbone of Web One, I deal with many different issues: Security in software development, cost efficiency, workflow optimization via automation. Shaz has brought great ideas and insights for every topic without fail. His day-to-day hard and diligent work can be an extremely valuable asset to any business, be it early stage or well-established. If you doubt it, give him a chance. He will prove his worth to you within the first day.",
    name: "Joshan Christie",
    role: "Software & Automation",
    company: "Web One",
    logo: "https://www.webone.dev/assets/WEBONEWHITELOGO-DrJ7ZUsb.svg"
  },
  {
    text: "Shazaly Musa, the founder of SPARKSPHEAR Tech, has been a huge help to me and my team at WebOne LLC. He guided us in improving our workflow and paperwork, showing us how established businesses operate. Thanks to his experience in AI, he helped us understand how automation works and how to implement it effectively in our own systems. Shaz is a smart and innovative tech mind who sees things from a unique perspective and always brings fresh ideas that make a real difference. Every time I talk to him, I learn something new. If you get the chance to collaborate with SPARKSPHEAR Tech, expect real progress, solid systems, and a noticeable difference in how your business operates.",
    name: "Aseel Batuq",
    role: "Head of Operations",
    company: "Web One",
    logo: "https://www.webone.dev/assets/WEBONEWHITELOGO-DrJ7ZUsb.svg"
  },
  {
    text: "Working with SPARKSPHEAR was a transformative experience for our logistics operations. Their ability to integrate AI-driven analytics into our existing supply chain software saved us countless hours of manual data entry. The return on investment was immediate and undeniable.",
    name: "Marcus Thorne",
    role: "Director of Logistics",
    company: "Apex Supply Chain",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3dab?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    text: "We needed a complete overhaul of our digital presence, but we didn't want just another template site. SPARKSPHEAR delivered a custom, high-performance web application that perfectly captures our brand's energy. Their attention to detail in the UI/UX design is simply world-class.",
    name: "Sarah Jenkins",
    role: "Marketing VP",
    company: "Elevate Digital",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    text: "Security audits used to be a headache for us until we partnered with SPARKSPHEAR. Their comprehensive IT audit revealed vulnerabilities we hadn't even considered. They didn't just find problems; they provided clear, actionable solutions that hardened our infrastructure overnight.",
    name: "David Chen",
    role: "CTO",
    company: "Nexus Financial",
    logo: "https://images.unsplash.com/photo-1554774853-7186e246e01a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-100 dark:bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-lime-200 dark:from-lime-900/10 via-gray-100 dark:via-dark to-gray-100 dark:to-dark" />

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 dark:from-white to-lime-600 dark:to-lime-500 bg-clip-text text-transparent">
          Trust from our clients
        </h2>
        <p className="text-gray-600 dark:text-zinc-400 text-center text-lg max-w-2xl mx-auto">
          See why Fort Wayne businesses choose SPARKSPHEAR to drive their technological evolution.
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
                    <span className="text-xl font-bold text-gray-400 dark:text-zinc-500">{t.company}</span>
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
                  <h4 className="text-gray-900 dark:text-white font-semibold group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">{t.name}</h4>
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
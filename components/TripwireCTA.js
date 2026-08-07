"use client";

import React from 'react';
import Link from 'next/link';
import { Wrench, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function TripwireCTA({ verticalName = "Field Service" }) {
  return (
    <section className="w-full my-12 bg-gradient-to-br from-lime-500/10 via-zinc-900 to-black border-2 border-lime-500/50 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-extrabold uppercase tracking-wider mb-4 border border-lime-500/30">
            <Zap className="w-3.5 h-3.5" /> DotCom Secrets Funnel #6: Tripwire Offer
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Picked Your Tools? Want Our Engineers To Set It Up For You?
          </h3>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-4 max-w-2xl">
            Software is only as good as its implementation. For a flat <strong>$97 1-on-1 Setup Audit</strong>, our engineers will integrate your software stack, configure automated lead routing, and train your staff.
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-lime-400 font-semibold">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-lime-400" /> Done-in-48-Hours Guarantee</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-lime-400" /> Live Staff Training Included</span>
          </div>
        </div>

        <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3">
          <Link
            href="/services/it-audits"
            className="px-8 py-4 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all text-center text-sm shadow-xl shadow-lime-500/25 flex items-center justify-center gap-2"
          >
            <Wrench className="w-4 h-4" />
            <span>Claim $97 Setup Audit &rarr;</span>
          </Link>
          <span className="text-center text-[11px] text-zinc-400 font-mono">
            Cross-sell to Side B (Done-For-You Services)
          </span>
        </div>
      </div>
    </section>
  );
}

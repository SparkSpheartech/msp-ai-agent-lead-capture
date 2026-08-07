"use client";

import React, { useState } from 'react';
import { Share2, Copy, Check, Gift, ArrowRight, Sparkles } from 'lucide-react';

export default function ReferralCTA({ vertical }) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/guides/${vertical?.slug || 'hvac'}?ref=owner`;
    }
    return `https://sparkspheartechsolutions.com/guides/${vertical?.slug || 'hvac'}?ref=owner`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getShareUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="w-full my-12 bg-gradient-to-r from-zinc-900 via-zinc-950 to-black border border-lime-500/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5" /> Shaklee Endless Chain Referral Program
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Share The {vertical?.name || 'Industry'} Stack With Another Owner
          </h3>
          <p className="text-zinc-300 text-sm leading-relaxed max-w-xl">
            Know another business owner in your trade? Send them this guide. They get free access to our tested tech stack recommendations, and you unlocked our <strong>$97 Custom Setup Bonus Voucher</strong> for your team.
          </p>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCopy}
            className="px-6 py-3.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-lime-500/20 text-sm whitespace-nowrap"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-zinc-950" /> Referral Link Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copy Referral Link
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

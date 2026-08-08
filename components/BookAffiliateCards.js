"use client";

import React from "react";
import { BookOpen, Star, ShoppingCart } from "lucide-react";

export default function BookAffiliateCards({ books, industry = "barbershop" }) {
  const barbershopBooks = [
    {
      id: "barber-book-1",
      title: "Big Busy Barbershop",
      author: "Year 1, Weeks 1 through 52",
      subtitle: "The 52-Week Blueprint to Building a Packed Barbershop",
      coverImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
      affiliateUrl: "https://amzn.to/4wbIMld",
      rating: 4.9,
      reviewCount: "480+",
      description: "A week-by-week operational manual to fill every chair, manage shop throughput, and keep clients coming back.",
      badge: "Shop Growth",
    },
    {
      id: "barber-book-2",
      title: "Barbershop Now! (Part 1)",
      author: "How to Open A Barbershop",
      subtitle: "The Step-by-Step Guide to Opening & Operating a Shop",
      coverImage: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
      affiliateUrl: "https://amzn.to/4fWqhv5",
      rating: 4.8,
      reviewCount: "620+",
      description: "Essential foundation guide for launching a profitable barbershop, choosing the right location, and building client density.",
      badge: "Shop Launch",
    },
    {
      id: "barber-book-3",
      title: "The Rich Barber Method",
      author: "Chuka Torres",
      subtitle: "The Mindset & Tactics of High-Earning Barber Entrepreneurs",
      coverImage: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
      affiliateUrl: "https://amzn.to/45fqBQI",
      rating: 4.9,
      reviewCount: "1,250+",
      description: "Master the pricing, marketing, and brand tactics that turn a skilled barber into a high-ticket business owner.",
      badge: "Barber Mastery",
    },
    {
      id: "barber-book-4",
      title: "From Barber To A Business",
      author: "The Simple Guide to Success",
      subtitle: "Transitioning from Behind the Chair to Business Ownership",
      coverImage: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
      affiliateUrl: "https://amzn.to/4q6NoYC",
      rating: 4.8,
      reviewCount: "340+",
      description: "The straightforward guide to establishing shop SOPs, managing booth rentals, and delegating daily operations.",
      badge: "Business Scale",
    },
  ];

  const defaultGeneralBooks = [
    {
      id: "book-1",
      title: "The E-Myth Revisited",
      author: "Michael E. Gerber",
      subtitle: "Why Most Small Businesses Don't Work",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
      affiliateUrl: "https://amzn.to/4wbIMld",
      rating: 4.9,
      reviewCount: "14,200+",
      description: "Must-read for business owners transitioning from working in the business to working on the business.",
      badge: "Essential Operations",
    },
    {
      id: "book-2",
      title: "DotCom Secrets",
      author: "Russell Brunson",
      subtitle: "The Underground Playbook for Online Funnels",
      coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
      affiliateUrl: "https://amzn.to/4fWqhv5",
      rating: 4.8,
      reviewCount: "8,900+",
      description: "Learn how to build high-converting lead magnets and automated follow-up email funnels.",
      badge: "Funnel Marketing",
    },
    {
      id: "book-3",
      title: "The Rich Barber Method",
      author: "Chuka Torres",
      subtitle: "High-Earning Barber Tactics",
      coverImage: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
      affiliateUrl: "https://amzn.to/45fqBQI",
      rating: 4.9,
      reviewCount: "1,250+",
      description: "Pricing and marketing playbook for barbers and shop owners.",
      badge: "Barber Mastery",
    },
    {
      id: "book-4",
      title: "From Barber To A Business",
      author: "Simple Guide to Success",
      subtitle: "Becoming a Successful Barber Owner",
      coverImage: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
      affiliateUrl: "https://amzn.to/4q6NoYC",
      rating: 4.8,
      reviewCount: "340+",
      description: "Establishing shop SOPs and managing chair rentals.",
      badge: "Business Scale",
    },
  ];

  const bookList = books || (industry === "barbershop" ? barbershopBooks : defaultGeneralBooks);

  return (
    <section className="w-full my-16 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-lime-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Ambient Radial Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-mono font-extrabold uppercase tracking-wider mb-3 border border-lime-500/30">
            <BookOpen className="w-3.5 h-3.5" /> Industry Recommended Reading
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Top 4 Barbershop Business Books
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            We studied the top 5 barber business books in your industry to identify the top 10 operational pain points and solutions.
          </p>
        </div>

        {/* 4 Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookList.map((book) => (
            <div
              key={book.id}
              className="bg-zinc-900/90 border border-zinc-800 hover:border-lime-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group"
            >
              <div>
                {/* Book Cover Image */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-4 border border-zinc-800 group-hover:border-lime-500/30 transition-colors">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-zinc-950/90 text-lime-400 text-[10px] font-mono font-bold uppercase border border-lime-500/30">
                    {book.badge}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-zinc-300 ml-1">{book.rating}</span>
                  <span className="text-[11px] text-zinc-500">({book.reviewCount})</span>
                </div>

                {/* Title & Author */}
                <h4 className="text-base font-extrabold text-white mb-1 group-hover:text-lime-400 transition-colors leading-snug">
                  {book.title}
                </h4>
                <p className="text-xs font-semibold text-lime-500 mb-2">by {book.author}</p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {book.description}
                </p>
              </div>

              {/* Affiliate Buy Button */}
              <a
                href={book.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full py-2.5 px-4 bg-zinc-800 hover:bg-lime-500 text-white hover:text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 no-underline"
              >
                Buy On Amazon <ShoppingCart className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

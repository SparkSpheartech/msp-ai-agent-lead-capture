"use client";
import React from 'react';
import Link from 'next/link';

const teamMembers = [
  {
    name: "Shazaly Musa",
    role: "Founder",
    image: "/founder-new.png",
  },
  {
    name: "Daisy",
    role: "Operations Lead",
    image: "/executive-assistant.jpg",
  },
  {
    name: "Travis",
    role: "CIO",
    image: "/cto-new.jpg",
  },
  {
    name: "Eissa",
    role: "Finance & Legal",
    image: "/devops-engineer.jpg",
  },
  {
    name: "Shima",
    role: "GTM",
    image: "/digital-marketing.jpg",
  },
];

const Team = () => {
  return (
    <section className="section team animate-on-scroll bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white py-24">
      <div className="container">
        <div className="section-header text-center mb-16">
          <span className="tag text-lime-600 dark:text-lime-400">OUR TEAM</span>
          <h2 className="text-4xl md:text-5xl font-bold">Dedicated experts ready to serve you</h2>
        </div>
        
        <div className="team-grid stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-member group">
              <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-gray-200 dark:border-white/10 group-hover:border-lime-500 dark:group-hover:border-lime-500/50 transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark to-transparent opacity-60"></div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                {member.name}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 uppercase text-sm tracking-wider">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 bg-lime-500 text-zinc-900 font-bold hover:bg-lime-400 transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(166,253,55,0.3)] hover:shadow-[0_0_30px_rgba(166,253,55,0.4)]"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;

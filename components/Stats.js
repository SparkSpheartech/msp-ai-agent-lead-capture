"use client";
import React from 'react';

const Stats = () => {
    return (
        <section className="section stats animate-on-scroll bg-dark py-20 relative border-y border-white/5">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    <div className="team-member p-6">
                        <p className="text-4xl font-bold mb-2 text-lime-400">2022</p>
                        <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Year Founded</p>
                    </div>
                    <div className="team-member p-6">
                        <p className="text-4xl font-bold mb-2 text-lime-400">24/7</p>
                        <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Tech Support Available</p>
                    </div>
                    <div className="team-member p-6">
                        <p className="text-4xl font-bold mb-2 text-lime-400">100%</p>
                        <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Fort Wayne Local</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;

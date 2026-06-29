"use client";
import React from 'react';

const EfficiencyEngine = () => {
    const metrics = [
        {
            category: "Time Recovery",
            items: [
                { before: "8 hrs/wk", after: "15 min/wk", process: "Invoice Processing", saving: "7.75 hrs" },
                { before: "12 hrs/wk", after: "5 min/wk", process: "Call Logging", saving: "11.9 hrs" },
                { before: "20 hrs", after: "4 hrs", process: "Client Onboarding", saving: "16 hrs" }
            ]
        }
    ];

    return (
        <section className="py-20 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-lime-400 font-mono text-sm tracking-wider uppercase">EFFICIENCY ENGINE</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                        From Manual to Automated
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Real businesses. Real results. Here's how we've transformed operations:
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full max-w-4xl mx-auto bg-zinc-900/50 rounded-xl overflow-hidden">
                        <thead>
                            <tr className="border-b border-zinc-800">
                                <th className="px-6 py-4 text-left text-lime-400 font-semibold">Process</th>
                                <th className="px-6 py-4 text-left text-lime-400 font-semibold">Before</th>
                                <th className="px-6 py-4 text-left text-lime-400 font-semibold">After</th>
                                <th className="px-6 py-4 text-left text-lime-400 font-semibold">Time Saved</th>
                            </tr>
                        </thead>
                        <tbody>
                            {metrics[0].items.map((item, index) => (
                                <tr key={index} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-800/30 transition">
                                    <td className="px-6 py-4 text-white">{item.process}</td>
                                    <td className="px-6 py-4 text-red-400">{item.before}</td>
                                    <td className="px-6 py-4 text-lime-400 font-semibold">{item.after}</td>
                                    <td className="px-6 py-4 text-lime-400 font-bold">{item.saving}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-center mt-10">
                    <p className="text-gray-400 mb-4">Average client saves <strong className="text-primary">15-20 hours per week</strong> per employee</p>
                    <a href="/contact" className="inline-flex items-center px-8 py-3 bg-primary text-dark font-bold rounded-md hover:bg-primary/90 transition">
                        Get Your Efficiency Audit
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EfficiencyEngine;
"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ROICalculator() {
    const [employees, setEmployees] = useState(5);
    const [hours, setHours] = useState(15);

    const weeklySaved = employees * hours;
    const monthlySaved = weeklySaved * 4;
    const annualSaved = monthlySaved * 12;

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20 pb-16 bg-dark text-white">
                <div className="container max-w-4xl mx-auto px-6 pt-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-3">ROI Calculator</h1>
                        <p className="text-xl text-gray-400">
                            See how much time and money our automation saves your business
                        </p>
                    </div>

                    <div className="bg-black/70 border border-gray-800 rounded-2xl p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-bold mb-2">Number of Employees</label>
                                <input type="range" min="1" max="50" value={employees} onChange={e => setEmployees(+e.target.value)} className="w-full" />
                                <div className="text-3xl font-bold text-primary mt-2">{employees} employees</div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Hours Saved/Emp/Week</label>
                                <input type="range" min="5" max="30" value={hours} onChange={e => setHours(+e.target.value)} className="w-full" />
                                <div className="text-3xl font-bold text-primary mt-2">{hours} hours</div>
                            </div>
                        </div>

                        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
                            <div className="bg-zinc-900/50 p-6 rounded-xl">
                                <div className="text-4xl font-bold text-primary">{weeklySaved}h</div>
                                <div className="text-gray-400 mt-1">Weekly Saved</div>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-xl">
                                <div className="text-4xl font-bold text-primary">{monthlySaved}h</div>
                                <div className="text-gray-400 mt-1">Monthly Saved</div>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-xl">
                                <div className="text-4xl font-bold text-primary">{annualSaved}h</div>
                                <div className="text-gray-400 mt-1">Annual Saved</div>
                            </div>
                        </div>

                        <div className="mt-8 text-center p-6 bg-primary/10 rounded-xl">
                            <div className="text-lg mb-2">Estimated Value at $25/hr:</div>
                            <div className="text-5xl font-bold text-primary">${(annualSaved * 25).toLocaleString()}</div>
                            <div className="text-gray-400 mt-2">Potential savings per year</div>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <a href="/pricing" className="inline-block px-8 py-3 bg-primary text-black font-bold rounded-md hover:bg-primary/90 transition">
                            View Pricing Plans
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
"use client";
import React, { useState } from 'react';
import { Search, ClipboardCheck, Rocket, Cog, TrendingUp, HeadphonesIcon } from 'lucide-react';

const Process = () => {
    const [activeStep, setActiveStep] = useState(null);

    const steps = [
        {
            number: 1,
            title: "Discovery & Consultation",
            icon: <Search className="w-8 h-8" />,
            description: "We start by understanding your unique business needs and challenges",
            details: [
                "Initial consultation call",
                "Business goals assessment",
                "Current IT infrastructure review",
                "Pain points identification"
            ]
        },
        {
            number: 2,
            title: "Strategic Planning",
            icon: <ClipboardCheck className="w-8 h-8" />,
            description: "Create a customized technology roadmap aligned with your objectives",
            details: [
                "Gap analysis of current systems",
                "Technology recommendations",
                "Cost-benefit analysis",
                "Implementation timeline creation"
            ]
        },
        {
            number: 3,
            title: "Onboarding & Setup",
            icon: <Rocket className="w-8 h-8" />,
            description: "Seamless integration of our services into your operations",
            details: [
                "Team introduction and roles",
                "Access and permissions setup",
                "Communication channels established",
                "Initial baseline assessment"
            ]
        },
        {
            number: 4,
            title: "Implementation",
            icon: <Cog className="w-8 h-8" />,
            description: "Execute the plan with minimal disruption to your business",
            details: [
                "Phased rollout approach",
                "Team training and support",
                "Quality assurance testing",
                "Documentation and handoff"
            ]
        },
        {
            number: 5,
            title: "Optimization",
            icon: <TrendingUp className="w-8 h-8" />,
            description: "Continuous improvement and fine-tuning of systems",
            details: [
                "Performance monitoring",
                "Regular system updates",
                "Efficiency improvements",
                "ROI tracking and reporting"
            ]
        },
        {
            number: 6,
            title: "Ongoing Support",
            icon: <HeadphonesIcon className="w-8 h-8" />,
            description: "24/7 monitoring and support to keep your systems running smoothly",
            details: [
                "Proactive monitoring",
                "Rapid response to issues",
                "Regular check-ins",
                "Strategic quarterly reviews"
            ]
        }
    ];

    return (
        <section id="process" className="section process-section py-20" style={{ background: '#0a0a0a' }}>
            <div className="container">
                <div className="section-header text-center mb-16">
                    <span className="tag text-primary">OUR PROCESS</span>
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
                        A Proven Path to <span className="text-primary">Success</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Experience you would expect and the process that proves it. Our systematic approach ensures your technology works for you.
                    </p>
                </div>

                <div className="process-timeline relative max-w-5xl mx-auto">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10 hidden md:block transform -translate-x-1/2"></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`process-step relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:flex md:justify-end'}`}
                        >
                            <div
                                className={`process-card bg-dark-1 border-2 ${activeStep === index ? 'border-primary' : 'border-dark-2'} rounded-lg p-8 hover:border-primary transition-all duration-300 cursor-pointer max-w-lg ${activeStep === index ? 'shadow-lg shadow-primary/20' : ''}`}
                                onClick={() => setActiveStep(activeStep === index ? null : index)}
                            >
                                {/* Number Badge */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary">
                                        <span className="text-primary font-bold text-2xl">{step.number}</span>
                                    </div>
                                    <div className="text-primary">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-white text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-400 mb-4">{step.description}</p>

                                {/* Expandable Details */}
                                {activeStep === index && (
                                    <ul className="mt-6 space-y-2 border-t border-primary/20 pt-4">
                                        {step.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                <span className="text-primary text-lg">→</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Click indicator */}
                                <div className="mt-4 text-primary text-sm font-semibold">
                                    {activeStep === index ? '- Click to collapse' : '+ Click to expand'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
        </section>
    );
};

export default Process;

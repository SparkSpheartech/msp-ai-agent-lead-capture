"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Linkedin, Mail, Award, Target, Heart, Play } from 'lucide-react';

const teamMembers = [
    {
        name: 'Shazaly Musa',
        role: 'Founder',
        subtitle: 'Start & Scale',
        image: '/founder-new.webp',
        video: '/videos/founder.mp4',
        description: 'Visionary leader with a passion for integrating complex tech stacks into seamless business solutions. Dedicated to driving growth for local enterprises.'
    },
    {
        name: 'Daisy',
        role: 'Coo',
        subtitle: 'Operations',
        image: '/executive-assistant.webp',
        video: '/videos/executive-assistant.mp4',
        description: 'The organizational backbone ensuring smooth operations and client communication. She makes sure every project stays on track and on time.'
    },
    {
        name: 'Travis',
        role: 'CIO',
        subtitle: 'Infrastructure',
        image: '/cto-new.webp',
        video: '/videos/cto.mp4',
        description: 'Architect of our robust infrastructure, ensuring security and scalability for every client. He transforms technical complexity into reliable stability.'
    },
    {
        name: 'Shima',
        role: 'GTM',
        subtitle: 'Marketing',
        image: '/digital-marketing.webp',
        video: '/videos/digital-specialist.mp4',
        description: 'Strategies that turn clicks into customers. She masters the art of digital presence to ensure your brand gets the attention it deserves.'
    },

];

function TeamCard({ member, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => {});
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div 
            className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-lime-500/50 transition-all duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="aspect-[4/5] relative overflow-hidden">
                {/* Static Image */}
                <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} 
                />
                {/* Video on Hover */}
                <video
                    ref={videoRef}
                    src={member.video}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    muted
                    loop
                    playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-lime-400 font-mono text-sm tracking-widest uppercase">{member.subtitle}</p>
                </div>
                {/* Play indicator */}
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-lime-500/80 flex items-center justify-center transition-opacity ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    <Play className="w-4 h-4 text-zinc-950 ml-1" />
                </div>
            </div>
            <div className="p-6 pt-2">
                <p className="text-gray-400 leading-relaxed text-sm">
                    {member.description}
                </p>
            </div>
        </div>
    );
}

export default function About() {
    const values = [
        {
            icon: <Award />,
            title: 'Excellence',
            description: 'Committed to delivering the highest quality solutions and service'
        },
        {
            icon: <Target />,
            title: 'Innovation',
            description: 'Always pursuing the latest technologies to give clients a competitive edge'
        },
        {
            icon: <Heart />,
            title: 'Community',
            description: 'Dedicated to empowering small businesses to thrive, fostering community growth and customer well-being'
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-zinc-950">
                {/* Hero Section */}
                {/* Team Bios Section */}
                <section className="pt-32 pb-16">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center bg-lime-500/10 border border-lime-500/30 rounded-full px-4 py-2 mb-6">
                                <span className="text-lime-400 text-sm font-semibold tracking-wider">MEET THE EXPERTS</span>
                            </span>
                            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
                                The Minds Behind <span className="text-lime-500">SPARKSPHEAR</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                                We are a diverse team of specialists united by a single mission: to empower your business with technology that actually works.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                            {teamMembers.map((member, index) => (
                                <TeamCard key={index} member={member} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-20 border-t border-dark-2">
                    <div className="container max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                                Our <span className="text-primary">Driving Force</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                We're passionate about working with small businesses to make a meaningful difference, helping them thrive so their customers can live better lives.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-1 border-2 border-dark-2 hover:border-primary rounded-lg p-8 text-center transition-all duration-300 group"
                                >
                                    <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                        {React.cloneElement(value.icon, { className: 'w-12 h-12' })}
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-gray-400">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="py-20 border-t border-dark-2">
                    <div className="container max-w-4xl">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-12 text-center">
                            <h2 className="text-white text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-gray-300 text-xl leading-relaxed">
                                "To empower small businesses with innovative technology solutions that drive growth, efficiency, and success, enabling them to make a positive impact on their customers' lives and contribute to a better world."
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 border-t border-dark-2">
                    <div className="container max-w-4xl text-center">
                        <h2 className="text-white text-3xl font-bold mb-4">
                            Ready to Work Together?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let's discuss how SPARKSPHEAR can help your business thrive
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#book-meeting"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-dark font-bold hover:bg-primary/90 transition-all duration-300 rounded-md"
                            >
                                Schedule a Consultation
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 bg-dark-2 text-white font-bold border-2 border-dark-2 hover:border-primary transition-all duration-300 rounded-md"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

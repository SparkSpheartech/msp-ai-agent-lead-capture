"use client";
import React, { useEffect } from 'react';

const HubSpotMeeting = () => {
    useEffect(() => {
        // Load HubSpot Meetings script
        const script = document.createElement('script');
        script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section id="book-meeting" className="section py-20" style={{ background: '#0a0a0a' }}>
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
                        Schedule a <span className="text-primary">Consultation</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Book a time that works for you. We're here to help! <span className="text-sm text-gray-500 block mt-2">(Fees may apply)</span>
                    </p>
                </div>

                {/* HubSpot Meetings Embed */}
                <div
                    className="meetings-iframe-container bg-dark-1 border-2 border-primary/20 rounded-lg p-8"
                    data-src="https://meetings-na2.hubspot.com/sparkspheartechsolutions?embed=true"
                    style={{ minHeight: '600px' }}
                />
            </div>
        </section>
    );
};

export default HubSpotMeeting;

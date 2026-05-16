"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Netlify / form handler placeholder — replace with real endpoint
    console.log('Form submission:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', business: '', message: '' });
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16 bg-dark text-white">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Let's Talk</h1>
            <p className="text-xl text-gray-400">Ready to fix your operations, automate processes, and grow? Book a 15-minute discovery call or send us a message — we respond fast.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6" netlify>
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                      placeholder="(260) 555-1234"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Business Name</label>
                  <input
                    type="text"
                    required
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">How can we help?</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                    placeholder="Tell us about your biggest operational challenge..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition disabled:opacity-70"
                >
                  {submitted ? "Sending..." : "Send Message & Schedule Call"}
                </button>
                <p className="text-xs text-center text-gray-500">We usually reply within 2 hours during business days.</p>
              </form>
            </div>

            <div className="pt-8 md:pt-0">
              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
                <h3 className="font-bold text-xl mb-4">Direct Contact</h3>
                <div className="space-y-4 text-lg">
                  <a href="tel:2602670641" className="flex items-center gap-3 hover:text-primary">📞 (260) 267-0641</a>
                  <a href="mailto:contact@sparkspheartechsolutions.com" className="flex items-center gap-3 hover:text-primary">✉️ contact@sparkspheartechsolutions.com</a>
                  <div>📍 Fort Wayne, IN • Serving Northeast Indiana</div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-800">
                  <h4 className="font-semibold mb-3">What to expect on the call:</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• 15-minute discovery (no hard sell)</li>
                    <li>• Quick review of pain points</li>
                    <li>• Transparent pricing discussion</li>
                    <li>• Clear next steps or audit offer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

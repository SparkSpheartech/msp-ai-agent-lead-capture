"use client";

import React from 'react';

const certifications = [
  { name: "Certified Wireless Technology Specialist (CWTS)", issuer: "CWNP", date: "May 2026" },
  { name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services", date: "Apr 2026", expiry: "Apr 2029" },
  { name: "HashiCorp Certified: Terraform Associate (004)", issuer: "HashiCorp", date: "Jan 2026", expiry: "Jan 2028" },
  { name: "AI Agent Fundamentals", issuer: "Databricks", date: "Dec 2025" },
  { name: "Databricks for Data Engineering", issuer: "Databricks", date: "Nov 2025" },
  { name: "CompTIA Network+", issuer: "CompTIA", date: "Sep 2025", expiry: "Sep 2028" },
  { name: "ISC2 CC", issuer: "ISC2", date: "Mar 2025" },
  { name: "Microsoft 365 Certified: Fundamentals", issuer: "Microsoft", date: "May 2024" },
  { name: "Foundations of Leadership", issuer: "National Society of Leadership and Success", date: "Dec 2024" },
];

export default function TrustSignals() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Certifications &amp; Trust Signals</h2>
        <p className="text-center text-gray-600 mb-10">Validated expertise to deliver enterprise-grade results</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="font-semibold text-lg mb-1">{cert.name}</div>
              <div className="text-sm text-gray-600">{cert.issuer}</div>
              <div className="text-xs text-gray-500 mt-2">
                Issued {cert.date}{cert.expiry ? ` • Expires ${cert.expiry}` : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import HashScrollHandler from "@/components/HashScrollHandler";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    metadataBase: new URL('https://sparkspheartechsolutions.com'),
    title: {
        default: "SPARKSPHEAR Tech Solutions | Fort Wayne's Premier AI Services & Digital Marketing",
        template: "%s | SPARKSPHEAR Tech Solutions"
    },
    description: "Fort Wayne's premier AI services company. AI automation, managed IT support, cybersecurity, web design, and digital marketing for small businesses in Northeast Indiana. Fast response times, expert solutions.",
    keywords: [
        // Primary services
        "AI services Fort Wayne",
        "AI automation Fort Wayne",
        "managed IT Fort Wayne",
        "cybersecurity Fort Wayne",
        "web design Fort Wayne",
        "digital marketing Fort Wayne",
        "technology support Fort Wayne",
        "Fort Wayne AI company",
        "Northeast Indiana AI services",
        // Common misspellings
        "sparksphare tech solutions",
        "sparksphere tech solutions",
        "spark sphere tech",
        "spark sphear solutions",
        "sparkspear tech",
        // Additional relevant terms
        "small business AI solutions",
        "AI consulting Fort Wayne",
        "managed service provider Fort Wayne"
    ],
    authors: [{ name: "SPARKSPHEAR Tech Solutions" }],
    creator: "SPARKSPHEAR Tech Solutions",
    publisher: "SPARKSPHEAR Tech Solutions",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/logo.png',
        shortcut: '/logo.png',
        apple: '/logo.png',
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sparkspheartechsolutions.com",
        title: "SPARKSPHEAR Tech Solutions | Fort Wayne's Premier AI Services & Digital Marketing",
        description: "Fort Wayne's premier AI services company. AI automation, managed IT support, cybersecurity, web design, and digital marketing for small businesses in Northeast Indiana.",
        siteName: 'SPARKSPHEAR Tech Solutions',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'SPARKSPHEAR Tech Solutions Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "SPARKSPHEAR Tech Solutions | Fort Wayne's Premier AI Services",
        description: "AI automation, managed IT support, cybersecurity, web design, and digital marketing for Fort Wayne businesses.",
        images: ['/logo.png'],
    },
    alternates: {
        canonical: 'https://sparkspheartechsolutions.com',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* HubSpot Tracking Script */}
                <script
                    type="text/javascript"
                    id="hs-script-loader"
                    async
                    defer
                    src="//js-na2.hs-scripts.com/244539453.js"
                />
                {/* Google Analytics */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-XFW1TLBRQS"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-XFW1TLBRQS');
                        `,
                    }}
                />
                {/* Schema.org Structured Data - LocalBusiness */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "@id": "https://sparkspheartechsolutions.com/#organization",
                            "name": "SPARKSPHEAR Tech Solutions",
                            "alternateName": ["SparkSphere Tech Solutions", "Spark Sphear Solutions"],
                            "url": "https://sparkspheartechsolutions.com",
                            "logo": "https://sparkspheartechsolutions.com/logo.png",
                            "image": "https://sparkspheartechsolutions.com/logo.png",
                            "description": "Fort Wayne's premier AI services company providing AI automation, managed IT support, cybersecurity, web design, and digital marketing for small businesses in Northeast Indiana.",
                            "priceRange": "$$",
                            "telephone": "+1-260-267-0641",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "",
                                "addressLocality": "Fort Wayne",
                                "addressRegion": "IN",
                                "postalCode": "46825",
                                "addressCountry": "US"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 41.0793,
                                "longitude": -85.1394
                            },
                            "areaServed": {
                                "@type": "GeoCircle",
                                "geoMidpoint": {
                                    "@type": "GeoCoordinates",
                                    "latitude": 41.0793,
                                    "longitude": -85.1394
                                },
                                "geoRadius": "50000",
                                "description": "Greater Fort Wayne area and Northeast Indiana"
                            },
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                    "opens": "08:00",
                                    "closes": "18:00"
                                }
                            ],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "AI & Technology Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Managed IT Services",
                                            "description": "24/7 IT support and monitoring"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Data Engineering",
                                            "description": "Data pipeline development and analytics solutions"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Web Design",
                                            "description": "Custom website design and development"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Digital Marketing",
                                            "description": "SEO, social media, and online marketing"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "AI and Automation",
                                            "description": "AI-powered solutions and business automation"
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />
                {/* Schema.org Structured Data - FAQPage */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "What areas do you serve?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We primarily serve the Greater Fort Wayne area and surrounding communities in Northeast Indiana, providing both on-site and remote support."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do you offer 24/7 support?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, our Managed IT packages include round-the-clock monitoring and emergency support to ensure your business never stops running."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How does your pricing work?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We offer flexible flat-rate monthly packages for Managed Services, so you have a predictable budget. Project work (like web design) is quoted upfront."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can you help with cybersecurity compliance?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Absolutely. We help businesses meet industry standards (like HIPAA or PCI-DSS) through rigorous security audits and protocol implementation."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How fast is your response time?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "For critical issues, our average response time is under 15 minutes. We prioritize keeping your operations moving."
                                    }
                                }
                            ]
                        })
                    }}
                />
            </head>
            <body
                className={inter.className}
                style={{ margin: 0 }}
            >
                <SmoothScrolling>
                    <HashScrollHandler />
                    <PageTransition>
                        {children}
                    </PageTransition>
                </SmoothScrolling>
            </body>
        </html>
    );
}

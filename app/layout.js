import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import HashScrollHandler from "@/components/HashScrollHandler";
import PageTransition from "@/components/PageTransition";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    metadataBase: new URL('https://sparkspheartechsolutions.com'),
    title: {
        default: "SPARKSPHEAR | Fort Wayne AI Services & Business Automation",
        template: "%s | SPARKSPHEAR"
    },
    description: "Fort Wayne's premier AI services company. Transform your business with AI automation, custom AI solutions, workflows, and intelligent systems that drive real growth. Also serving Northeast Indiana.",
    keywords: [
        // AI Services (Primary now)
        "AI services Fort Wayne",
        "AI automation Fort Wayne",
        "business automation Fort Wayne",
        "AI solutions Fort Wayne",
        "custom AI development",
        "AI chatbot development",
        "workflow automation",
        "AI integration services",
        // Original IT services (secondary)
        "IT services Fort Wayne",
        "managed IT Fort Wayne",
        "cybersecurity Fort Wayne",
        "web design Fort Wayne",
        "digital marketing Fort Wayne",
        // Additional AI terms
        "machine learning Fort Wayne",
        "AI implementation",
        "business transformation AI",
        "Fort Wayne AI company",
        "Northeast Indiana AI services",
        // Common misspellings
        "sparksphare tech solutions",
        "sparksphere tech solutions",
        "spark sphere tech",
        "spark sphear solutions",
        "sparkspear tech",
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
        title: "SPARKSPHEAR | Fort Wayne AI Services & Business Automation",
        description: "Transform your business with AI automation and intelligent solutions. Fort Wayne's premier AI services company.",
        siteName: 'SPARKSPHEAR',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'SPARKSPHEAR Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "SPARKSPHEAR | Fort Wayne AI Services",
        description: "Transform your business with AI automation. Fort Wayne's premier AI services company.",
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
                            "description": "Fort Wayne's premier AI services company. Transform your business with AI automation, custom AI solutions, workflows, and intelligent systems that drive real growth.",
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
                                            "name": "AI Automation & Workflows",
                                            "description": "Business process automation using AI and n8n integrations"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Custom AI Solutions",
                                            "description": "Tailored AI applications for your specific business needs"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "AI Chatbots",
                                            "description": "Intelligent chatbots powered by GPT, Claude, and other AI models"
                                        }
                                    },
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
                                            "name": "Web Design & Development",
                                            "description": "Custom websites and web applications"
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
                                    "name": "What AI services do you offer?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We offer AI automation, custom AI solutions, AI chatbots, workflow automation using n8n, and integration with leading AI providers like OpenAI, Anthropic, and Google Gemini."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How can AI help my business?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "AI can automate repetitive tasks, improve customer service with chatbots, analyze data for insights, streamline operations, and scale your business without proportional cost increases."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Do you offer 24/7 support?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes, our Managed IT and AI services include round-the-clock monitoring and emergency support to ensure your business never stops running."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How does your pricing work?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "We offer flexible flat-rate monthly packages for Managed Services and AI automation, so you have a predictable budget. Project work is quoted upfront."
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
                <Analytics />
            </body>
        </html>
    );
}

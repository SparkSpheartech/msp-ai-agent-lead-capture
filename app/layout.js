import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import HashScrollHandler from "@/components/HashScrollHandler";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider } from "@/components/ThemeProvider";
import SchemaOrg from "@/components/SchemaOrg";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SequenzyLeadPopup from "@/components/SequenzyLeadPopup";
import MasterAuditWidget from "@/components/MasterAuditWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL('https://sparkspheartechsolutions.com'),
  title: {
    default: "SPARKSPHEAR | AI Services & Business Automation",
    template: "%s | SPARKSPHEAR"
  },
  description: "Transform your business with AI automation, custom AI solutions, workflows, and intelligent systems that drive real growth.",
  keywords: [
    "AI services",
    "AI automation",
    "business process automation",
    "AI solutions",
    "custom AI development",
    "AI chatbot development",
    "workflow automation",
    "AI integration services",
    "IT services",
    "managed IT",
    "cybersecurity",
    "web design",
    "digital marketing",
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
    title: "SPARKSPHEAR | AI Services & Business Automation",
    description: "Transform your business with AI automation and intelligent solutions. The premier AI services company.",
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
    title: "SPARKSPHEAR | AI Services",
    description: "Transform your business with AI automation. The premier AI services company.",
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://sparkspheartechsolutions.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XFW1TLBRQS"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XFW1TLBRQS');`}
        </Script>
        {/* Meta Facebook Pixel Retargeting */}
        <Script id="fb-pixel-init" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'FB_PIXEL_ID_PLACEHOLDER');
          fbq('track', 'PageView');`}
        </Script>

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
              "description": "Transform your business with AI automation, custom AI solutions, workflows, and intelligent systems that drive real growth.",
              "priceRange": "$$",
              "telephone": "+1-260-267-0641",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Online",
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
                "description": "Nationwide"
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
                      "description": "Business process automation using AI and custom integrations"
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
                    "text": "We serve businesses nationwide with remote implementation, custom AI development, and ongoing tech support."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What AI services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer AI automation, custom AI solutions, AI chatbots, advanced workflow automation, and integration with leading AI providers like OpenAI, Anthropic, and Google Gemini."
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
        <SchemaOrg />
      </head>
      <body className={`${inter.className} antialiased`} style={{ margin: 0 }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScrolling>
            <HashScrollHandler />
            <PageTransition>
              {children}
            </PageTransition>
            <SequenzyLeadPopup />
            <MasterAuditWidget />
            <Analytics />
            <SpeedInsights />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}

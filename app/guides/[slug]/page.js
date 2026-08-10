import { getIndustryBrief } from "@/data/industryBriefs";
import GuideClient from "./GuideClient";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const brief = getIndustryBrief(params.slug);
  
  if (!brief) {
    return {
      title: "Industry Brief Not Found",
    };
  }

  const pageTitle = `${brief.name} Operations Brief`;

  return {
    title: pageTitle,
    description: brief.summary,
    alternates: {
      canonical: `https://sparkspheartechsolutions.com/guides/${params.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: brief.summary,
      url: `https://sparkspheartechsolutions.com/guides/${params.slug}`,
      siteName: "SPARKSPHEAR",
      images: [
        {
          url: brief.heroImage || "https://sparkspheartechsolutions.com/logo.png",
          width: 1200,
          height: 630,
          alt: `${brief.name} Operations Brief`,
        },
      ],
    },
  };
}

export default function Page({ params }) {
  const brief = getIndustryBrief(params.slug);

  if (!brief) {
    notFound();
  }

  return <GuideClient brief={brief} />;
}

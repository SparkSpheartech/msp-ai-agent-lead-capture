import GuideClient from "./GuideClient";
import { getVertical } from "@/data/affiliateProducts";
import { getSortedPostsData } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const vertical = getVertical(params.slug);
  
  if (!vertical) {
    return {
      title: "Guide Not Found",
    };
  }

  const shortName = vertical.name.split('&')[0].trim();
  const pageTitle = `Best AI Tools for ${shortName}`;

  return {
    title: pageTitle,
    description: vertical.tagline,
    alternates: {
      canonical: `https://sparkspheartechsolutions.com/guides/${params.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: vertical.tagline,
      url: `https://sparkspheartechsolutions.com/guides/${params.slug}`,
      siteName: "SPARKSPHEAR",
      images: [
        {
          url: vertical.heroImage || "https://sparkspheartechsolutions.com/logo.png",
          width: 1200,
          height: 630,
          alt: `AI Tools for ${vertical.name}`,
        },
      ],
    },
  };
}

export default function Page({ params }) {
  const vertical = getVertical(params.slug);

  if (!vertical) {
    notFound();
  }

  const allPosts = getSortedPostsData();
  const relatedPosts = allPosts.filter(post => post.industry && post.industry.toLowerCase() === params.slug.toLowerCase());

  return (
    <>
      <h1 className="sr-only">Best AI & Automation Tools for {vertical.name}</h1>
      <GuideClient slug={params.slug} relatedPosts={relatedPosts} />
    </>
  );
}

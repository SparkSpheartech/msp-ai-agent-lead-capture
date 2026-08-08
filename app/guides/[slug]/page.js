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

 return {
 title: `Best AI & Automation Tools for ${vertical.name} | SPARKSPHEAR Tech`,
 description: vertical.tagline,
 alternates: {
 canonical: `https://sparkspheartechsolutions.com/guides/${params.slug}`,
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

 return <GuideClient slug={params.slug} relatedPosts={relatedPosts} />;
}

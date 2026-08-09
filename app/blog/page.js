import { getSortedPostsData } from '@/lib/blog';
import BlogClient from './BlogClient';

export const metadata = {
  title: "Automation Insights & Strategy",
  description: "Industry-specific guides, teardowns, and strategies for scaling your business with automation and AI.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/blog",
  },
  openGraph: {
    title: "Automation Insights & Strategy",
    description: "Industry-specific guides, teardowns, and strategies for scaling your business with automation and AI.",
    url: "https://sparkspheartechsolutions.com/blog",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Blog & Insights",
      },
    ],
  },
};

export default function BlogIndex() {
  const allPosts = getSortedPostsData();
  return (
    <>
      <h1 className="sr-only">Automation Insights & Industry Guides Blog</h1>
      <BlogClient allPosts={allPosts} />
    </>
  );
}
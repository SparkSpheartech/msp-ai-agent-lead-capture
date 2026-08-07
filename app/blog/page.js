import { getSortedPostsData } from '@/lib/blog';
import BlogClient from './BlogClient';

export const metadata = {
 title: "Automation Insights & Blog | SparkSphear Tech",
 description: "Industry-specific guides, teardowns, and strategies for scaling your business with automation and AI.",
 alternates: {
 canonical: "https://sparkspheartechsolutions.com/blog",
 },
};

export default function BlogIndex() {
 const allPosts = getSortedPostsData();
 return <BlogClient allPosts={allPosts} />;
}
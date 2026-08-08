import { getPostData, getAllPostIds } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import BookAffiliateCards from '@/components/BookAffiliateCards';

export async function generateStaticParams() {
 const paths = getAllPostIds();
 return paths.map((path) => ({
 slug: path.params.slug,
 }));
}

export async function generateMetadata({ params }) {
 const postData = await getPostData(params.slug);
 if (!postData) return { title: 'Post Not Found' };

 return {
 title: `${postData.title} | SparkSphear Tech`,
 description: postData.excerpt,
 alternates: {
 canonical: `https://sparkspheartechsolutions.com/blog/${params.slug}`,
 },
 };
}

export default async function Post({ params }) {
 const postData = await getPostData(params.slug);

 if (!postData) {
 notFound();
 }

 const formattedDate = new Date(postData.date).toLocaleDateString('en-US', {
 year: 'numeric',
 month: 'long',
 day: 'numeric'
 });

 return (
 <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-900 dark:text-gray-100 flex flex-col">
 <Navbar />

 <main className="flex-grow pt-32 pb-20">
 <article className="max-w-3xl mx-auto px-6">
 
 <Link href="/blog" className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-500 hover:underline font-semibold text-sm mb-10 transition-colors">
 <ArrowLeft size={16} /> Back to Blog
 </Link>

 <header className="mb-12">
 {postData.industry && (
 <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-500/10 text-lime-700 dark:text-lime-400 text-xs font-bold rounded-full uppercase tracking-wider mb-6">
 <Tag size={12} /> {postData.industry}
 </span>
 )}
 
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-8 tracking-tight">
 {postData.title}
 </h1>

 <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 font-medium pb-8 border-b border-gray-200 dark:border-white/10">
 <div className="flex items-center gap-2">
 <User size={16} className="text-lime-600 dark:text-lime-500" />
 {postData.author || 'SparkSphear Tech'}
 </div>
 <div className="flex items-center gap-2">
 <Calendar size={16} className="text-lime-600 dark:text-lime-500" />
 {formattedDate}
 </div>
 </div>
 </header>

 {postData.coverImage && (
 <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
 <img src={postData.coverImage} alt={postData.title} className="w-full h-auto object-cover max-h-[500px]" />
 </div>
 )}

 <div className="mb-12">
 <AffiliateDisclosure />
 </div>

 <div 
 className="prose prose-lg dark:prose-invert prose-lime max-w-none 
 prose-headings:font-bold prose-headings:tracking-tight
 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
 prose-h3:text-2xl prose-h3:mt-8
 prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-zinc-700 dark:text-gray-300
 prose-a:text-lime-600 dark:prose-a:text-lime-600 dark:text-lime-400 prose-a:no-underline hover:prose-a:underline
 prose-strong:text-gray-900 dark:prose-strong:text-zinc-900 dark:text-white
 prose-blockquote:border-l-lime-500 prose-blockquote:bg-lime-500/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic"
 dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
 />

 <BookAffiliateCards />

 <div className="mt-20 pt-10 border-t border-gray-200 dark:border-white/10 text-center">
 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Want these results for your {postData.industry || 'business'}?</h3>
 <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
 We build custom AI agents and workflow automations tailored to your exact operations. Stop losing money to manual work.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link 
 href="/tools" 
 className="px-8 py-3.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20"
 >
 Calculate Your Savings
 </Link>
 {postData.industry && (
 <Link 
 href={`/guides/${postData.industry.toLowerCase()}`} 
 className="px-8 py-3.5 bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none text-zinc-900 dark:text-white font-bold rounded-xl hover:bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 transition-all"
 >
 View Software Guide
 </Link>
 )}
 </div>
 </div>

 </article>
 </main>

 <Footer />
 </div>
 );
}
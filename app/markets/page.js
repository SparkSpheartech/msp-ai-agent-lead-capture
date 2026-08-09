import MarketsClient from '@/components/MarketsClient';

export const metadata = {
  title: 'Markets & Industry Solutions',
  description: 'Explore industry-specific AI automation, market breakdowns, and field insights for HVAC, waste management, property management, and commercial operations.',
  alternates: {
    canonical: 'https://sparkspheartechsolutions.com/markets',
  },
  openGraph: {
    title: 'Markets & Industry Solutions',
    description: 'Industry-specific Agentic systems, specialized AI agents, and market breakdowns for scaling businesses.',
    url: 'https://sparkspheartechsolutions.com/markets',
    siteName: 'SPARKSPHEAR',
    type: 'website',
    images: [
      {
        url: 'https://sparkspheartechsolutions.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'SPARKSPHEAR Industry Markets',
      },
    ],
  },
};

export default async function MarketsPage() {
 let initialPosts = [];
 
 try {
 const res = await fetch('https://sparkspheartech.blogspot.com/feeds/posts/default?alt=json', {
 next: { revalidate: 60 } // Revalidate blog feed every 60 seconds
 });
 
 if (res.ok) {
 const data = await res.json();
 const entries = data.feed?.entry || [];
 initialPosts = entries.map(entry => {
 const title = entry.title?.$t || 'Market Strategy Insight';
 const rawContent = entry.content?.$t || '';
 
 const imgMatch = rawContent.match(/<img[^>]+src="([^">]+)"/);
 let imageUrl = imgMatch ? imgMatch[1] : null;
 if (!imageUrl && entry.media$thumbnail) {
 imageUrl = entry.media$thumbnail.url.replace('/s72-c/', '/s1600/');
 }
 if (!imageUrl) {
 imageUrl = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';
 }

 const cleanExcerpt = rawContent
 .replace(/<[^>]+>/g, ' ')
 .replace(/\s+/g, ' ')
 .trim()
 .substring(0, 180) + '...';

 const linkObj = entry.link?.find(l => l.rel === 'alternate');
 const link = linkObj ? linkObj.href : 'https://sparkspheartech.blogspot.com/';

 const publishedDate = entry.published?.$t 
 ? new Date(entry.published.$t).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
 : 'Recent Post';

 const categories = entry.category?.map(c => c.term) || ['Market Strategy'];

 return {
 id: entry.id?.$t || Math.random().toString(),
 title,
 excerpt: cleanExcerpt,
 content: rawContent,
 imageUrl,
 link,
 publishedDate,
 author: entry.author?.[0]?.name?.$t || 'SPARKSPHEAR Tech Solutions',
 categories
 };
 });
 }
 } catch (e) {
 console.error('Blogger SSR fetch error:', e.message);
 }

  return (
    <>
      <h1 className="sr-only">Markets & Industry Solutions - SPARKSPHEAR</h1>
      <MarketsClient initialPosts={initialPosts} />
    </>
  );
}

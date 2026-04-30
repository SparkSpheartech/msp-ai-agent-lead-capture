"use client";
import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function BlogPost() {
    const params = useParams();
    
    useEffect(() => {
        // Redirect to blogspot with the slug
        const blogspotUrl = `https://sparkspheartech.blogspot.com/search?q=${params.slug}`;
        window.location.href = blogspotUrl;
    }, [params.slug]);

    return (
        <section className="pt-32 pb-20 bg-zinc-950 min-h-screen">
            <div className="container text-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 border-4 border-lime-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-gray-400 text-lg">Redirecting to our blog...</p>
                    <a 
                        href="https://sparkspheartech.blogspot.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lime-500 hover:underline"
                    >
                        Click here if you're not redirected
                    </a>
                </div>
            </div>
        </section>
    );
}
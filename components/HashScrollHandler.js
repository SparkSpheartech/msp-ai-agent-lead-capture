"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HashScrollHandler() {
 const pathname = usePathname();

 useEffect(() => {
 // Handle hash scrolling on page load and hash changes
 const handleHashScroll = () => {
 const hash = window.location.hash;
 if (hash) {
 // Remove the # from the hash
 const id = hash.replace('#', '');
 const element = document.getElementById(id);

 if (element) {
 setTimeout(() => {
 element.scrollIntoView({
 behavior: 'smooth',
 block: 'start',
 });
 }, 100);
 }
 }
 };

 // Run on mount and when hash changes
 handleHashScroll();
 window.addEventListener('hashchange', handleHashScroll);

 return () => {
 window.removeEventListener('hashchange', handleHashScroll);
 };
 }, [pathname]);

 return null;
}

"use client";

function SmoothScrolling({ children }) {
 // Using native browser smooth scroll instead of Lenis for better performance
 // CSS scroll-behavior: smooth is already set in globals.css
 return <>{children}</>;
}

export default SmoothScrolling;

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
 const { theme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
 setMounted(true);
 }, []);

 if (!mounted) {
 return <div className="w-9 h-9" />; // Placeholder to avoid layout shift
 }

 return (
 <button
 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
 className="p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
 aria-label="Toggle Dark Mode"
 >
 {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
 </button>
 );
}

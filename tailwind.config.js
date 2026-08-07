/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
 './app/**/*.{js,ts,jsx,tsx,mdx}',
 './pages/**/*.{js,ts,jsx,tsx,mdx}',
 './components/**/*.{js,ts,jsx,tsx,mdx}',
 './src/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 darkMode: 'class', // Uses class-based dark mode for next-themes
 theme: {
 extend: {
 colors: {
 primary: '#a6fd37',
 dark: '#000000',
 },
 },
 },
 plugins: [],
}

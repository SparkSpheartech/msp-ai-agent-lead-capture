/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media', // Uses system preference (prefers-color-scheme)
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

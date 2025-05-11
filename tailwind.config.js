/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4ADE80', // Green color from app
        secondary: '#22C55E', // Darker green
        dark: '#121212', // Near black
        light: '#F8F8F8' // Off-white
      },
    },
  },
  plugins: [],
} 
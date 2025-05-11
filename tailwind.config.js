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
        primary: '#8A2BE2', // Purple (BlueViolet)
        secondary: '#6A0DAD', // Darker purple
        dark: '#121212', // Near black
        light: '#F8F8F8' // Off-white
      },
    },
  },
  plugins: [],
} 
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
        'deep-blue': '#080F1F', // Darker blue background
        'deep-purple': '#2A1546', // Dark purple for accents
        'purple-glow': '#4C1D95', // Darker purple for gradients
        dark: '#0A0A0A', // Even darker near black
        light: '#F0F0F0' // Slightly darker off-white
      },
    },
  },
  plugins: [],
} 
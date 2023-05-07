/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Rubik', 'sans-serif'],
    },

    extend: {
      colors: {
        'bg-dark': '#0D1323',
      }
    },

    screens: {
      'tablet': '834px',
      // => @media (min-width: 640px) { ... }

      'desktop': '1000px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
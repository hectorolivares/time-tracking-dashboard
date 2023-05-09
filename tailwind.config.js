/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Rubik', 'sans-serif'],
      'mono': ['Martian Mono', 'monospace'],
    },

    extend: {
      colors: {
        'bg-dark': '#0D1323',
      }
    },

    screens: {
      'laptop': '1024px',
      // => @media (min-width: 640px) { ... }

      'desktop': '1300px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
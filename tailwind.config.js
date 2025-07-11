const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './components.json'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1e40af',
          light: '#60a5fa',
        },
        warning: '#facc15',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...(fontFamily?.sans || [])],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

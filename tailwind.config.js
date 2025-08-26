import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: ["lemonade", "forest"],
  },

  safelist: [
    '[data-theme=lemonade]:block',
    '[data-theme=lemonade]:hidden'
  ],
}


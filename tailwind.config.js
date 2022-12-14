/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      worksans: 'Work Sans, sans-serif'
  },
  extend: {
      colors: {
          'primary': '#4532dc',
          'secondary': '#F6F6FD',
          'bodytext': '#2b2b2b',
          'grey': '#ABB3C4',
          'dark': '#070517',
          'page': '#F8F8FA',
          'success': '#2ED16C',
      }
  },
  },
  plugins: [],
}

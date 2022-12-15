/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'desktop': '1440px'
    },
    extend: {
      colors: {
        'light_gray': '#d6e2f0',
        'grayish_blue': '#7b879d',
        'dark_blue': '#1f3251'
      },
    },
  },
  plugins: [],
}
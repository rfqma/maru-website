/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'ui-sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

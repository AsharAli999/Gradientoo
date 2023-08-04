/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'custom-gradient': '#2c2c8c',
        'custom-gradient-alt': '#125297',
        'custom-gradient-alt-2': '#ebfcff',
      },
    },
  },
  plugins: [],
}
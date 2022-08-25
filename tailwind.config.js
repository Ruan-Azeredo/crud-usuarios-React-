/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/Components/TagComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#8A34CE',
        secondColor: '#AF34CE',
        white: {
          50: '#FFFFFF',
          100: '#EBE2F1'
        },
        textColor: '#666666'
      },
      fontFamily: {
        mainFont: 'Inter',
        secondFont: 'Inria Sans'
      },
    },
  },
  plugins: [],
}

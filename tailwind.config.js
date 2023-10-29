/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DM': ['DM Sans', 'sans-serif'],
        'Ranga': ['Ranga', 'cursive']
      },
      cardShadow: {
        "card": "0 2px 30px rgba(23, 15, 73, 0.1);"
      }
    },
  },
  plugins: [],
}
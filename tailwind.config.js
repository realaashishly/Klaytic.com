/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'desktopBG' : "url('')",
        'MobileBG' : "url('')",
      }
    },
    fontFamily: {
      'Brockmann' : ['Brockmann', 'sans-serif'],
    }
  },
  plugins: [],
}


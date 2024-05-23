/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'desktopBG' : "url('https://github.com/realaashishly/Klaytic.com/blob/main/src/assets/bg.PNG?raw=true')",
        'MobileBG' : "url('https://github.com/realaashishly/Klaytic.com/blob/main/src/assets/newMbgV.png?raw=true')",
      }
    },
    fontFamily: {
      'Brockmann' : ['Brockmann', 'sans-serif'],
      'Montserrat' : ["Montserrat", 'sans-serif'],
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255, 2555, 255, 0.17)"
      },

      fontFamily:{
        Josefin:['Josefin Sans', 'sans-serif'],
        comforter:['Comforter', 'cursive'],
        kuashan:['Kaushan Script', 'cursive'],
        amita:['Amita', 'cursive'],
        Tangerine:['Tangerine', 'cursive'],

      }
    },
  },

  plugins: [require("daisyui")],
}

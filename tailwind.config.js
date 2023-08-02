/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
      mullish: ["Mulish", "sans-serif"],
      lob: ["Lobster", "cursive"],
    },
    colors: {
      db:"#3533cd",
      pale: "#da6456",
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
      design:"#f4e6d0",
      desihn1:"#c1c9e5",
      deve:"#acb1fe",
      grr:"#d4f6e5",
    },},
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
  },
  plugins: [],
}


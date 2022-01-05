const primary = require("./styles/constants");
const primaryDark = require("./styles/constants");
const secondaryDark = require("./styles/constants");
// console.log(primary.primary);

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: primary.primary,
        primaryDark: primaryDark.primaryDark,
        secondaryDark: secondaryDark.secondaryDark,
        // #1B262C
      },
      boxShadow: {
        glow: `0 0 20px ${primary.primary}`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

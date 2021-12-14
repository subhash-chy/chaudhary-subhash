module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      // textColor: {
      //   primary: "#3b82f6",
      // },
      // backgroundColor: {
      //   primary: "#3b82f6",
      // },
      // borderColor: {
      //   primary: "#3b82f6",
      // },
      colors: {
        primary: "#1d4ed8",
        primaryDark: "#1B262C",
        secondaryDark: "#161f24",
        // #16213E
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

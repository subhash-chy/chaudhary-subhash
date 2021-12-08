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
        primary: "#3b82f6",
        primaryDark: "#0d1f1c",
        secondaryDark: "#0f2420",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      notoSans: "'Noto Sans', serif",
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          fontFamily: theme("fontFamily.notoSans"),
        },
      });
    }),
  ],
};

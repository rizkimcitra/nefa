const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.html", "./src/**/*.{js,md}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: [`"Poppins"`, ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#468EF9",
        },
      },
      animation: {
        fly: "fly 2s linear infinite",
      },
      keyframes: {
        fly: {
          "0, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
};

const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./derealize-jit.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        teal: colors.teal,
        cyan: colors.cyan,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        violet: colors.violet,
        lightBlue: colors.lightBlue,
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

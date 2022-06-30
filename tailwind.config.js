/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./packages/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

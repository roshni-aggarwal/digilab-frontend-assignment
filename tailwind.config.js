/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#B9ECFF",
          100: "#1355FF",
          200: "#0133B7",
          300: "#0B1A46",
          400: "#18264E",
          500: "#061237",
        },
      },
    },
  },
  plugins: [],
};

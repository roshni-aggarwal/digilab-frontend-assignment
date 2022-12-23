/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F5FCFF",
          100: "#D6F4FF",
          200: "#B9ECFF",
          300: "#1355FF",
          400: "#0133B7",
          500: "#0B1A46",
          600: "#18264E",
          700: "#061237",
        },
      },
    },
  },
  plugins: [],
};

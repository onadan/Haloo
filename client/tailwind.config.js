/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#42A5F5",
        secondary: "#006699",
        tertiary: "#FFC107",
        dark: "#333333",
        light: "#F2F2F2",
      },
      fontFamily: {
        mont: `Montserrat, sans-serif`,
      },
    },
  },
  plugins: [],
};

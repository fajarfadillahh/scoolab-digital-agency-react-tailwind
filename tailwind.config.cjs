/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "968px",
        xl: "1024px",
        "2xl": "1200px",
      },
      fontFamily: {
        title: ["Clash Display"],
        sans: ["Poppins"],
      },
      lineHeight: {
        title: "100%",
        text: "180%",
      },
      transitionDuration: {
        400: "0.4s",
      },
    },
  },
  plugins: [],
};

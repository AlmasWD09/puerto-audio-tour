/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      poppins: ["Poppins", "serif"],
      mono: ["Montserrat", "serif"],
    },
    extend: {
      colors: {
        dark: "#080809",
        primary: "#D1BF00",
        gray: "#686C60",
      },
      boxShadow: {
        "my-shadow": "0px 2.355px 9.42px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

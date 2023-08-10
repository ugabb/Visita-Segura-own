/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#004E81",
        secondaryBlue: "#0D263B",
        bgHeader: "#ECF2F9",
        slateGray: "#7C8893",
      },
      fontFamily: {
        inter: ["Inter"],
        roboto: ["Roboto"],
      },
      boxShadow: {
        bgBoxShadow: "10px 10px 0px 0px rgba(217,217,217,1)",
      },
    },
  },
  plugins: [],
};

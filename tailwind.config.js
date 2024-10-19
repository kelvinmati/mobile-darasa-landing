/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        mobile: "90%",
        containerWidth: "85%",
      },
      colors: {
        primaryBlue: "#00236a",
        secondaryBlue: "#0237ce",
        textColor: "#39575c",
        primaryRed: "#ff0007",
        secondaryRed: "#c30800",
      },
    },
  },
  plugins: [],
};

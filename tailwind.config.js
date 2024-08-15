/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
"./componet/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "freight-Big-pro",
      third: "roboto",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        primary: "#04043B",
        secondary: "#7D7E99",
        white: "#FFFFFF",
        btnPrimary: "#172E88",
        btnSecondary: "#FE7D6E",
        mainBg: "#F8FBFF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};


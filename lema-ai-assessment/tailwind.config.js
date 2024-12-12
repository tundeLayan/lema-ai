/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        manrope: ["Manrope"],
      },
      colors: {
        border: {
          100: "#E9EAEB",
          200: "#D5D7DA",
          300: "#E2E8F0",
        },
        primary: {
          100: "#535862",
          200: "#181D27",
          300: "#717680",
          400: "#94A3B8",
          500: "#334155",
        },
        red: {
          10: "#FEF4F5",
        },
        gray: {
          200: "#E2E8F0",
          700: "#334155",
        },
        purple: {
          100: "#F9F5FF",
          200: "#7F56D9",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "custom-primary":
          "0px 2px 4px -2px #0A0D120F, 0px 4px 8px -2px #0A0D121A",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

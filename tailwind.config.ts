import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/searchlib/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./messages/*.json",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "3.5rem",
        md: "4rem",
        xl: "6rem",
        "2xl": "11rem",
      },
    },
    extend: {
      fontFamily: {
        taviraj: ["var(--font-taviraj)"],
      },
      colors: {
        primary: {
          50: "#f2fdf0",
          100: "#ccffcc",
          200: "#ccff99",
          300: "#00dd05",
          400: "#99cc66",
          500: "#67a547",
          600: "#339900",
          700: "#1a6516",
          800: "#165314",
          900: "#062e05",
          950: "#002e00",
        },
        secondary: {
          100: "#fcffc2",
          200: "#fbff89",
          300: "#fffd45",
          400: "#fcf00f",
          500: "#ecd706",
          600: "#ffdb1c",
          700: "#febf10",
          800: "#e19000",
          900: "#bb6602",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
};
export default config;

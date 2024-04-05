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
      colors: {
        primary: {
          50: "#f4fbf2",
          100: "#e7f6e2",
          200: "#ceedc5",
          300: "#a7dd98",
          400: "#79c464",
          500: "#5fbb46",
          600: "#428b2e",
          700: "#356e27",
          800: "#2f5724",
          900: "#006837",
          950: "#11270c",
        },
        secondary: {
          100: "#f7ffc1",
          200: "#f4ff86",
          300: "#f5ff41",
          400: "#feff0d",
          500: "#fff200",
          600: "#3e8d8c",
          700: "#ffcb02",
          800: "#1f4646",
          900: "#f99b1b",
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

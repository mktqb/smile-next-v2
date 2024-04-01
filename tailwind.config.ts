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
          50: '#f0fdf1',
          100: '#dbfde0',
          200: '#baf8c4',
          300: '#84f195',
          400: '#47e160',
          500: '#21d840',
          600: '#13a62c',
          700: '#138226',
          800: '#146724',
          900: '#135420',
          950: '#042f0d',
        },
        secondary: {
          100: "#dcefef",
          200: "#b8dfdf",
          300: "#95d0cf",
          400: "#71c0bf",
          500: "#6200ee",
          600: "#3e8d8c",
          700: "#2f6a69",
          800: "#1f4646",
          900: "#102323",
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

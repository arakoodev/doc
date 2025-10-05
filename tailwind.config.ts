import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.md", "./blog/**/*.md"],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        brand: {
          base: "#F4EAF3",
          surface: "#FFFFFF",
          overlay: "#D9C1D7",
          border: "#E5D5E1",
          accent: {
            100: "#D9C1D7", // Kork-1
            200: "#D9B9A7", // Kork-4
            300: "#86728C", // Kork-3
          },
          neutral: {
            100: "#F4EAF3",
            200: "#EDDFEB",
            300: "#DEC9DF",
            400: "#C7AECA",
            500: "#9F87A4",
          },
          text: {
            primary: "#0D0D0D", // Kork-5
            secondary: "#210F26", // Kork-2
            muted: "#86728C", // Kork-3
          },
        },
      },

      fontFamily: {
        matter: ["Matter", ...fontFamily.sans],
      },
    },
  },
  plugins: [fluid],
} satisfies Config;

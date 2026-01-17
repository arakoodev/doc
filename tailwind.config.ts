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
        st: {
          red: '#FF2E6F', // Cassette magenta
          dark: '#07060A', // Deep charcoal
          glow: '#FF8AB7', // Soft glow
          neon: '#39F2FF', // Neon cyan
          purple: '#5B2CFF',
        },
        synth: { // Keep synth vars to prevent breaking if referenced, but map to ST
          bg: '#07060A',
          surface: '#0B0A12',
          primary: '#FF2E6F',
          secondary: '#39F2FF',
          tertiary: '#5B2CFF',
          text: '#F9F4FF',
          muted: '#B9AEC9',
        },
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
        // Stranger Things Vibe
        display: ["Space Grotesk", ...fontFamily.sans],
        stranger: ["Space Grotesk", ...fontFamily.sans],
        
        // Clean Body Text (fixing the "janky" issue by avoiding pixel fonts for body)
        body: ["Sora", ...fontFamily.sans],
        sans: ["Sora", ...fontFamily.sans],
        
        // Tech accents
        mono: ["JetBrains Mono", ...fontFamily.mono],
        terminal: ["JetBrains Mono", ...fontFamily.mono], 
      },
    },
  },
  plugins: [fluid],
} satisfies Config;

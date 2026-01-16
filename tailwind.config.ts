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
          red: '#FF2A4D', // The iconic bright red
          dark: '#050505', // Deep black
          glow: '#FF7096', // Pinkish glow
          neon: '#00FFFF', // Cyan accents
          purple: '#D000FF',
        },
        synth: { // Keep synth vars to prevent breaking if referenced, but map to ST
          bg: '#050505',
          surface: '#0A0A0A',
          primary: '#FF2A4D',
          secondary: '#00FFFF',
          tertiary: '#D000FF',
          text: '#FFFFFF',
          muted: '#B0B0B0',
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
        display: ["Playfair Display", ...fontFamily.serif], // ST Serif for Headings
        stranger: ["Playfair Display", ...fontFamily.serif],
        
        // Clean Body Text (fixing the "janky" issue by avoiding pixel fonts for body)
        body: ["Inter", ...fontFamily.sans],
        sans: ["Inter", ...fontFamily.sans],
        
        // Tech accents
        mono: ["JetBrains Mono", ...fontFamily.mono],
        terminal: ["JetBrains Mono", ...fontFamily.mono], 
      },
    },
  },
  plugins: [fluid],
} satisfies Config;

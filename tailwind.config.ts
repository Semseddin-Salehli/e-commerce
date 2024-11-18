import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#FFFFFF",
        secondary : "#F5F5F5",
        baseRed : "#DB4444",
        baseYellow : "#FFAD33",
        baseGreen : "#00FF66",
        baseBlack : "#000000",
        baseTextWhite : "#FAFAFA",
        baseButtonHover : "#E07575"
      },
    },
  },
  plugins: [],
} satisfies Config;

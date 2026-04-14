import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌟 Main Colors
        primary: "#4F46E5",
        secondary: "#22C55E",
        accent: "#F59E0B",
        danger: "#EF4444",

        // 🧠 Brand System (احترافي)
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },

        // 🌙 Dark UI helpers
        dark: {
          bg: "#0A0A0A",
          card: "#111111",
          border: "#222222",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

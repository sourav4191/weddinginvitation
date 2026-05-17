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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          saffron: "#FF9933",
          purple: "#6A0DAD",
          maroon: "#8B0000",
          gold: "#FFD700",
          turmeric: "#FFC000",
        },
        marathi: {
          saffron: "#FF9933",
          "saffron-dark": "#E07000",
          purple: "#6A0DAD",
          "purple-dark": "#3D0C5C",
          maroon: "#8B0000",
          gold: "#FFD700",
          "gold-light": "#FFF0A0",
          "gold-dark": "#B8860B",
          turmeric: "#FFC000",
          ivory: "#FFF8F0",
          champagne: "#FFE4B5",
          cream: "#FAEBD7",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      letterSpacing: {
        "luxury": "0.25em",
        "ultra": "0.4em",
      },
    },
  },
  plugins: [],
} satisfies Config;

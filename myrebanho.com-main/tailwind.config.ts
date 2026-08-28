import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1E1E1E",
        bordo: {
          DEFAULT: "#9B3224",
          dark: "#7a2419",
          light: "#b83d2b",
        },
        ouro: {
          DEFAULT: "#D9A653",
          dark: "#b8883a",
          light: "#e8bc72",
        },
        marfim: "#FBDE8A",
        branco: "#F3F3F3",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "cursive"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-bordo-ouro": "linear-gradient(135deg, #9B3224, #D9A653)",
        "gradient-ouro-bordo": "linear-gradient(135deg, #D9A653, #9B3224)",
        "gradient-dark": "linear-gradient(180deg, rgba(30,30,30,0) 0%, rgba(30,30,30,0.9) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        "ouro": "0 0 30px rgba(217, 166, 83, 0.3)",
        "ouro-lg": "0 0 60px rgba(217, 166, 83, 0.4)",
        "bordo": "0 0 30px rgba(155, 50, 36, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

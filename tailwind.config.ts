import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {    
    extend: {
      animation: {
        moon: "moonGrow 0.2s linear 0.2s",
        sun: "sunGrow 0.2s linear 0.2s",
      },
      keyframes: {
        moonGrow: {
          "0%": { backgroundSize: "24px 24px" },
          "50%": { backgroundSize: "20px 20px" },
          "100%": { backgroundSize: "24px 24px" },
        },
        sunGrow: {
          "0%": { backgroundSize: "24px 24px" },
          "50%": { backgroundSize: "20px 20px" },
          "100%": { backgroundSize: "24px 24px" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;

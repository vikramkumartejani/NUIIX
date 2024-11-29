import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "general-sans": ['"GeneralSans-Regular"', "sans-serif"],
        "helvetica-bold": ['"Helvetica-Bold"', "sans-serif"],
        "biliner-meclan": ['"Biliner Meclan"', "sans-serif"],
      },
      boxShadow: {
        custom: "0px 4px 25px 0px rgba(0, 0, 0, 0.2)",
        "blue-glow":
          "0 0 20px rgba(58, 143, 255, 0.6), 0 0 40px rgba(28, 113, 225, 0.4)",
      },
      backgroundImage: {
        "custom-blue-gradient":
          "linear-gradient(180deg, #3A8FFF 0%, #1C71E1 100%)",
      },
      keyframes: {
        pulseScale: {
          "0%, 100%": {
            transform: "scale(1) translateY(0)",
            transformOrigin: "center",
          },
          "50%": {
            transform: "scale(1.3) translateY(0.9px)", // Slight downward movement
            transformOrigin: "center",
          },
        },
      },
      animation: {
        "pulse-scale": "pulseScale 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

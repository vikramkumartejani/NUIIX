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
        'helvetica-bold': ['"Helvetica-Bold"', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 25px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;

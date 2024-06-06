import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        russoOne: ["var(--font-russo-one)", "sans-serif"],
        hankenGrotesk: ["var(--font-hanken-grotesk)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        paytoneOne: ["var(--font-paytone-one)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

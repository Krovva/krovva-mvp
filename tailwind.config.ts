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
      colors: {
        primary: {
          50: "#F8F9E9",
          100: "#EFF1D1",
          200: "#E2E6AE",
          300: "#D6D984", // primary
          400: "#C2C664",
          500: "#A7AC50",
          600: "#888D3E",
          700: "#686C2D",
          800: "#494C1E",
          900: "#2B2D10",
        },
        secondary: {
          50: "#E8E8E9",
          100: "#D1D1D2",
          200: "#A6A6A8",
          300: "#7B7A7D",
          400: "#545356",
          500: "#2B2A2D", // secondary
          600: "#252427",
          700: "#1E1D20",
          800: "#171619",
          900: "#100F12",
        },
        background: "#3E463A",
        cards: {
          1: "#2B2A2D",
          2: "#8D9164",
        },
      },
    },
  },
  plugins: [],
};
export default config;

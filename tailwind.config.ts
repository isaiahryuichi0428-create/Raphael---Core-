import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        raphael: {
          navy: "#050816",
          panel: "#0b1022",
          line: "#1f2a44",
          blue: "#2f7cff",
          cyan: "#72f7ff",
          soft: "#b7d6ff",
        },
      },
      boxShadow: {
        glow: "0 0 35px rgba(114, 247, 255, 0.18)",
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at top left, rgba(47, 124, 255, 0.23), transparent 30%), radial-gradient(circle at top right, rgba(114, 247, 255, 0.15), transparent 24%)",
      },
    },
  },
  plugins: [],
};

export default config;

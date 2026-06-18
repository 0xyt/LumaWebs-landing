import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0D0D0D",
        surface: "#151515",
        graphite: "#1F1F1F",
        copper: "#C56A2D",
        "copper-light": "#E6A15C",
        cyan: "#22D3EE",
        ink: "#F5F5F5",
        muted: "#A3A3A3",
        line: "#2A2A2A",
        success: "#22C55E",
        error: "#EF4444",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;

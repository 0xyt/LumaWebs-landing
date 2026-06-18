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
        base: "#FBFAF7",
        surface: "#FFFFFF",
        graphite: "#F1ECE4",
        copper: "#B95F32",
        "copper-light": "#DC8A4F",
        cyan: "#111111",
        ink: "#111111",
        muted: "#675F56",
        line: "#E4DDD2",
        success: "#208A4F",
        error: "#EF4444",
      },
      fontFamily: {
        syne: ["Inter", "sans-serif"],
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        sand: "#f6efe2",
        ember: "#c7673e",
        moss: "#43624b",
        sky: "#d8edf7",
        paper: "#fffdf8"
      },
      boxShadow: {
        card: "0 16px 60px rgba(16, 24, 40, 0.08)"
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(199, 103, 62, 0.22), transparent 34%), radial-gradient(circle at top right, rgba(67, 98, 75, 0.18), transparent 28%), linear-gradient(180deg, rgba(255, 253, 248, 0.95), rgba(246, 239, 226, 0.98))"
      }
    }
  },
  plugins: []
};

export default config;

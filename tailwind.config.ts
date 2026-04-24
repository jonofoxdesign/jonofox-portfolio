import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1F2D3D",
          secondary: "#4F5D75",
          disabled: "#9CA3AF",
          inverse: "#FFFFFF",
        },
        surface: {
          DEFAULT: "#F9FAFB",
          light: "#FFFFFF",
          muted: "#E5E7EB",
          inverse: "#1F2D3D",
        },
        teal: {
          DEFAULT: "#2A9D8F",
          hover: "#21867A",
          subtle: "#E0F5F2",
        },
        fox: {
          DEFAULT: "#F57C00",
          hover: "#DB6800",
          subtle: "#FFF2E0",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(to right, #2A9D8F, #F57C00)",
      },
    },
  },
  plugins: [],
};

export default config;

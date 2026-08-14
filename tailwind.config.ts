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
          DEFAULT: "#238377",
          hover: "#1C6960",
          subtle: "#E0F5F2",
          display: "#2A9D8F",
        },
        fox: {
          DEFAULT: "#B85D00",
          hover: "#9E5000",
          subtle: "#FFF2E0",
          display: "#E47300",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
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

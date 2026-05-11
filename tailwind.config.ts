import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forge: "#0B0D10",
        steel: "#1F2937",
        iron: "#6B7280",
        mist: "#F4F4F2",
        paper: "#FFFFFF",
        hairline: "#E5E5E1",
        ember: "#C9551F",
        emberDark: "#A8431A",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.03em",
      },
      maxWidth: {
        prose2: "62ch",
      },
      boxShadow: {
        card: "0 1px 0 rgba(11,13,16,0.04), 0 12px 32px -16px rgba(11,13,16,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

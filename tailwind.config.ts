import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1726",
        navy: "#16314F",
        channel: {
          DEFAULT: "#2B7A93",
          light: "#4FA3B8",
        },
        signal: {
          DEFAULT: "#E8A33D",
          deep: "#C9851F",
        },
        paper: "#F7F5F0",
        mist: "#EAEEF1",
        line: "#D9DFE5",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        flow: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "48px 0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flow: "flow 1.2s linear infinite",
        rise: "rise 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

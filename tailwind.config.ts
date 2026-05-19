import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#a1a1aa",
          400: "#71717a",
          500: "#52525b",
          600: "#3f3f46",
          700: "#27272a",
          800: "#18181b",
          900: "#0a0a0a",
        },
        accent: {
          DEFAULT: "#e8e4dc",
          soft: "#f4f1ec",
          ink: "#1a1815",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        serif: ["var(--font-instrument-serif)", "Newsreader", "Iowan Old Style", "Georgia", "serif"],
      },
      maxWidth: { content: "68rem", prose: "44rem" },
      transitionTimingFunction: {
        // Emil Kowalski's custom curves — punchier than Tailwind defaults
        emil: "cubic-bezier(0.23, 1, 0.32, 1)",
        "emil-in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
        drawer: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [],
};
export default config;

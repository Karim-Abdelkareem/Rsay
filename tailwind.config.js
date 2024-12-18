/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-orkney)", "sans-serif"],
        vt323: ["var(--font-vt323)", "monospace"],
        brush: ["var(--font-permanent-marker)", "cursive"],
      },
      colors: {
        brand: {
          DEFAULT: "#004aad",
          light: "#4c8be7",
          dark: "#003380",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "show-hide-span": {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "10%": { opacity: "1", transform: "translateX(0)" },
          "70%": { opacity: "1", transform: "translateX(0)" },
          "80%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "0", transform: "translateX(-100px)" },
        },
      },
      animation: {
        "show-hide-span": "show-hide-span 12s ease-in-out infinite",
      },
      transitionDelay: {
        0: "0ms",
        200: "200ms",
        400: "400ms",
        600: "600ms",
        800: "800ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

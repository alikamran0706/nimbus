/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          700: "#444444", // Dark gray
          400: "#b3b4b6ff", // Medium gray (matches Tailwind's gray-300)
          300: "#D1D5DB", // Medium gray (matches Tailwind's gray-300)
          200: "#CCCCCC",
          100: "#F3F4F6", // Light gray (matches Tailwind's gray-100)
        },
        primary: {
          50: "#fef2f2",
          100: "#FEE2E2",
          600: "#C30218",
          700: "#b91c1c",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(to right, #C30218, #F13B07)',
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      fontSize: {
        xsplus: "11.9px",
        base: "16px",
        xl: "24px",
        "4xl": "48px",
      },
      boxShadow: {
        "auth-card": "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
}

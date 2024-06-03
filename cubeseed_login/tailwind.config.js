const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#03656b",
        primary: {
          DEFAULT: "var(--clr-primary)",
          100: "var(--clr-primary-10)",
          200: "var(--clr-primary-20)",
          400: "var(--clr-primary-40)",
          700: "var(--clr-primary-70)",
          900: "var(--clr-primary-90)",
        },
        secondary: {
          DEFAULT: "var(--clr-secondary)",
        },
        accent: {
          DEFAULT: "var(--clr-accent)",
        },
        csneutral: {
          DEFAULT: "var(--clr-neutral)",
          300: "var(--clr-neutral-30)",
          600: "var(--clr-neutral-60)",
          700: "var(--clr-neutral-70)",
          900: "var(--clr-neutral-90)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}

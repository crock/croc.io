// Tailwind Modules
const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: 'media',
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", ...defaultTheme.fontFamily.sans],
        body: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "320px",
        sm: "568px",
        md: "768px",
        lg: "1200px",
        xl: "1440px",
      },
      colors: {
        primary: {
          light: colors.green[400],
          DEFAULT: colors.green[500],
          dark: colors.green[600],
        },
        discord: {
          light: "#AFBCE9",
          DEFAULT: "#7289DA",
          dark: "#6a7fcc",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
}

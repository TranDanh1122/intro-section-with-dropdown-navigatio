/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "almost_white": "hsl(0, 0%, 98%)",
        "medium_gray": "hsl(0, 0%, 41%)",
        "almost_black": "hsl(0, 0%, 8%)",
      },
      screens: {
        mb: { min: "0", max: "1024px" }
      }
    },
  },
  plugins: [],
}


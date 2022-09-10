/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        medium: "#429EBD",
        light: "#F4FBFF",
        neutral: "#043943",
        neutralDark: "#F8626C",
        transparent: "transparent",
        white: "#fff"
      }
    },
  },
  plugins: [],
}

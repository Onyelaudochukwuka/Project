/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: "#9FE7F5",
        medium: "#429EBD",
        dark: "#053F5C",
        neutral: "#F2BBC9",
        neutralDark: "#F8626C",
      }
    },
  },
  plugins: [],
}

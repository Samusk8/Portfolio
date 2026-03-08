/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0D0D0F",
        coldwhite: "#F5F7FA",
        electric: "#1479FF",
        silver: "#B8C0CC",
      }
    },
  },
  plugins: [],
}
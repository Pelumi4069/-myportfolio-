/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050A30",
        tertiary: "#1A1F3A",
        accent: "#FFFFFF",
        highligh: "#3A81C1",
      }
    },
  },
  plugins: [],
}


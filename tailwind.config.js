/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Keep this for dark mode toggle
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is crucial!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
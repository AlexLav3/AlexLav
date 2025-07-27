/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f1c",       // Dark sci-fi background
        foreground: "#e0e0ff",       // Pale blue-gray text
        accent: "#00ffff",           // Cyan glow
        highlight: "#8f1b8fff",        // Magenta highlight
        box: "#1a1a2e",              // Darker box background
      },
      boxShadow: {
        glow: "0 0 20px #00ffff",
      },
    },
  },
  plugins: [],
}
//
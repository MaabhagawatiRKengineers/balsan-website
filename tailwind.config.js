/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royal: "#1D4ED8",
        royalDark: "#1E40AF",
        navy: "#0B1220",
      },
    },
  },
  plugins: [],
};

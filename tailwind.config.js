/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "sq-kontrastfarbe": "#246B7D",
        "sq-hauptfarbe": "#1AB8DE",
        "sq-hauptfarbe-60-percent": "rgba(26, 184, 222, 0.6)",
        "sq-schwarz-für-text": "#333838",
      },
    },
  },
  plugins: [],
};

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
      boxShadow: {
        "sq-btn-shadow":
          "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
      },
      padding: {
        "sq-pb-42-250": "calc(42 / 250 * 100%)", // height / width * 100%
        "sq-pb-596-1064": "calc(596 / 1064 * 100%)", // height / width * 100%
      },
    },
  },
  plugins: [],
};

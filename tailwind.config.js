/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layout/*.liquid", "./sections/*.liquid", "./templates/*.liquid", "./snippets/*.liquid"],
  theme: {
    extend: {
      height: {
        94: "22rem",
      },
    },
  },
  plugins: [],
};

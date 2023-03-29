/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6fc948",

          "secondary": "#f495be",

          "accent": "#f20040",

          "neutral": "#252731",

          "base-100": "#F1F3F8",

          "info": "#446CDA",

          "success": "#13AA59",

          "warning": "#EFC22E",

          "error": "#F1557F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
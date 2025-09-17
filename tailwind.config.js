/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#18558c", // deep blue
        light: "#f8f8f8", // near-white
        accent: "#ff3131", // vivid red
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

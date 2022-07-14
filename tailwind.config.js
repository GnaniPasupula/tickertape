/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#151e28",
        "secondary-blue": "#1c242d",
        "grey-blue": "#535b62",
        "banner-blue": "#c8d3ff",
        "deep-blue": "#a5b4c5",
      },
      fontSize: {
        "2.5xl": "26px",
      },
    },
  },
  plugins: [],
};

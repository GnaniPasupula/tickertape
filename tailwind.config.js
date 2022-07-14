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
      },
    },
  },
  plugins: [],
};

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
        "grey-blue-light": "#a2a8ae",
      },
      fontSize: {
        "2.5xl": "26px",
      },
      padding: {
        "1/2": "55%",
      },
      margin: {
        "1/2": "30%",
        half: "50%",
      },
      width: {
        "1/2": "35%",
        "1/2w": "80%",
      },
      boxShadow: {
        "3xl": "100 350px 600px 150px rgba(0, 0, 0, 0.3)",
      },
      textUnderlineOffset: {
        10: "27px",
      },
    },
  },
  plugins: [],
};

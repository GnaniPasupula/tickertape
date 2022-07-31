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
        grey: "#f9fafb",
        "grey-dark": "#e2e5e9",
        "grey-font": "#81878c",
      },
      fontSize: {
        xs: "0.8rem",
        "2.5xl": "26px",
        "1.5xl": "22px",
      },
      padding: {
        "1/2": "35%",
      },
      margin: {
        "1/2": "25%",
        "1/4": "15%",
        half: "50%",
      },
      width: {
        "1/2": "50%",
        "1/2w": "75%",
        cw: "360px",
        ch: "120px",
        pw: "400px",
        ps: "420px",
        wspopup: "440px",
        "1/4": "35%",
        "1/5": "30%",
        "1/6": "20%",
      },
      height: {
        ph: "400px",
        22: "88px",
        "3/4": "75%",
        "3/4vh": "80vh",
      },
      boxShadow: {
        "3xl": "100 350px 600px 150px rgba(0, 0, 0, 0.3)",
      },
      textUnderlineOffset: {
        10: "27px",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};

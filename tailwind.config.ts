/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        crimson: "#e32b2b",
        limegreen: "#00d021",
        darkgray: "#aaa",
      },
      spacing: {},
      fontFamily: {
        arvo: "Arvo",
      },
      borderRadius: {
        lg: "18px",
      },
    },
    fontSize: {
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "61xl": "80px",
      "5xl": "24px",
      "21xl": "40px",
      "16xl": "35px",
      "11xl": "30px",
      lg: "18px",
      "2xl": "21px",
      inherit: "inherit",
    },
    screens: {
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

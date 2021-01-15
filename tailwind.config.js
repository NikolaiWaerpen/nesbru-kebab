module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    outline: false, // TODO: make this work
  },
  theme: {
    extend: {
      colors: {
        themecolor1: "#ff3939",
        dropdown: "#232323",
        dropdownborder: "#303030",
        offwhite: "#fbf8f6",
        offblack: "#191a1d",
        secondarytextcolor: "#52525B",
      },
      screens: {
        550: "550px",
        805: "805px",
      },
      height: {
        screen75: "75vh",
        screen65: "65vh",
        screen63: "63vh",
        screen61: "61vh",
        screen60: "60vh",
        screen58: "58vh",
        screen55: "55vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      fontFamily: {
        body: ["Jost"],
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "10xl": "8rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

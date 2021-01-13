module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
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
        "screen/2": "50vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

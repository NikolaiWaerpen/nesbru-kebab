module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pinkred: "#ff3939",
        dropdown: "#232323",
        dropdownborder: "#303030",
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

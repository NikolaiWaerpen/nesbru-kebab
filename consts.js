// Google maps API key
exports.MAP_KEY = "AIzaSyDLX3fInnzrZVno5pJFpaEbdldeU8vHwKM";

// Scroll library standard
exports.SCROLL_DURATION = 1000;

// Map
exports.MAP_DETAILS = {
  center: {
    lat: 59.863891940495954,
    lng: 10.488501731979097,
  },
  zoom: 12,
};

// Menu's
exports.BURGERMENU = [
  {
    name: "hamburger",
    size: 100,
    price: 65,
  },
  {
    name: "hamburger",
    size: 160,
    price: 95,
    dinnerprice: 130,
  },
  {
    name: "hamburger",
    size: 250,
    price: 115,
    dinnerprice: 145,
  },
  {
    name: "hamburger",
    size: 500,
    price: 200,
    dinnerprice: 230,
  },
  {
    name: "hamburger",
    size: 1000,
    price: 265,
  },
  {
    name: "beefburger",
    size: 200,
    price: 125,
    dinnerprice: 150,
  },
  {
    name: "løvbiffburger",
    size: 120,
    price: 85,
    dinnerprice: 120,
  },
  {
    name: "fishburger",
    size: 120,
    price: 80,
    dinnerprice: 110,
  },
  {
    name: "kyllingburger",
    size: 120,
    price: 80,
    dinnerprice: 110,
  },
  {
    name: "naturli' burger",
    size: "",
    price: 89,
    dinnerprice: 119,
  },
  {
    name: "ost (pr. skive)",
    size: "",
    price: "5",
  },
];

exports.PIZZAMENU = [
  {
    name: "vegetarian",
    description: "Paprika, champignon, mais og løk",
    price: 169,
  },
  {
    name: "kebab",
    description: "Kebabkjøtt, paprika, champignon og løk",
    price: 185,
  },
  {
    name: "amerikansk",
    description: "Pepperoni, kjøttboller, champignon og oliven",
    price: 185,
  },
  {
    name: "norwegian style",
    description: "skinke, champignon og løk",
    price: 175,
  },
  {
    name: "telemark",
    description: "biff, champignon og løk",
    price: 185,
  },
  {
    name: "nina spesial",
    description: "Biff, skinke, kjøttboller, paprika, champignon og løk",
    price: 200,
  },
  {
    name: "torino",
    description: "skinke, pepperoni, paprika og løk",
    price: 195,
  },
  {
    name: "nesbru spesial",
    description: "biff, paprika, ananas",
    price: 185,
  },
  {
    name: "pepperoni",
    description: "pepperoni, paprika og ananas",
    price: 185,
  },
  {
    name: "italia",
    description: "biff, pepperoni, ananas og paprika",
    price: 199,
  },
  {
    name: "kylling",
    description: "marinert kylling, champignon, jalapenos og løk",
    price: 195,
  },
  {
    name: "new york",
    description: "biff, kylling, mais og bearnaise",
    price: 199,
  },
  {
    name: "nesbru mix",
    description: "marinert kylling, biff, paprika, champignon og løk",
    price: 195,
  },
  {
    name: "maxi taste",
    description: "biff, skinke, pepperoni, kjøttboller og bacon",
    price: 220,
  },
  {
    name: "etter din smak",
    description: "komponer din egen pizza med inntil 6 garnityrer",
    price: 230,
  },
  {
    name: "pizzadip",
    description: "",
    price: 25,
  },
];

exports.GRILLMENU = [
  {
    name: "kebab liten",
    price: 80,
  },
  {
    name: "kebab stor",
    price: 90,
  },
  {
    name: "kyllingkebab liten",
    price: 95,
  },
  {
    name: "kyllingkebab stor",
    price: 110,
  },
  {
    name: "kebabmiddag liten",
    price: 120,
  },
  {
    name: "kebabmiddag stor",
    price: 160,
  },
  {
    name: "halv kylling middag",
    price: 120,
  },
  {
    name: "chicken nyggets middag",
    price: 110,
  },
  {
    name: "pommes frites liten",
    price: 40,
  },
  {
    name: "pommes frites stor",
    price: 50,
  },
  {
    name: "mineralvann 0,5l",
    price: 35,
  },
  {
    name: "mineralvann 1,5l",
    price: 49,
  },
];

// Animations
exports.POPEFFECT = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "tween",
      delay: 0.4,
    },
  },
};

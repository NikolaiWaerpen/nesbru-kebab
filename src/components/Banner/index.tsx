import { Link } from "react-scroll";
import { SCROLL_DURATION } from "../../../consts";
import { motion } from "framer-motion";

const h1Variant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
    },
  },
};

const h2Variant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

const buttonVariant = {
  hidden: { y: "100vw", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.3,
    },
  },
};

export default function Banner() {
  return (
    <div className="relative z-0 bg-offblack shadow-xl">
      <img
        src="/images/flour.jpg"
        alt="background flour"
        className="w-screen h-screen75 lg:h-screen object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 flex justify-center top-48 z-20">
        <motion.h1
          className="text-4xl lg:text-10xl text-offwhite font-extrabold tracking-wider uppercase"
          variants={h1Variant}
          initial="hidden"
          animate="visible"
        >
          Best i test
        </motion.h1>
      </div>
      <div className="absolute inset-0 flex justify-center top-60 z-20">
        <motion.h2
          className="text-xl lg:text-10xl text-offwhite font-extrabold tracking-wider uppercase"
          variants={h2Variant}
          initial="hidden"
          animate="visible"
        >
          Siden 1992
        </motion.h2>
      </div>
      <div className="absolute inset-0 flex justify-center z-20 lg:mx-0 top-64 lg:top-32">
        <motion.img
          src="/images/transparentkebab.png"
          // src="/images/nesbrukebab/nesbrukebabwhite.png"
          alt="logo picture/burger"
          className="w-full h-screen29 object-contain lg:h-screen lg:object-contain opacity-90"
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
      </div>
      <div className="absolute inset-0 flex justify-center top-3/4 z-40">
        <Link to="menu" smooth={true} duration={SCROLL_DURATION}>
          <motion.button
            className="button"
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
          >
            Meny
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";

const button = {
  hidden: {
    opacity: 0,
    y: "100vw",
  },
  visible: {
    opacity: 1,
    y: 0,
    transistion: {
      type: "spring",
      delay: 1,
    },
  },
};

export default function Test() {
  return (
    <div className="relative bg-white h-56 w-56">
      <div className="absolute inset-0 flex justify-center">
        {/* <motion.button animate={{ fontSize: 50 }}>test</motion.button> */}
        <motion.h1
          // variants={button}
          initial={{
            opacity: 0,
            y: "100vw",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            delay: 1,
          }}
        >
          Hello
        </motion.h1>
      </div>
    </div>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import Styles from "./Desk.module.css";

type DeskProps = {
  desk: string[];
};

const dropDownVariants = {
  hidden: {
    opacity: 0,
    y: "-50vh",
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      scale: 1,
    },
  },
  exit: {
    scale: 2,
    opacity: 0,
    rotate: 45,
    transition: {      
      duration: 0.15,
    },
  },
};

export const Desk = ({ desk }: DeskProps) => (
  <div className={Styles.root}>
    <AnimatePresence initial={false}>
      {desk.map((item) => (
        <motion.div
          key={item}
          className={Styles.item}
          variants={dropDownVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {item}
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
);

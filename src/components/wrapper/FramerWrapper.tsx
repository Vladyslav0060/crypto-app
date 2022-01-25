import { FC } from "react";
import { motion } from "framer-motion";
const FramerWrapper: FC<{}> = ({ children }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 40 }}
    >
      {children}
    </motion.div>
  );
};

export default FramerWrapper;

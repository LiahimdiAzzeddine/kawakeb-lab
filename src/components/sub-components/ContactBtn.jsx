import { motion } from "framer-motion";
import { slideInFromLeft } from "../../utils/motion";

export const ContactBtn = () => {
  return (
    <motion.a
      href="#contact"
       variants={slideInFromLeft(0.8)}
      className="Microgram py-2 rounded-lg button-primary text-center text-white cursor-pointer max-w-[200px] relative z-[51]"
    >
      Contact Us
    </motion.a>
  );
};

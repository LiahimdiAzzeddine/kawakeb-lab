import { motion } from "framer-motion";

export const ContactBtn = () => {
  return (
    <motion.a
      href="#contact"
      className="Microgram py-2 button-primary text-center text-white cursor-pointer max-w-[200px] z-1000"
    >
      Contact Us
    </motion.a>
  );
};

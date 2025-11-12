import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromTop } from "../../utils/motion";
export const Statusbtn = () => {
  return (
    <motion.div
      variants={slideInFromTop}
      className="Welcome-box py-[8px] px-[7px] border border-[#00a8b5] opacity-[0.9]"
    >
      <SparklesIcon className="text-[#00a8b5] mr-[10px] h-5 w-5" />
      <h1 className="Welcome-text text-[13px]">
        Ignite your imagination, expand your universe
      </h1>
    </motion.div>
  );
};

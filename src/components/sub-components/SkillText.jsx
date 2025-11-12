import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#00a8b5]"
      >
        <SparklesIcon className="text-[#00a8b5] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Think better with Kawakeb</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="Microgram text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Creating solutions using state of the art technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="Microgram cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;

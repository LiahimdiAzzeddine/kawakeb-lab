import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const About = () => {
  return (
    <div  id="section-about" className="relative z-50">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="Microgram mt-4 text-[#eaeaea] text-[17px] max-w-3xl leading-[30px] relative z-50"
      >
        Embark on a cosmic journey with KAWAKEB, where we orbit around the
        boundless universe of technology and creativity. Guided by the
        gravitational pull of innovation and fueled by stardust dreams, we
        endeavor to illuminate the digital cosmos with our stellar solutions.
      </motion.p>
    </div>
  );
};

export default SectionWrapper(About, "about",'z-50');

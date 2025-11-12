import React from "react";
import { styles } from "../styles";
import { PlanetCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { partnersList } from "../constants";
import { motion } from "framer-motion";
import { textVariant,staggerContainer } from "../utils/motion";

const Partners = () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} ms:max-w-[90%] custom-max-w mx-auto relative z-0`}
      >
      <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText} mb-8`}>Our Partners.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
      {partnersList.map((partner, index) => (
          <div
            className="w-28 h-28 transition-transform duration-300 ease-in-out hover:scale-110"
            key={partner.name}
          >
            <PlanetCanvas icon={partner.icon} color={partner.color} />
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center text-sm block"
            >
              {partner.name}
            </a>
          </div>
        ))}
      </div>
    </motion.section>
      );
};

export default Partners;

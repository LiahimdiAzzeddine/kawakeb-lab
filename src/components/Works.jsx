import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({
  index,
  name,
  description,
  tags,
  image,
  logo,
  company,
  date,
  link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
  <Tilt
    options={{
      max: 10,
      scale: 1.05,
      speed: 300,
    }}
    className="bg-[#000000c7] p-5 rounded-2xl w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px]"
  >
    <div className="relative w-full h-[250px]">
      <img
        src={image}
        alt="project_image"
        className="w-full h-full object-cover rounded-2xl"
      />
      <motion.div
        className="absolute inset-0 flex justify-start items-end m-3 card-img_hover"
        whileHover={{ scale: 1.02 }}
      >
        <div
          onClick={() => window.open(link, "_blank")}
          className="bg-white w-14 h-14 rounded-full flex justify-center items-center cursor-pointer shadow-lg p-2 hover:bg-gray-200 hover:shadow-xl transition-all duration-300"
        >
          <img
            src={logo}
            alt="company logo"
            className="w-10 h-10 object-contain"
          />
        </div>
      </motion.div>
    </div>

    <div className="mt-5">
      <h3 className="text-white Microgram font-bold text-[24px]">{name}</h3>
      <p className="mt-2 text-secondary text-[16px] Microgram font-semibold">{company}</p>
      <p className="mt-1 text-secondary text-[14px] Microgram">{date}</p>
      <p className="mt-2 text-secondary text-[16px] Microgram">{description}</p>
    </div>

    <div className="mt-4 flex flex-wrap gap-2 Microgram">
      {tags.map((tag) => (
        <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
          #{tag.name}
        </p>
      ))}
    </div>
  </Tilt>
</motion.div>

  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Our Expertise</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="Microgram mt-4 text-[#eaeaea] text-[17px] max-w-3xl leading-[30px]"
        >
          At Kawakeb, we've had the privilege of working on diverse projects that showcase our expertise and commitment to excellence. Each experience highlighted below demonstrates our ability to navigate complex challenges, leverage cutting-edge technologies, and deliver exceptional results for our clients and partners.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ExperienceCard key={`experience-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "experience");
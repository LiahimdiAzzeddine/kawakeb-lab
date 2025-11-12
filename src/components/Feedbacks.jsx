import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  linkedinLink,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-[#000000c7] p-6 sm:p-10 rounded-3xl xs:w-full w-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.3 }}
  >
    <p className="text-white font-black text-[24px] sm:text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[14px] sm:text-[18px]">
        {testimonial}
      </p>

      <div className="mt-4 sm:mt-7 flex items-center gap-4">
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2">
            <div className="text-white font-medium text-[14px] sm:text-[16px] Microgram">
              {name}
            </div>
            {linkedinLink && (
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            )}
          </div>
          <p className="mt-1 text-secondary text-[10px] sm:text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);


const Feedbacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const totalItems = testimonials.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={`mt-12 bg-[#2d2d2d8f]`}>
      <div
        className={`bg-gradient-to-r from-[#e8e8e85b] to-[#599a9f77] ${styles.padding} min-h-[200px] sm:min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What Partners say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} relative`}>
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * (100 / itemsPerPage) + "%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-3">
                <FeedbackCard index={index} {...testimonial} />
              </div>
            ))}
          </motion.div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white p-2 z-10"
        >
          <SlArrowLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 z-10"
        >
          <SlArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

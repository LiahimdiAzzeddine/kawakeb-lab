import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { serviceCard } from "../constants";

const ServiceCard = ({
  index,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.03)}
    whileHover={{ scale: 1.1 }}
    className='bg-[#000000c7] p-8  xs:w-[320px] w-full'
  >
    <p className='Microgram text-[#eaeaea] font-black text-[25px]'>{name}</p>

    <div className='mt-1'>
   
    <div className='mt-3 mb-3 flex justify-center items-center gap-1'>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-[5rem] h-13 object-cover'
        />
      </div>
      <p className='text-white tracking-wider text-[13px]'>{designation}</p>      
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <div className={`mt-12 bg-[#2d2d2d8f]`}>
      <div
        className={`bg-gradient-to-r from-[#e8e8e85b] to-[#599a9f77]  ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What can we offer</p>
          <h2 className={styles.sectionHeadText}>Services.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 justify-center ${styles.paddingX} flex flex-wrap gap-7`}>
        {serviceCard.map((testimonial, index) => (
          <ServiceCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Services, "services");

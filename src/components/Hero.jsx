import { motion } from "framer-motion";
import { ContactBtn ,Statusbtn} from "./sub-components";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";
import { SectionWrapper } from "../hoc";
{/* 
import { ParticlesComponent} from "./sub-components/ParticlesComponent";*/}

const Hero = () => {
  const title = "WELCOME TO";
  const companyName = "KAWAKEB";
  const tagline =
    "Where we push the limits of possibility in the digital realm, aiming for the stars, pushing boundaries of innovation, reaching new heights of excellence, and shaping the future.";
  const imageUrl = "/mainIconsdark.svg";
  const animationDuration = 0.8;

  return (
    <section className="relative h-full w-full mx-auto flex flex-col items-center justify-center ms:pt-20 pt-8 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center mt-6 w-full z-10"
      >
        <div className="h-full w-full flex flex-col gap-6 justify-center m-auto text-start">
          <Statusbtn />

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="Microgram flex flex-col gap-6 mt-6 text-4xl sm:text-5xl font-bold text-white max-w-[600px]"
          >
            <span>
              {title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8e8e8] to-[#00a8b5]">
                {" "}
                {companyName}{" "}
              </span>
            </span>
          </motion.div>

          <motion.div
            variants={slideInFromRight(animationDuration)}
            className="w-auto h-auto flex justify-center items-center sm:hidden"
          >
            <img
              className="min-w-[12.5rem] min-h-[12.5rem] w-full h-full object-cover"
              src={imageUrl}
              alt="work icons"
            />
          </motion.div>

          <motion.p
            variants={slideInFromLeft(animationDuration)}
            className="Microgram text-lg text-[#e8e8e8] my-3 max-w-[600px]"
          >
            {tagline}
          </motion.p>

          <ContactBtn />
        </div>

        <div
          className="min-w-[650] min-h-[650] w-full h-full flex justify-center items-center hidden sm:flex"
        >
          <img
            src={imageUrl}
            alt="work icons"
         
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
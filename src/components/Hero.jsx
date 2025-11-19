import { motion } from "framer-motion";
import { ContactBtn } from "./sub-components";
import { slideInFromLeft, slideInFromRight, staggerContainer } from "../utils/motion";
import { styles } from "../styles";
{/* 
import { ParticlesComponent} from "./sub-components/ParticlesComponent";*/}

const Hero = () => {
  const title = "WELCOME TO";
  const companyName = "KAWAKEB";
  const tagline =
    "Kawakeb creates smart, interactive products using AI, AR, and VR. We design games, simulations, and training tools that educate, entertain, and inspire.";
  const imageUrl = "/mainIconsdark.svg";
  const animationDuration = 0.8;

  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} ms:max-w-[90%] custom-max-w mx-auto relative `}
    >
 
      <section id="hero" style={{ height: "100vh" }} className=" h-full w-full mx-auto flex flex-col items-center justify-center  overflow-hidden ">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-row items-center justify-center w-full "
        >
          <div className="h-full w-full flex flex-col gap-6 justify-top m-auto text-start sm:mt-0 sm:mb-28">
            {/* <Statusbtn /> */}

            <motion.div
              variants={slideInFromLeft(0.5)}
              className="Microgram flex flex-col gap-6 text-4xl sm:text-5xl font-bold text-white max-w-[600px] z-50"
            >
              <span>
                {title}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8e8e8] to-[#00a8b5]">
                  {" "}{companyName}{" "}
                </span>
              </span>
            </motion.div>

            <motion.div
              variants={slideInFromRight(animationDuration)}
              className="w-auto h-auto flex justify-center items-center sm:hidden"
            >
              {/* <img
              className="min-w-[12.5rem] min-h-[12.5rem] w-full h-full object-cover"
              src={imageUrl}
              alt="work icons"
            /> */}
            </motion.div>

            <motion.p
              variants={slideInFromLeft(animationDuration)}
              className="  text-[#e8e8e8] max-w-3xl z-50"
            >
              <div className="group relative bg-gradient-to-br text-base z-50 from-[#2d2d2d85]/50 to-[#0f0d2e]/50 py-1 px-6 rounded-e-xl backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden Microgram">
                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-5 rounded-e-3xl`} />

                {/* Decorative border accent */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500`}
                />
                {tagline}
              </div>
            </motion.p>

            <ContactBtn />
          </div>

          <div
            className="min-w-[650] min-h-[650] w-full h-full flex justify-center items-top hidden sm:flex "
          >
            {/* <img
            src={imageUrl}
            alt="work icons"
         className="z-50"
          /> */}
          </div>
        </motion.div>
      </section>
    </motion.section>
  );
};

export default Hero;
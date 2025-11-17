import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Brain, Code, Glasses, Gamepad2, Zap } from "lucide-react";


const services = [
  {
    title: "Artificial Intelligence",
    description: "Intelligent systems and machine learning solutions that power next-generation gaming experiences",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Custom Software & Web3",
    description: "Blockchain integration and decentralized applications for immersive digital ecosystems",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "AR and VR Development",
    description: "Immersive augmented and virtual reality experiences that blur the line between real and digital",
    icon: Glasses,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Gaming & Interactive Experiences",
    description: "AAA-quality games, interactive content, and hypercasual game development",
    icon: Gamepad2,
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Hypercasual Games",
    description: "Fast-paced, addictive mobile games designed for instant engagement and viral growth",
    icon: Zap,
    gradient: "from-yellow-500 to-amber-500"
  },
];

const About = () => {
  return (
    <div id="section-about" className="relative z-50">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="Microgram mt-4 text-[#eaeaea] text-[17px] max-w-3xl leading-[30px] relative z-50"
      >
        Kawakeb is a Dubai-based gaming technology studio at the
        forefront of innovation in AI, Augmented Reality, and Virtual Reality.
        We specialize in crafting immersive, interactive gaming experiences
        that merge intelligent systems with next-gen visual storytelling.
        Our mission is to redefine the future of play by fusing cutting-edge
        tech with creative game design.
      </motion.p>

      {/* Services Section */}
      <div className="mt-20">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What we offer</p>
          <h2 className={styles.sectionHeadText}>Services.</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className="group relative bg-gradient-to-br from-[#1e1b4b]/50 to-[#0f0d2e]/50 p-6 rounded-3xl backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon container */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-full h-full text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-white font-bold text-[20px] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </div>


    </div>
  );
};

export default SectionWrapper(About, "about", "z-50");
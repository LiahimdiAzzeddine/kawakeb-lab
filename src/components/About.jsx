import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideInFromLeft, textVariant } from "../utils/motion";
import { Brain, Code, Glasses, Gamepad2, Zap, X } from "lucide-react";
import { useState } from "react";

export const IconVR = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Headband */}
    <path d="M3 10c0-3 2-5 5-5h8c3 0 5 2 5 5" />

    {/* Main visor */}
    <rect x="3" y="10" width="18" height="8" rx="2" />

    {/* Lenses */}
    <rect x="6" y="12" width="4" height="3" rx="0.8" />
    <rect x="14" y="12" width="4" height="3" rx="0.8" />

    {/* Nose shape (subtle) */}
    <path d="M10 18c.5.8 1 1 2 1s1.5-.2 2-1" />
  </svg>
);

const services = [
  {
    title: "Artificial Intelligence",
    description:
      "Smart, adaptive AI systems that enhance gameplay, automate processes, and power next-generation digital experiences.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    details:
      "Our AI solutions include machine learning models, neural networks, procedural content generation, and intelligent NPC behavior systems that create dynamic and engaging gameplay experiences.",
    features: [
      "Machine Learning Integration",
      "Adaptive AI Systems",
      "Procedural Generation",
      "Smart NPC Behavior",
    ],
  },
  {
    title: "Custom Software & Web3",
    description:
      "Tailored software solutions with blockchain integration, enabling secure, scalable, and decentralized digital ecosystems.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    details:
      "We build custom software architectures with Web3 capabilities, including smart contracts, NFT integration, and decentralized applications that revolutionize digital ownership and player economies.",
    features: [
      "Smart Contract Development",
      "NFT Integration",
      "DApp Creation",
      "Blockchain Solutions",
    ],
  },
  {
    title: "AR & VR Experiences",
    description:
      "High-fidelity augmented and virtual reality environments that merge the physical and digital worlds.",
    icon: IconVR,
    gradient: "from-green-500 to-emerald-500",
    details:
      "We create immersive AR and VR experiences using cutting-edge technology, from location-based AR games to fully immersive VR worlds that transport players to new realities.",
    features: [
      "Location-Based AR",
      "Immersive VR Worlds",
      "Mixed Reality Experiences",
      "Spatial Computing",
    ],
  },
  {
    title: "Game Development",
    description:
      "Full cycle game production covering everything from high-fidelity interactive experiences to rapid iteration hypercasual mobile games.",
    icon: Gamepad2,
    gradient: "from-orange-500 to-amber-500",
    details:
      "From concept to launch, we handle all aspects of game development including design, programming, art, sound, testing, and deployment across multiple platforms.",
    features: [
      "Cross-Platform Development",
      "Hypercasual Games",
      "AAA Game Production",
      "Live Operations",
    ],
  },
];

const About = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div id="section-about" className="relative z-50">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="Microgram pb-1 uppercase flex flex-col gap-6 mt-16 sm:mt-0 text-3xl sm:text-4xl font-bold text-white max-w-[600px]"
      >
        <span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8e8e8] to-[#00a8b5]">
            About us
          </span>
        </span>
      </motion.div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="Microgram mt-4 text-[#eaeaea]  max-w-3xl  relative"
      >
        <div className="group relative bg-gradient-to-br text-base leading-[30px] z-50 from-[#2d2d2d85]/50 to-[#0f0d2e]/50 p-6 rounded-e-xl backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden Microgram">
        <div className={`absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-5 rounded-e-3xl`}  />

              {/* Decorative border accent */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500`}
              />
          Kawakeb is a Dubai-based gaming technology studio at the forefront of
          innovation in AI, Augmented Reality, and Virtual Reality. We
          specialize in crafting immersive, interactive gaming experiences from
          hyper-casual games to advanced AR/VR worlds merging intelligent
          systems with next-gen visual storytelling. Our mission is to redefine
          the future of play by blending cutting-edge tech with bold, creative
          game design.
        </div>
      </motion.p>

      {/* Services Section */}
      <div className="mt-14">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Services.</h2>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                onClick={() => setSelectedService(service)}
                className="group relative bg-gradient-to-br from-[#2d2d2d85]/50 to-[#0f0d2e]/50 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon
                    className="w-full h-full text-white"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="relative">
                  <h3 className="text-white MicrogramBold  font-bold text-[20px] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-[15px] leading-relaxed Microgram">
                    {service.description}
                  </p>
                </div>

                <div
                  className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-gradient-to-br from-[#2d2d2d]/90 to-[#0f0d2e]/90 rounded-3xl p-8 border border-white/10 backdrop-blur-xl"
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedService.gradient} p-4 mb-6`}
            >
              {(() => {
                const Icon = selectedService.icon;
                return (
                  <Icon
                    className="w-full h-full text-white"
                    strokeWidth={1.5}
                  />
                );
              })()}
            </div>

            <h3
              className={`text-3xl font-bold mb-4 text-transparent MicrogramBold bg-clip-text bg-gradient-to-r ${selectedService.gradient}`}
            >
              {selectedService.title}
            </h3>

            <p className="text-gray-300 text-[17px] Microgram leading-relaxed mb-6">
              {selectedService.details}
            </p>

            <div className="space-y-3">
              <h4 className="text-white font-semibold text-lg mb-4 MicrogramBold">
                Key Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br ${selectedService.gradient} bg-opacity-10 border border-white/5`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-br ${selectedService.gradient}`}
                    />
                    <span className="text-gray-300 text-[15px] Microgram">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(About, "about", "z-50");

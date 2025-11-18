import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const projects = [
  {
    title: "CRANE SIMULATOR",
    category: "VR Training & Serious Games",
    description:
      "Our VR cargo-handling simulator, designed for port workers, showcases our expertise in serious games and virtual reality.",
    details:
      "This project replicates real-world unloading operations using hand controllers and immersive VR, providing a safe and effective training environment.",
    impact:
      "It highlights our ability to blend realism with interactive technology, demonstrating that our studio is equipped to develop high-impact simulations for professional training, education.",
    gradient: "from-cyan-400 to-blue-500",
    accentColor: "cyan",
    imageAlt: "VR Crane Simulator - Port Worker Training",
  },
  {
    title: "UEFN CREATIVE",
    subtitle: "TAPPING THE POWER OF UNREAL EDITOR FOR FORTNITE",
    category: "Unreal Editor for Fortnite",
    description:
      "We designed a custom game map that delivers a fresh and immersive experience for players. By leveraging Fortnite's engine, we crafted a unique environment with tailored mechanics.",
    details:
      "Offering new challenges and gameplay possibilities beyond the base game.",
    impact:
      "This project highlights our ability to innovate within established platforms, blending creativity with technical expertise to build engaging, high-quality gaming experiences within the Fortnite ecosystem.",
    gradient: "from-purple-400 to-pink-500",
    accentColor: "purple",
    imageAlt: "UEFN Creative Map - Fortnite",
  },
  {
    title: "SNOWCREST PEAK",
    subtitle: "WEB3 GAMING PROJECT",
    category: "Web3 Gaming",
    description:
      "Embracing the future of decentralized gaming, we developed Snowcrest Peak, a Web3 anime-inspired game that combines farming simulation with high-stakes ski racing.",
    details:
      "Players immerse themselves in revitalizing a once-thriving ski resort, engaging in activities like crop cultivation and interacting with a vibrant community of characters.",
    impact:
      "This project underscores our proficiency in integrating blockchain technology with engaging gameplay, creating immersive experiences that resonate with modern gamers.",
    gradient: "from-emerald-400 to-teal-500",
    accentColor: "emerald",
    imageAlt: "Snowcrest Peak - Web3 Game",
  },
];

const Projects = () => {
  return (
    <div className="relative z-50 w-full">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="Microgram pb-1 uppercase flex flex-col gap-6 mt-16 sm:mt-0 text-3xl sm:text-4xl font-bold text-white max-w-[600px]"
      >
        <span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8e8e8] to-[#00a8b5]">
            Our Projects
          </span>
        </span>
      </motion.div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Key Projects & Achievements.</h2>
      </motion.div>

      <div className="mt-16 space-y-32">
        {projects.map((project, index) => (
          <motion.div
  key={project.title}
  variants={fadeIn("up", "spring", index * 0.15, 0.75)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }} // très important pour mobile
  className="relative z-50"
>

            {/* Full-width project section */}
            <div className="relative min-h-[600px] flex items-center">
              {/* Background gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 rounded-e-3xl`}
              />

              {/* Decorative border accent */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${project.gradient}`}
              />

              <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-8 lg:px-12 py-12">
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    {/* Image placeholder with gradient background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                    />

                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                      <div className="text-center p-8">
                        <div
                          className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-40 animate-pulse`}
                        />
                        <p className="text-white/80 text-base font-medium">
                          {project.imageAlt}
                        </p>
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div
                      className={`absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-${project.accentColor}-400 rounded-tl-2xl`}
                    />
                    <div
                      className={`absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-${project.accentColor}-400 rounded-br-2xl`}
                    />
                  </div>

                  {/* Floating decorative elements */}
                  <div
                    className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl rounded-full`}
                  />
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  {/* Title */}
                  <div>
                    <h3 className="text-white font-black text-3xl lg:text-4xl tracking-wider mb-2 leading-tight MicrogramBold">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} text-sm lg:text-base font-semibold tracking-wide uppercase mt-2 MicrogramBold`}
                      >
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <p className="text-gray-200 text-base lg:text-lg leading-relaxed Microgram">
                      {project.description}
                    </p>
                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed Microgram">
                      {project.details}
                    </p>
                  </div>

                  {/* Impact statement */}
                  <div
                    className={`relative pl-6 py-4 border-l-4 border-gradient-to-b ${project.gradient}`}
                  >
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${project.gradient}`}
                    />
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed italic Microgram">
                      {project.impact}
                    </p>
                  </div>

                  {/* Category badge */}
                  <div className="flex items-center gap-3 pt-2">
                    <div
                      className={`h-px flex-1 bg-gradient-to-r ${project.gradient} opacity-30`}
                    />
                    <span
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-bold tracking-wider uppercase Microgram`}
                    >
                      {project.category}
                    </span>
                    <div
                      className={`h-px flex-1 bg-gradient-to-l ${project.gradient} opacity-30`}
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Divider line between projects */}
            {index < projects.length - 1 && (
              <div className="mt-24 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects", "z-50");

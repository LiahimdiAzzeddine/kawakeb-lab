import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState, useRef } from "react";
import { projects } from "../constants";


const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRefs = useRef({});

  const handleVideoClick = (videoUrl, e) => {
    e.stopPropagation();
    setSelectedVideo(videoUrl);
  };

  return (
    <div className="relative z-50 w-full" id="projects">
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

      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-8 right-8 text-white text-4xl hover:text-gray-300 transition-colors z-[10000]"
            aria-label="Close video"
          >
            ×
          </button>
          <div className="w-full max-w-6xl aspect-video">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      )}

      <div className="mt-16 space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-50"
          >
            <div className="relative min-h-[600px] flex items-center">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 rounded-e-3xl`}
              />

              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${project.gradient}`}
              />

              <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-8 lg:px-12 py-12">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                    />

                    {project.videoUrl ? (
                       <div className="absolute inset-0 group">
    <video
      ref={(el) => (videoRefs.current[index] = el)}
      src={project.videoUrl}
      className="w-full h-full object-cover cursor-pointer"
      preload="metadata"
      onClick={(e) => handleVideoClick(project.videoUrl, e)}
      onMouseEnter={() => videoRefs.current[index]?.play()}
      onMouseLeave={() => videoRefs.current[index]?.pause()}
      muted // souvent nécessaire pour autoplay au hover sur Chrome
        controls={false} 
    >
      Your browser does not support the video tag.
    </video>
    <div
      onClick={(e) => handleVideoClick(project.videoUrl, e)}
      className="absolute inset-0 transition-opacity flex items-center justify-center pointer-events-none"
    >
      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
        <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-2" />
      </div>
    </div>
  </div>
                    ) : project.images && project.images.length > 0 ? (
                      <div className="absolute inset-0 p-4 grid grid-cols-6 gap-1">
                        {project.images.map((image, imgIndex) => {
                          const sizeClasses = {
                            small: "col-span-2 row-span-2",
                            medium: "col-span-3 row-span-3",
                            large: "col-span-4 row-span-4",
                          };

                          return (
                            <div
                              key={imgIndex}
                              className={`${sizeClasses[image.size] || "col-span-2 row-span-2"} relative rounded-lg overflow-hidden group cursor-pointer`}
                            >
                              <img
                                src={image.url}
                                alt={`${project.title} - Image ${imgIndex + 1}`}
                                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                              <div
                                className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 hidden items-center justify-center"
                              >
                                <span className="text-white/60 text-xs">
                                  Image {imgIndex + 1}
                                </span>
                              </div>
                              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 transition-colors" />
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                        <p className="text-white/60 text-sm">Aucun média disponible</p>
                      </div>
                    )}

                    <div
                      className={`absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-${project.accentColor}-400 rounded-tl-2xl`}
                    />
                    <div
                      className={`absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-${project.accentColor}-400 rounded-br-2xl`}
                    />
                  </div>

                  <div
                    className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl rounded-full`}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
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

                  <div className="space-y-4">
                    <p className="text-gray-200 text-base lg:text-lg leading-relaxed Microgram">
                      {project.description}
                    </p>
                    <p className="text-gray-300 text-base lg:text-lg leading-relaxed Microgram">
                      {project.details}
                    </p>
                  </div>

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
